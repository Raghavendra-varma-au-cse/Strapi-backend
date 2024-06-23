'use strict';

/**
 * global-style router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-style.global-style');
