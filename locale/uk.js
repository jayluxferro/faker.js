let Faker = require('../lib');
let faker = new Faker({ locale: 'uk', localeFallback: 'en' });
faker.locales['uk'] = require('../lib/locales/uk');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
