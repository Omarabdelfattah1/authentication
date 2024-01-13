<script setup>
import {ref} from 'vue';
import {authUserStore} from "../stores/auth.js";
import AuthLayout from "../layouts/AuthLayout.vue";
import FormInput from "../components/FormInput.vue";
import Success from "../components/Success.vue";
const authStore = authUserStore();
const form = ref({
    email:''
})

</script>

<template>

    <AuthLayout title="Forgot your password?">
        <form class="space-y-4 md:space-y-6" @submit.prevent="authStore.forgotPassword(form)">
            <Success v-if="authStore.status" :message="authStore.status"/>
            <FormInput
                v-model="form.email"
                :name="'email'"
                :label="'Your email'"
                :type="'email'"
                :placeholder="'name@company.com'"
                :error="authStore.errors?.email"
            />
            <button type="submit" class="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Remember your password? <router-link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</router-link>
            </p>
        </form>
    </AuthLayout>
</template>

<style scoped>

</style>
