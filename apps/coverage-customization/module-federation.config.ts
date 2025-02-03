import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'coverage-customization',
  exposes: {
    './Routes':
      'apps/coverage-customization/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
