'use strict';

/**
 * whitelabel-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whitelabel-page.whitelabel-page');
