let Faker = require('../lib');
let faker = new Faker({ locale: 'en', localeFallback: 'en' });
faker.locales['en'] = require('../lib/locales/en');

module['exports'] = faker;
