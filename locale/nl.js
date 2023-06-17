let Faker = require('../lib');
let faker = new Faker({ locale: 'nl', localeFallback: 'en' });
faker.locales['nl'] = require('../lib/locales/nl');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
