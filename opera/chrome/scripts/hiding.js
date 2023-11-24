/*
  Copyright 2015– Rocketship <https://rocketshipapps.com/>

  This program is free software: you can redistribute it and/or modify it under the terms of the GNU
  General Public License as published by the Free Software Foundation, either version 3 of the
  License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
  even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
  General Public License for more details.

  You should have received a copy of the GNU General Public License along with this program. If not,
  see https://www.gnu.org/licenses/.

  Authors (one per line):

    Brian Kennish <brian@rocketshipapps.com>
*/
const SELECTORS = {
  // Allure
  'www.businessinsider.com.au':
      '#partner-offers, #follow_wrap, #ad-main-top, .adspot-300x250-pos1-container, .adspot-3x1-pos1-container, .adspot-6x2-pos1-container, .adspot-6x2-pos1-container + hr, .adspot-6x2-pos2-container, .adspot-6x2-pos2-container + hr, #river hr:last-of-type',
  'www.byrdie.com': '.top-slot-container',
  'www.gizmodo.com.au': '#product-finder, .btyb_cat',
  'www.shopstyle.com.au': '.promo-wrapper',
  'www.whowhatwear.com.au': '.top-slot-container',
  // Amazon
  'www.amazon.ca':
      'div[style="width:300px;height:280px;"], .displayAd, .zg_displayAd, #amsDetailRight, #ADPlaceholder, #sponsored-products-dp_feature_div, #AUI_A9AdsMiddleBoxTop, #heroQuickPromo_feature_div, #dp-ads-center-promo_feature_div, #ape_Detail_ad-endcap-1_Glance_placement, [id^=ape_Gateway_], #desktop-ad-center-1',
  'www.amazon.co.jp':
      '#DAadrp, #nav-swmslot, #raw-search-desktop-advertising-tower-1, .pa-sp-container, div[style="width:300px;height:280px;"], .displayAd, .zg_displayAd, #amsDetailRight, #ADPlaceholder, #sponsored-products-dp_feature_div, #AUI_A9AdsMiddleBoxTop, .billboard, #desktop-ad-atf, #desktop-ad-atf-hr, #DAae1, [id^=ape_Gateway_], #desktop-ad-center-1',
  'www.amazon.co.uk':
      'div[style="width:300px;height:280px;"], .displayAd, .zg_displayAd, #amsDetailRight, #ADPlaceholder, #sponsored-products-dp_feature_div, #AUI_A9AdsMiddleBoxTop, #heroQuickPromo_feature_div, #dp-ads-center-promo_feature_div, #ape_Detail_ad-endcap-1_Glance_placement, [id^=ape_Gateway_], #desktop-ad-center-1',
  'www.amazon.com':
      '#DAadrp, #nav-swmslot, #raw-search-desktop-advertising-tower-1, .pa-sp-container, div[style="width:300px;height:280px;"], .displayAd, .zg_displayAd, #amsDetailRight, #ADPlaceholder, #sponsored-products-dp_feature_div, #AUI_A9AdsMiddleBoxTop, #heroQuickPromo_feature_div, #dp-ads-center-promo_feature_div, #ape_Detail_ad-endcap-1_Glance_placement, [id^=ape_Gateway_], #desktop-ad-center-1',
  'www.amazon.de':
      '.displayAd, #ADPlaceholder, div[data-campaign], .bannerImage, #desktop-ad-center-1',
  'www.amazon.in':
      'div[style="width:300px;height:280px;"], .displayAd, .zg_displayAd, #amsDetailRight, #ADPlaceholder, #sponsored-products-dp_feature_div, #AUI_A9AdsMiddleBoxTop, #DAadrp, #nav-swmslot, #raw-search-desktop-advertising-tower-1, .pa-sp-container, [id^=ape_Gateway_], #desktop-ad-center-1',
  'www.dpreview.com': '.widget iframe',
  'www.imdb.com':
      '.cornerstone_slot, .dfp_slot, .after_ad, [name="slot_right-7"] + .aux-content-widget-2, .ab_zergnet',
  // AT&T
  'bleacherreport.com': '.br-ad-wrapper',
  'edition.cnn.com':
      '.vidSponsor, div[style="min-height:270px; max-height:625px;height: 270px!important;"], div[style="width: 300px; height: 250px;"], div[style="width:300px; height:250px;overflow:hidden;"], #cnnLawyersCom, #footerleft, #footerright, #front-page-mpu, #ie_column, #leaderboard, #lr_comp_default_300x250, #google_image_div',
  'www.cnn.com':
      '#adsquare, #ad_ns_btf_03, #quigo628, .cnnoutbrain, #quigo336, .vidSponsor, div[style="min-height:270px; max-height:625px;height: 270px!important;"], div[style="width: 300px; height: 250px;"], div[style="width:300px; height:250px;overflow:hidden;"], #cnnLawyersCom, #footerleft, #footerright, #front-page-mpu, #ie_column, #leaderboard, #lr_comp_default_300x250, #google_image_div, .cn-coverageContainer_7DCDFE55-B833-9E14-A9C7-066A2EAB9CCE, .cn-coverageContainer_6CE44821-A427-1A1C-57A8-EE10F2E9E229, [data-zone-label="Paid Partner Content"], [data-zone-label="Shopping Content by CNN Underscored"]',
  // BBC
  'www.bbc.co.uk':
      '#bbccom_leaderboard_container, #bbccom_mpu, .bbccom_advert, #bbccom_sponsor_section, #bbccom_storyprintsponsorship',
  'www.bbc.com':
      '#bbccom_leaderboard_container, #bbccom_mpu, .bbccom_advert, #bbccom_sponsor_section, #bbccom_storyprintsponsorship',
  // Business Insider
  'www.businessinsider.com':
      '.chartbeat, .continue-link, .ks-recommended, .sponsor, .subnav-container, .ad-subnav-container, .river-textonly, .rail-recommended, .right-ad, .ks-rr-taboola-video, .ks-rr-taboola-from-the-web, .jobs, #taboola-right-rail-thumbnails, .targeted-recommended, .dianomi-ad',
  // BuzzFeed
  'www.buzzfeed.com':
      '#BF_WIDGET_10, .post2[style="background-color: #FDF6E5;"], .item--ad, .bf-widget, .bf-ads-video, .js-ad, .ad-ex, .js-thumb-ad, .ad-inline, .ad-wireframe-wrapper',
  // Comcast
  'www.cnbc.com':
      '#ms_aur, #vidRightRailWrapper, div[style="width:960;height:90;margin:0 0 5px 0;"], #social-tools-panel',
  'www.nbcnews.com': '#Sidebar2-sponsored, .deals, .eshopStory, .textSmallGrey, .stackCommerceList',
  'www.nbcsports.com':
      '#top_90h, [id^=block-dart-dart-tag-dart-tag], #nbcsports-leaderboard, .block-mps, .taboola-thumbnails-container',
  // Condé Nast
  'arstechnica.com':
      '.instream-wrap, #article-footer, .ad_native, #daehtsam-da, #masthead + #pushdown-wrap, #msuk-wrapper, #outbrain-recs-wrap, .sponsored-rec',
  // Discovery
  'www.food.com': '.dfp, .fd-tile-ad, .dfp-bigbox, .smart-rail-wrap, .dfp-ad',
  // Disney
  'abc.go.com': '.footerRow, .adBlockSpot',
  'abcnews.go.com':
      '.index-quigo, .story-embed-left.box, .ad_728, .ad_300, #bannerad, #homead, .leaderboard-ad, .ad-slot, .akamai-ad-mode',
  'family.disney.com': '.tm-ad',
  'liveshows.disney.com': '.pushdown',
  'lol.disney.com': '.pushdown, .rich_image, .mint_container',
  'movies.disney.com': '.pushdown',
  'music.disney.com': '.pushdown',
  'ohmy.disney.com': '.tm-ad',
  'shows.disney.com': '.pushdown',
  'style.disney.com': '.tm-ad',
  'video.disney.com': '.pushdown',
  'www.babble.com': '.bb-ad, .tm-ad',
  'www.disney.com': '.gpt, .pushdown',
  'www.espn.com': '#sponsored-by, div[style="height: 325px;"], .ad-slot, .ad-300, #sponsored',
  // eBay
  'www.ebay.co.uk':
      '#rtm_html_194, #rtm_html_274, #rtm_html_275, #rtm_html_391, #rtm_html_566, #rtm_html_567, #rtm_html_569, #skyscrape, .RtmStyle, .sdcBox, .topBnrSc, div[style="margin-top: 15px; width: 160px; height: 615px; overflow: hidden; display: block;"], div[style="width: 300px; height: 265px; overflow: hidden; display: block;"], .beta-placement, #rtm_html_393, #rtm_html_987, #rtm_html_11575, #gf-mrecs-ads, .ft-btyle',
  'www.ebay.com':
      '#rtm_div_193, #rtm_html_194, #rtm_html_391, #rtm_html_441, #rtm_html_569, #skyscrape, .RtmStyle, .al32, .fdad1, .ggtm, .mrec, .topBnrSc, div[style="margin-top: 15px; width: 160px; height: 600px; overflow: hidden; display: block;"], div[style="margin-top: 15px; width: 160px; height: 615px; overflow: hidden; display: block;"], .beta-placement, #rtm_html_393, #rtm_html_567, #rtm_html_987, #rtm_html_11575, #gf-mrecs-ads, .ft-btyle, .hl-ad-row__mrec',
  'www.ebay.com.au':
      '#skyscrape, .RtmStyle, .beta-placement, #rtm_html_567, #rtm_html_393, #rtm_html_987, #rtm_html_11575, #gf-mrecs-ads, .ft-btyle',
  'www.ebay.ie':
      '#rtm_NB, #rtm_html_225, .beta-placement, #rtm_html_567, #rtm_html_393, #rtm_html_987, #rtm_html_11575, #gf-mrecs-ads, .ft-btyle',
  // Facebook
  'apps.facebook.com':
      'div[style="margin: 0px; width: 760px; height: 90px; text-align: center; vertical-align: middle;"]',
  'm.facebook.com':
      '#m_newsfeed_stream article[data-ft*="\\"ei\\":\\""], .aymlCoverFlow, .aymlNewCoverFlow[data-ft*="\\"is_sponsored\\":\\"1\\""], .pyml, .storyStream > ._6t2[data-sigil="marea"], .storyStream > .fullwidth._539p, .storyStream > article[id^="u_"]._676, .storyStream > article[id^="u_"].storyAggregation, [data-xt]',
  'touch.facebook.com':
      '.aymlCoverFlow, .aymlNewCoverFlow[data-ft*="\\"is_sponsored\\":\\"1\\""], .pyml, .storyStream > ._6t2[data-sigil="marea"], .storyStream > .fullwidth._539p, .storyStream > article[id^="u_"]._676, .storyStream > article[id^="u_"].storyAggregation, [data-xt]',
  'www.facebook.com':
      '#MessagingNetegoWrapper, #home_sponsor_nile, #home_stream > .uiUnifiedStory[data-ft*="\\"ei\\":\\""], #pagelet_ads_when_no_friend_list_suggestion, .-cx-PRIVATE-fbAdUnit__root, .-cx-PRIVATE-fbEmu__root, .-cx-PRIVATE-fbFacebarTypeaheadToken__sponsored, .-cx-PRIVATE-snowliftAds__root, .-cx-PRIVATE-spyml__story, .-cx-PUBLIC-fbAdUnit__root, ._24n, ._24o, ._3qj-, ._4u8, .ego_spo, .fbAdUnit, .fbEmu, .fbEmuBlock, .fbEmuComboList, .fbEmuEgo, .fbEmuEgoUnit, .fbEmuLink, .fbPhotoAdsCol, .fbTimelineSideAds, .fixedAux .pbm, .muffin.group, .ownsection[role="option"], [data-referrer="pagelet_side_ads"], [href^="/ads/adboard/"], a[ajaxify^="/ajax/emu/end.php?"], a[href^="/ajax/emu/end.php?"], div[class="ego_column _5qrt"], div[class="ego_column _8_9"], div[class="ego_column pagelet _5qrt _1snm"], div[class="ego_column pagelet _5qrt _y92 _1snm"], div[class="ego_column pagelet _5qrt _y92"], div[class="ego_column pagelet _5qrt"], div[class="ego_column pagelet _y92 _5qrt _1snm"], div[class="ego_column pagelet _y92 _5qrt"], div[class="ego_column pagelet _y92"], div[class="ego_column pagelet"], div[class="ego_column"], div[id^="sponsoredTickerStory_"], div[id^="substream_"] .userContentWrapper > ._1ifo, div[id^="substream_"] div[data-ft*="\\"ei\\":\\""], div[id^="topnews_main_stream_"] div[id^="u_"][data-ft*="\\"ei\\":\\""], ul[id^="typeahead_list_"] > ._20e._6_k._55y_, #pagelet_ego_pane',
  // Forbes
  'www.forbes.com':
      '#ads, .leaderboard, .ad_block, .advoice, #stackForbesAdvoice, .ad-rail, .article-mobile-ad, .article-native-ad, .top-ad-sticky, .sticky-ad-container, .ad-row, .top-ad-container, .ntv-rail-ad, .fbs-ad--top-wrapper, .channel--ad, .vestpocket, medianet',
  // Future
  'www.gizmodo.co.uk': '#interruptor, .interruptor, .commercial, #deal-item',
  'www.tomshardware.com':
      '#pgad_Top, .basicCentral-elm.partner, .shopping, .sideOffers, .zonepub, .sponsored-post',
  // Gannett
  'www.usatoday.com':
      '.partner, #usat_PosterBlog, #divMarketplace, #footerSponsorOne, #footerSponsorTwo, #header-leaderboard, #marketplace2, #prerollOverlayPlayer, #side-banner1, #side-banner2, .bottom-google-links, [id^=taboola-], .taboola-related-module, [aria-label="advertisement"], [data-gl-method="initTaboola"]',
  // Gawker
  'antiviral.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'blackbag.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'defamer.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'dog.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'domesticity.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'fortressamerica.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'internet.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'justice.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'morningafter.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'review.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'sausage.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'thevane.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'tktk.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'truestories.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  'valleywag.gawker.com': '.js_promoted, .contained-ad-container, .ad-bottom',
  // Gizmodo
  'adequateman.deadspin.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'aux.avclub.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'compete.kotaku.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'cosplay.kotaku.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'deadspin.com':
      '.js_promoted, .contained-ad-container, .ad-bottom, .ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container',
  'earther.gizmodo.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'entertainment.theonion.com': '.ad-top.ad-wide, .ad-non-sticky, .contained-ad-container',
  'fieldguide.gizmodo.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'film.avclub.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'games.avclub.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'gizmodo.com':
      '.btyb_cat, .js_promoted, .contained-ad-container, .ad-bottom, .ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container',
  'io9.gizmodo.com':
      '#postTransitionOverlay, .js_promoted, #skyscraper, .contained-ad-container, .ad-bottom, .ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container',
  'jalopnik.com':
      '#postTransitionOverlay, .js_promoted, #skyscraper, .contained-ad-container, .ad-bottom, .ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container',
  'jezebel.com':
      '#postTransitionOverlay, .js_promoted, #skyscraper, .contained-ad-container, .ad-bottom, .ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container',
  'journalisms.theroot.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'kinjadeals.theinventory.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'kotaku.com':
      '#postTransitionOverlay, .js_promoted, .contained-ad-container, .ad-bottom, .ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container',
  'lifehacker.com':
      '#postTransitionOverlay, .js_promoted, .contained-ad-container, .ad-bottom, .ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container',
  'local.theonion.com': '.ad-top.ad-wide, .ad-non-sticky, .contained-ad-container',
  'music.avclub.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'news.avclub.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'offspring.lifehacker.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'paleofuture.gizmodo.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'pictorial.jezebel.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'politics.theonion.com': '.ad-top.ad-wide, .ad-non-sticky, .contained-ad-container',
  'screengrabber.deadspin.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'skillet.lifehacker.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'splinternews.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'sploid.gizmodo.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'sports.theonion.com': '.ad-top.ad-wide, .ad-non-sticky, .contained-ad-container',
  'studioatgizmodo.kinja.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'thatswhatshesaid.jezebel.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'thebests.kotaku.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'theconcourse.deadspin.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'theglowup.theroot.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'thegrapevine.theroot.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'themuse.jezebel.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'theslot.jezebel.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'thestacks.deadspin.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'thetakeout.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'tv.avclub.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'twocents.lifehacker.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'verysmartbrothas.theroot.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'vitals.lifehacker.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'www.avclub.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  'www.theonion.com': '.ad-top.ad-wide, .ad-non-sticky, .contained-ad-container',
  'www.theroot.com':
      '.ad-top.ad-wide, .ad-non-sticky, .ad-promotions-container, .contained-ad-container',
  // Google
  'mail.google.com':
      '#\\:rr .nH[role="main"] .mq:first-child, #\\:rr > .nH > .nH[role="main"] > .aKB, #\\:rr > .nH > .nH[role="main"] > .nH > .nH > .AT[style], #\\:rr > .nH > div[role="main"] > .mq:last-child, .aeF .nH[role="main"] > .mq:last-child, .aeF > .nH > .nH[role="main"] > .aKB, .aeF > .nH > .nH[role="main"] > .afn:first-child + .mq, .aeF > .nH > .nH[role="main"] > .mq:first-child, .aeF > .nH > .nH[role="main"] > .nH > .nH > .AT[style], .aeF > .nH > .nH[role="main"] > .nH > .nH > .nH > .mq:last-child, .aeF > .nH > .nH[role="main"] > div + .mq, .c[style="margin: 0pt;"], .nH.PS, .nH.adC > .nH > .nH > .u5 > .azN, .oM, .rh > #ra, .ts[style="margin:0 0 12px;height:92px;width:100%"], .u4, .u9, .xz, .z0DeRc, [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], a[href^="http://pagead2.googlesyndication.com/"]',
  'www.google.co.uk': '.GBTLFYRDM0, ._Ak, #taw, #bottomads',
  'www.google.com':
      '#mclip, .ads, .hotel-partner-item-sponsored, .hotel-price, #mbEnd[cellspacing="0"][cellpadding="0"], #rhs_block > #mbEnd, #tads + div + .c, #tads.c, #topstuff > #tads, #tadsc, .GC3LC41DERB + div[style="position: relative; height: 170px;"], .GGQPGYLCD5, .GGQPGYLCMCB, .GISRH3UDHB, .ad-active, .c[style="margin: 0pt;"], .nH.MC, .ts[style="margin:0 0 12px;height:92px;width:100%"], [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], body > div[align]:first-child + style + table[cellpadding="0"][width="100%"] > tbody:only-child > tr:only-child > td:only-child, div[style^="height: 16px; font: bold 12px/16px"], #taw, #bottomads',
  'www.google.com.au': '#mclip_control, ._Ak, #taw, #bottomads',
  'www.youtube.com':
      'a[onclick*="\\"ping_url\\":\\"http://www.google.com/aclk?"], .jkb, #feed-pyv-container, #feedmodule-PRO, #homepage-chrome-side-promo, #premium-yva, #search-pva, #shelf-pyv-container, #video-masthead, #watch-branded-actions, #watch-buy-urls, #watch-channel-brand-div, .carousel-offer-url-container, .list-view[style="margin: 7px 0pt;"], .promoted-videos, .searchView.list-view, .watch-extra-info-column, .watch-extra-info-right, a[href^="http://www.youtube.com/cthru?"], a[href^="https://www.youtube.com/cthru?"], .ad-div div, #masthead-ad, .ytd-player-legacy-desktop-watch-ads-renderer, ytd-compact-promoted-video-renderer',
  // Hearst
  'www.cosmopolitan.com': '.leaderboard-ad, .breaker-ad',
  // IAC
  'www.ask.com': '#csaBottom, #adBlock',
  'www.thedailybeast.com': '.SimpleAd, .PageTopAd, .ConnatixAd, .FooterAd',
  // Kakao
  'www.daum.net': '.advert_tmp',
  // LA Times
  'www.latimes.com': '.GoogleDfpAd-wrapper, .Page-below',
  // Microsoft
  'outlook.live.com': '#RadAd_Skyscraper',
  'www.bing.com': '#zune_upsell, .partnerLinks, .b_ad, .b_ad ul',
  'www.microsoft.com': '.hp-large-carousel',
  'www.msn.com':
      '.providerupsell, .todayshowcasead, .bannersectionad, [aria-label="from our partners"], [aria-label="promotions"], .widead, .nativeadserversidecontentmodule',
  // News Corp
  'www.foxnews.com':
      '.ad-unit, .advert, #google_ads_frame1, .ad-enabled, #footer-top-wrapper, #frame2-300x100, #leader-wrapper, #outbrain_widget_1, .block-fox_yume, .ad-content-item',
  'www.marketwatch.com':
      '#BrokerButtons, #story-premiumbanner, #supposedlytemporaryad, #tradingcenter, [width="120"][bgcolor="#d7d7d6"], .ad-extra-text, #ad-display-ad-placeholder, .partner-center, .container--sponsored, .container--advertisement, #brass-rail, .sa-captivate-box, #trading-center, #sponsored-links, .nativeAd',
  // Penske Media
  'deadline.com':
      '.widget_pmc_marketplace_ads, .footer-ad-mobile, #ad-interruptus-header, .admz, .jpx-pd-wrapper',
  'www.rollingstone.com': '.c-ad, .admz, .resize-manager__adOuterContainer___T_gCf',
  // Reddit
  'www.reddit.com':
      '#siteTable_organic, .promotedlink, .dfp-ad-container, [data-before-content="advertisement"]',
  // Times Group
  'economictimes.indiatimes.com':
      '.colombiaAd, .flt #sideBar.adsbg300:first-of-type, #sideBar.flt .adsbg300:nth-child(4), .adContainer, .flr .adsbg300, [title=Advertisement], .iSWidgetCont, .adsbg300, .internalAd, .ntbcarousel, .topArtAd',
  'timesofindia.indiatimes.com':
      '.ad1, .adsdivlyr, .top_ad, #adbreak-adspdbl, .adlst, iframe[title="Advertisement"], div[style="width:300px; height:250px;"], .gn-affiliate-box, .rgt_ad',
  // Tribune
  'www.nydailynews.com': '.pb-f-ads-dfp, .pb-f-ads-taboola-recommendations',
  // Twitter
  'twitter.com':
      '.promoted-account, .promoted-trend, .promoted-tweet, .promotion, .stream-item[data-item-type="tweet"][data-item-id*=":"], .stream-tweet[impression_id][label="promoted"]',
  // Verizon
  'search.aol.ca': '.SLL, .WOL',
  'search.aol.co.uk': '.PMB, .SLL, .WOL',
  'search.aol.com':
      '#maincontent + script + div[class] > style + script + h3[class], #r, .MSL + script + script + div[class] > style + script + h3[class], .PMB, .RHRSLL, .RHRSLLwseboF, .SLL, .SLLwseboF, .WOL, .WOL2, ul[content="SLMP"], ul[content="SLMS"]',
  'techcrunch.com':
      '#post_unit_medrec, .ad-top-mobile, .header-ad, .river-block-native-ad, .native-ad-mobile, .ad-unit, .ad-cluster-container, .ad-300x250, .l-sidebar li:last-child, .ad-sponsored-aside, .fmvps-player-ad-ribbon, .ad-unit__ad, .gallery-slide--ad, .surveymonkey-popup',
  'www.aolsearch.com': '.SLL, .ADS',
  'www.crunchbase.com': '.display-ad',
  'www.engadget.com':
      '#outerslice, .skyscraper, .sponsoredcontent, .sponsor-logo-post, .rail-ad > div:first-child > div:first-child, .rail-ad aside:nth-of-type(2), .rail-asl-line, #adSkyScraper, .pb-25, .mb-40, .mb-15, .inlineLb, .mb-20, .medrec, .medrect',
  'www.huffingtonpost.co.uk':
      '#modulous_right_rail_edit_promo, #modulous_sponsorship_2, .ad_wrapper, .ad_wrapper_, .ad_wrapper_top, #all_sponsored_posts_page_1_wrapper, #ad_deal_lower_left_wrapper, #ad_lower_right_commercials_wrapper, .ad_store, #ad_most_pop_234x60_req_wrapper',
  'www.huffpost.com':
      '#page-header, #partner_box, .RHRSLL, .contin_below, .hp-ss-leaderboard, .linked_sponsored_entry, .presented-by, .right_rail_edit_promo, a[href*=".atwola.com/"], .ad_wrapper, .ad_wrapper_, .ad_wrapper_top, #all_sponsored_posts_page_1_wrapper, #ad_deal_lower_left_wrapper, #ad_lower_right_commercials_wrapper, .ad_store, #ad_most_pop_234x60_req_wrapper',
  'www.luxist.com': '#topleader-wrap, .medrect, .ADS',
  'www.mapquest.com': '.mq-leadin, .display-ad, .search-ad',
  'www.tmz.com':
      '.masthead-ad, .inline-promo, .trc-content-sponsored, .adbadge, .disqus_thread iframe, .iab-ad__wrapper, .quigo-permalink',
  'www.wow.com': '.googleAFCAds, .ADS, #topleader-wrap, .SLL, .medrect',
  // Vice
  'www.vice.com': '.native-block, .banner',
  // Vox
  'www.sbnation.com': '.harmony-sponsorship',
  'www.theverge.com':
      '#fishtank, .-ad, .harmony-sponsorship, .m-feature__intro > aside, .vert300, .m-review__intro > aside',
  // Yahoo
  'answers.yahoo.com': '.searchRightBottomAds, #ya-darla-LREC, #ya-qpage-textads, #ya-darla-MAST',
  'au.news.yahoo.com':
      '.acc-moneyhound, .collection-sponsored, .moneyhound, .northAd, .y7-advertisement',
  'au.sports.yahoo.com':
      '.darla-wrapper, .gemini-native-injected, #y7-everest-applet-plista-40-tertiary-10',
  'au.yahoo.com':
      '#y708-windowshade, #my-adsMAST, #my-adsLREC, #my-adsTL1, #my-adsLREC2, .js-stream-featured-ad, .y7sponsoredlist',
  'cricket.yahoo.net': '#video-branding, .yom-ad, .waf-ad, .darla',
  'finance.yahoo.com':
      '.searchRightBottomAds, #MediaFeaturedListEditorial, #mediabankrate_container, #yfi_ad_FB2, #yfi_ad_cl, .yfi_ad_s, .yom-ysmcm, div[style="height:265px; width:300px;margin:0pt auto;"], div[style="min-height:265px; _height:265px; width:300px;margin:0pt auto;"], .yom-ad, .rmx-ad, #td-applet-ads_container, .darla-container, #tgt1-LeadAd-0-ComboAd-Proxy',
  'groups.yahoo.com': '.yg-mbad-row, .yg-mb',
  'images.search.yahoo.com':
      '#right > div > .searchRightMiddle + div[id]:last-child, #right > div > .searchRightTop + [id]:last-child, #right > div:first-child:last-child > [id]:first-child:last-child, div[id^="wp_bannerize-"], div[id^="yui_"] > span > ul[class]:first-child:last-child > li[class], div[id^="yui_"] > ul > .res[data-bg-link^="http://r.search.yahoo.com/_ylt="] + * div[class^="pla"], .ads',
  'mail.yahoo.com':
      '#MIP4, #MNW, #SKY, #modal-upsell, #northbanner, #nwPane, #slot_LREC, #slot_MB, #slot_REC, #swPane, #tgtMNW, .avLogo, .left_mb, .mb > .tbl, div#msg-list .list-view .ml-bg:not(.list-view-item-container), #slot_TL1, .mb-list-ad, [data-test-id="infinite-scroll-AD"], [data-test-id="right-rail-ad"]',
  'search.yahoo.com':
      '.searchRightBottomAds, #bpla, #cols > #right > ol[class] > .first > .dd[style="padding: 10px !important;border: 1px solid #ededed;"], #cols > #right ol[class] > .first > .dd[style="background-color:#FFF;border: 1px solid #e2e2e6; margin-top:0;"], #doc #cols #right #east, #east, #left > #main > div[id^="yui_"], #left > #main > div[id^="yui_"][class] > ul[class] > li[class], #left > #main > div[id^="yui_"][class]:first-child > div[class]:last-child, #left > #main > ol[class] > li[id] > .dd > .layoutMiddle, #main .dd .layoutCenter .compDlink, #main .dd .layoutCenter > .compDlink, #main .dd[style="cursor: pointer;"] > .layoutMiddle, #main > .reg > li[id^="yui_"][data-bid] > [data-bid], #main > div + div > style + * li > .dd > div[class], #main > div ol[class] > :first-child:last-child > li > .dd > :first-child:last-child > div[class], #main > div ol[class] li[id] > .dd > div + * > div, #main > div[id^="yui_"] > ul > .res, #main > div[id^="yui_"].rVfes:first-child, #main > div[id^="yui_"].rVfes:first-child + #web + div[id^="yui_"].rVfes, #main > div[id^="yui_"][class][data-bk][data-bns]:first-child, #main > div[style="background-color: rgb(250, 250, 255);"], #main > noscript + div[id^="yui_"][class][data-bk][data-bns="Yahoo"], #main > noscript + div[id^="yui_"][class][data-bk][data-bns="Yahoo"] + #web + div[id^="yui_"][class][data-bk][data-bns="Yahoo"], #main > style:first-child + * + #web + style + * > ol[class]:first-child:last-child, #main > style:first-child + * > ol[class]:first-child:last-child, #r-e, #r-n, #r-s, #right .dd .mb-11 + .compList, #right .dd > .layoutMiddle, #right .dd[style="cursor: pointer;"] > .layoutMiddle, #right .dd[style^="background-color:#FFF;border-color:#FFF;padding:"] .compList, #right .first > div[style="background-color:#fafaff;border-color:#FAFAFF;padding:4px 10px 12px;"], #right .reg > li[id^="yui_"][data-bid] > [data-bid], #right .res, #right > .searchRightMiddle + div[id]:last-child, #right > .searchRightTop + div[id]:last-child, #right > div > .searchRightMiddle + div[id]:last-child, #right > div > .searchRightTop + [id]:last-child, #right > div > style + * li .dd > div[class], #right > div ol[class] li > :first-child:last-child > .dd > :first-child:last-child > div[class]:first-child:last-child, #right > div:first-child:last-child > [id]:first-child:last-child, #right > div[class] > ol[class] .dd div[class] > ul > li[class^="mt-"], #right > div[class] ol[class] li[id] .dd > div + * > div[class], #right > div[id] > div[class] > div[class] > h2[class]:first-child + ul[class]:last-child > li[class], #right > span > div[id] > div[class] div[class] > span > ul[class]:last-child > li[class], #right [class][data-bk][data-bns], #right div.dd[style^="background-color:#FFF"] div > ul > li[class^="mt-"], #right div[style="background-color:#fafaff;border-color:#FAFAFF;padding:4px 10px 12px;"], #right li[id^="yui_"] .dd > .layoutMiddle, #right ol li[id^="yui_"] > .dd > .layoutMiddle, #sec-col, #ysch #doc #bd #results #cols #left #main .ads, #ysch #doc #bd #results #cols #left #main .ads .more-sponsors, #ysch #doc #bd #results #cols #left #main .ads .spns, #ysch #doc #bd #results #cols #right #east .ads, .ads, .bgclickable, .eadlast, .has-sma-box, .horiz, .last > div[class][data-bid] > div[class] > ul[class] > li > span > a, .promo-res, .sponsor-dd, .title > a[style="color:#efc439 !important; font-size:13px;font-weight: normal;"], .vert-ad-ttl + * > .eca[target="_blank"][href^="http://r.search.yahoo.com/_ylt="], a[href="http://help.yahoo.com/l/us/yahoo/search/basics/basics-03.html"], a[href^="http://help.yahoo.com/l/us/yahoo/search/basics/basics-03.html"], a[href^="http://r.search.yahoo.com/_ylt="][href*=";_ylu="][href*=".r.msn.com"], a[href^="http://r.search.yahoo.com/_ylt="][href*=";_ylu="][href*="beap.gemini.yahoo.com"], a[href^="https://search.yahoo.com/search/ads;"], div[id^="wp_bannerize-"], div[id^="yui_"] > span > ul[class]:first-child:last-child > li[class], div[id^="yui_"] > ul > .res[data-bg-link^="http://r.search.yahoo.com/_ylt="] + * div[class^="pla"], li[id^="yui_"] > div[data-bns][data-bk][style="cursor: pointer;"] > div[class], ul > .res[data-bg-link^="http://r.search.yahoo.com/_ylt="], .eza9f',
  'shopping.yahoo.com': '.shmod-ysm',
  'sports.yahoo.com': '.searchRightBottomAds',
  'uk.news.yahoo.com':
      '.yom-ad, .rmx-ad, .media-native-ad, .darla-container, [data-beacon], .ads_wrapper',
  'uk.sports.yahoo.com':
      '.yom-ad, .rmx-ad, .media-native-ad, .classickick, .darla-container, [data-beacon], .ads_wrapper',
  'uk.yahoo.com':
      '#my-adsMAST, #my-adsLREC, #my-adsTL1, #my-adsLREC2, .js-stream-featured-ad, .y7sponsoredlist, .darla, [data-beacon]',
  'video.search.yahoo.com': '.adwrapper',
  'www.autoblog.com':
      '#yatadfin, #yatadfinbd, #yatadlrec, #yatadoem, #yatadoembd, .yatAdInsuranceFooter, .yatysm-y, .ad-banner-wrapper, .ad-module, .flex-banner, .btf-wrapper, #right_rail-zergnet',
  'www.yahoo.com':
      '#LREC, #MREC, #YSLUG, #banner, #boxLREC, #darla-ad__LREC, #darla-ad__LREC2, #default-p_24457750, #eyebrow > #ypromo, #genie-widgetgroup, #leftGutter, #lrec2, #lrec_mod, #marketplace, #mbAds, #mw-ysm-cm, #my-promo-hover, #paas-lrec, #paas-mrec, #promo_links_list, #rec, #reg-promos, #rightGutter, #sponsor, #sponsored, #theMNWAd, #tiles-container > #row-2[style="height: 389.613px; padding-bottom: 10px;"], #u_2588582-p, #y708-ad-lrec1, #y708-sponmid, #y_provider_promo, #ya-center-rail > [id^="ya-q-"][id$="-textads"], #yahooPN_CM, #yahoovideo_ysmlinks, #yfi_pf_ysm, #yfi_ysm, #ygmapromo, #yh-ysm, #yl_pf_ysm, #ylf-ysm, #ymh-invitational-recs, #yn-darla2, #yn-gmy-promo-answers, #yn-gmy-promo-groups, #yschsec, .ad-active, .ads, .astro-promo, .fpad, .lrec, .marketplace, .mballads, .more-sponsors, .sharing-toolbar, .spns, .spon.clearfix, .spons, .wdpa1, .y7-breakout-bracket, .y708-ad-eyebrow, .y708-commpartners, .y708-promo-middle, .y7moneyhound, .y7partners, .ya-LDRB, .ya-darla-LREC, .yad, .yad-cpa, .yschspns, .ysm-cont, .ysptblbdr3, [data-ad-enhanced="card"], [data-ad-enhanced="pencil"], [data-ad-enhanced="text"], a[href^="https://beap.adss.yahoo.com/"], div[data-type="ADS"], div[id^="tile-A"][data-beacon-url^="https://beap.gemini.yahoo.com/mbcsc?"], div[id^="tile-mb-"], li[data-beacon^="https://beap.adss.yahoo.com/"], li[data-beacon^="https://beap.gemini.yahoo.com/"], li[id^="ad-"], .ad-tl1, .ad-wrap, .yom-ad, .rmx-ad, .darla-container, .moneyball-ad, .js-stream-ad, .Stage, .darla, [data-beacon], .related-gemini-ad',
  // Ziff Davis
  'mashable.com':
      '.header-banner, .pga, .box970, .ad_container, #sticky-spacer, #stories-ad, .zergnet-container',
  'www.babycenter.com':
      '#fromOurSponsorsHome, .mediumRectangleAdContainer, .leaderFooterAdContainer, .skyscraperAdContainer, .leaderAdContainer, #leaderBodyContainer, #mediumRectangleAd2Container, #mobilePos1AdContainer, #leaderAdContainer, #outstream1x1Container, #programmaticMultiAdContainer, #nativeAdContainer, #mediumRectangleAd1Container, #gptSkyscraperAdContainer, #programmaticMultiAdFooterContainer, #catfishAdContainer',
  // Et al.
  '9gag.com': '.block-ad, .badge-gag-ads-container, .topBannerAd-container',
  'coinmarketcap.com': '#header-banner-wrapper, .responsive-leaderboard, .skyscraper',
  'diply.com': '.center-da, .mega-da-full, .da-disclaimer, .btfrectangle',
  'gigaom.com': '#ad-leaderboard-container, #ad-billboard-container, .widget-go-ads',
  'laughingsquid.com': '.sharethrough-placement, [id^=div-gpt-ad], [id^=taboola]',
  'pando.com': '.advert-slot',
  'slate.com': '.top-ad',
  'thinkprogress.org': '[id^=ad_zone], .yad-sponsored, .sidebar-ad, .ad-wrapper',
  'time.com':
      '.sep, [id^=ad-unit-], [class$=-ad], .left-rail-ad__wrapper, .right-rail__container--ad, .outbrain, .lead-gen',
  'venturebeat.com': '.widget_vb_dfp_ad, .vb-ad-leaderboard',
  'www.bloomberg.com':
      '.bannerbox, .dvz-widget-sponsor, .right-rail-bkg, .widget_bb_doubleclick_widget, .sponsored-ad, .ad-v2, .index-page__top-ad, .leaderboard-ad-dummy',
  'www.bostonglobe.com': '.arc_ad, .sticky_container, #arcad_recirc',
  'www.cnet.com': '[data-taboola-options], [data-ad-container]',
  'www.cp24.com': '.boxAd, .cp24FlyersWidgetSidebar, .sponsoredButtons',
  'www.dailymail.co.uk':
      '.editors-choice.ccox.link-ccox.linkro-darkred, .googleAds, #wideCommentAdvert, .adHolder, [id^=taboola-stream-thumbnails-], .billboard_wrapper',
  'www.dailymotion.com': '.dmp_VideoView-ad-slot',
  'www.dazeddigital.com': '.advert-container, .advert',
  'www.digitaltrends.com':
      '.m-leaderboard, .m-mem--ad, .pricegrabber, .dtads-slot, .m-intermission, .m-review-affiliate-pint, .dtads-alt, .dtads-alt-mpu',
  'www.ehow.com':
      '.RadLinks, center[id^="DartAd_"], div[data-module="radlinks"], #ebooks_container',
  'www.getsl.ink': '.bannerAd',
  'www.gsmarena.com':
      'a[href^="http://www.cellpex.com/affiliates/"], #topAdv, #div-gpt-ad-1536149699860-0',
  'www.inquirer.com': '.arc-ad-wrapper, .pb-f-ads-arcads',
  'www.mediaite.com': 'div[data-adid], .o-zergnet',
  'www.newsweek.com': '.sponsor, .resize-manager__browserAdOuterContainer___1m3es',
  'www.nytimes.com':
      '.text-ad, .g-ad, .e12j3pa50, .css-1jrr5my, .eaca97t0, .css-1sy8kpn, .css-1r07izm, .css-1ede5it, .Ad-ad--25EEa, #SponLink',
  'www.phonearena.com':
      '#top_banner, .adswidget, .s_ad_300x250, .s_ad_160x600, #bottom_banner, .s_box_3 > div[style="width: 320px; height: 250px; border-top: 1px dotted #ddd; padding: 17px 20px 17px 0px;"], .bannerplace728, div[style="height: 250px; border-top: 1px dotted #ddd; padding: 19px 10px 18px 10px;"], .s_mb_15[style="min-height: 250px"], .s_box_3 > div[style="width: 434px; height: 337px; margin: 10px 8px;"], .spot_disclaimer',
  'www.publishersweekly.com':
      '.leaderboard, .quicklinks-ad, #div-gpt-ad-enlarged, #div-gpt-ad-enlarged-inline, .bbstar-popin',
  'www.reuters.com': '#bannerStrip, #marchex, .slide-ad',
  'www.si.com': '.m-header-ad, .l-grid--ad-card, .m-in-content-ad-row, .m-rev-content',
  'www.smh.com.au':
      '.adWrapper, div#adspot-N-6x1-pos1, div#adspot-N-6x2-pos1, div#adspot-N-6x3-pos1, [data-widget="plista_widget_underArticle_v2"]',
  'www.spin.com': '.sm-widget-ad-holder, .footer-ad-holder, #medrec_bottom_lazy_comments_wrapper',
  'www.theblaze.com': 'iframe[name="adblade_ad_iframe"], .ad-tag, .sidebar_sticky_container',
  'www.theguardian.com':
      '.top-banner-ad-container, .js-fc-slice-mpu-candidate, .ad-slot-container .js-ad-slot-container, .ad-slot, #tvgAdvert, .hide-on-popup, .m-money-deals, .money-supermarket, .print-sponsorship, .slot__container, #global-jobs',
  'www.washingtonpost.com':
      '#banner_wrapper_bottom, #slug_88x31, #slug_featured_links, #slug_flex_ss_bb_hp, #slug_inline_bb, #slug_sponsor_links_rr, #textlinkWrapper, #wpni_adi_leaderboard, .brand-connect-module, .pb-ad-container, .ads, .ad-hideable, .grey-bg, .bg-offwhite, .outbrain-wrapper, [class="dn db-ns"], #leaderboard-wrapper',
  'mail.ru': '.w-banner, .text-banner',
  'sportmail.ru': '.ban',
  'news.mail.ru': '.ban',
  'auto.mail.ru': '.ban, [data-16806="1"], .rb_10227, .rb_6015, .rb-criteo-wrapper',
  'kino.mail.ru': '.ban',
  'lady.mail.ru': '.ban',
  'games.mail.ru': '.ban',
  'hi-tech.mail.ru': '.ban',
  'www.sohu.com':
      '.sohuadcode, #ad_TOP, #ad_B, #ad_C, #ad_D, .fanfujubao, .fanfujubao1, .fanfujubao2, .fanfujubao3, #ad_E_A, #ad_E, #ad_G, #ad_H, #ad_M, #ad_O, #ad_T, #ad_N, #ad_W, .godR, .god-main, .god-sub, .god-cut',
  'mil.sohu.com':
      '.sohuadcode, #ad_TOP, #ad_B, #ad_C, #ad_D, .fanfujubao, .fanfujubao1, .fanfujubao2, .fanfujubao3, #ad_E_A, #ad_E, #ad_G, #ad_H, #ad_M, #ad_O, #ad_T, #ad_N, #ad_W',
  'news.sohu.com':
      '.sohuadcode, #ad_TOP, #ad_B, #ad_C, #ad_D, .fanfujubao, .fanfujubao1, .fanfujubao2, .fanfujubao3, #ad_E_A, #ad_E, #ad_G, #ad_H, #ad_M, #ad_O, #ad_T, #ad_N, #ad_W',
  'stackoverflow.com': '.adzerk-vote',
  'www.google.es':
      '#mbEnd[cellspacing="0"][cellpadding="0"], #rhs_block > #mbEnd, #tads + div + .c, #tads.c, #topstuff > #tads, #tadsc, .GC3LC41DERB + div[style="position: relative; height: 170px;"], .GGQPGYLCD5, .GGQPGYLCMCB, .GISRH3UDHB, .ad-active, .ads, .c[style="margin: 0pt;"], .nH.MC, .ts[style="margin:0 0 12px;height:92px;width:100%"], [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], body > div[align]:first-child + style + table[cellpadding="0"][width="100%"] > tbody:only-child > tr:only-child > td:only-child, div[style^="height: 16px; font: bold 12px/16px"]',
  'www.google.ru':
      '#mbEnd[cellspacing="0"][cellpadding="0"], #rhs_block > #mbEnd, #tads + div + .c, #tads.c, #topstuff > #tads, #tadsc, .GC3LC41DERB + div[style="position: relative; height: 170px;"], .GGQPGYLCD5, .GGQPGYLCMCB, .GISRH3UDHB, .ad-active, .ads, .c[style="margin: 0pt;"], .nH.MC, .ts[style="margin:0 0 12px;height:92px;width:100%"], [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], body > div[align]:first-child + style + table[cellpadding="0"][width="100%"] > tbody:only-child > tr:only-child > td:only-child, div[style^="height: 16px; font: bold 12px/16px"]',
  'www.google.ca':
      '#mbEnd[cellspacing="0"][cellpadding="0"], #rhs_block > #mbEnd, #tads + div + .c, #tads.c, #topstuff > #tads, #tadsc, .GC3LC41DERB + div[style="position: relative; height: 170px;"], .GGQPGYLCD5, .GGQPGYLCMCB, .GISRH3UDHB, .ad-active, .ads, .c[style="margin: 0pt;"], .nH.MC, .ts[style="margin:0 0 12px;height:92px;width:100%"], [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], body > div[align]:first-child + style + table[cellpadding="0"][width="100%"] > tbody:only-child > tr:only-child > td:only-child, div[style^="height: 16px; font: bold 12px/16px"]',
  'www.google.it':
      '#mbEnd[cellspacing="0"][cellpadding="0"], #rhs_block > #mbEnd, #tads + div + .c, #tads.c, #topstuff > #tads, #tadsc, .GC3LC41DERB + div[style="position: relative; height: 170px;"], .GGQPGYLCD5, .GGQPGYLCMCB, .GISRH3UDHB, .ad-active, .ads, .c[style="margin: 0pt;"], .nH.MC, .ts[style="margin:0 0 12px;height:92px;width:100%"], [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], body > div[align]:first-child + style + table[cellpadding="0"][width="100%"] > tbody:only-child > tr:only-child > td:only-child, div[style^="height: 16px; font: bold 12px/16px"]',
  'cn.hao123.com': '.hao123-banner',
  'www.google.co.uk':
      '#mbEnd[cellspacing="0"][cellpadding="0"], #rhs_block > #mbEnd, #tads + div + .c, #tads.c, #topstuff > #tads, #tadsc, .GC3LC41DERB + div[style="position: relative; height: 170px;"], .GGQPGYLCD5, .GGQPGYLCMCB, .GISRH3UDHB, .ad-active, .ads, .c[style="margin: 0pt;"], .nH.MC, .ts[style="margin:0 0 12px;height:92px;width:100%"], [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], body > div[align]:first-child + style + table[cellpadding="0"][width="100%"] > tbody:only-child > tr:only-child > td:only-child, div[style^="height: 16px; font: bold 12px/16px"], .ads-ad',
  'www.google.fr':
      '#mbEnd[cellspacing="0"][cellpadding="0"], #rhs_block > #mbEnd, #tads + div + .c, #tads.c, #topstuff > #tads, #tadsc, .GC3LC41DERB + div[style="position: relative; height: 170px;"], .GGQPGYLCD5, .GGQPGYLCMCB, .GISRH3UDHB, .ad-active, .ads, .c[style="margin: 0pt;"], .nH.MC, .ts[style="margin:0 0 12px;height:92px;width:100%"], [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], body > div[align]:first-child + style + table[cellpadding="0"][width="100%"] > tbody:only-child > tr:only-child > td:only-child, div[style^="height: 16px; font: bold 12px/16px"], .ads-ad',
  'www.google.de':
      '#mbEnd[cellspacing="0"][cellpadding="0"], #rhs_block > #mbEnd, #tads + div + .c, #tads.c, #topstuff > #tads, #tadsc, .GC3LC41DERB + div[style="position: relative; height: 170px;"], .GGQPGYLCD5, .GGQPGYLCMCB, .GISRH3UDHB, .ad-active, .ads, .c[style="margin: 0pt;"], .nH.MC, .ts[style="margin:0 0 12px;height:92px;width:100%"], [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], body > div[align]:first-child + style + table[cellpadding="0"][width="100%"] > tbody:only-child > tr:only-child > td:only-child, div[style^="height: 16px; font: bold 12px/16px"], .ads-ad',
  'www.google.com.br':
      '#mbEnd[cellspacing="0"][cellpadding="0"], #rhs_block > #mbEnd, #tads + div + .c, #tads.c, #topstuff > #tads, #tadsc, .GC3LC41DERB + div[style="position: relative; height: 170px;"], .GGQPGYLCD5, .GGQPGYLCMCB, .GISRH3UDHB, .ad-active, .ads, .c[style="margin: 0pt;"], .nH.MC, .ts[style="margin:0 0 12px;height:92px;width:100%"], [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], body > div[align]:first-child + style + table[cellpadding="0"][width="100%"] > tbody:only-child > tr:only-child > td:only-child, div[style^="height: 16px; font: bold 12px/16px"], .ads-ad',
  'www.coupons.com': '.mod-ads, #widesky-banner, .myc_google',
  'www.kbb.com':
      '#kbbAdsMedRec, #kbbAdsMedRec2, #Aside, #Mrec-container, #New-spotlights, #kbbAdsCustomCompare, #kbbAdsHpPushdown, .showroom-ad, #kbbAdsLeaderboard, #kbbAdsCategoryCarouselMedRec1, #kbbAdsSlpLeaderboard',
  'vk.com': '#banner1, #banner2, #left_ads',
  'www.tmall.com': '.floor-ad-banner',
  'weather.com':
      '#pageSpon2, #paid_search, #partner_offers, #twc-partner-spot, .divBottomNotice, .divCenterNotice, .trc_recs_column + .right-column, .taboola_module',
  'www.google.com.mx':
      '#mbEnd[cellspacing="0"][cellpadding="0"], #rhs_block > #mbEnd, #tads + div + .c, #tads.c, #topstuff > #tads, #tadsc, .GC3LC41DERB + div[style="position: relative; height: 170px;"], .GGQPGYLCD5, .GGQPGYLCMCB, .GISRH3UDHB, .ad-active, .ads, .c[style="margin: 0pt;"], .nH.MC, .ts[style="margin:0 0 12px;height:92px;width:100%"], [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], body > div[align]:first-child + style + table[cellpadding="0"][width="100%"] > tbody:only-child > tr:only-child > td:only-child, div[style^="height: 16px; font: bold 12px/16px"], .ads-ad',
  'www.google.com.hk':
      '#mbEnd[cellspacing="0"][cellpadding="0"], #rhs_block > #mbEnd, #tads + div + .c, #tads.c, #topstuff > #tads, #tadsc, .GC3LC41DERB + div[style="position: relative; height: 170px;"], .GGQPGYLCD5, .GGQPGYLCMCB, .GISRH3UDHB, .ad-active, .ads, .c[style="margin: 0pt;"], .nH.MC, .ts[style="margin:0 0 12px;height:92px;width:100%"], [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], body > div[align]:first-child + style + table[cellpadding="0"][width="100%"] > tbody:only-child > tr:only-child > td:only-child, div[style^="height: 16px; font: bold 12px/16px"], .ads-ad',
  'www.linkedin.com':
      '#ad-container, #bottom-ads-container > .attribution, .ad-hrc, .ad-banner-container, .occludable-update .feed-shared-update-v2--e2e',
  'www.yelp.com': '.googlead-sponsor-wrapper, .googlead-bigbox-wrapper, .yloca-search-result',
  'www.groupon.com': '.da-gallery-160-600',
  'www.instructables.com':
      '.aspace, .newrightbar_div_10, #gpt-ad-leaderboard, .collection-adspot, .explore-ad',
  'www.allrecipes.com':
      '#ads-right, .rrAdPad, .bottom-ad2, .advertise_txt, .ad-text, .topads-spacer, .reserve-ad-space, .review-ad-space, .ad-recipe-page-footer-container',
  'www.google.co.in': '.ads-ad, .ads-bbl-container, .ads-bbl-triangle',
  'news.yahoo.co.jp': '[name^=yads], .ss',
  'www.yahoo.co.jp': '[name^=yads], #brandpanel, #ad-lrec',
  'weather.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'loco.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'fortune.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'movies.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'special-bookstore.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'partner.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'blogs.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'finance.yahoo.co.jp': '[name^=yads], #ad-lrec, #pos-lrec',
  'carview.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'ucar.carview.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'job.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'transit.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'map.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'tv.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'news.finance.yahoo.co.jp': '[name^=yads], #ad-lrec, #pos-lrec',
  'sports.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'auctions.yahoo.co.jp': '[name^=yads], #ad-lrec',
  'www.google.co.jp': '#rhs_block, .ads-ad',
  'yandex.ru': '.serp-adv__block, .serp-block-o7',
  'www.sina.com.cn':
      '.sinaads-couplet-side, .sinaad-toolkit-box, .top-ads-fwrap, .palm01-ad, .mod-08, .ad-banner, .sinaads, .tit01, .mod03, .top-ads, .mod-01 + .blank-cont, .part-l, .sinaAD_slide01_w, .part-n-l',
  'news.sina.com.cn':
      '.pip00adNone, .adNone, .sinaad-toolkit-box, .sinaads, [class^=ad_], .tb0827, div[name^=_AdSame], [class^=Ad_]',
  'www.baidu.com': '#ec_im_container',
  'www.naver.com':
      '.img_style, #ad_top, #ad_branding_hide, #ad_branding, #ad_timesquare, .ad_area2',
  'soso.com': '.ad-box, .ad_top_banner',
  'www.sogou.com': '.ad-box, .ad_top_banner',
  'www.nicovideo.jp': '.googleAds',
  'www.google.co.id':
      '#mbEnd[cellspacing="0"][cellpadding="0"], #rhs_block > #mbEnd, #tads + div + .c, #tads.c, #topstuff > #tads, #tadsc, .GC3LC41DERB + div[style="position: relative; height: 170px;"], .GGQPGYLCD5, .GGQPGYLCMCB, .GISRH3UDHB, .ad-active, .ads, .c[style="margin: 0pt;"], .nH.MC, .ts[style="margin:0 0 12px;height:92px;width:100%"], [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], body > div[align]:first-child + style + table[cellpadding="0"][width="100%"] > tbody:only-child > tr:only-child > td:only-child, div[style^="height: 16px; font: bold 12px/16px"]',
  'xinhuanet.com':
      '[style="z-index:5;"], #topAdv, [id^=adBody], #promotionItem, [id^=Full], .scrollAd, [class^=ad]',
  'people.com.cn': '.top_ad, .mt15, .ad_banner, .city dl',
  'www.people.com.cn': '.top_ad, .mt15, .ad_banner, .city dl',
  'spanish.peopledaily.com.cn': '.ad01, .ad02',
  'www.cctv.com': '[id^=div-gpt-ad-]',
  'www.dailymotion.com':
      '.affiliation_cont, .dmpi_masscast, .masscast_box, .masscast_middle_box, #mc_Middle, #top_banner',
  'www.google.pl': '#tads, .ads-ad, ._Ak, .cards-categorical-list-ad',
  'www.ebay.de': '.ft-btyle, [id^=rtm_html_], #gf-mrecs-ads',
  'www.google.co.kr': '#tads, .ads-ad, ._Ak, .cards-categorical-list-ad',
  'www.accuweather.com': '[id^=aad]',
  'www.wunderground.com': '.spotBox, .header-ad-wrap, #top-ad-wrapper, .ad-box, .report-ad',
  'www.chinadaily.com.cn': '.w980.pt10, [class^=ad], iframe[name^=ad], img[src*=adpic]',
  'news.livedoor.com':
      'iframe[src*=unthem], .ads-block-link, .rakutenAff, aside.subSec:first-of-type',
  'www.livedoor.com': 'iframe[src*=unthem], .ads-block-link',
  'www.gmw.cn': '[class^=bannerArea], [class^=ad], [class^=contentadBox]',
  'gmw.cn': '[class^=bannerArea], [class^=ad], [class^=contentadBox]',
  'guancha.gmw.cn': '[class^=bannerArea], [class^=ad], [class^=contentadBox]',
  'politics.gmw.cn': '[class^=bannerArea], [class^=ad], [class^=contentadBox]',
  'news.gmw.cn': '[class^=bannerArea], [class^=ad], [class^=contentadBox]',
  'sports.gmw.cn': '[class^=bannerArea], [class^=ad], [class^=contentadBox]',
  'culture.gmw.cn': '[class^=bannerArea], [class^=ad], [class^=contentadBox]',
  'health.gmw.cn': '[class^=bannerArea], [class^=ad], [class^=contentadBox]',
  'tech.gmw.cn': '[class^=bannerArea], [class^=ad], [class^=contentadBox]',
  'edu.gmw.cn': '[class^=bannerArea], [class^=ad], [class^=contentadBox]',
  'legal.gmw.cn': '[class^=bannerArea], [class^=ad], [class^=contentadBox]',
  'theory.gmw.cn': '[class^=bannerArea], [class^=ad], [class^=contentadBox]',
  'travel.gmw.cn': '[class^=bannerArea], [class^=ad], [class^=contentadBox]'
};
