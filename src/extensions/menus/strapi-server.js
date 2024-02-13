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
    is_companies_logo_menu: {
      type: 'boolean',
    },
    campany_logo: {
        type: 'media',
        allowedTypes: ['images'],
        multiple: true,
    },
    is_contact_menu: {
      type: 'boolean',
    },
    phone_sp: {
      type: 'string',
    },
    phone_global: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    address: {
      type: 'string',
    },
    zipcode: {
      type: 'string',
    },
    city_uf: {
      type: 'string',
    },
  };

  // Extend the `MenuItem` content type with custom attributes.
  plugin.contentTypes[ 'menu-item' ].schema.attributes = {
    ...defaultAttrs,
    ...customAttrs,
  };

  return plugin;
};