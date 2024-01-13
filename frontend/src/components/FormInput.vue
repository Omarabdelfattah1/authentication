<template>
    <div>
        <label v-if="label" :for="name" :class="labelClass">{{ label }}</label>
        <input
            :type="type"
            :id="name"
            :name="name"
            :class="inputClass"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="placeholder"
        />
        <div v-if="error" class="text-red-500">{{ error[0] }}</div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        label: String,
        type: {
            type: String,
            default: 'text',
        },
        modelValue: [String, Number],
        placeholder: String,
        error: String,
    },
    computed: {
        labelClass() {
            return 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
        },
        inputClass() {
            return 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
        },
    },
    methods: {
        updateValue(newValue) {
            console.log(newValue)
            this.$emit('update:value', newValue);
        },
    },
};
</script>

<style scoped>
/* You can add component-specific styles here */
</style>
