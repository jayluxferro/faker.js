let Faker = require('../lib');
let faker = new Faker({ locale: 'nl_BE', localeFallback: 'nl' });
faker.locales['nl_BE'] = require('../lib/locales/nl_BE');
faker.locales['nl'] = require('../lib/locales/nl');
module['exports'] = faker;
