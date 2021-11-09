import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Typography from '../typography/typography';
import Box from '../box/box';
import {
  COLORS,
  TEXT_ALIGN,
  DISPLAY,
  TYPOGRAPHY,
  FONT_WEIGHT,
} from '../../../helpers/constants/design-system';

import NumericInput from '../numeric-input/numeric-input.component';
import InfoTooltip from '../info-tooltip/info-tooltip';

export default function FormField({
  dataTestId,
  titleFontSize,
  titleText,
  titleUnit,
  tooltipText,
  titleDetail,
  error,
  onChange,
  value,
  numeric,
  detailText,
  autoFocus,
  password,
  allowDecimals,
  disabled,
  bottomBorder,
  inputDetails
}) {
  return (
    <div
      className={classNames('form-field', {
        'form-field__row--error': error,
        'form-field__border': bottomBorder,
      })}
    >
      <label>
        <div className="form-field__heading">
          <div className="form-field__heading-title">
            {titleText && (
              <Typography
                tag={titleFontSize || TYPOGRAPHY.H6}
                fontWeight={FONT_WEIGHT.BOLD}
                variant={titleFontSize || TYPOGRAPHY.H6}
                boxProps={{ display: DISPLAY.INLINE_BLOCK }}
              >
                {titleText}
              </Typography>
            )}
            {titleUnit && (
              <Typography
                tag={titleFontSize || TYPOGRAPHY.H6}
                variant={titleFontSize || TYPOGRAPHY.H6}
                color={COLORS.UI4}
                boxProps={{ display: DISPLAY.INLINE_BLOCK }}
              >
                {titleUnit}
              </Typography>
            )}
            {tooltipText && (
              <InfoTooltip position="top" contentText={tooltipText} />
            )}
          </div>
          {titleDetail && (
            <Box
              className="form-field__heading-detail"
              textAlign={TEXT_ALIGN.END}
              marginBottom={3}
              marginRight={2}
            >
              {titleDetail}
            </Box>
          )}
        </div>
        {numeric ? (
          <NumericInput
            error={error}
            onChange={onChange}
            value={value}
            detailText={detailText}
            autoFocus={autoFocus}
            allowDecimals={allowDecimals}
            disabled={disabled}
          />
        ) : (
          <input
            className={classNames('form-field__input', {
              'form-field__input--error': error,
            })}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            type={password ? 'password' : 'text'}
            autoFocus={autoFocus}
            disabled={disabled}
            data-testid={dataTestId}
          />
        )}
        {error && (
          <Typography
            color={COLORS.ERROR1}
            variant={TYPOGRAPHY.H7}
            className="form-field__error"
          >
            {error}
          </Typography>
        )}
        {inputDetails}
      </label>
    </div>
  );
}

FormField.propTypes = {
  dataTestId: PropTypes.string,
  titleText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleUnit: PropTypes.string,
  tooltipText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleDetail: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  detailText: PropTypes.string,
  autoFocus: PropTypes.bool,
  numeric: PropTypes.bool,
  password: PropTypes.bool,
  allowDecimals: PropTypes.bool,
  disabled: PropTypes.bool,
  bottomBorder: PropTypes.bool,
  inputDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

FormField.defaultProps = {
  titleText: '',
  titleUnit: '',
  tooltipText: '',
  titleDetail: '',
  error: '',
  onChange: undefined,
  value: 0,
  detailText: '',
  autoFocus: false,
  numeric: false,
  password: false,
  allowDecimals: true,
  disabled: false,
  bottomBorder: false,
  // inputDetails: '',
};
