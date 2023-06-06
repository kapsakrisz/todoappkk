const nextConfig = {
    // Other webpack configuration options...
  
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/videos/',
          },
        },
      });
  
      return config;
    },
  
    images: {
      domains: ['cloud.appwrite.io', 'links.papareact.com'],
    },
  };
  
  module.exports = nextConfig;
  