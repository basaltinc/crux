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
import { BedrockContextProvider, baseContext } from '@basalt/bedrock-core';
import merge from 'lodash.merge';
import Header from './components/header';
import HomeSplash from './components/home-splash';
import Footer from './components/footer';
import {
  LoadableAnimations,
  LoadableBreakpoints,
  LoadableColors,
  LoadableComponentOverview,
  LoadableCustomSectionPage,
  LoadableDesignTokenPage,
  LoadableExamplesPage,
  LoadablePatternsPage,
  LoadablePlayground,
  LoadableSecondaryNav,
  LoadableSettingsPage,
  LoadableShadows,
  LoadableSidebar,
  LoadableSpacings,
  LoadableTypography,
} from './loadable-components';

const Site = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 140px);
  width: 100%;
  max-width: 100vw;
  @media (min-width: 1300px) {
    min-height: calc(100vh - 175px);
  }
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patterns: [],
      settings: props.bedrockSettings,
      designTokens: [],
      sections: [],
      ready: false,
    };
    this.apiEndpoint = `${props.bedrockSettings.urls.apiUrlBase}`;
    this.isDesignTokenAvailable = this.isDesignTokenAvailable.bind(this);
  }

  async componentDidMount() {
    const results = await Promise.all([
      window
        .fetch(`${this.apiEndpoint}/patterns/component`)
        .then(res => res.json())
        .then(patterns => ({
          patterns,
        })),
      window
        .fetch(`${this.apiEndpoint}/sections`)
        .then(res => res.json())
        .then(sections => ({
          sections: sections.map(section => ({
            ...section,
            items: section.items.map(item => ({
              path: `/pages/${section.id}/${item.id}`,
              ...item,
            })),
          })),
        })),
      window
        .fetch(`${this.apiEndpoint}/design-tokens`)
        .then(res => res.json())
        .then(designTokens => ({
          designTokens: designTokens.map(designToken => ({
            path: `/design-tokens/${designToken.id}`,
            ...designToken,
          })),
        })),
    ]);

    const initialState = Object.assign({}, ...results);

    this.setState({
      ready: true,
      ...initialState,
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
      sections: this.state.sections,
      designTokens: this.state.designTokens,
      settings: this.state.settings,
      setSettings: newSettings => this.setState({ settings: newSettings }),
    });

    return (
      <ErrorCatcher>
        <BedrockContextProvider value={cruxContext}>
          <ThemeProvider theme={cruxContext.theme}>
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
                            <LoadableSecondaryNav location={location} />
                          </LoadableSidebar>
                        )}
                      />
                    </Switch>
                    <MainContent>
                      <ErrorCatcher>
                        <Switch>
                          <Route path="/" component={HomeSplash} exact />
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
                          {this.state.sections.map(section => (
                            <Route
                              key={section.id}
                              path={`/pages/${section.id}/:id`}
                              render={({ match }) => (
                                <LoadableCustomSectionPage
                                  key={match.params.id}
                                  id={match.params.id}
                                  sectionId={section.id}
                                />
                              )}
                            />
                          ))}
                          <Route
                            path="/design-tokens"
                            component={LoadableDesignTokenPage}
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
                          <Route
                            path="/patterns"
                            component={LoadablePatternsPage}
                            exact
                          />
                          <Route
                            path="/settings"
                            component={LoadableSettingsPage}
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
                    <Footer />
                  </SiteFooter>
                </div>
              </Router>
            </React.Fragment>
          </ThemeProvider>
        </BedrockContextProvider>
      </ErrorCatcher>
    );
  }
}

App.propTypes = {
  bedrockSettings: PropTypes.object.isRequired, // eslint-disable-line
};

export default App;
