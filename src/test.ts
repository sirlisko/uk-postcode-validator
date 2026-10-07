import test from "tape";
import defaultExport, { isValid } from "./index";

test("should validate", (t) => {
  t.ok(isValid("N7 7AJ"), "N7 7AJ has valid postcode");
  t.ok(isValid("N77AJ"), "N77AJ has valid postcode");
  t.ok(isValid("n7 7aj"), "n7 7aj has valid postcode");
  t.ok(isValid("n77aj"), "n77aj has valid postcode");
  t.ok(isValid("GIR 0AA"), "GIR 0AA has valid postcode");
  t.ok(isValid("GIR0AA"), "GIR0AA has valid postcode");
  t.notOk(isValid("n7 a7j"), "n7 a7j has NOT a valid postcode");
  t.notOk(isValid("e1"), "e1 has NOT a valid postcode");
  t.notOk(isValid("foo"), "foo has NOT a valid postcode");
  t.notOk(isValid("foobar"), "foobar has NOT a valid postcode");
  t.notOk(isValid("foo bar"), "foo bar has NOT a valid postcode");
  t.notOk(isValid("90210"), "90210 has NOT a valid postcode");
  t.end();
});

test("should validate every outward code format", (t) => {
  t.ok(isValid("M1 1AE"), "A9");
  t.ok(isValid("B33 8TH"), "A99");
  t.ok(isValid("CR2 6XH"), "AA9");
  t.ok(isValid("DN55 1PT"), "AA99");
  t.ok(isValid("W1A 0AX"), "A9A");
  t.ok(isValid("EC1A 1BB"), "AA9A");
  t.end();
});

test("should handle surrounding and repeated whitespace", (t) => {
  t.ok(isValid(" N7 7AJ "), "leading and trailing spaces");
  t.ok(isValid("N7 7AJ\n"), "trailing newline");
  t.ok(isValid("N7  7AJ"), "double space");
  t.notOk(isValid("N 7 7AJ"), "space inside the outward code");
  t.end();
});

test("should reject postcodes embedded in other text", (t) => {
  t.notOk(isValid("GIR0AA nonsense"), "trailing text after GIR 0AA");
  t.notOk(isValid("foo N7 7AJ"), "leading text before a postcode");
  t.notOk(isValid("N7 7AJ foo"), "trailing text after a postcode");
  t.end();
});

test("should reject letters not allowed in each position", (t) => {
  t.notOk(isValid("Q1 1AA"), "Q, V and X are not used in the first position");
  t.notOk(isValid("AI1 1AA"), "I, J and Z are not used in the second position");
  t.notOk(isValid("W1I 1AA"), "I is not used in the third position");
  t.notOk(isValid("EC1C 1BB"), "C is not used in the fourth position");
  t.notOk(
    isValid("N7 7CA"),
    "C, I, K, M, O and V are not used in the inward code",
  );
  t.end();
});

test("should keep the default export", (t) => {
  t.equal(defaultExport, isValid);
  t.end();
});
