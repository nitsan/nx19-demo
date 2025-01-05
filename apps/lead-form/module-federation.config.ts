import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'lead-form',
  exposes: {
    './Routes': 'apps/lead-form/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
