/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp|ico|bmp|tiff)$/i,  
      type: 'asset/resource',
      generator: {
        filename: 'static/images/[hash][ext][query]',  
      },
      include: path.join(process.cwd(), 'app/asset'),  
    });

    return config;
  },
  images: {
    remotePatterns: [{
      protocol:"https",
      hostname:"placehold.co",
      port:'',
      pathname:"**"
    }]
}
};

export default nextConfig;


