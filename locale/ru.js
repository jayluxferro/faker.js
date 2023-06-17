let Faker = require('../lib');
let faker = new Faker({ locale: 'ru', localeFallback: 'en' });
faker.locales['ru'] = require('../lib/locales/ru');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
