const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config.common');
const production = require('./webpack.config.prod');
const development = require('./webpack.config.dev');

const envConfig = { production, development };

module.exports = merge(envConfig[process.env.NODE_ENV], commonConfig);
