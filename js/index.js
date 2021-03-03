Vue.createApp({
    data() {
        return {
            input: null,
            output: "null",

        }
    },
    methods: {
        Add() {
            this.output = this.input
        }
    },
    computed: {
        Upper() {
            return this.output.toUpperCase()
        },
        Lower() {
            return this.output.toLowerCase()
        }
    }
}).mount("#app")