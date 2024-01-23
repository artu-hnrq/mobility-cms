import type { Schema, Attribute } from '@strapi/strapi';

export interface BookingCar extends Schema.Component {
  collectionName: 'components_car_cars';
  info: {
    displayName: 'Car';
    icon: 'car';
    description: '';
  };
  attributes: {
    model: Attribute.String;
    transmission_type: Attribute.String;
    quantity_of_passengers: Attribute.Integer;
    quantity_of_baggages: Attribute.Integer;
    supplier_name: Attribute.String;
    image_url: Attribute.String;
  };
}

export interface BookingReservationItems extends Schema.Component {
  collectionName: 'components_list_reservation_items';
  info: {
    displayName: 'Reservation Item';
    icon: 'plus';
    description: '';
  };
  attributes: {
    fee_included: Attribute.Boolean;
    description: Attribute.Text;
    fee_type: Attribute.String;
    amount: Attribute.Decimal;
    equivalent_amount: Attribute.Decimal;
    code: Attribute.String;
    prepayment: Attribute.Boolean;
    amount_in_percentage: Attribute.Decimal;
    quantity: Attribute.Integer;
    total_amount_payment: Attribute.Decimal;
    total_amount_equivalent: Attribute.Decimal;
    payment_at_destination: Attribute.Boolean;
  };
}

export interface BookingStore extends Schema.Component {
  collectionName: 'components_store_stores';
  info: {
    displayName: 'Store';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    city: Attribute.String;
    address: Attribute.String;
  };
}

export interface ComponentCta extends Schema.Component {
  collectionName: 'components_component_ctas';
  info: {
    displayName: 'cta';
    icon: 'quote';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface ComponentFeature extends Schema.Component {
  collectionName: 'components_component_features';
  info: {
    displayName: 'Feature';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    summary: Attribute.Text;
  };
}

export interface ComponentImageLink extends Schema.Component {
  collectionName: 'components_component_image_links';
  info: {
    displayName: 'Image Link';
    icon: 'dashboard';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SectionFeatureList extends Schema.Component {
  collectionName: 'components_section_feature_lists';
  info: {
    displayName: 'Feature List';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    features: Attribute.Component<'component.feature', true> &
      Attribute.Required;
  };
}

export interface SectionHero extends Schema.Component {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    summary: Attribute.Text;
    cta: Attribute.Component<'component.cta'> & Attribute.Required;
    image: Attribute.Media;
  };
}

export interface SectionImageLinkList extends Schema.Component {
  collectionName: 'components_section_image_link_lists';
  info: {
    displayName: 'Image Link List';
    icon: 'filter';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    summary: Attribute.Text;
    links: Attribute.Component<'component.image-link', true> &
      Attribute.Required;
    cta: Attribute.Component<'component.cta'> & Attribute.Required;
  };
}

export interface SeoMetadate extends Schema.Component {
  collectionName: 'components_seo_metadates';
  info: {
    displayName: 'Metadata';
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
      'booking.car': BookingCar;
      'booking.reservation-items': BookingReservationItems;
      'booking.store': BookingStore;
      'component.cta': ComponentCta;
      'component.feature': ComponentFeature;
      'component.image-link': ComponentImageLink;
      'section.feature-list': SectionFeatureList;
      'section.hero': SectionHero;
      'section.image-link-list': SectionImageLinkList;
      'seo.metadate': SeoMetadate;
    }
  }
}
