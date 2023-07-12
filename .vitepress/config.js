import vue from '@vitejs/plugin-vue';
import wasm from 'vite-plugin-wasm';
const HELP_URL = 'https://t.me/everdev';
const FEEDBACK_URL = 'mailto:javad.solidity.dev@gmail.com';
const GITHUB_URL = 'https://github.com/Javadyakuza/OctusBridgeIntegrationGuideWeb.git';

module.exports = {
  title: 'OctusBridge',
  base: '/',
  description: 'OctusBridgeIntegrationGuide',
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
            text: 'EVER to EVM',
            collapsable: false,
            link: '/docs/EVER-to-EVM.md',
          },
          {
            text: 'EVM to EVER',
            collapsable: false,
            link: '/docs/EVM-to-EVER.md',
          },
        ],
      },
      {
        text: 'Work-Flow-Visuals',
        collapsable: false,
        items: [
          {
            text: 'EVER to EVM',
            collapsable: false,
            items: [
              {
                text: 'Ever',
                collapsable: false,
                link: '/docs/Visual-Guide/EVER-TO-EVM/1.md',
              },
              {
                text: 'Native Token',
                collapsable: false,
                link: '/docs/Visual-Guide/EVER-TO-EVM/2.md',
              },
              {
                text: 'Alien Token',
                collapsable: false,
                link: '/docs/Visual-Guide/EVER-TO-EVM/3.md',
              },
            ],
          },
          {
            text: 'EVM to EVER',
            collapsable: false,
            items: [
              {
                text: 'Evm Gas Token',
                collapsable: false,
                link: '/docs/Visual-Guide/EVM-TO-EVER/1.md',
              },
              {
                text: 'Native Token',
                collapsable: false,
                link: '/docs/Visual-Guide/EVM-TO-EVER/2.md',
              },
              {
                text: 'Alien Token',
                collapsable: false,
                link: '/docs/Visual-Guide/EVM-TO-EVER/3.md',
              },
            ],
          },
        ],
      },
      {
        text: 'Concepts',
        collapsable: true,
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
            link: '/src/webInteraction/md/prerequisites.md',
          },
          {
            text: 'EVER to EVM',
            collapsable: true,
            link: '/src/webInteraction/md/EverToEvm/workFlow.md',
            items: [
              {
                text: 'Building Payloads',
                collapsable: true,
                link: '/src/webInteraction/md/EverToEvm/buildingPayloads/BuildingPayloads.md',
              },
              {
                text: 'Transferring Tokens',
                collapsable: true,
                items: [
                  {
                    text: 'EVER',
                    collapsable: true,
                    link: '/src/webInteraction/md/EverToEvm/transfers/transferEverNativeCoin.md',
                  },
                  {
                    text: 'Native Token',
                    collapsable: true,
                    link: '/src/webInteraction/md/EverToEvm/transfers/transferEverNativeToken.md',
                  },
                  {
                    text: 'Alien Token',
                    collapsable: true,
                    link: '/src/webInteraction/md/EverToEvm/transfers/transferEverAlienToken.md',
                  },
                  {
                    text: 'Evm Gas Token',
                    collapsable: true,
                    link: '/src/webInteraction/md/EverToEvm/transfers/transferEvmNativeCoin.md',
                  },
                ],
              },
              {
                text: 'Evm Asset Releasing',
                collapsable: true,
                items: [
                  {
                    text: 'Native Token',
                    collapsable: true,
                    link: '/src/webInteraction/md/EverToEvm/saveWithdraw/saveWithdrawNative.md',
                  },
                  {
                    text: 'Evm Gas and Alien Token ',
                    collapsable: true,
                    link: '/src/webInteraction/md/EverToEvm/saveWithdraw/saveWithdrawAlien.md',
                  },
                ],
              },
            ],
          },
          {
            text: 'EVM to EVER',
            collapsable: true,
            link: '/src/webInteraction/md/EvmToEver/workFlow.md',
            items: [
              {
                text: 'Transferring Tokens',
                collapsable: true,
                items: [
                  {
                    text: 'Evm Gas Token',
                    collapsable: true,
                    link: '/src/webInteraction/md/EvmToEver/transfers/transferEvmNativeCoin.md',
                  },
                  {
                    text: 'Native Token',
                    collapsable: true,
                    link: '/src/webInteraction/md/EvmToEver/transfers/transferEvmMultiVaultToken.md',
                  },
                  {
                    text: 'Alien Token',
                    collapsable: true,
                    link: '/src/webInteraction/md/EvmToEver/transfers/transferEvmAlienToken.md',
                  },
                ],
              },
              {
                text: 'Deploying Events',
                collapsable: true,
                items: [
                  {
                    text: 'Native Event',
                    collapsable: true,
                    link: '/src/webInteraction/md/EvmToEver/DeployEvents/deployNativeEvent.md',
                  },
                  {
                    text: 'Alien Event',
                    collapsable: true,
                    link: '/src/webInteraction/md/EvmToEver/DeployEvents/deployAlienEvent.md',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: 'Addresses',
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
