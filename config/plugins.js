// ./config/plugins.js`
'use strict';

module.exports = {
    'strapi-plugin-populate-deep': {
        config: {
            defaultDepth: 3, // Default is 5
        }
    },
    menus: {
        config: {
            maxDepth: 3,
            layouts: {
                menuItem: { // This is the menu item edit panel.
                    'link': [ // This is the "link" tab in the menu item edit panel.
                        {
                            input: {
                                label: 'Título (EN)',
                                name: 'title_en',
                                type: 'text',
                                placeholder: 'Título (EN)'
                            },
                            grid: {
                                col: 12,
                                s: 12,
                                xs: 12, 
                            },
                        },
                        {
                            input: {
                                label: 'Botão de ação?',
                                name: 'action_button',
                                type: 'bool',
                            },
                            grid: {
                                col: 12,
                                s: 12,
                                xs: 12, 
                            },
                        },
                    ],
                    'categories': [
                        {
                            input: {
                                label: 'Menu de categoria de veículos?',
                                name: 'is_vehicles_categories_menu',
                                type: 'bool',
                            },
                            grid: {
                                col: 12,
                                s: 12,
                                xs: 12, 
                            },
                        },
                        {
                            input: {
                            label: 'Categoria de Veiculos',
                            name: 'vehicles_categories',
                            type: 'relation',
                            },
                        }
                    ]
                },
            },
        },
    },
    slugify: {
        enabled: true,
        config: {
          contentTypes: {
            blog: {
              field: 'slug',
              references: 'title',
            },
            blog_category: {
              field: 'slug',
              references: 'name',
            },
            experience: {
              field: 'slug',
              references: 'name',
            },
            product: {
              field: 'slug',
              references: 'name',
            },
          },
        },
    },
};