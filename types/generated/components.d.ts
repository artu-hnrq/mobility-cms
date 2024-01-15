import type { Schema, Attribute } from '@strapi/strapi';

export interface ListDetailList extends Schema.Component {
  collectionName: 'components_list_detail_lists';
  info: {
    displayName: 'Detail List';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface SeoMetadate extends Schema.Component {
  collectionName: 'components_seo_metadates';
  info: {
    displayName: 'Metadate';
    icon: 'rocket';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.detail-list': ListDetailList;
      'seo.metadate': SeoMetadate;
    }
  }
}
