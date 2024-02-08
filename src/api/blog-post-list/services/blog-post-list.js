'use strict';

/**
 * blog-post-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-post-list.blog-post-list');
