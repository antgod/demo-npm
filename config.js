/**
 * Created by lihongji on 16/3/14.
 */
var config = require('config');
var dbConfig = config.get('customer.dbConfig');

//NODE_ENV=production node config.js

console.log(dbConfig.host);