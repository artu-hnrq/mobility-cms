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
      'booking.car': BookingCar;
      'booking.reservation-items': BookingReservationItems;
      'booking.store': BookingStore;
      'list.detail-list': ListDetailList;
      'seo.metadate': SeoMetadate;
    }
  }
}
