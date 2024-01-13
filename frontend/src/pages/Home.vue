<script setup>
import {onMounted} from "vue";
import {authUserStore} from "../stores/auth.js";
const authStore = authUserStore();
onMounted(async ()=>{
    await authStore.getUser();
})
</script>

<template>
    <div v-if="authStore.user">

        <h1>{{authStore?.user.name}}</h1>
        <h1>{{authStore?.user.email}}</h1>
    </div>
    <div v-else>
        <h1>Go Login</h1>
    </div>
</template>

<style scoped>

</style>
