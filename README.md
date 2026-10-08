# uk-postcode-validator

[![npm][npm-image]][npm-url] [![license][license-image]](https://github.com/sirlisko/uk-postcode-validator/blob/main/LICENSE)

Check whether a string is a correctly formatted UK postcode.

- **Checks every position.** Each position only accepts the letters used in real postcodes, so `Q1 1AA` or `N7 7CA` are rejected.
- **Forgiving with input.** Case-insensitive, with or without the space, and surrounding whitespace is ignored.
- **Tiny.** One function, no dependencies.
- **Typed.** TypeScript declarations included.

## Install

```bash
npm install uk-postcode-validator
```

## Usage

```js
import { isValid } from "uk-postcode-validator";
// or const { isValid } = require("uk-postcode-validator");

isValid("N7 7AJ"); // true
isValid("n77aj"); // true
isValid(" EC1A 1BB "); // true
isValid("GIR 0AA"); // true

isValid("N7 A7J"); // false
isValid("Q1 1AA"); // false
isValid("90210"); // false
```

## API

| Import                               | Value                                                     |
| ------------------------------------ | --------------------------------------------------------- |
| `isValid(postcode: string): boolean` | `true` if `postcode` is a correctly formatted UK postcode |
| `default`                            | The same `isValid` function                               |

## Validation rules

A postcode is an outward code followed by an inward code, optionally separated by whitespace. `GIR 0AA` is also accepted.

```text
Outward code, one of:  A9  A99  AA9  AA99  A9A  AA9A
Inward code:           9AA

1st position:  any letter except Q, V, X
2nd position:  any letter except I, J, Z
3rd position:  (A9A) only A, B, C, D, E, F, G, H, J, K, P, S, T, U, W
4th position:  (AA9A) only A, B, E, H, M, N, P, R, V, W, X, Y
Inward code:   letters except C, I, K, M, O, V
```

It checks the format only, not whether the postcode exists. For that, look it up against a dataset such as the [ONS Postcode Directory](https://geoportal.statistics.gov.uk/search?q=ONSPD).

**Not included:** BFPO addresses, overseas territories (e.g. `ASCN 1ZZ`, `KY1-1001`) and pseudo-postcodes such as `ZZ99 9ZZ`.

## Migrating from 1.x

- Validation is stricter. Text around a postcode (`"GIR0AA nonsense"`) and letters not used in a given position (`"Q1 1AA"`, `"ZZ99 9ZZ"`) are now rejected.
- With `require`, use the named export: `const { isValid } = require("uk-postcode-validator")` instead of `.default`. The default export still works.
- The build targets ES2017, so very old browsers need it transpiled.

## Contributing

```bash
pnpm install
pnpm test
```

## Credits

Validation rules from BS 7666, as summarised in [Postcodes in the United Kingdom](https://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom#Validation) on Wikipedia.

## License

[MIT](https://github.com/sirlisko/uk-postcode-validator/blob/main/LICENSE) © Luca Lischetti

[npm-image]: https://img.shields.io/npm/v/uk-postcode-validator.svg
[npm-url]: https://npmjs.com/package/uk-postcode-validator
[license-image]: https://img.shields.io/npm/l/uk-postcode-validator.svg
