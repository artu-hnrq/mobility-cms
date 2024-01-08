// ./src/extensions/menus/strapi-server.js`
'use strict';

module.exports = plugin => {
  // Get current `MenuItem` attributes.
  const defaultAttrs = plugin.contentTypes[ 'menu-item' ].schema.attributes;

  // Define custom attributes for `MenuItem` the same way they would be defined
  // on any other schema.
  const customAttrs = {
    title_en: {
      type: 'string',
    },
    action_button: {
      type: 'boolean',
    },
    is_vehicles_categories_menu: {
      type: 'boolean',
    },
    vehicles_categories: {
        type: 'relation',
        relation: 'oneToMany',
        target: 'api::category.category',
    },
  };

  // Extend the `MenuItem` content type with custom attributes.
  plugin.contentTypes[ 'menu-item' ].schema.attributes = {
    ...defaultAttrs,
    ...customAttrs,
  };

  return plugin;
};