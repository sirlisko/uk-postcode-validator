import test from "tape";
import isValid from "./index";

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
