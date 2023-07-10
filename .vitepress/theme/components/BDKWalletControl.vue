<template>
  <div class="walletControl">
    <button class="flexButton" v-if="connected" @click="changeAccountWallet">Change
      <EverscaleIcon class="ESSVG" />
    </button>
    <button v-if="connected" class="disconnectBtn" @click="disconnectWallet">
      <DisconnectIcon :size="16" />
    </button>
    <button class="flexButton" v-else @click="requestPermissions">
      Connect
      <EverscaleIcon class="ESSVG" />
    </button>
  </div>
  <div class="walletControl">
    <button class="flexButton" v-if="MetaMaskConnected">
      Connected
      <MetaMaskIcon />
    </button>
    <button v-if="MetaMaskConnected" class="disconnectBtn" @click="disconnectMetamask">
      <DisconnectIcon :size="16" />
    </button>
    <button class="flexButton" v-else @click="requestMetaMaskPermissions">
      Connect
      <MetaMaskIcon />
    </button>
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import { defineComponent, ref, onMounted } from 'vue';

import DisconnectIcon from './shared/BDKDisconnectIcon.vue';
import EverscaleIcon from './shared/BKDEverWalletIcon.vue'
import MetaMaskIcon from './shared/BKDMetaMaskIcon.vue'
import { useProvider } from './../../../src/providers/useProvider';
import { useEvmProvider } from './../../../src/providers/useEvmProvider';
export default defineComponent({
  name: 'WalletControl',
  components: {
    DisconnectIcon,
    EverscaleIcon,
    MetaMaskIcon
  },
  setup() {
    window.process = process;
    const flufel = window.process;
    const { provider, connectToWallet, changeAccount, disconnect } = useProvider();
    const { connectToMetamaskWallet,
      getAccounts, MetaMaskProvider, HandleAccountChange } = useEvmProvider()
    const connected = ref(false);
    const MetaMaskConnected = ref(false);
    const requestMetaMaskPermissions = async () => {
      await connectToMetamaskWallet();
      MetaMaskConnected.value = true;
    };
    const disconnectMetamask = async () => {
      MetaMaskConnected.value = false;
    };
    onMounted(async () => {
      MetaMaskConnected.value = ((await getAccounts()), (await getAccounts())!.length > 0);
      MetaMaskProvider().on('accountsChanged', async () => { MetaMaskConnected.value = await HandleAccountChange() });
      const subscription = await provider.subscribe('permissionsChanged');
      subscription.on('data', (permissions: any) => {
        connected.value = !!permissions.permissions.accountInteraction;
      });

      const providerState = await provider.getProviderState();

      connected.value = !!providerState.permissions.accountInteraction;
    });

    const requestPermissions = async () => {
      await connectToWallet();

      connected.value = true;
    };

    const disconnectWallet = async () => {
      await disconnect();
      connected.value = false;
    };

    const changeAccountWallet = async () => {
      await changeAccount();
    };

    return { flufel, process, connected, requestPermissions, disconnectWallet, changeAccountWallet, requestMetaMaskPermissions, disconnectMetamask, MetaMaskConnected };
  },
});
</script>

<style scoped>
.walletControl {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  margin-left: 1rem;
  transition: color 0.5s;
}

.walletControl button {
  background-color: var(--vp-c-bg-mute);
  transition: background-color 0.1s;
  padding: 5px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 0.9em;
  font-weight: 600;
  margin-right: 0.5rem;
}

.disconnectBtn {
  padding: 5px 8px !important;
}

.walletControl button:hover,
.walletControl button:focus {
  outline: none;
  color: var(--vp-c-brand);
  transition: color 0.25s;
  background-color: rgba(var(--vp-c-bg-mute), 0.8);
}

.svg-icon {
  /* viewbox: 0 0 5 5; */
  /* width: 20%;
  height: 90%; */
  background-size: contain;
  background-repeat: no-repeat;
}

.flexButton {
  display: flex;
  align-items: center;
}

.ESSVG {
  margin: 0 0 0 2px;
}
</style>

