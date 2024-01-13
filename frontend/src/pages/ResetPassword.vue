<script setup>
import {ref} from 'vue';
import {authUserStore} from "../stores/auth.js";
import {useRoute} from "vue-router";
import FormInput from "../components/FormInput.vue";
const authStore = authUserStore();
const router = useRoute();
const form = ref({
    token:router.params.token,
    email:router.query.email,
    password:'',
    password_confirmation:'',
})

</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                Flowbite
            </a>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="authStore.resetPassword(form)">
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
                            :label="'Password Confirmation'"
                            :type="'password'"
                            :placeholder="'*********'"
                            :error="authStore.errors?.password_confirmation"
                        />
                        <button type="submit" class="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
