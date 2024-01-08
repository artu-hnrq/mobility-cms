import type { Schema, Attribute } from '@strapi/strapi';

export interface ListDetailList extends Schema.Component {
  collectionName: 'components_list_detail_lists';
  info: {
    displayName: 'Detail List';
    icon: 'layer';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    order: Attribute.Integer & Attribute.Required & Attribute.Unique;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.detail-list': ListDetailList;
    }
  }
}
