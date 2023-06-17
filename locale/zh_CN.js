let Faker = require('../lib');
let faker = new Faker({ locale: 'zh_CN', localeFallback: 'en' });
faker.locales['zh_CN'] = require('../lib/locales/zh_CN');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
