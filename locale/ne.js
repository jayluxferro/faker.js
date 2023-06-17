let Faker = require('../lib');
let faker = new Faker({ locale: 'ne', localeFallback: 'en' });
faker.locales['ne'] = require('../lib/locales/ne');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
