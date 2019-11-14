const POSTCODE_VALIDATION_REGEXT = /^([Gg][Ii][Rr]0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$/;

/**
 * `uk-postcode-validator` validate UK postcodes.
 * @param {string} postcode The postcode that needs to be validated
 */
const validator = (postcode: string): boolean =>
  Boolean(postcode.replace(" ", "").match(POSTCODE_VALIDATION_REGEXT));

export default validator;
