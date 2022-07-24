
<template>
    <Topbar></Topbar>
    <Navbar></Navbar>
    <div class="container" id="body">
        <router-view></router-view>
        <!-- <h1>Welcome to thid dashboard</h1> -->
    </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navbar from './components/Navbar.vue'
import Topbar from './components/Topbar.vue'

</script>

<style scoped>
.container {
    margin-top: 1rem;
    margin-left: 15rem;
    transition: all 400ms ease;
}
</style>
