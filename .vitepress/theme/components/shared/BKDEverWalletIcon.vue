<template>
    <svg width="30" height="25" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="300" r="300" fill="url(#paint0_linear_1202_3411)" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M328.773 558L483 404.925L483 117L195.075 117L42 271.35L328.65 271.35L328.773 558Z" fill="white" />
        <defs>
            <linearGradient id="paint0_linear_1202_3411" x1="600" y1="-3.28699e-05" x2="54.5601" y2="541.13"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF6922" />
                <stop offset="1" stop-color="#6347F5" />
            </linearGradient>
        </defs>
    </svg>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BKDEverscaleIcon',
    props: {
        size: {
            type: Number,
            default: 24,
        },
    },
});
</script>
