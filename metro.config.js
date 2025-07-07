const { getDefaultConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// Get the default config
const defaultConfig = getDefaultConfig(__dirname);

// Optional: Add custom config overrides here if needed
const customConfig = {
  // transformer: {
  //   babelTransformerPath: require.resolve('react-native-svg-transformer'),
  // },
  // resolver: {
  //   assetExts: [...defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg')],
  //   sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  // },
};

// Merge with Reanimated’s metro config
const combinedConfig = {
  ...defaultConfig,
  ...customConfig,
};

// Wrap final config with Reanimated
module.exports = wrapWithReanimatedMetroConfig(combinedConfig);
