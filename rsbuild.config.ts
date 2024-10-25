import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { configDotenv } from 'dotenv';
import postcssMantine from 'postcss-preset-mantine';
import { getEnv } from './config/env/getEnv';

configDotenv();
export default defineConfig({
	output: {
		assetPrefix: './'
	},
	tools: {
		postcss: config => {
			config?.postcssOptions?.plugins?.push(postcssMantine);
		}
	},
	plugins: [ pluginReact(), pluginSass() ],
	performance: {
		chunkSplit: {
			strategy: 'split-by-experience'
		}
	},
	source: {
		alias: {
			'@app': './src/app',
			'@pages': './src/pages',
			'@widgets': './src/widgets',
			'@features': './src/features',
			'@entities': './src/entities',
			'@shared': './src/shared',
		},
		define: getEnv(),
	},
});