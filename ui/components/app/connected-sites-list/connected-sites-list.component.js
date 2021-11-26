import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SiteIcon from '../../ui/site-icon';
import { stripHttpSchemes } from '../../../helpers/utils/util';

export default class ConnectedSitesList extends Component {
  static contextTypes = {
    t: PropTypes.func,
  };

  static propTypes = {
    connectedSubjects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.string,
        origin: PropTypes.string,
        host: PropTypes.string,
      }),
    ).isRequired,
    onDisconnect: PropTypes.func.isRequired,
  };

  render() {
    const { connectedSubjects, onDisconnect } = this.props;
    const { t } = this.context;

    return (
      <main className="connected-sites-list__content-rows">
        {connectedSubjects.map((subject) => (
          <div
            key={subject.origin}
            className="connected-sites-list__content-row"
          >
            <div className="connected-sites-list__subject-info">
              <SiteIcon icon={subject.icon} name={subject.name} size={32} />
              <span
                className="connected-sites-list__subject-name"
                title={subject.extensionId || subject.origin}
              >
                {this.getSubjectDisplayName(subject)}
              </span>
            </div>
            <i
              className="fas fa-trash-alt connected-sites-list__trash"
              title={t('disconnect')}
              onClick={() => onDisconnect(subject.origin)}
            />
          </div>
        ))}
      </main>
    );
  }

  getSubjectDisplayName(subject) {
    if (subject.extensionId) {
      return this.context.t('externalExtension');
    }

    return stripHttpSchemes(subject.origin);
  }
}
