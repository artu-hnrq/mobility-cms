// ./config/plugins.js`
'use strict';

module.exports = {
    'import-export-entries': {
        enabled: true,
        config: {
          // See `Config` section.
        },
      },
    'strapi-plugin-populate-deep': {
        config: {
            defaultDepth: 3, // Default is 5
        }
    },
    "users-permissions": {
        config: {
          register: {
            allowedFields: ["user_type","full_name","cpf","phone","cnpj","company_name","company_fantasy_name","company_address","company_phone","company_email","photo"],
          },
        },
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
                        {
                            input: {
                                label: 'Menu de marcas de locadoras? (Rodapé)',
                                name: 'is_companies_logo_menu',
                                type: 'bool',
                            },
                            grid: {
                                col: 12,
                                s: 12,
                                xs: 12, 
                            },
                        }
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
                    ],
                    'about': [
                        {
                            input: {
                                label: 'Exibir informações de contato? (Rodapé)',
                                name: 'is_contact_menu',
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
                                label: 'Telefone - São Paulo',
                                name: 'phone_sp',
                                type: 'text'
                            },
                            grid: {
                                col: 6,
                                s: 12,
                                xs: 12, 
                            },
                        },
                        {
                            input: {
                                label: 'Telefone - Demais regiões',
                                name: 'phone_global',
                                type: 'text'
                            },
                            grid: {
                                col: 6,
                                s: 12,
                                xs: 12, 
                            },
                        },
                        {
                            input: {
                                label: 'E-mail de contato',
                                name: 'email',
                                type: 'email',
                            },
                            grid: {
                                col: 6,
                                s: 12,
                                xs: 12, 
                            },
                        },
                        {
                            input: {
                                label: 'Endereço',
                                name: 'address',
                                type: 'text',
                            },
                            grid: {
                                col: 6,
                                s: 12,
                                xs: 12, 
                            },
                        },
                        {
                            input: {
                                label: 'CEP',
                                name: 'zipcode',
                                type: 'text',
                            },
                            grid: {
                                col: 6,
                                s: 12,
                                xs: 12, 
                            },
                        },
                        {
                            input: {
                                label: 'Cidade - UF - País',
                                name: 'city_uf',
                                type: 'text',
                            },
                            grid: {
                                col: 6,
                                s: 12,
                                xs: 12, 
                            },
                        },
                    ],
                    'locadora': [
                        {
                            input: {
                                label: 'Marca',
                                name: 'campany_logo',
                                type: 'media'
                            },
                        }
                    ]
                },
            },
        },
    },
};