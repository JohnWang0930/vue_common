<template>
    <div>
        <span>这是一个测试页面 {{str}}</span><br>
        <span>当前环境:{{env}}</span><br>
        <span @click="changeSiteName">站点名称{{siteName}}</span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                str: 'helloWorld',
                env: process.env.NODE_ENV
            }
        },
        computed: {
            siteName() {
                return this.$store.state.site.siteName
            }
        },
        methods: {
            changeSiteName() {
                this.$store.commit('site/setSiteName', {name: '王真真帅'})
            }
        }
    }
</script>

<style src="./main.scss" lang="scss"></style>