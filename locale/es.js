let Faker = require('../lib');
let faker = new Faker({ locale: 'es', localeFallback: 'en' });
faker.locales['es'] = require('../lib/locales/es');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
