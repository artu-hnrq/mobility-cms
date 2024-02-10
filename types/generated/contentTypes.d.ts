import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMenusMenu extends Schema.CollectionType {
  collectionName: 'menus';
  info: {
    displayName: 'Menu';
    singularName: 'menu';
    pluralName: 'menus';
    tableName: 'menus';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'plugin::menus.menu', 'title'> & Attribute.Required;
    items: Attribute.Relation<
      'plugin::menus.menu',
      'oneToMany',
      'plugin::menus.menu-item'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::menus.menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::menus.menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginMenusMenuItem extends Schema.CollectionType {
  collectionName: 'menu_items';
  info: {
    displayName: 'Menu Item';
    singularName: 'menu-item';
    pluralName: 'menu-items';
    tableName: 'menu_items';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    order: Attribute.Integer;
    title: Attribute.String & Attribute.Required;
    url: Attribute.String;
    target: Attribute.Enumeration<['_blank', '_parent', '_self', '_top']>;
    root_menu: Attribute.Relation<
      'plugin::menus.menu-item',
      'manyToOne',
      'plugin::menus.menu'
    > &
      Attribute.Required;
    parent: Attribute.Relation<
      'plugin::menus.menu-item',
      'oneToOne',
      'plugin::menus.menu-item'
    >;
    title_en: Attribute.String;
    action_button: Attribute.Boolean;
    is_vehicles_categories_menu: Attribute.Boolean;
    vehicles_categories: Attribute.Relation<
      'plugin::menus.menu-item',
      'oneToMany',
      'api::category.category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::menus.menu-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::menus.menu-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    bookings: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::booking.booking'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutUsPageAboutUsPage extends Schema.SingleType {
  collectionName: 'about_us_pages';
  info: {
    singularName: 'about-us-page';
    pluralName: 'about-us-pages';
    displayName: 'Page.AboutUs';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    hero: Attribute.Relation<
      'api::about-us-page.about-us-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    who_we_are: Attribute.Relation<
      'api::about-us-page.about-us-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    traits_list: Attribute.Relation<
      'api::about-us-page.about-us-page',
      'oneToOne',
      'api::icon-list.icon-list'
    >;
    features: Attribute.Relation<
      'api::about-us-page.about-us-page',
      'oneToOne',
      'api::feature-list.feature-list'
    >;
    mission: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    vision: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    values: Attribute.Component<'component.values', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us-page.about-us-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-us-page.about-us-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::about-us-page.about-us-page',
      'oneToMany',
      'api::about-us-page.about-us-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiB2BHomePageB2BHomePage extends Schema.SingleType {
  collectionName: 'b2b_home_pages';
  info: {
    singularName: 'b2b-home-page';
    pluralName: 'b2b-home-pages';
    displayName: 'Page.HomeB2B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Relation<
      'api::b2b-home-page.b2b-home-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    about_us: Attribute.Relation<
      'api::b2b-home-page.b2b-home-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    logo_list: Attribute.Component<'component.logo-list'>;
    become_partner: Attribute.Relation<
      'api::b2b-home-page.b2b-home-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    find_us: Attribute.Relation<
      'api::b2b-home-page.b2b-home-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    vehicle_image_list: Attribute.Relation<
      'api::b2b-home-page.b2b-home-page',
      'oneToOne',
      'api::vehicle-image-list.vehicle-image-list'
    >;
    how_it_works: Attribute.Relation<
      'api::b2b-home-page.b2b-home-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    experience_list: Attribute.Relation<
      'api::b2b-home-page.b2b-home-page',
      'oneToOne',
      'api::experience-list.experience-list'
    >;
    testimonials_list: Attribute.Relation<
      'api::b2b-home-page.b2b-home-page',
      'oneToOne',
      'api::testimonials-list.testimonials-list'
    >;
    obtain_page: Attribute.Relation<
      'api::b2b-home-page.b2b-home-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    faq_list: Attribute.Relation<
      'api::b2b-home-page.b2b-home-page',
      'oneToOne',
      'api::faq-list.faq-list'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::b2b-home-page.b2b-home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::b2b-home-page.b2b-home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiB2CHomePageB2CHomePage extends Schema.SingleType {
  collectionName: 'b2c_home_pages';
  info: {
    singularName: 'b2c-home-page';
    pluralName: 'b2c-home-pages';
    displayName: 'Page.HomeB2C';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    hero: Attribute.Relation<
      'api::b2c-home-page.b2c-home-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    vehicle_image_list: Attribute.Relation<
      'api::b2c-home-page.b2c-home-page',
      'oneToOne',
      'api::vehicle-image-list.vehicle-image-list'
    >;
    traits: Attribute.Relation<
      'api::b2c-home-page.b2c-home-page',
      'oneToOne',
      'api::icon-list.icon-list'
    >;
    about_us: Attribute.Relation<
      'api::b2c-home-page.b2c-home-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    for_you: Attribute.Relation<
      'api::b2c-home-page.b2c-home-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    find_us: Attribute.Relation<
      'api::b2c-home-page.b2c-home-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    how_it_works: Attribute.Relation<
      'api::b2c-home-page.b2c-home-page',
      'oneToOne',
      'api::icon-list.icon-list'
    >;
    experience_list: Attribute.Relation<
      'api::b2c-home-page.b2c-home-page',
      'oneToOne',
      'api::experience-list.experience-list'
    >;
    auth_access: Attribute.Relation<
      'api::b2c-home-page.b2c-home-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    blog_post_list: Attribute.Relation<
      'api::b2c-home-page.b2c-home-page',
      'oneToOne',
      'api::blog-post-list.blog-post-list'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::b2c-home-page.b2c-home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::b2c-home-page.b2c-home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::b2c-home-page.b2c-home-page',
      'oneToMany',
      'api::b2c-home-page.b2c-home-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiBannerBanner extends Schema.CollectionType {
  collectionName: 'banners';
  info: {
    singularName: 'banner';
    pluralName: 'banners';
    displayName: 'Banner';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    cta: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    cta_link: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::banner.banner', 'name'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::banner.banner',
      'oneToMany',
      'api::banner.banner'
    >;
    locale: Attribute.String;
  };
}

export interface ApiBeAnAgentPageBeAnAgentPage extends Schema.SingleType {
  collectionName: 'be_an_agent_pages';
  info: {
    singularName: 'be-an-agent-page';
    pluralName: 'be-an-agent-pages';
    displayName: 'Page.Be An Agent';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    hero: Attribute.Relation<
      'api::be-an-agent-page.be-an-agent-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    logo_list: Attribute.Component<'component.logo', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<{
        min: 2;
      }>;
    features: Attribute.Relation<
      'api::be-an-agent-page.be-an-agent-page',
      'oneToOne',
      'api::feature-list.feature-list'
    >;
    faq_list: Attribute.Relation<
      'api::be-an-agent-page.be-an-agent-page',
      'oneToOne',
      'api::faq-list.faq-list'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::be-an-agent-page.be-an-agent-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::be-an-agent-page.be-an-agent-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::be-an-agent-page.be-an-agent-page',
      'oneToMany',
      'api::be-an-agent-page.be-an-agent-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiBlogPostBlogPost extends Schema.CollectionType {
  collectionName: 'blog_posts';
  info: {
    singularName: 'blog-post';
    pluralName: 'blog-posts';
    displayName: 'Blog Post';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    category: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    date: Attribute.Date &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    summary: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    cover: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::blog-post.blog-post', 'title'> &
      Attribute.Required;
    blog_post_list: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToOne',
      'api::blog-post-list.blog-post-list'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToMany',
      'api::blog-post.blog-post'
    >;
    locale: Attribute.String;
  };
}

export interface ApiBlogPostListBlogPostList extends Schema.CollectionType {
  collectionName: 'blog_post_lists';
  info: {
    singularName: 'blog-post-list';
    pluralName: 'blog-post-lists';
    displayName: 'Section.Blog Post List';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    links: Attribute.Component<'link.blog-post', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<{
        min: 3;
      }>;
    header: Attribute.Component<'component.section-header'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-post-list.blog-post-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-post-list.blog-post-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::blog-post-list.blog-post-list',
      'oneToMany',
      'api::blog-post-list.blog-post-list'
    >;
    locale: Attribute.String;
  };
}

export interface ApiBookingBooking extends Schema.CollectionType {
  collectionName: 'bookings';
  info: {
    singularName: 'booking';
    pluralName: 'bookings';
    displayName: 'Data.Booking';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    booking_id: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    supplier: Attribute.Component<'booking.supplier'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    car: Attribute.Component<'booking.car'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    creation_datetime: Attribute.DateTime &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    payment: Attribute.Component<'booking.payment'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    cancelation: Attribute.Component<'booking.cancelation'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    issue: Attribute.Component<'booking.issue'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    number_of_days: Attribute.Integer &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    status: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    type_of_protection: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    comment: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    total_amount: Attribute.Component<'booking.amount'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    conductors: Attribute.Component<'booking.conductor', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    reservation_items: Attribute.Component<'booking.reservation-items', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    pickup: Attribute.Component<'booking.arrangement'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    return: Attribute.Component<'booking.arrangement'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    daily_price: Attribute.Component<'booking.amount'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    user: Attribute.Relation<
      'api::booking.booking',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::booking.booking',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::booking.booking',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::booking.booking',
      'oneToMany',
      'api::booking.booking'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'Car Category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    url: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    image: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    api_id: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::category.category', 'name'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    cover: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::category.category'
    >;
    locale: Attribute.String;
  };
}

export interface ApiDataWhitelabelRequestDataWhitelabelRequest
  extends Schema.CollectionType {
  collectionName: 'data_whitelabel_requests';
  info: {
    singularName: 'data-whitelabel-request';
    pluralName: 'data-whitelabel-requests';
    displayName: 'Data.Whitelabel Request';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    date: Attribute.DateTime &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    client: Attribute.Component<'user.client'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::data-whitelabel-request.data-whitelabel-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::data-whitelabel-request.data-whitelabel-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::data-whitelabel-request.data-whitelabel-request',
      'oneToMany',
      'api::data-whitelabel-request.data-whitelabel-request'
    >;
    locale: Attribute.String;
  };
}

export interface ApiExperienceListExperienceList extends Schema.CollectionType {
  collectionName: 'experience_lists';
  info: {
    singularName: 'experience-list';
    pluralName: 'experience-lists';
    displayName: 'Section.Experience List';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    links: Attribute.Relation<
      'api::experience-list.experience-list',
      'oneToMany',
      'api::experience-page.experience-page'
    >;
    header: Attribute.Component<'component.section-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::experience-list.experience-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::experience-list.experience-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::experience-list.experience-list',
      'oneToMany',
      'api::experience-list.experience-list'
    >;
    locale: Attribute.String;
  };
}

export interface ApiExperiencePageExperiencePage extends Schema.CollectionType {
  collectionName: 'experience_pages';
  info: {
    singularName: 'experience-page';
    pluralName: 'experience-pages';
    displayName: 'Page.Experience';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::experience-page.experience-page', 'title'> &
      Attribute.Required;
    cover: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    vehicle_image_list: Attribute.Relation<
      'api::experience-page.experience-page',
      'oneToOne',
      'api::vehicle-image-list.vehicle-image-list'
    >;
    blog_post_list: Attribute.Relation<
      'api::experience-page.experience-page',
      'oneToOne',
      'api::blog-post-list.blog-post-list'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::experience-page.experience-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::experience-page.experience-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::experience-page.experience-page',
      'oneToMany',
      'api::experience-page.experience-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiFaqGroupFaqGroup extends Schema.CollectionType {
  collectionName: 'faq_groups';
  info: {
    singularName: 'faq-group';
    pluralName: 'faq-groups';
    displayName: 'FAQ Group';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    presentation_mode: Attribute.Enumeration<['B2C', 'B2B', 'Both']> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::faq-group.faq-group', 'title'> &
      Attribute.Required;
    pages: Attribute.Relation<
      'api::faq-group.faq-group',
      'oneToMany',
      'api::faq-page.faq-page'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-group.faq-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faq-group.faq-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::faq-group.faq-group',
      'oneToMany',
      'api::faq-group.faq-group'
    >;
    locale: Attribute.String;
  };
}

export interface ApiFaqListFaqList extends Schema.CollectionType {
  collectionName: 'faq_lists';
  info: {
    singularName: 'faq-list';
    pluralName: 'faq-lists';
    displayName: 'Section.FAQ List';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    links: Attribute.Relation<
      'api::faq-list.faq-list',
      'oneToMany',
      'api::faq-page.faq-page'
    >;
    header: Attribute.Component<'component.section-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-list.faq-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faq-list.faq-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::faq-list.faq-list',
      'oneToMany',
      'api::faq-list.faq-list'
    >;
    locale: Attribute.String;
  };
}

export interface ApiFaqPageFaqPage extends Schema.CollectionType {
  collectionName: 'faq_pages';
  info: {
    singularName: 'faq-page';
    pluralName: 'faq-pages';
    displayName: 'Page.FAQ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::faq-page.faq-page', 'title'> & Attribute.Required;
    seo_metadata: Attribute.Component<'seo.metadate'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    group: Attribute.Relation<
      'api::faq-page.faq-page',
      'manyToOne',
      'api::faq-group.faq-group'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToMany',
      'api::faq-page.faq-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiFeatureListFeatureList extends Schema.CollectionType {
  collectionName: 'feature_lists';
  info: {
    singularName: 'feature-list';
    pluralName: 'feature-lists';
    displayName: 'Section.Feature List';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    header: Attribute.Component<'component.section-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    features: Attribute.Component<'component.feature', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<{
        min: 2;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::feature-list.feature-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::feature-list.feature-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::feature-list.feature-list',
      'oneToMany',
      'api::feature-list.feature-list'
    >;
    locale: Attribute.String;
  };
}

export interface ApiIconListIconList extends Schema.CollectionType {
  collectionName: 'icon_lists';
  info: {
    singularName: 'icon-list';
    pluralName: 'icon-lists';
    displayName: 'Section.Icon List';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    icons_orientation: Attribute.Enumeration<['Portrait', 'Landscape']> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    bg_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    icons: Attribute.Component<'component.icon', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    header: Attribute.Component<'component.section-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::icon-list.icon-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::icon-list.icon-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::icon-list.icon-list',
      'oneToMany',
      'api::icon-list.icon-list'
    >;
    locale: Attribute.String;
  };
}

export interface ApiItineraryItinerary extends Schema.CollectionType {
  collectionName: 'itineraries';
  info: {
    singularName: 'itinerary';
    pluralName: 'itineraries';
    displayName: 'Itinerary';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    cover: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hero: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::itinerary.itinerary', 'title'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::itinerary.itinerary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::itinerary.itinerary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::itinerary.itinerary',
      'oneToMany',
      'api::itinerary.itinerary'
    >;
    locale: Attribute.String;
  };
}

export interface ApiOpenQuestionOpenQuestion extends Schema.CollectionType {
  collectionName: 'open_questions';
  info: {
    singularName: 'open-question';
    pluralName: 'open-questions';
    displayName: 'Data.Open Question';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    date: Attribute.Date &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    client: Attribute.Component<'user.client'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subject: Attribute.Enumeration<
      [
        'MobilitySelect',
        'Reservas',
        'Comiss\u00F5es',
        'D\u00FAvidas',
        'Financeiro',
        'Comercial',
        'SAC'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    body: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::open-question.open-question',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::open-question.open-question',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::open-question.open-question',
      'oneToMany',
      'api::open-question.open-question'
    >;
    locale: Attribute.String;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages';
  info: {
    singularName: 'page';
    pluralName: 'pages';
    displayName: 'Homes - Temp';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    banner: Attribute.Relation<
      'api::page.page',
      'oneToOne',
      'api::banner.banner'
    >;
    categories: Attribute.Relation<
      'api::page.page',
      'oneToMany',
      'api::category.category'
    >;
    categories_title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    categories_subtitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    categories_cta: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    categories_cta_url: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::page.page', 'name'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    aboutus_title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    aboutus_subtitle: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    aboutus_text: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    aboutus_cta: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    aboutus_cta_url: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    for_customer: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    advantages: Attribute.Component<'component.feature', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<{
        max: 3;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::page.page',
      'oneToMany',
      'api::page.page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProductPageProductPage extends Schema.CollectionType {
  collectionName: 'product_pages';
  info: {
    singularName: 'product-page';
    pluralName: 'product-pages';
    displayName: 'Page.Product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::product-page.product-page', 'title'> &
      Attribute.Required;
    hero: Attribute.Relation<
      'api::product-page.product-page',
      'oneToOne',
      'api::section-banner.section-banner'
    >;
    vehicle_image_list: Attribute.Relation<
      'api::product-page.product-page',
      'oneToOne',
      'api::vehicle-image-list.vehicle-image-list'
    >;
    feature: Attribute.Relation<
      'api::product-page.product-page',
      'oneToOne',
      'api::feature-list.feature-list'
    >;
    experience_list: Attribute.Relation<
      'api::product-page.product-page',
      'oneToOne',
      'api::experience-list.experience-list'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-page.product-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-page.product-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::product-page.product-page',
      'oneToMany',
      'api::product-page.product-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiSectionBannerSectionBanner extends Schema.CollectionType {
  collectionName: 'section_banners';
  info: {
    singularName: 'section-banner';
    pluralName: 'section-banners';
    displayName: 'Section.Banner';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    image: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    BannerType: Attribute.Enumeration<
      ['FullWidthImage', 'LeftImageCard', 'RightImageCard', 'BGColorCard']
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    header: Attribute.Component<'component.section-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    paragraphs: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::section-banner.section-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::section-banner.section-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::section-banner.section-banner',
      'oneToMany',
      'api::section-banner.section-banner'
    >;
    locale: Attribute.String;
  };
}

export interface ApiTermsAndConditionsPageTermsAndConditionsPage
  extends Schema.SingleType {
  collectionName: 'terms_and_conditions_pages';
  info: {
    singularName: 'terms-and-conditions-page';
    pluralName: 'terms-and-conditions-pages';
    displayName: 'Page.Terms and Conditions';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::terms-and-conditions-page.terms-and-conditions-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::terms-and-conditions-page.terms-and-conditions-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::terms-and-conditions-page.terms-and-conditions-page',
      'oneToMany',
      'api::terms-and-conditions-page.terms-and-conditions-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiTestimonialsListTestimonialsList
  extends Schema.CollectionType {
  collectionName: 'testimonials_lists';
  info: {
    singularName: 'testimonials-list';
    pluralName: 'testimonials-lists';
    displayName: 'Section.List Testimonials';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    testimonials: Attribute.Component<'component.testimony', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonials-list.testimonials-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testimonials-list.testimonials-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestimonialsSectionTestimonialsSection
  extends Schema.CollectionType {
  collectionName: 'testimonials_sections';
  info: {
    singularName: 'testimonials-section';
    pluralName: 'testimonials-sections';
    displayName: 'Section.Testimonials';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Attribute.Component<'component.section-header'> &
      Attribute.Required;
    testimonials_list: Attribute.Relation<
      'api::testimonials-section.testimonials-section',
      'oneToOne',
      'api::testimonials-list.testimonials-list'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonials-section.testimonials-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testimonials-section.testimonials-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVehicleImageListVehicleImageList
  extends Schema.CollectionType {
  collectionName: 'vehicle_image_lists';
  info: {
    singularName: 'vehicle-image-list';
    pluralName: 'vehicle-image-lists';
    displayName: 'Section.Vehicle Image List';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    links: Attribute.Component<'link.vehicle-image', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<{
        min: 3;
      }>;
    header: Attribute.Component<'component.section-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vehicle-image-list.vehicle-image-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vehicle-image-list.vehicle-image-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::vehicle-image-list.vehicle-image-list',
      'oneToMany',
      'api::vehicle-image-list.vehicle-image-list'
    >;
    locale: Attribute.String;
  };
}

export interface ApiWhitelabelPageWhitelabelPage extends Schema.CollectionType {
  collectionName: 'whitelabel_pages';
  info: {
    singularName: 'whitelabel-page';
    pluralName: 'whitelabel-pages';
    displayName: 'Page.Whitelabel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    whitelabel_request: Attribute.Relation<
      'api::whitelabel-page.whitelabel-page',
      'oneToOne',
      'api::data-whitelabel-request.data-whitelabel-request'
    >;
    logo: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    credentials: Attribute.Component<'user.credentials-mobility'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    color_pick: Attribute.Component<'component.multiple-fields', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<{
        min: 2;
        max: 2;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::whitelabel-page.whitelabel-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::whitelabel-page.whitelabel-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::whitelabel-page.whitelabel-page',
      'oneToMany',
      'api::whitelabel-page.whitelabel-page'
    >;
    locale: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::menus.menu': PluginMenusMenu;
      'plugin::menus.menu-item': PluginMenusMenuItem;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about-us-page.about-us-page': ApiAboutUsPageAboutUsPage;
      'api::b2b-home-page.b2b-home-page': ApiB2BHomePageB2BHomePage;
      'api::b2c-home-page.b2c-home-page': ApiB2CHomePageB2CHomePage;
      'api::banner.banner': ApiBannerBanner;
      'api::be-an-agent-page.be-an-agent-page': ApiBeAnAgentPageBeAnAgentPage;
      'api::blog-post.blog-post': ApiBlogPostBlogPost;
      'api::blog-post-list.blog-post-list': ApiBlogPostListBlogPostList;
      'api::booking.booking': ApiBookingBooking;
      'api::category.category': ApiCategoryCategory;
      'api::data-whitelabel-request.data-whitelabel-request': ApiDataWhitelabelRequestDataWhitelabelRequest;
      'api::experience-list.experience-list': ApiExperienceListExperienceList;
      'api::experience-page.experience-page': ApiExperiencePageExperiencePage;
      'api::faq-group.faq-group': ApiFaqGroupFaqGroup;
      'api::faq-list.faq-list': ApiFaqListFaqList;
      'api::faq-page.faq-page': ApiFaqPageFaqPage;
      'api::feature-list.feature-list': ApiFeatureListFeatureList;
      'api::icon-list.icon-list': ApiIconListIconList;
      'api::itinerary.itinerary': ApiItineraryItinerary;
      'api::open-question.open-question': ApiOpenQuestionOpenQuestion;
      'api::page.page': ApiPagePage;
      'api::product-page.product-page': ApiProductPageProductPage;
      'api::section-banner.section-banner': ApiSectionBannerSectionBanner;
      'api::terms-and-conditions-page.terms-and-conditions-page': ApiTermsAndConditionsPageTermsAndConditionsPage;
      'api::testimonials-list.testimonials-list': ApiTestimonialsListTestimonialsList;
      'api::testimonials-section.testimonials-section': ApiTestimonialsSectionTestimonialsSection;
      'api::vehicle-image-list.vehicle-image-list': ApiVehicleImageListVehicleImageList;
      'api::whitelabel-page.whitelabel-page': ApiWhitelabelPageWhitelabelPage;
    }
  }
}
