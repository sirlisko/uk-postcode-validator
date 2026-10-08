# uk-postcode-validator [![npm][npm-image]][npm-url] [![size][size-image]][size-url]

> Validate UK postcodes.

## Installation

```bash
npm install uk-postcode-validator
```

## Example

```js
import isValid from "uk-postcode-validator";
// or const isValid = require("uk-postcode-validator").default;

isValid("N7 7AJ");
//=> true

isValid("N77AJ");
//=> true

isValid("GIR 0AA");
//=> true

isValid("N7 A7J");
//=> false

isValid("90210");
//=> false
```

## API

### isValid(input)

Returns the `true` or `false` based on the postcode validity.

#### input

Type: `string`

## Logic

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

Matching is case-insensitive and leading or trailing whitespace is ignored.

## Inspired by

This [stack overflow discussion](https://stackoverflow.com/questions/164979/uk-postcode-regex-comprehensive) and this [gov.uk document](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/488478/Bulk_Data_Transfer_-_additional_validation_valid_from_12_November_2015.pdf).

[npm-image]: https://img.shields.io/npm/v/uk-postcode-validator.svg
[npm-url]: https://npmjs.com/package/uk-postcode-validator
[size-image]: https://img.shields.io/bundlephobia/min/uk-postcode-validator.svg?style=flat
[size-url]: https://bundlephobia.com/result?p=uk-postcode-validator
