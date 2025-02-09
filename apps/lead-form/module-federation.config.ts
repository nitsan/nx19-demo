import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'lead-form',
  additionalShared: [
    {
      libraryName: 'mylib',
      sharedConfig: {
        requiredVersion: '*',
        singleton: true,
        strictVersion: true,
        import: 'libs/mylib/src/index'
      },
    },
  ],
  exposes: {
    './Routes': 'apps/lead-form/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
