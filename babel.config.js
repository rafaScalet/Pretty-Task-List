module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@screens': './src/app/screens',
            '@functions': './src/app/functions',
            '@app': './src/app',
          },
        },
      ],
    ],
  };
};
