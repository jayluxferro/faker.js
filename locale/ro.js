let Faker = require('../lib');
let faker = new Faker({ locale: 'ro', localeFallback: 'en' });
faker.locales['ro'] = require('../lib/locales/ro');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
