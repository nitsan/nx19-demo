import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'questionnaire',
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
    './Routes': 'apps/questionnaire/src/app/remote-entry/entry.routes.ts',
    './EntryComponent': 'apps/questionnaire/src/app/remote-entry/entry-3.component.ts',
  },
};

export default config;
