
module.exports = () => {
  const config = {

  };
  //
  // function getTwigNamespaceConfig(workingDir) {
  //   workingDir = workingDir || process.cwd(); // eslint-disable-line no-param-reassign
  //   const twigNamespaceConfig = {};
  //   config.patternLab.twigNamespaces.sets.forEach((namespaceSet) => {
  //     const pathArray = namespaceSet.paths.map((pathBase) => {
  //       const results = glob.sync(path.join(pathBase, '**/*.twig')).map((pathItem) => { // eslint-disable-line arrow-body-style
  //         return path.relative(workingDir, path.dirname(pathItem));
  //       });
  //       results.unshift(path.relative(workingDir, pathBase));
  //       return results;
  //     });
  //     twigNamespaceConfig[namespaceSet.namespace] = {
  //       paths: core.uniqueArray(core.flattenArray(pathArray)),
  //     };
  //   });
  //   return twigNamespaceConfig;
  // }
  //
  // function addTwigNamespaceConfigToDrupal(done) {
  //   const twigNamespaceConfig = getTwigNamespaceConfig(path.dirname(config.drupal.themeFile));
  //   const drupalThemeFile = yaml.safeLoad(
  //     fs.readFileSync(config.drupal.themeFile, 'utf8')
  //   );
  //   Object.assign(drupalThemeFile['component-libraries'], twigNamespaceConfig);
  //   const newThemeFile = yaml.safeDump(drupalThemeFile);
  //   fs.writeFileSync(config.drupal.themeFile, newThemeFile, 'utf8');
  //   done();
  // }
  //
  // function addTwigNamespaceConfigToPl(done) {
  //   const twigNamespaceConfig = getTwigNamespaceConfig(plRoot);
  //   plConfig = yaml.safeLoad(
  //     fs.readFileSync(config.patternLab.configFile, 'utf8')
  //   );
  //   if (!plConfig.plugins) {
  //     Object.assign(plConfig, {
  //       plugins: {
  //         twigNamespaces: { enabled: true, namespaces: {} },
  //       },
  //     });
  //   } else if (!plConfig.plugins.twigNamespaces) {
  //     Object.assign(plConfig.plugins, {
  //       twigNamespaces: { enabled: true, namespaces: {} },
  //     });
  //   } else if (!plConfig.plugins.twigNamespaces.namespaces) {
  //     plConfig.plugins.twigNamespaces.namespaces = {};
  //   }
  //   Object.assign(plConfig.plugins.twigNamespaces.namespaces, twigNamespaceConfig);
  //   const newConfigFile = yaml.safeDump(plConfig);
  //   fs.writeFileSync(config.patternLab.configFile, newConfigFile, 'utf8');
  //   done();
  // }

  return {

  }
};
