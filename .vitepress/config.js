import vue from '@vitejs/plugin-vue';

const HELP_URL = 'https://t.me/everdev';
const FEEDBACK_URL = 'mailto:javad.solidity.dev@gmail.com';
const GITHUB_URL = 'https://github.com/Javadyakuza/OctusBridgeIntegrationGuideWeb.git';

module.exports = {
  title: 'OctusBridge',
  base: '/',
  description: 'OctusBridgeInegrationGuide',
  resolve: {
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
      util: 'util',
    },
  },
  plugins: [vue()],

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
                text: 'Ever Native Coin',
                collapsable: false,
                link: '/docs/Visual-Guide/EVER-TO-EVM/1.md',
              },
              {
                text: 'Ever Native Token',
                collapsable: false,
                link: '/docs/Visual-Guide/EVER-TO-EVM/2.md',
              },
              {
                text: 'Ever Alien Token',
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
                text: 'Evm Native Coin',
                collapsable: false,
                link: '/docs/Visual-Guide/EVM-TO-EVER/1.md',
              },
              {
                text: 'Evm MultiVault Token',
                collapsable: false,
                link: '/docs/Visual-Guide/EVM-TO-EVER/2.md',
              },
              {
                text: 'Evm Alien Token',
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
            text: 'Credit Backend',
            collapsable: false,
            link: '/docs/Concepts/CreditBackend.md',
          },
          { text: 'Payloads', collapsable: false, link: '/docs/Concepts/Payloads.md' },
        ],
      },

      {
        text: 'Code Samples',
        collapsable: true,
        items: [
          {
            text: 'EVER to EVM',
            collapsable: true,
            link: '/src/webInteraction/md/workFlow.md',
            items: [
              {
                text: 'Building Payloads',
                collapsable: true,
                link: '/src/webInteraction/md/buildingPayloads/BuildingPayloads.md',
              },
              {
                text: 'Transferring Tokens',
                collapsable: true,
                items: [
                  {
                    text: 'Ever Native Coin',
                    collapsable: true,
                    link: '/docs/FAQ.md',
                  },
                  {
                    text: 'Ever Native Token',
                    collapsable: true,
                    link: '/docs/FAQ.md',
                  },
                  {
                    text: 'Ever Alien Token',
                    collapsable: true,
                    link: '/docs/FAQ.md',
                  },
                ],
              },
              {
                text: 'Evm Asset Releasing',
                collapsable: true,
                items: [
                  {
                    text: 'Evm MultiVault Token',
                    collapsable: true,
                    link: '/docs/FAQ.md',
                  },
                  {
                    text: 'Evm Native and Alien Token ',
                    collapsable: true,
                    link: '/docs/FAQ.md',
                  },
                ],
              },
            ],
          },
          {
            text: 'EVM to EVER',
            collapsable: true,
            items: [
              {
                text: 'Transferring Tokens',
                collapsable: true,
                items: [
                  {
                    text: 'Evm Native Coin',
                    collapsable: true,
                    link: '/docs/FAQ.md',
                  },
                  {
                    text: 'Evm MultiVault Token',
                    collapsable: true,
                    link: '/docs/FAQ.md',
                  },
                  {
                    text: 'Evm Alien Token',
                    collapsable: true,
                    link: '/docs/FAQ.md',
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
                    link: '/docs/FAQ.md',
                  },
                  {
                    text: 'Alien Event',
                    collapsable: true,
                    link: '/docs/FAQ.md',
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
