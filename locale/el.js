let Faker = require('../lib');
let faker = new Faker({ locale: 'el', localeFallback: 'en' });
faker.locales['el'] = require('../lib/locales/el');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
