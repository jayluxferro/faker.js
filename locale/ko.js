let Faker = require('../lib');
let faker = new Faker({ locale: 'ko', localeFallback: 'en' });
faker.locales['ko'] = require('../lib/locales/ko');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
