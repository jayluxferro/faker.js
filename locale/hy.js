let Faker = require('../lib');
let faker = new Faker({ locale: 'hy', localeFallback: 'en' });
faker.locales['hy'] = require('../lib/locales/hy');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;