import vue from '@vitejs/plugin-vue';

const HELP_URL = 'https://t.me/everdev';
const FEEDBACK_URL = 'n';
const GITHUB_URL = 'https://github.com/Javadyakuza/OctusBridgeIntegrationGuideWeb.git';

module.exports = {
  title: 'OctusBridge',
  base: '/',
  description: 'OctusBridgeInegrationGuide',

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
                text: 'Transfer Everscale Native Coin EVER',
                collapsable: false,
                link: '/docs/Visual-Guide/EVER-TO-EVM/1.md',
              },
              {
                text: 'Transfer Everscale Native Token BRIDGE',
                collapsable: false,
                link: '/docs/Visual-Guide/EVER-TO-EVM/2.md',
              },
              {
                text: 'Transfer Everscale Alien Token USDT',
                collapsable: false,
                link: '/docs/Visual-Guide/EVER-TO-EVM/1.md',
              },
            ],
          },
          {
            text: 'EVM to EVER',
            collapsable: false,
            items: [
              {
                text: 'Transfer Evm Native Coin BNB',
                collapsable: false,
                link: '/docs/Visual-Guide/EVM-TO-EVER/1.md',
              },
              {
                text: 'Transfer Evm Alien Token USDT',
                collapsable: false,
                link: '/docs/Visual-Guide/EVM-TO-EVER/2.md',
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
          { text: 'Credit Backend', collapsable: false, link: '/docs/Concepts/CreditBackend.md' },
          { text: 'Payloads', collapsable: false, link: '/docs/Concepts/Payloads.md' },
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
