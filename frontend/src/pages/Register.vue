<script setup>
import {ref} from 'vue';
import {authUserStore} from "../stores/auth.js";
import AuthLayout from "../layouts/AuthLayout.vue";
import FormInput from "../components/FormInput.vue";
const authStore = authUserStore();
const form = ref({
    name:'',
    email:'',
    password:'',
    password_confirmation:''
})

</script>

<template>
    <AuthLayout title="Sign up">
        <form class="space-y-4 md:space-y-6" @submit.prevent="authStore.handleRegister(form)">
            <FormInput
                v-model="form.name"
                :name="'name'"
                :label="'Your name'"
                :type="'name'"
                :placeholder="'John Doe'"
                :error="authStore.errors?.name"
            />
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
            <FormInput
                v-model="form.password_confirmation"
                :name="'password_confirmation'"
                :label="'Your password Confirmation'"
                :type="'password'"
                :placeholder="'*********'"
                :error="authStore.errors?.password_confirmation"
            />
            <button type="submit" class="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <router-link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</router-link>
            </p>
        </form>
    </AuthLayout>
</template>

<style scoped>

</style>
