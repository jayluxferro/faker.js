let Faker = require('../lib');
let faker = new Faker({ locale: 'de_CH', localeFallback: 'en' });
faker.locales['de_CH'] = require('../lib/locales/de_CH');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
