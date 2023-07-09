vue
<template>
    <label class="everpay-checkbox">
        <input type="checkbox" :checked="checked" @change="toggleCheckbox">
        <span class="checkmark"></span>
        <slot></slot>
    </label>
</template>
<script>
export default {
    name: 'EverPayCheckbox',
    props: {
        checked: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleCheckbox() {
            this.$emit('input', !this.checked);
        }
    }
}
</script>
<style scoped>
.everpay-checkbox {
    display: inline-block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
}

.everpay-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 3px;
}

.everpay-checkbox:hover input~.checkmark {
    background-color: #ccc;
}

.everpay-checkbox input:checked~.checkmark {
    background-color: #2196F3;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.everpay-checkbox input:checked~.checkmark:after {
    display: block;
}

.everpay-checkbox .checkmark:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}</style>