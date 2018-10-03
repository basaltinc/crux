import global from 'global';

class PluginStore {
  constructor() {
    this.plugins = {};
    this.homePage = null;
  }

  /**
   * Register Bedrock plugin
   * @param {string} name - machine name of plugin; no spaces, lowercase
   * @param {Function} plugin - Plugin function
   * @return {null} - Adds plugin to internal set
   */
  register(name, plugin) {
    // console.log('plugin registered', { name });
    this.plugins[name] = plugin;
  }

  /**
   * @param {Object} options - Options to pass in
   * @param {Function} options.render - Render function that pass props to custom component
   * @return {null} - Sets the Home page
   */
  setHomePage({ render }) {
    this.homePage = { render };
  }

  loadPlugins(api) {
    Object.keys(this.plugins)
      .map(name => this.plugins[name])
      .forEach(plugin => plugin(api));
  }
}

// Enforce plugins store to be a singleton
const KEY = '__BEDROCK_PLUGINS';
function getPluginStore() {
  if (!global[KEY]) {
    global[KEY] = new PluginStore();
  }
  return global[KEY];
}

export const plugins = getPluginStore();
