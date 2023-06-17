let Faker = require('../lib');
let faker = new Faker({ locale: 'he', localeFallback: 'en' });
faker.locales['he'] = require('../lib/locales/he');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
