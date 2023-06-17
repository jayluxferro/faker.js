let Faker = require('../lib');
let faker = new Faker({ locale: 'ge', localeFallback: 'en' });
faker.locales['ge'] = require('../lib/locales/ge');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
