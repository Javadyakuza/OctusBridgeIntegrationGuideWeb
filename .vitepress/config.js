import vue from '@vitejs/plugin-vue';
import wasm from 'vite-plugin-wasm';
const HELP_URL = 'https://t.me/everdev';
const FEEDBACK_URL = 'https://t.me/broxus_chat';
const GITHUB_URL = 'https://github.com/Javadyakuza/OctusBridgeIntegrationGuideWeb.git';

module.exports = {
  title: 'Octus Bridge Integration Guide',
  base: '/',
  description: 'Octus Bridge Integration Guide',
  plugins: [vue(), wasm()],
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Feedback', link: FEEDBACK_URL },
      { text: 'Community', link: HELP_URL },
    ],
    sidebar: [
      {
        text: 'Introduction',
        link: '/',
      },
      {
        text: 'Mechanics',
        collapsable: false,

        items: [
          {
            text: 'Everscale to EVM',
            collapsable: false,
            link: '/docs/EVER-to-EVM.md',
          },
          {
            text: 'EVM to Everscale',
            collapsable: false,
            link: '/docs/EVM-to-EVER.md',
          },
        ],
      },
      {
        text: 'Concepts',
        collapsable: true,
        link: '/docs/Concepts/ToC.md',
        items: [
          { text: 'Token Types', collapsable: false, link: '/docs/Concepts/TokenTypes.md' },
          { text: 'Operations', collapsable: false, link: '/docs/Concepts/Operations.md' },
          { text: 'Events', collapsable: false, link: '/docs/Concepts/Events.md' },
          {
            text: 'Credit Modules',
            collapsable: false,
            link: '/docs/Concepts/CreditModules.md',
          },
          { text: 'Payloads', collapsable: false, link: '/docs/Concepts/Payloads.md' },
        ],
      },

      {
        text: 'Code Samples',
        collapsable: true,
        items: [
          {
            text: 'Prerequisites',
            collapsable: true,
            link: '/src/codeSamples/md/prerequisites.md',
          },
          {
            text: 'Everscale to EVM',
            collapsable: true,
            link: '/src/codeSamples/md/EverToEvm/workFlow.md',
            items: [
              {
                text: 'Building Payloads',
                collapsable: true,
                link: '/src/codeSamples/md/EverToEvm/buildingPayloads/BuildingPayloads.md',
              },
              {
                text: 'Transferring Tokens',
                collapsable: true,
                items: [
                  {
                    text: 'EVER',
                    collapsable: true,
                    link: '/src/codeSamples/md/EverToEvm/transfers/transferEverNativeCoin.md',
                  },
                  {
                    text: 'Native Token',
                    collapsable: true,
                    link: '/src/codeSamples/md/EverToEvm/transfers/transferEverNativeToken.md',
                  },
                  {
                    text: 'Alien Token',
                    collapsable: true,
                    link: '/src/codeSamples/md/EverToEvm/transfers/transferEverAlienToken.md',
                  },
                  {
                    text: 'EVM Gas Token',
                    collapsable: true,
                    link: '/src/codeSamples/md/EverToEvm/transfers/transferEvmNativeCoin.md',
                  },
                ],
              },
              {
                text: 'EVM Asset Releasing',
                collapsable: true,
                items: [
                  {
                    text: 'Native Token',
                    collapsable: true,
                    link: '/src/codeSamples/md/EverToEvm/saveWithdraw/saveWithdrawNative.md',
                  },
                  {
                    text: 'EVM Gas and Alien Token ',
                    collapsable: true,
                    link: '/src/codeSamples/md/EverToEvm/saveWithdraw/saveWithdrawAlien.md',
                  },
                ],
              },
            ],
          },
          {
            text: 'EVM to Everscale',
            collapsable: true,
            link: '/src/codeSamples/md/EvmToEver/workFlow.md',
            items: [
              {
                text: 'Transferring Tokens',
                collapsable: true,
                items: [
                  {
                    text: 'EVM Gas Token',
                    collapsable: true,
                    link: '/src/codeSamples/md/EvmToEver/transfers/transferEvmNativeCoin.md',
                  },
                  {
                    text: 'Native Token',
                    collapsable: true,
                    link: '/src/codeSamples/md/EvmToEver/transfers/transferEvmMultiVaultToken.md',
                  },
                  {
                    text: 'Alien Token',
                    collapsable: true,
                    link: '/src/codeSamples/md/EvmToEver/transfers/transferEvmAlienToken.md',
                  },
                ],
              },
              {
                text: 'Deploying Events',
                collapsable: true,
                link: '/src/codeSamples/md/EvmToEver/DeployEvents/Toc.md',
                items: [
                  {
                    text: 'Native Event',
                    collapsable: true,
                    link: '/src/codeSamples/md/EvmToEver/DeployEvents/deployNativeEvent.md',
                  },
                  {
                    text: 'Alien Event',
                    collapsable: true,
                    link: '/src/codeSamples/md/EvmToEver/DeployEvents/deployAlienEvent.md',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: 'Links',
        collapsable: true,
        link: '/docs/addresses.md',
      },
      {
        text: 'FAQ',
        collapsable: true,
        link: '/docs/FAQ.md',
      },
    ],

    socialLinks: [{ icon: 'github', link: GITHUB_URL }],
  },

  esbuild: {
    target: ['chrome89', 'edge89', 'firefox79', 'safari14.1'],
  },
};
