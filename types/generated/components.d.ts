import type { Schema, Struct } from '@strapi/strapi';

export interface CommonAbout extends Struct.ComponentSchema {
  collectionName: 'components_common_abouts';
  info: {
    description: '';
    displayName: 'contact-us';
  };
  attributes: {
    decription: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonCollectionDetails extends Struct.ComponentSchema {
  collectionName: 'components_common_collection_details';
  info: {
    description: '';
    displayName: 'CollectionDetails';
  };
  attributes: {
    description: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonCollectionsCardsDetails extends Struct.ComponentSchema {
  collectionName: 'components_common_collections_cards_details';
  info: {
    description: '';
    displayName: 'CollectionsCardsDetails';
  };
  attributes: {
    description: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CommonCollectionsSection extends Struct.ComponentSchema {
  collectionName: 'components_common_collections_sections';
  info: {
    description: '';
    displayName: 'CollectionsSection';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    cards: Schema.Attribute.Component<'common.collections-cards-details', true>;
    CollectionComponent: Schema.Attribute.Component<'common.section', false>;
  };
}

export interface CommonContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_common_contact_details';
  info: {
    description: '';
    displayName: 'Contact Details';
    icon: 'address-book';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    time: Schema.Attribute.String;
  };
}

export interface CommonDiscoverySection extends Struct.ComponentSchema {
  collectionName: 'components_common_discovery_sections';
  info: {
    description: '';
    displayName: 'DiscoverySection';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    DiscoverySection: Schema.Attribute.Component<'common.section', false>;
  };
}

export interface CommonIconArray extends Struct.ComponentSchema {
  collectionName: 'components_common_icon_arrays';
  info: {
    description: '';
    displayName: 'iconArray';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface CommonIconDetails extends Struct.ComponentSchema {
  collectionName: 'components_common_icon_details';
  info: {
    description: '';
    displayName: 'IconDetails';
  };
  attributes: {
    name: Schema.Attribute.Component<'common.icon-array', true>;
  };
}

export interface CommonLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_common_link_items';
  info: {
    description: '';
    displayName: 'Link Item';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CommonMainBanner extends Struct.ComponentSchema {
  collectionName: 'components_common_main_banners';
  info: {
    description: '';
    displayName: 'MainBannerSection';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonOneTitle: Schema.Attribute.String;
    buttonTwoTitle: Schema.Attribute.String;
    HeroSection: Schema.Attribute.Component<'common.section', true>;
  };
}

export interface CommonProduct extends Struct.ComponentSchema {
  collectionName: 'components_common_products';
  info: {
    description: '';
    displayName: 'Product';
  };
  attributes: {
    productImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ProductSection: Schema.Attribute.Component<'common.section', true>;
  };
}

export interface CommonProjectShowcase extends Struct.ComponentSchema {
  collectionName: 'components_common_project_showcases';
  info: {
    displayName: 'projectShowcase';
  };
  attributes: {
    description: Schema.Attribute.String;
    projectshowcaseImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CommonSection extends Struct.ComponentSchema {
  collectionName: 'components_common_sections';
  info: {
    description: '';
    displayName: 'CommonSectionContent';
  };
  attributes: {
    description: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonVisionComponent extends Struct.ComponentSchema {
  collectionName: 'components_common_vision_components';
  info: {
    description: '';
    displayName: 'VisionComponent';
  };
  attributes: {
    description: Schema.Attribute.String;
    IconsDescriptions: Schema.Attribute.Component<'common.icon-details', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: 'Website footer with links and contact info';
    displayName: 'HomeFooter';
  };
  attributes: {
    contactInfo: Schema.Attribute.Component<'common.contact-details', false>;
    copyrightText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u00A9 2024 StoneCraft. All rights reserved'>;
    legalLinks: Schema.Attribute.Component<'common.link-item', true>;
    logoName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'STEIN MARINE'>;
    materialLinks: Schema.Attribute.Component<'common.link-item', true>;
    quickLinks: Schema.Attribute.Component<'common.link-item', true>;
    tagline: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Premium stones, ceramics, and bricks for architectural excellence. Serving designers and builders worldwide since 1992.'>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_header';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    headerLinks: Schema.Attribute.Component<'common.link-item', true>;
  };
}

export interface LayoutLogo extends Struct.ComponentSchema {
  collectionName: 'components_layout_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.about': CommonAbout;
      'common.collection-details': CommonCollectionDetails;
      'common.collections-cards-details': CommonCollectionsCardsDetails;
      'common.collections-section': CommonCollectionsSection;
      'common.contact-details': CommonContactDetails;
      'common.discovery-section': CommonDiscoverySection;
      'common.icon-array': CommonIconArray;
      'common.icon-details': CommonIconDetails;
      'common.link-item': CommonLinkItem;
      'common.main-banner': CommonMainBanner;
      'common.product': CommonProduct;
      'common.project-showcase': CommonProjectShowcase;
      'common.section': CommonSection;
      'common.vision-component': CommonVisionComponent;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.logo': LayoutLogo;
    }
  }
}
