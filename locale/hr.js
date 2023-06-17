let Faker = require('../lib');
let faker = new Faker({ locale: 'de', localeFallback: 'en' });
faker.locales['hr'] = require('../lib/locales/hr');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
