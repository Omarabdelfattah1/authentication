<template>
        <router-link :to="path"

                     :class="{
            'block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white':isActive,
                     'block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700':!isActive}"
        >{{ title }}</router-link>
</template>
<script setup>

import { ref, computed, defineProps } from "vue";
import { useRoute } from "vue-router";

const props = defineProps(["path", "title"]);

const route = useRoute();
const isActive = computed(() => route.path === props.path);
</script>
