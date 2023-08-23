<template>
    <div id="app" :class="show">
        <font-awesome-icon @click="confirmCopy" icon='fa-regular fa-copy' />
    </div>
    <div id="app" :class="hide">
        <font-awesome-icon @click="confirmCopy" icon='fa-solid fa-check' />
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {

        const show = ref("showIcon");
        const hide = ref("hideIcon");

        function confirmCopy(e) {
            show.value = "hideIcon";
            hide.value = "showIcon";
            setTimeout(() => {
                show.value = "showIcon";
                hide.value = "hideIcon";
            }, 1000);
        }
        return { confirmCopy, show, hide }
    },
    name: 'App'
}
</script>

<style>
.showIcon {
    display: inline-block;

}

.hideIcon {
    display: none;

}
</style>