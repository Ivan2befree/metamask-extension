import {
  // getCaveatSpecifications,
  // getPermissionSpecifications,
  unrestrictedMethods,
} from './specifications';

describe('PermissionController specifications', () => {
  describe('caveat specifications', () => {
    it.todo('does the thing');
  });

  describe('permission specifications', () => {
    it.todo('does the thing');
  });

  describe('unrestricted methods', () => {
    it('defines the unrestricted methods', () => {
      expect(unrestrictedMethods).toBeDefined();
      expect(Object.isFrozen(unrestrictedMethods)).toBe(true);
    });
  });
});
