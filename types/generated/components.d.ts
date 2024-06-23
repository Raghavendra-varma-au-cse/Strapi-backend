import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAbout extends Schema.Component {
  collectionName: 'components_blocks_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    AboutComponent: Attribute.Component<'components.about-component', true>;
    EventDescription: Attribute.Text;
    image: Attribute.Media<'images' | 'videos'>;
  };
}

export interface BlocksDomain extends Schema.Component {
  collectionName: 'components_blocks_domains';
  info: {
    displayName: 'Domain';
  };
  attributes: {
    Title: Attribute.Component<'components.title-tag'>;
    Domains: Attribute.Component<'components.domain-card', true>;
    Link: Attribute.Component<'components.links'>;
  };
}

export interface BlocksFaqBlock extends Schema.Component {
  collectionName: 'components_blocks_faq_blocks';
  info: {
    displayName: 'faqBlock';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'components.title-tag'>;
    faqs: Attribute.Component<'components.faq-card', true>;
  };
}

export interface BlocksFooter extends Schema.Component {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SocialMedia: Attribute.Component<'components.socialmedia', true>;
    FooterLinks: Attribute.Component<'components.footerlinks', true>;
  };
}

export interface BlocksForm extends Schema.Component {
  collectionName: 'components_blocks_forms';
  info: {
    displayName: 'Formblock';
    description: '';
  };
  attributes: {
    Title: Attribute.Component<'components.title-tag'>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    Header: Attribute.String;
    Description: Attribute.Text;
    Date: Attribute.DateTime;
    Background: Attribute.Media<'images'>;
    Avatar: Attribute.Media<'images'>;
    Register: Attribute.Component<'components.links'>;
    RegistrationOpen: Attribute.Boolean;
  };
}

export interface BlocksNavbar extends Schema.Component {
  collectionName: 'components_blocks_navbars';
  info: {
    displayName: 'Navbar';
    description: '';
  };
  attributes: {
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Attribute.String;
    Navlinks: Attribute.Component<'components.navlink', true>;
  };
}

export interface BlocksPrize extends Schema.Component {
  collectionName: 'components_blocks_prizes';
  info: {
    displayName: 'Prize';
    description: '';
  };
  attributes: {
    Title: Attribute.Component<'components.title-tag'>;
    Prizes: Attribute.Component<'components.prize-card', true>;
    Link: Attribute.Component<'components.links'>;
  };
}

export interface BlocksSponsor extends Schema.Component {
  collectionName: 'components_blocks_sponsors';
  info: {
    displayName: 'Sponsor';
  };
  attributes: {
    Title: Attribute.Component<'components.title-tag'>;
    Image: Attribute.Component<'components.image-card', true>;
    Link: Attribute.Component<'components.links'>;
  };
}

export interface BlocksTeam extends Schema.Component {
  collectionName: 'components_blocks_teams';
  info: {
    displayName: 'Team';
    description: '';
  };
  attributes: {
    Title: Attribute.Component<'components.title-tag'>;
    Image: Attribute.Component<'components.image-card', true>;
  };
}

export interface BlocksTimeline extends Schema.Component {
  collectionName: 'components_blocks_timelines';
  info: {
    displayName: 'Timeline';
    description: '';
  };
  attributes: {
    Title: Attribute.Component<'components.title-tag'>;
    TimeData: Attribute.Component<'components.timestamps', true>;
  };
}

export interface ComponentsAboutComponent extends Schema.Component {
  collectionName: 'components_components_about_components';
  info: {
    displayName: 'AboutCard';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    value: Attribute.Integer;
  };
}

export interface ComponentsDomainCard extends Schema.Component {
  collectionName: 'components_components_domain_cards';
  info: {
    displayName: 'DomainCard';
  };
  attributes: {
    Icon: Attribute.Media<'images'>;
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface ComponentsFaqCard extends Schema.Component {
  collectionName: 'components_components_faq_cards';
  info: {
    displayName: 'faqCard';
    description: '';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

export interface ComponentsFooterlinks extends Schema.Component {
  collectionName: 'components_components_footerlinks';
  info: {
    displayName: 'footerlinks';
  };
  attributes: {
    Title: Attribute.String;
    Links: Attribute.Component<'components.links', true>;
  };
}

export interface ComponentsImageCard extends Schema.Component {
  collectionName: 'components_components_image_cards';
  info: {
    displayName: 'ImageCard';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
    Title: Attribute.String;
    Link: Attribute.String;
    Desg: Attribute.String;
  };
}

export interface ComponentsLinks extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Links';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    Show: Attribute.Boolean;
  };
}

export interface ComponentsNavlink extends Schema.Component {
  collectionName: 'components_components_navlinks';
  info: {
    displayName: 'Navlink';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Link: Attribute.String;
    Special: Attribute.Boolean;
  };
}

export interface ComponentsPrizeCard extends Schema.Component {
  collectionName: 'components_components_prize_cards';
  info: {
    displayName: 'PrizeCard';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    icon: Attribute.Media<'images'>;
    Description: Attribute.Text;
    Prize: Attribute.String;
    value: Attribute.Integer;
  };
}

export interface ComponentsSocialmedia extends Schema.Component {
  collectionName: 'components_components_socialmedias';
  info: {
    displayName: 'socialmedia';
  };
  attributes: {
    Title: Attribute.String;
    Link: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsTimestamps extends Schema.Component {
  collectionName: 'components_components_timestamps';
  info: {
    displayName: 'timestamps';
    description: '';
  };
  attributes: {
    DateTime: Attribute.DateTime;
    title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface ComponentsTitleTag extends Schema.Component {
  collectionName: 'components_components_title_tags';
  info: {
    displayName: 'TitleTag';
  };
  attributes: {
    Tag: Attribute.String;
    Title: Attribute.String;
    Description: Attribute.String;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'MetaData';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface StylesDarkbg extends Schema.Component {
  collectionName: 'components_styles_darkbgs';
  info: {
    displayName: 'Darkbg';
  };
  attributes: {
    Darkbg: Attribute.String;
    tagbg: Attribute.String;
    tagtitle: Attribute.String;
    Title: Attribute.String;
    tagline: Attribute.String;
    desc: Attribute.String;
    text1: Attribute.String;
    text2: Attribute.String;
    specialbg1: Attribute.String;
    specialbg2: Attribute.String;
    buttonbg: Attribute.String;
    buttontext: Attribute.String;
    buttonbghover: Attribute.String;
    buttontexthover: Attribute.String;
  };
}

export interface StylesHeroStyle extends Schema.Component {
  collectionName: 'components_styles_hero_styles';
  info: {
    displayName: 'heroStyle';
  };
  attributes: {
    TitleStartcolor: Attribute.String;
    TitleEndcolor: Attribute.String;
    Tagcolor: Attribute.String;
    countercolor: Attribute.String;
    couterDescColor: Attribute.String;
    buttonBg: Attribute.String;
    buttonTextColor: Attribute.String;
    buttonHover: Attribute.String;
    buttonHovertext: Attribute.String;
  };
}

export interface StylesLightBg extends Schema.Component {
  collectionName: 'components_styles_light_bgs';
  info: {
    displayName: 'LightBg';
    description: '';
  };
  attributes: {
    lightBg: Attribute.String;
    tagbg: Attribute.String;
    tagText: Attribute.String;
    Title: Attribute.String;
    subline: Attribute.String;
    Desc: Attribute.String;
    specialText1: Attribute.String;
    specialText2: Attribute.String;
    buttonBg: Attribute.String;
    buttonColor: Attribute.String;
    buttonbgHover: Attribute.String;
    buttonTextHover: Attribute.String;
    specialBg1: Attribute.String;
    specialBg2: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.about': BlocksAbout;
      'blocks.domain': BlocksDomain;
      'blocks.faq-block': BlocksFaqBlock;
      'blocks.footer': BlocksFooter;
      'blocks.form': BlocksForm;
      'blocks.hero': BlocksHero;
      'blocks.navbar': BlocksNavbar;
      'blocks.prize': BlocksPrize;
      'blocks.sponsor': BlocksSponsor;
      'blocks.team': BlocksTeam;
      'blocks.timeline': BlocksTimeline;
      'components.about-component': ComponentsAboutComponent;
      'components.domain-card': ComponentsDomainCard;
      'components.faq-card': ComponentsFaqCard;
      'components.footerlinks': ComponentsFooterlinks;
      'components.image-card': ComponentsImageCard;
      'components.links': ComponentsLinks;
      'components.navlink': ComponentsNavlink;
      'components.prize-card': ComponentsPrizeCard;
      'components.socialmedia': ComponentsSocialmedia;
      'components.timestamps': ComponentsTimestamps;
      'components.title-tag': ComponentsTitleTag;
      'seo.meta-data': SeoMetaData;
      'styles.darkbg': StylesDarkbg;
      'styles.hero-style': StylesHeroStyle;
      'styles.light-bg': StylesLightBg;
    }
  }
}
