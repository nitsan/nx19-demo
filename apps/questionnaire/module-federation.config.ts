import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'questionnaire',
  exposes: {
    './Routes': 'apps/questionnaire/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
