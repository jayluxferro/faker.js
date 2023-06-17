let Faker = require('../lib');
let faker = new Faker({ locale: 'de', localeFallback: 'en' });
faker.locales['de'] = require('../lib/locales/de');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
