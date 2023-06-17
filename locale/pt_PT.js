let Faker = require('../lib');
let faker = new Faker({ locale: 'pt_PT', localeFallback: 'en' });
faker.locales['pt_PT'] = require('../lib/locales/pt_PT');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
