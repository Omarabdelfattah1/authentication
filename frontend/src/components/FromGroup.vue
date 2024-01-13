<template>
    <div>
        <label for="{{name}}" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ title }}</label>
        <input v-model="model" type="{{type}}" name="{{name}}" id="{{name}}" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="{{placeholder}}" >
        <Error v-if="error">
            {{error[0]}}
        </Error>
    </div>
</template>
<script setup>
import Error from "./Error.vue";
const title = '';
const name = '';
const placeholder = '';
const error = [];
const model = '';
const type = '';

</script>
