let Faker = require('../lib');
let faker = new Faker({ locale: 'cz', localeFallback: 'en' });
faker.locales['cz'] = require('../lib/locales/cz');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
