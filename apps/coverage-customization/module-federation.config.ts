import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'coverage-customization',
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
    './Routes':
      'apps/coverage-customization/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
