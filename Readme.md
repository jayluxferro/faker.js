# faker.js - generate massive amounts of fake data in the browser and node.js

![Faker.js](https://raw.githubusercontent.com/jayluxferro/faker.js/main/logo.png)

[![Build Status](https://travis-ci.org/jayluxferro/faker.js.svg?branch=master)](https://travis-ci.org/jayluxferro/faker.js) [![Coverage Status](https://coveralls.io/repos/github/jayluxferro/faker.js/badge.svg?branch=master)](https://coveralls.io/github/jayluxferro/faker.js?branch=master)

[![npm version](https://badge.fury.io/js/faker.svg)](http://badge.fury.io/js/faker)

[![OpenCollective](https://opencollective.com/fakerjs/backers/badge.svg)](#backers)
[![OpenCollective](https://opencollective.com/fakerjs/sponsors/badge.svg)](#sponsors)
[![Gitter chat](https://badges.gitter.im/marak/faker.js.png)](https://gitter.im/Faker-js/community)

## Demo

[https://rawgit.com/jayluxferro/faker.js/main/examples/browser/index.html](https://rawgit.com/jayluxferro/faker.js/main/examples/browser/index.html)

### Faker Cloud

Don't have a local development setup ready?

Try our hosted version of Faker at [https://fakercloud.com/api](https://fakercloud.com/api)

https://github.com/faker/faker-cloud

## Usage

### Browser

```html
<script src="faker.js" type="text/javascript"></script>
<script>
  var randomName = faker.name.findName(); // Caitlyn Kerluke
  var randomEmail = faker.internet.email(); // Rusty@arne.info
  var randomCard = faker.helpers.createCard(); // random contact card containing many properties
</script>
```

### Node.js

```js
let faker = require("faker");

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
```

## API

### JSDoc API Browser

[http://marak.github.io/faker.js/](http://marak.github.io/faker.js/)

### API Methods

- address
  - zipCode
  - zipCodeByState
  - city
  - cityPrefix
  - citySuffix
  - cityName
  - streetName
  - streetAddress
  - streetSuffix
  - streetPrefix
  - secondaryAddress
  - county
  - country
  - countryCode
  - state
  - stateAbbr
  - latitude
  - longitude
  - direction
  - cardinalDirection
  - ordinalDirection
  - nearbyGPSCoordinate
  - timeZone
- animal
  - dog
  - cat
  - snake
  - bear
  - lion
  - cetacean
  - horse
  - bird
  - cow
  - fish
  - crocodilia
  - insect
  - rabbit
  - type
- commerce
  - color
  - department
  - productName
  - price
  - productAdjective
  - productMaterial
  - product
  - productDescription
- company
  - suffixes
  - companyName
  - companySuffix
  - catchPhrase
  - bs
  - catchPhraseAdjective
  - catchPhraseDescriptor
  - catchPhraseNoun
  - bsAdjective
  - bsBuzz
  - bsNoun
- database
  - column
  - type
  - collation
  - engine
- datatype
  - number
  - float
  - datetime
  - string
  - uuid
  - boolean
  - hexaDecimal
  - json
  - array
- date
  - past
  - future
  - between
  - betweens
  - recent
  - soon
  - month
  - weekday
- fake
- finance
  - account
  - accountName
  - routingNumber
  - mask
  - amount
  - transactionType
  - currencyCode
  - currencyName
  - currencySymbol
  - bitcoinAddress
  - litecoinAddress
  - creditCardNumber
  - creditCardCVV
  - ethereumAddress
  - iban
  - bic
  - transactionDescription
- git
  - branch
  - commitEntry
  - commitMessage
  - commitSha
  - shortSha
- hacker
  - abbreviation
  - adjective
  - noun
  - verb
  - ingverb
  - phrase
- helpers
  - randomize
  - slugify
  - replaceSymbolWithNumber
  - replaceSymbols
  - replaceCreditCardSymbols
  - repeatString
  - regexpStyleStringParse
  - shuffle
  - mustache
  - createCard
  - contextualCard
  - userCard
  - createTransaction
- image
  - image
  - avatar
  - imageUrl
  - abstract
  - animals
  - business
  - cats
  - city
  - food
  - nightlife
  - fashion
  - people
  - nature
  - sports
  - technics
  - transport
  - dataUri
  - lorempixel
  - unsplash
  - lorempicsum
- internet
  - avatar
  - email
  - exampleEmail
  - userName
  - protocol
  - httpMethod
  - url
  - domainName
  - domainSuffix
  - domainWord
  - ip
  - ipv6
  - port
  - userAgent
  - color
  - mac
  - password
- lorem
  - word
  - words
  - sentence
  - slug
  - sentences
  - paragraph
  - paragraphs
  - text
  - lines
- mersenne
  - rand
  - seed
  - seed_array
- music
  - genre
- name
  - firstName
  - lastName
  - middleName
  - findName
  - jobTitle
  - gender
  - prefix
  - suffix
  - title
  - jobDescriptor
  - jobArea
  - jobType
- phone
  - phoneNumber
  - phoneNumberFormat
  - phoneFormats
- random
  - number
  - float
  - arrayElement
  - arrayElements
  - objectElement
  - uuid
  - boolean
  - word
  - words
  - image
  - locale
  - alpha
  - alphaNumeric
  - hexaDecimal
- system
  - fileName
  - commonFileName
  - mimeType
  - commonFileType
  - commonFileExt
  - fileType
  - fileExt
  - directoryPath
  - filePath
  - semver
- time
  - recent
- unique
- vehicle
  - vehicle
  - manufacturer
  - model
  - type
  - fuel
  - vin
  - color
  - vrm
  - bicycle

### Faker.fake()

faker.js contains a super useful generator method `Faker.fake` for combining faker API methods using a mustache string format.

**Example:**

```js
console.log(
  faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")
);
// outputs: "Marks, Dean Sr."
```

This will interpolate the format string with the value of methods `name.lastName()`, `name.firstName()`, and `name.suffix()`

## Localization

As of version `v2.0.0` faker.js has support for multiple localities.

The default language locale is set to English.

Setting a new locale is simple:

```js
// sets locale to de
faker.locale = "de";
```

- az
- ar
- cz
- de
- de_AT
- de_CH
- en
- en_AU
- en_AU_ocker
- en_BORK
- en_CA
- en_GB
- en_IE
- en_IND
- en_US
- en_ZA
- es
- es_MX
- fa
- fi
- fr
- fr_CA
- fr_CH
- ge
- hy
- hr
- id_ID
- it
- ja
- ko
- nb_NO
- ne
- nl
- nl_BE
- pl
- pt_BR
- pt_PT
- ro
- ru
- sk
- sv
- tr
- uk
- vi
- zh_CN
- zh_TW

### Individual Localization Packages

faker.js supports incremental loading of locales.

By default, requiring `faker` will include _all_ locale data.

In a production environment, you may only want to include the locale data for a specific set of locales.

```js
// loads only de locale
let faker = require("faker/locale/de");
```

## Setting a randomness seed

If you want consistent results, you can set your own seed:

```js
faker.seed(123);

var firstRandom = faker.datatype.number();

// Setting the seed again resets the sequence.
faker.seed(123);

var secondRandom = faker.datatype.number();

console.log(firstRandom === secondRandom);
```

## Tests

```shell
npm install .
make test
```

You can view a code coverage report generated in coverage/lcov-report/index.html.

## Building faker.js

faker uses [gulp](http://gulpjs.com/) to automate its build process. Each build operation is a separate task which can be run independently.

### Browser Bundle

```shell
npm run browser
```

### Building JSDocs

[JSDOC](https://jsdoc.app/) v3 HTML API documentation

```shell
npm run jsdoc
```

### Building ReadMe

The `ReadMe.md` file for `faker.js` is automatically generated and should not be modified directly. All updates to `ReadMe.md` should be performed in `./build/src/docs.md` and then the build script should be run.

```shell
npm run readme
```

## Version Release Schedule

faker.js is a popular project used by many organizations and individuals in production settings. Major and Minor version releases are generally on a monthly schedule. Bugs fixes are addressed by severity and fixed as soon as possible.

If you require the absolute latest version of `faker.js` the `master` branch @ <http://github.com/jayluxferro/faker.js/> should always be up to date and working.
