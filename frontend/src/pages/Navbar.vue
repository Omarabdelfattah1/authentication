<script setup>
import NavItem from "./NavItem.vue";
import {authUserStore} from "../stores/auth.js";
const authStore = authUserStore();
</script>

<template>
    <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <router-link to="/" class="flex items-center">
                <img src="https://www.svgrepo.com/show/499962/music.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Landwind</span>
            </router-link>
            <div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li >
                        <NavItem :path="'/home'" :title="'Home'"/>
                    </li>
                    <template v-if="!authStore.user">
                        <li >
                            <NavItem :path="'/login'" :title="'Login'"/>
                        </li>
                        <li >
                            <NavItem :path="'/register'" :title="'Register'"/>
                        </li>
                    </template>
                    <template v-else>
                        <li>
                            <button @click="authStore.logout()"
                                    class='block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white'>
                                Logout
                            </button>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>
