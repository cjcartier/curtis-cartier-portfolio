'use client';

import { embeddingsIndexDashboard } from '@sanity/embeddings-index-ui';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { iconPicker } from 'sanity-plugin-icon-picker';
import { media } from 'sanity-plugin-media';
import { simplerColorInput } from 'sanity-plugin-simpler-color-input';

import { apiVersion, dataset, projectId } from 'lib/sanity/env';
import schema from 'lib/sanity/schema';

import type { PluginOptions } from 'sanity';

const plugins = [
  structureTool(),
  media(),
  visionTool({ defaultApiVersion: apiVersion }),
  simplerColorInput(),
  iconPicker(),
  embeddingsIndexDashboard(),
] as PluginOptions[];

const config = defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins,
});

export default config;
