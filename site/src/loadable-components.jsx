import Loadable from 'react-loadable';
import Spinner from '@basalt/bedrock-spinner';

export const LoadableComponentOverview = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'component-overview' */ './layouts/component-overview'),
  loading: Spinner,
});

export const LoadablePlayground = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'playground' */ './layouts/playground'),
  loading: Spinner,
});

export const LoadableExamplesPage = Loadable({
  loader: () => import(/* webpackChunkName: 'about-page' */ './pages/examples'),
  loading: Spinner,
});

export const LoadableAboutPage = Loadable({
  loader: () => import(/* webpackChunkName: 'about-page' */ './pages/about'),
  loading: Spinner,
});

export const LoadableHomeSplash = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'home-splash' */ './components/home-splash/home-splash'),
  loading: Spinner,
});

export const LoadableReleaseNotes = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'release-notes' */ './pages/about/release-notes'),
  loading: Spinner,
});

export const LoadableFeatureRequest = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'feature-requests' */ './pages/about/feature-requests'),
  loading: Spinner,
});

export const LoadableVisualLanguagePage = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'visual-language-page' */ './pages/visual-language/visual-language-board/visual-language-board'),
  loading: Spinner,
});

export const LoadableAnimations = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'animations' */ './pages/visual-language/animations/animations'),
  loading: Spinner,
});

export const LoadableBreakpoints = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'breakpoints' */ './pages/visual-language/breakpoints/breakpoints'),
  loading: Spinner,
});

export const LoadableColors = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'colors' */ './pages/visual-language/colors/colors'),
  loading: Spinner,
});

export const LoadableShadows = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'spacings' */ './pages/visual-language/shadows/shadows'),
  loading: Spinner,
});

export const LoadableSpacings = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'spacings' */ './pages/visual-language/spacings/spacings'),
  loading: Spinner,
});

export const LoadableTypography = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'typography' */ './pages/visual-language/typography/typography'),
  loading: Spinner,
});

export const LoadableIcons = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'icons' */ './pages/visual-language/icons/icons'),
  loading: Spinner,
});

export const LoadablePatternsPage = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'patterns-page' */ './pages/patterns'),
  loading: Spinner,
});

export const LoadableResourcesLanding = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'component-overview' */ './pages/resources/'),
  loading: Spinner,
});

export const LoadableLogoDownloads = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'logo-downloads' */ './pages/resources/logo-downloads'),
  loading: Spinner,
});

export const LoadableLogoUsage = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'logo-usage' */ './pages/resources/logo-usage'),
  loading: Spinner,
});

export const LoadablePhotographyGuidelines = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'photography-guidelines' */ './pages/resources/photography-guidelines'),
  loading: Spinner,
});

export const LoadableSketchAssets = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'photography-guidelines' */ './pages/resources/sketch-assets'),
  loading: Spinner,
});

export const LoadableBrandDescriptors = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'brand-descriptors' */ './pages/resources/brand-descriptors'),
  loading: Spinner,
});

export const LoadableSidebar = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'sidebar' */
    './components/sidebar/sidebar'),
  loading: Spinner,
});

export const LoadableSecondaryNav = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'secondary-nav' */
    './components/secondary-nav/secondary-nav'),
  loading: Spinner,
});

export const LoadableFooter = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'footer' */ './components/footer/footer'),
  loading: Spinner,
});

export const LoadableSandbox = Loadable({
  loader: () => import(/* webpackChunkName: 'footer' */ './pages/sandbox'),
  loading: Spinner,
});

export const LoadableSchemaTable = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'schema-table' */ '@basalt/bedrock-schema-table'),
  loading: Spinner,
});

export const LoadableVariationDemo = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'variation-demo' */ '@basalt/bedrock-variation-demo'),
  loading: Spinner,
});

export const LoadableDosAndDonts = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'dos-and-donts' */ '@basalt/bedrock-dos-and-donts'),
  loading: Spinner,
});
