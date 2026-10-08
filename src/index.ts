// Letter restrictions per position, as described in BS 7666.
const OUTWARD =
  "[A-PR-UWYZ](?:[0-9]{1,2}|[0-9][A-HJKPSTUW]|[A-HK-Y][0-9]{1,2}|[A-HK-Y][0-9][ABEHMNPRVWXY])";
const INWARD = "[0-9][ABD-HJLNP-UW-Z]{2}";

const POSTCODE_VALIDATION_REGEX = new RegExp(
  `^(?:GIR\\s*0AA|${OUTWARD}\\s*${INWARD})$`,
  "i",
);

/**
 * `uk-postcode-validator` validate UK postcodes.
 * @param {string} postcode The postcode that needs to be validated
 */
export const isValid = (postcode: string): boolean =>
  POSTCODE_VALIDATION_REGEX.test(postcode.trim());

export default isValid;
