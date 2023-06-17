let Faker = require('../lib');
let faker = new Faker({ locale: 'sk', localeFallback: 'en' });
faker.locales['sk'] = require('../lib/locales/sk');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
