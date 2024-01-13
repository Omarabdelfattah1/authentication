<script setup>
import {ref} from 'vue';
import {authUserStore} from "../stores/auth.js";
import AuthLayout from "../layouts/AuthLayout.vue";
import Error from "../components/Error.vue";
import FormInput from "../components/FormInput.vue";
const authStore = authUserStore();
const form = ref({
    email:'',
    password:''
})

</script>

<template>
    <AuthLayout title="Sign in to your account">
        <form class="space-y-4 md:space-y-6" @submit.prevent="authStore.handleLogin(form)">
            <FormInput
                v-model="form.email"
                :name="'email'"
                :label="'Your email'"
                :type="'email'"
                :placeholder="'name@company.com'"
                :error="authStore.errors?.email"
                />
            <FormInput
                v-model="form.password"
                :name="'password'"
                :label="'Your password'"
                :type="'password'"
                :placeholder="'*********'"
                :error="authStore.errors?.password"
                />
            <div class="flex items-center justify-between">
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                </div>
                <router-link to="/forgot-password" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</router-link>
            </div>
            <button type="submit" class="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <router-link to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</router-link>
            </p>
        </form>
    </AuthLayout>
</template>

<style scoped>

</style>
