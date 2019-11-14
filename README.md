# uk-postcode-validator [![npm][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Validate UK postcodes.

## Installation

```bash
$ npm install uk-postcode-validator
```

## Example

```js
const isValid = require("uk-postcode-validator");

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

```text
    "GIR 0AA"
OR
    One letter followed by either one or two numbers
OR
    One letter followed by a second letter that must be one of ABCDEFGHJKLMNOPQRSTUVWXY (i.e..not I) and then followed by either one or two numbers
OR
    One letter followed by one number and then another letter
OR
    A two part post code where the first part must be One letter followed by a second letter that must be one of ABCDEFGHJKLMNOPQRSTUVWXY (i.e..not I) and then followed by one number and optionally a further letter after that
    AND
    The second part must be One number followed by two letters.
```

A combination of upper and lower case characters is allowed.

The length is determined by the regular expression and is between 2 and 8
characters.

## Inspired by

This [stack overflow discussion](https://stackoverflow.com/questions/164979/uk-postcode-regex-comprehensive) and this [gov.uk document](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/488478/Bulk_Data_Transfer_-_additional_validation_valid_from_12_November_2015.pdf).

[npm-image]: https://img.shields.io/npm/v/uk-postcode-validator.svg
[npm-url]: https://npmjs.com/package/uk-postcode-validator
[travis-image]: https://travis-ci.org/sirLisko/uk-postcode-validator.svg?branch=master
[travis-url]: https://travis-ci.org/sirLisko/uk-postcode-validator
