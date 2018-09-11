import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Spinner from '@basalt/bedrock-spinner';
import GlobalStyles from '@basalt/bedrock-global-styles';
import ErrorCatcher from '@basalt/bedrock-error-catcher';
import {
  BedrockContextConsumer,
  BedrockContextProvider,
  baseContext,
} from '@basalt/bedrock-core';
import merge from 'lodash.merge';
import Header from './components/header/header';
import {
  LoadableAboutPage,
  LoadableAnimations,
  LoadableBrandDescriptors,
  LoadableBreakpoints,
  LoadableColors,
  LoadableComponentOverview,
  LoadableExamplesPage,
  LoadableFeatureRequest,
  LoadableFooter,
  LoadableHomeSplash,
  LoadableIcons,
  LoadableLogoDownloads,
  LoadableLogoUsage,
  LoadablePatternsPage,
  LoadablePhotographyGuidelines,
  LoadablePlayground,
  LoadableReleaseNotes,
  LoadableResourcesLanding,
  LoadableSandbox,
  LoadableSecondaryNav,
  LoadableSettingsPage,
  LoadableShadows,
  LoadableSidebar,
  LoadableSketchAssets,
  LoadableSpacings,
  LoadableTypography,
  LoadableVisualLanguagePage,
} from './loadable-components';
import { apiUrlBase } from '../config';

const Site = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 175px);
  width: 100%;
  max-width: 100vw;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: ${props => props.theme.spacing.l};
`;

const SiteFooter = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  && a {
    color: white;
  }
  ul,
  li {
    margin-bottom: 2px;
  }
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patterns: [],
      settings: props.bedrockSettings,
      designTokens: [],
      ready: false,
    };
    this.isDesignTokenAvailable = this.isDesignTokenAvailable.bind(this);
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/patterns/component`)
      .then(res => res.json())
      .then(patterns => {
        this.setState({ patterns, ready: true });
      });

    window
      .fetch(`${apiUrlBase}/design-tokens`)
      .then(res => res.json())
      .then(designTokens => {
        this.setState({
          designTokens: designTokens.map(designToken => ({
            path: `/design-tokens/${designToken.id}`,
            ...designToken,
          })),
        });
      });
  }

  isDesignTokenAvailable(id) {
    return this.state.designTokens.some(t => t.id === id);
  }

  render() {
    if (!this.state.ready) {
      return <Spinner />;
    }

    // Just a demo of how to override
    const cruxContext = merge({}, baseContext, {
      theme: {
        colors: {
          // borders: 'red',
        },
      },
      patterns: this.state.patterns,
      designTokens: this.state.designTokens,
      settings: this.state.settings,
      setSettings: newSettings => this.setState({ settings: newSettings }),
    });

    return (
      <ErrorCatcher>
        <BedrockContextProvider value={cruxContext}>
          <BedrockContextConsumer>
            {({ theme }) => (
              <ThemeProvider theme={theme}>
                <React.Fragment>
                  <GlobalStyles />
                  <Router>
                    <div>
                      <Route
                        path="/"
                        component={routeProps => <Header {...routeProps} />}
                      />
                      <Site>
                        <Switch>
                          <Route path="/" exact />
                          <Route path="/examples/*" />
                          <Route
                            path="/"
                            render={({ location }) => (
                              <LoadableSidebar>
                                <LoadableSecondaryNav
                                  patterns={this.state.patterns}
                                  location={location}
                                />
                              </LoadableSidebar>
                            )}
                          />
                        </Switch>
                        <MainContent>
                          <ErrorCatcher>
                            <Switch>
                              <Route
                                path="/"
                                component={LoadableHomeSplash}
                                exact
                              />
                              <Route
                                path="/examples/:id"
                                render={({ match }) => (
                                  <LoadablePlayground
                                    id={match.params.id}
                                    patterns={this.state.patterns}
                                  />
                                )}
                              />
                              <Route
                                path="/examples"
                                component={LoadableExamplesPage}
                                exact
                              />
                              <Route
                                path="/about"
                                component={LoadableAboutPage}
                                exact
                              />
                              <Route
                                path="/about/release-notes"
                                component={LoadableReleaseNotes}
                              />
                              <Route
                                path="/about/feature-requests"
                                component={LoadableFeatureRequest}
                              />
                              <Route
                                path="/design-tokens"
                                component={LoadableVisualLanguagePage}
                                exact
                              />
                              {this.isDesignTokenAvailable('transitions') && (
                                <Route
                                  path={
                                    this.state.designTokens.find(
                                      t => t.id === 'transitions',
                                    ).path
                                  }
                                  component={LoadableAnimations}
                                />
                              )}
                              {this.isDesignTokenAvailable('breakpoints') && (
                                <Route
                                  path={
                                    this.state.designTokens.find(
                                      t => t.id === 'breakpoints',
                                    ).path
                                  }
                                  component={LoadableBreakpoints}
                                />
                              )}
                              {this.isDesignTokenAvailable('colors') && (
                                <Route
                                  path={
                                    this.state.designTokens.find(
                                      t => t.id === 'colors',
                                    ).path
                                  }
                                  component={LoadableColors}
                                />
                              )}
                              {this.isDesignTokenAvailable('shadows') && (
                                <Route
                                  path={
                                    this.state.designTokens.find(
                                      t => t.id === 'shadows',
                                    ).path
                                  }
                                  component={LoadableShadows}
                                />
                              )}
                              {this.isDesignTokenAvailable('spacings') && (
                                <Route
                                  path={
                                    this.state.designTokens.find(
                                      t => t.id === 'spacings',
                                    ).path
                                  }
                                  component={LoadableSpacings}
                                />
                              )}
                              {this.isDesignTokenAvailable('typography') && (
                                <Route
                                  path={
                                    this.state.designTokens.find(
                                      t => t.id === 'typography',
                                    ).path
                                  }
                                  component={LoadableTypography}
                                />
                              )}
                              {this.isDesignTokenAvailable('icons') && (
                                <Route
                                  path={
                                    this.state.designTokens.find(
                                      t => t.id === 'icons',
                                    ).path
                                  }
                                  component={LoadableIcons}
                                />
                              )}
                              <Route
                                path="/patterns"
                                component={LoadablePatternsPage}
                                exact
                              />
                              <Route
                                path="/resources"
                                component={LoadableResourcesLanding}
                                exact
                              />
                              <Route
                                path="/resources/logo-downloads"
                                component={LoadableLogoDownloads}
                              />
                              <Route
                                path="/resources/logo-usage"
                                component={LoadableLogoUsage}
                              />
                              <Route
                                path="/resources/photography-guidelines"
                                component={LoadablePhotographyGuidelines}
                              />
                              <Route
                                path="/resources/sketch-assets"
                                component={LoadableSketchAssets}
                              />
                              <Route
                                path="/resources/brand-descriptors"
                                component={LoadableBrandDescriptors}
                              />
                              <Route
                                path="/settings"
                                component={LoadableSettingsPage}
                              />
                              <Route
                                path="/sandbox"
                                component={LoadableSandbox}
                              />
                              <Route
                                path="/patterns/components/:id"
                                render={({ match }) => (
                                  <LoadableComponentOverview
                                    id={match.params.id}
                                    size="m"
                                    key={match.params.id}
                                  />
                                )}
                              />
                              <Route
                                path="/resources/:id"
                                render={({ match }) => {
                                  const Component = [match.id];
                                  return <Component />;
                                }}
                              />
                              <Redirect to="/" />
                            </Switch>
                          </ErrorCatcher>
                        </MainContent>
                      </Site>
                      <SiteFooter>
                        <LoadableFooter />
                      </SiteFooter>
                    </div>
                  </Router>
                </React.Fragment>
              </ThemeProvider>
            )}
          </BedrockContextConsumer>
        </BedrockContextProvider>
      </ErrorCatcher>
    );
  }
}
