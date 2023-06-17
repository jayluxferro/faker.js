let Faker = require('../lib');
let faker = new Faker({ locale: 'ja', localeFallback: 'en' });
faker.locales['ja'] = require('../lib/locales/ja');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
