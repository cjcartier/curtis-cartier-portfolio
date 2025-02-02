import { visionTool } from '@sanity/vision';
import { groqdPlaygroundTool } from 'groqd-playground';
import { defineConfig } from 'sanity';
import { iconPicker } from 'sanity-plugin-icon-picker';
import { media } from 'sanity-plugin-media';
import { simplerColorInput } from 'sanity-plugin-simpler-color-input';
import { structureTool } from 'sanity/structure';

import { apiVersion, dataset, projectId } from '@/lib/env';
import schema from '@/schemas';

import type { PluginOptions } from 'sanity';
import { singletonTools } from 'sanity-plugin-singleton-tools';
import structure from './lib/structure';

const plugins = [
  structureTool({ structure }),
  media(),
  visionTool({ defaultApiVersion: apiVersion }),
  simplerColorInput(),
  iconPicker(),
  groqdPlaygroundTool(),
  singletonTools(),
] as PluginOptions[];

const config = defineConfig({
  projectId,
  dataset,
  schema,
  apiVersion,
  plugins,
});

export default config;
