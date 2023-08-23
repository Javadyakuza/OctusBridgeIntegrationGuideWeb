import vue from '@vitejs/plugin-vue';
import wasm from 'vite-plugin-wasm';
const HELP_URL = 'https://t.me/everdev';
const FEEDBACK_URL = 'https://t.me/broxus_chat';
const GITHUB_URL = 'https://github.com/Javadyakuza/OctusBridgeIntegrationGuideWeb.git';
const NAV = [
  {
    text: 'Broxus Docs',
    items: [
      { text: 'Home', link: 'https://docs.broxus.com' },
      { text: 'Inpage Provider', link: 'https://provider-docs.broxus.com/' },
      { text: 'Locklift', link: 'https://docs.locklift.io/' },
      { text: 'OctusBridge Integration', link: '/' },
      {
        text: 'TIP-3 Api Reference',
        link: 'https://tip3-api-reference.netlify.app/',
      },
    ],
  },
  { text: 'Feedback', link: FEEDBACK_URL },
  { text: 'Community', link: HELP_URL },
];

module.exports = {
  base: '/',
  title: 'Octus Bridge Integration',
  plugins: [vue(), wasm()],

  themeConfig: {
    logo: './Union.svg',
    siteTitle: false,
    search: {
      provider: 'local',
    },
    nav: NAV,
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
        text: 'Open API',
        collapsable: true,
        link: '/docs/api/ToC.md',
        items: [
          {
            text: 'Bridge API',
            collapsable: true,
            link: '/docs/api/bridge/ToC.md',
            items: [
              {
                text: 'Relayers',
                collapsable: true,
                link: '/docs/api/bridge/relays.md',
              },
              {
                text: 'DAO',
                collapsable: true,
                link: '/docs/api/bridge/dao.md',
              },
              {
                text: 'Staking',
                collapsable: true,
                link: '/docs/api/bridge/staking.md',
              },
              {
                text: 'Transfer',
                collapsable: true,
                link: '/docs/api/bridge/transfers.md',
              },
            ],
          },
          {
            text: 'Dao API',
            collapsable: true,
            link: '/docs/api/dao/ToC.md',
            items: [
              {
                text: 'Proposal',
                collapsable: true,
                link: '/docs/api/dao/proposals.md',
              },
              {
                text: 'Voters',
                collapsable: true,
                link: '/docs/api/dao/voters.md',
              },
              {
                text: 'Votes',
                collapsable: true,
                link: '/docs/api/dao/votes.md',
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
