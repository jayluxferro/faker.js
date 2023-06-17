let Faker = require('../lib');
let faker = new Faker({ locale: 'vi', localeFallback: 'en' });
faker.locales['vi'] = require('../lib/locales/vi');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
