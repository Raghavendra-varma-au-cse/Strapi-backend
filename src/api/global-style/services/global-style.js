'use strict';

/**
 * global-style service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-style.global-style');
