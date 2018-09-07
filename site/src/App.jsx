import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Spinner from '@basalt/bedrock-spinner';
import ErrorCatcher from '@basalt/bedrock-error-catcher';
import {
  BedrockContextConsumer,
  BedrockContextProvider,
  baseContext,
} from '@basalt/bedrock-core';
import merge from 'lodash.merge';
import Header from './components/header/header';
import './global.css';
import initialSettings from '../settings';
import { apiUrlBase } from '../config';
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
  LoadableSpacings,
  LoadableSketchAssets,
  LoadableTypography,
  LoadableVisualLanguagePage,
} from './loadable-components';

const Site = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 175px);
  width: 100%;
  max-width: 100vw;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: var(--spacing-l);
`;

const SiteFooter = styled.div`
  background-color: #16394b;
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
      settings: initialSettings,
      ready: false,
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/patterns/component`)
      .then(res => res.json())
      .then(patterns => {
        this.setState({ patterns, ready: true });
      });
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
      settings: this.state.settings,
      setSettings: newSettings => this.setState({ settings: newSettings }),
    });

    return (
      <ErrorCatcher>
        <BedrockContextProvider value={cruxContext}>
          <BedrockContextConsumer>
            {({ theme }) => (
              <ThemeProvider theme={theme}>
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
                            path="/visual-language"
                            component={LoadableVisualLanguagePage}
                            exact
                          />
                          <Route
                            path="/visual-language/animations"
                            component={LoadableAnimations}
                          />
                          <Route
                            path="/visual-language/breakpoints"
                            component={LoadableBreakpoints}
                          />
                          <Route
                            path="/visual-language/colors"
                            component={LoadableColors}
                          />
                          <Route
                            path="/visual-language/shadows"
                            component={LoadableShadows}
                          />
                          <Route
                            path="/visual-language/spacings"
                            component={LoadableSpacings}
                          />
                          <Route
                            path="/visual-language/typography"
                            component={LoadableTypography}
                          />
                          <Route
                            path="/visual-language/icons"
                            component={LoadableIcons}
                          />
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
                          <Route path="/sandbox" component={LoadableSandbox} />
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
                      </MainContent>
                    </Site>
                    <SiteFooter>
                      <LoadableFooter />
                    </SiteFooter>
                  </div>
                </Router>
              </ThemeProvider>
            )}
          </BedrockContextConsumer>
        </BedrockContextProvider>
      </ErrorCatcher>
    );
  }
}
