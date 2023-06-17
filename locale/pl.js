let Faker = require('../lib');
let faker = new Faker({ locale: 'pl', localeFallback: 'en' });
faker.locales['pl'] = require('../lib/locales/pl');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
