import type { Schema, Attribute } from '@strapi/strapi';

export interface BookingAmount extends Schema.Component {
  collectionName: 'components_booking_amounts';
  info: {
    displayName: 'Amount';
    icon: 'plus';
    description: '';
  };
  attributes: {
    usd: Attribute.Decimal & Attribute.Required;
    brl: Attribute.Decimal & Attribute.Required;
  };
}

export interface BookingArrangement extends Schema.Component {
  collectionName: 'components_booking_arrangements';
  info: {
    displayName: 'Arrangement';
  };
  attributes: {
    datetime: Attribute.DateTime & Attribute.Required;
    store: Attribute.Component<'booking.store'> & Attribute.Required;
  };
}

export interface BookingCancelation extends Schema.Component {
  collectionName: 'components_booking_cancelations';
  info: {
    displayName: 'Cancelation';
    icon: 'thumbDown';
    description: '';
  };
  attributes: {
    deadline: Attribute.DateTime & Attribute.Required;
    cancelled_by: Attribute.String;
    datetime: Attribute.DateTime;
    ip: Attribute.String;
  };
}

export interface BookingCar extends Schema.Component {
  collectionName: 'components_car_cars';
  info: {
    displayName: 'Car';
    icon: 'car';
    description: '';
  };
  attributes: {
    model: Attribute.String & Attribute.Required;
    group: Attribute.String & Attribute.Required;
    image_url: Attribute.String & Attribute.Required;
    transmission_type: Attribute.String & Attribute.Required;
    air_conditioning: Attribute.Boolean & Attribute.Required;
    quantity_of_baggages: Attribute.Integer & Attribute.Required;
    quantity_of_passengers: Attribute.Integer & Attribute.Required;
    free_km: Attribute.Boolean & Attribute.Required;
  };
}

export interface BookingConductor extends Schema.Component {
  collectionName: 'components_booking_conductors';
  info: {
    displayName: 'conductor';
    icon: 'user';
  };
  attributes: {
    document: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    surname: Attribute.String & Attribute.Required;
    email: Attribute.String;
    telephone: Attribute.String;
  };
}

export interface BookingIssue extends Schema.Component {
  collectionName: 'components_booking_issues';
  info: {
    displayName: 'Issue';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    user: Attribute.String;
    datetime: Attribute.DateTime;
    ip: Attribute.String;
  };
}

export interface BookingPayment extends Schema.Component {
  collectionName: 'components_booking_payments';
  info: {
    displayName: 'Payment';
    icon: 'alien';
  };
  attributes: {
    deadline: Attribute.DateTime & Attribute.Required;
    prepaid: Attribute.Boolean & Attribute.Required;
    method: Attribute.String & Attribute.Required;
    status: Attribute.String & Attribute.Required;
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
    fee_included: Attribute.Boolean & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    fee_type: Attribute.String & Attribute.Required;
    amount: Attribute.Component<'booking.amount'> & Attribute.Required;
    code: Attribute.String & Attribute.Required;
    prepayment: Attribute.Boolean & Attribute.Required;
    quantity: Attribute.Decimal & Attribute.Required;
    item_type: Attribute.String & Attribute.Required;
    payment_at_destination: Attribute.Boolean & Attribute.Required;
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
    name: Attribute.String & Attribute.Required;
    country: Attribute.String;
    city: Attribute.String;
    address: Attribute.String & Attribute.Required;
    latitude: Attribute.String;
    longitude: Attribute.String;
    telephone: Attribute.String;
    opening_hours: Attribute.String;
  };
}

export interface BookingSupplier extends Schema.Component {
  collectionName: 'components_booking_suppliers';
  info: {
    displayName: 'Supplier';
    icon: 'house';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    iata: Attribute.String & Attribute.Required;
  };
}

export interface ColorpickMultipleFields extends Schema.Component {
  collectionName: 'components_colorpick_multiple_fields';
  info: {
    displayName: 'multiple fields';
  };
  attributes: {
    color: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ComponentCta extends Schema.Component {
  collectionName: 'components_component_ctas';
  info: {
    displayName: 'cta';
    icon: 'quote';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['Button', 'Link']> & Attribute.Required;
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

export interface ComponentIcon extends Schema.Component {
  collectionName: 'components_component_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media & Attribute.Required;
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

export interface ComponentSectionHeader extends Schema.Component {
  collectionName: 'components_component_section_headers';
  info: {
    displayName: 'Section Header';
    description: '';
    icon: 'alien';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    Summary: Attribute.Text;
    cta: Attribute.Component<'component.cta'>;
  };
}

export interface LinkBlogPost extends Schema.Component {
  collectionName: 'components_link_blog_posts';
  info: {
    displayName: 'Blog Post';
    icon: 'link';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    page: Attribute.Relation<
      'link.blog-post',
      'oneToOne',
      'api::blog-post.blog-post'
    >;
  };
}

export interface LinkExperiencePage extends Schema.Component {
  collectionName: 'components_link_experience_pages';
  info: {
    displayName: 'Experience Page';
    icon: 'link';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    page: Attribute.Relation<
      'link.experience-page',
      'oneToOne',
      'api::experience-page.experience-page'
    >;
  };
}

export interface LinkVehicleImage extends Schema.Component {
  collectionName: 'components_link_vehicle_images';
  info: {
    displayName: 'Vehicle Image';
    icon: 'car';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
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

export interface UserClient extends Schema.Component {
  collectionName: 'components_user_clients';
  info: {
    displayName: 'Client';
    icon: 'user';
  };
  attributes: {
    full_name: Attribute.String & Attribute.Required;
    agency: Attribute.String & Attribute.Required;
    cnpj: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
  };
}

export interface UserCredentialsMobility extends Schema.Component {
  collectionName: 'components_user_credentials_mobilities';
  info: {
    displayName: 'Credentials Mobility';
    icon: 'shield';
  };
  attributes: {
    login: Attribute.String & Attribute.Required;
    password: Attribute.String & Attribute.Required & Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'booking.amount': BookingAmount;
      'booking.arrangement': BookingArrangement;
      'booking.cancelation': BookingCancelation;
      'booking.car': BookingCar;
      'booking.conductor': BookingConductor;
      'booking.issue': BookingIssue;
      'booking.payment': BookingPayment;
      'booking.reservation-items': BookingReservationItems;
      'booking.store': BookingStore;
      'booking.supplier': BookingSupplier;
      'colorpick.multiple-fields': ColorpickMultipleFields;
      'component.cta': ComponentCta;
      'component.feature': ComponentFeature;
      'component.icon': ComponentIcon;
      'component.image-link': ComponentImageLink;
      'component.section-header': ComponentSectionHeader;
      'link.blog-post': LinkBlogPost;
      'link.experience-page': LinkExperiencePage;
      'link.vehicle-image': LinkVehicleImage;
      'section.hero': SectionHero;
      'section.image-link-list': SectionImageLinkList;
      'seo.metadate': SeoMetadate;
      'user.client': UserClient;
      'user.credentials-mobility': UserCredentialsMobility;
    }
  }
}
