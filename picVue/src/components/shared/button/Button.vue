<template>
    <button class="button" :class="buttonStyle" @click="deployAction()" :type="type">{{ label }}</button>
</template>

<script>
export default {

    props: {
        type: {
            required: true,
            type: String
        },
        label: {
            required: true,
            type: String
        },
        confirm: Boolean,
        style: String
    },

    methods: {
        deployAction() {
            if(this.confirm){
                if(confirm('Confirma a operação?')) {
                    this.$emit('activateButton');
                }
                return;
            }
            this.$emit('activateButton');
        }
    },

    computed: {
        buttonStyle() {
            if(this.style == 'standard' || !this.style) return 'button-standard'
            if(this.style == 'danger') return 'button-danger'
        }
    }
}

</script>

<style scoped>
    .button {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .button-danger {
        background: firebrick;
        color: white;
    }

    .button-standard {
        background: darkcyan;
        color: white;
    }

</style>
