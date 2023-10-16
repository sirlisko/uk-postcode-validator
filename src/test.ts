import test from "tape";
import isValid from "./index";

test("should bat case the text", (t) => {
  t.ok(isValid("N7 7AJ"), "N7 7AJ is a valid postcode");
  t.ok(isValid("N77AJ"), "N77AJ is a valid postcode");
  t.ok(isValid("n7 7aj"), "n7 7aj is a valid postcode");
  t.ok(isValid("n77aj"), "n77aj is a valid postcode");
  t.ok(isValid("GIR 0AA"), "GIR 0AA is a valid postcode");
  t.ok(isValid("GIR0AA"), "GIR0AA is a valid postcode");
  t.notOk(isValid("n7 a7j"), "n7 a7j is NOT a valid postcode");
  t.notOk(isValid("e1"), "e1 is NOT a valid postcode");
  t.notOk(isValid("foo"), "foo is NOT a valid postcode");
  t.notOk(isValid("foobar"), "foobar is NOT a valid postcode");
  t.notOk(isValid("foo bar"), "foo bar is NOT a valid postcode");
  t.notOk(isValid("90210"), "90210 is NOT a valid postcode");
  t.end();
});
