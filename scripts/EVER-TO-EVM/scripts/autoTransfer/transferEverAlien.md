<!-- <button style="background-color: red;" onclick="myFunction()">Click me</button>

<script src="./transferEverAlienToken.ts"></script> -->
<template>
  <div class="walletControl">
    <button v-if="connected" @click="changeAccountWallet">Change Account</button>
    <button v-if="connected" class="disconnectBtn" @click="disconnectWallet">
      <DisconnectIcon :size="16" />
    </button>
    <button v-else @click="requestPermissions">Connect EverWallet</button>
  </div>

  <div class="walletControl">
    <button v-if="MetaMaskConnected">MetaMask Connected</button>
    <button v-if="MetaMaskConnected" class="disconnectBtn" @click="disconnectMetamask">
      <DisconnectIcon :size="16" />
    </button>
    <button v-else @click="requestMetaMaskPermissions">Connect MetaMask</button>
  </div>
</template>

# ksrugb wrgouwrevoub
