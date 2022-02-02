/**
 * @param {*} permission => includes all FEATURES / PAGES accessible for a certain role.
 *  - It can be imported inside the function instead of passing it by params.
 */
export default function usePermission({
  permission: {
    FEATURES: {},
    PAGES: {},
  },
}) {
  /**
   * @returns Boolean => Indicates whether a feature is available for certain role or not
   */
  function CheckFeaturePermission() {
    return FEATURES;
  }

  /**
   * @returns Boolean => Indicates whether a page is accessible for certain role or not
   */
  function CheckPagePermission() {
    return PAGES;
  }

  return {
    CheckFeaturePermission,
    CheckPagePermission,
  };
}
