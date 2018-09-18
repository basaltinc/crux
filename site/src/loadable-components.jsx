import Loadable from 'react-loadable';
import Spinner from '@basalt/bedrock-spinner';

export const LoadableComponentOverview = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'component-overview' */ './layouts/component-overview'),
  loading: Spinner,
});

export const LoadablePlayground = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'playground' */ '@basalt/bedrock-playground'),
  loading: Spinner,
});

export const LoadableExamplesPage = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'about-page' */ '@basalt/bedrock-examples-guide'),
  loading: Spinner,
});

export const LoadableHomeSplash = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'home-splash' */ './components/home-splash/home-splash'),
  loading: Spinner,
});

// export const LoadableReleaseNotes = Loadable({
//   loader: () =>
//     import(/* webpackChunkName: 'release-notes' */ '../../bedrock/components/release-notes/release-notes'),
//   loading: Spinner,
// });

export const LoadableDesignTokenPage = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'design-token-page' */ './pages/design-tokens/design-token-board/design-token-board'),
  loading: Spinner,
});

export const LoadableAnimations = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'animations' */ '@basalt/bedrock-transitions-demo'),
  loading: Spinner,
});

export const LoadableBreakpoints = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'breakpoints' */ './pages/design-tokens/breakpoints/breakpoints'),
  loading: Spinner,
});

export const LoadableColors = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'colors' */ './pages/design-tokens/colors/colors'),
  loading: Spinner,
});

export const LoadableShadows = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'spacings' */ './pages/design-tokens/shadows/shadows'),
  loading: Spinner,
});

export const LoadableSpacings = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'spacings' */ './pages/design-tokens/spacings/spacings'),
  loading: Spinner,
});

export const LoadableTypography = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'typography' */ './pages/design-tokens/typography/typography'),
  loading: Spinner,
});

export const LoadableIcons = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'icons' */ './pages/design-tokens/icons/icons'),
  loading: Spinner,
});

export const LoadablePatternsPage = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'patterns-page' */ '@basalt/bedrock-patterns-filterable-grid'),
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

export const LoadableBrandDescriptors = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'brand-descriptors' */ './pages/resources/brand-descriptors'),
  loading: Spinner,
});

export const LoadableSidebar = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'sidebar' */
    '@basalt/bedrock-sidebar'),
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

export const LoadableSettingsPage = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'patterns-page' */ './pages/settings'),
  loading: Spinner,
});

export const LoadableCustomSectionPage = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'custom-section-page' */ './layouts/custom-section-page'),
  loading: Spinner,
});
