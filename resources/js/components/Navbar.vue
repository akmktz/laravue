<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
<!--        <router-link :to="{ name: 'home' }" class="navbar-brand">Home</router-link>-->
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
                <!--            <router-link :to="{ name: 'test' }" class="nav-link">Test</router-link>-->
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        data: () => ({}),
    }
</script>

<style scoped>
</style>
