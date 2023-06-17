// since we are requiring the top level of faker, load all locales by default
let Faker = require('./lib');
let faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;