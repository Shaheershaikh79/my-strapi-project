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

export interface CommonCatalogueHeading extends Struct.ComponentSchema {
  collectionName: 'components_common_catalogue_headings';
  info: {
    displayName: 'catalogueHeading';
  };
  attributes: {
    catalogueHeading: Schema.Attribute.Component<'common.section', true>;
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

export interface CommonDirectContact extends Struct.ComponentSchema {
  collectionName: 'components_common_direct_contacts';
  info: {
    description: '';
    displayName: 'directContact';
  };
  attributes: {
    directContactCard: Schema.Attribute.Component<
      'common.direct-contact-card',
      true
    >;
    directContactComponentHeading: Schema.Attribute.Component<
      'common.section',
      false
    >;
  };
}

export interface CommonDirectContactCard extends Struct.ComponentSchema {
  collectionName: 'components_common_direct_contact_cards';
  info: {
    description: '';
    displayName: 'directContactCard';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    valueone: Schema.Attribute.String;
    valuetwo: Schema.Attribute.String;
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

export interface CommonGetInTouch extends Struct.ComponentSchema {
  collectionName: 'components_common_get_in_touches';
  info: {
    description: '';
    displayName: 'getInTouchHeading';
  };
  attributes: {
    getInTouch: Schema.Attribute.Component<'common.section', true>;
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

export interface CommonImpressum extends Struct.ComponentSchema {
  collectionName: 'components_common_impressums';
  info: {
    description: '';
    displayName: 'impressum';
  };
  attributes: {
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface CommonKeyFeatures extends Struct.ComponentSchema {
  collectionName: 'components_common_key_features';
  info: {
    displayName: 'keyFeatures';
  };
  attributes: {
    option: Schema.Attribute.String;
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
    backgroundVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonOneTitle: Schema.Attribute.String;
    buttonTwoTitle: Schema.Attribute.String;
    HeroSection: Schema.Attribute.Component<'common.section', true>;
  };
}

export interface CommonName extends Struct.ComponentSchema {
  collectionName: 'components_common_names';
  info: {
    displayName: 'name';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface CommonPremiumProducts extends Struct.ComponentSchema {
  collectionName: 'components_common_premium_products';
  info: {
    description: '';
    displayName: 'premiumProductsSection';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    commonSection: Schema.Attribute.Component<'common.section', false>;
  };
}

export interface CommonProduct extends Struct.ComponentSchema {
  collectionName: 'components_common_products';
  info: {
    description: '';
    displayName: 'Product';
  };
  attributes: {
    description: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface CommonProjectCard extends Struct.ComponentSchema {
  collectionName: 'components_common_project_cards';
  info: {
    description: '';
    displayName: 'projectCard';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    description: Schema.Attribute.String;
    height: Schema.Attribute.Enumeration<['small', 'large', 'medium']>;
    title: Schema.Attribute.String;
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

export interface CommonSizeWithPrice extends Struct.ComponentSchema {
  collectionName: 'components_common_size_with_prices';
  info: {
    description: '';
    displayName: 'sizeWithPrice';
  };
  attributes: {
    boxPrice: Schema.Attribute.Integer;
    m2Price: Schema.Attribute.Integer;
    sizes: Schema.Attribute.Relation<'oneToMany', 'api::size.size'>;
  };
}

export interface CommonValue extends Struct.ComponentSchema {
  collectionName: 'components_common_values';
  info: {
    description: '';
    displayName: 'value';
  };
  attributes: {};
}

export interface CommonVariations extends Struct.ComponentSchema {
  collectionName: 'components_common_variations';
  info: {
    description: '';
    displayName: 'variations';
  };
  attributes: {
    colors: Schema.Attribute.Relation<'oneToMany', 'api::color.color'>;
    sizes: Schema.Attribute.Component<'common.size-with-price', true>;
    thicknesses: Schema.Attribute.Relation<
      'oneToMany',
      'api::thickness.thickness'
    >;
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
      'common.catalogue-heading': CommonCatalogueHeading;
      'common.collection-details': CommonCollectionDetails;
      'common.collections-cards-details': CommonCollectionsCardsDetails;
      'common.collections-section': CommonCollectionsSection;
      'common.contact-details': CommonContactDetails;
      'common.direct-contact': CommonDirectContact;
      'common.direct-contact-card': CommonDirectContactCard;
      'common.discovery-section': CommonDiscoverySection;
      'common.get-in-touch': CommonGetInTouch;
      'common.icon-array': CommonIconArray;
      'common.icon-details': CommonIconDetails;
      'common.impressum': CommonImpressum;
      'common.key-features': CommonKeyFeatures;
      'common.link-item': CommonLinkItem;
      'common.main-banner': CommonMainBanner;
      'common.name': CommonName;
      'common.premium-products': CommonPremiumProducts;
      'common.product': CommonProduct;
      'common.project-card': CommonProjectCard;
      'common.project-showcase': CommonProjectShowcase;
      'common.section': CommonSection;
      'common.size-with-price': CommonSizeWithPrice;
      'common.value': CommonValue;
      'common.variations': CommonVariations;
      'common.vision-component': CommonVisionComponent;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.logo': LayoutLogo;
    }
  }
}
