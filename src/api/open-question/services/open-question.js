'use strict';

/**
 * open-question service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::open-question.open-question');
