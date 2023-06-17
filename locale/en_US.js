let Faker = require('../lib');
let faker = new Faker({ locale: 'en_US', localeFallback: 'en' });
faker.locales['en_US'] = require('../lib/locales/en_US');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
