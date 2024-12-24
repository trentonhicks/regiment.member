<script setup lang="ts">
import type { Component } from 'vue';

type ButtonInputProps = {
    prependIcon?: Component;
    appendIcon?: Component;
    block?: boolean;
    text?: string;
};

const props = defineProps<ButtonInputProps>();
</script>

<template>
    <button
        type="button"
        :class="[
            props.block ? 'w-full flex justify-center' : 'inline-flex',
            'items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        ]"
    >
        <template v-if="props.prependIcon">
            <component :is="props.prependIcon" class="-ml-0.5 size-5" aria-hidden="true" />
        </template>
        <span>
            <template v-if="props.text">
                {{ props.text }}
            </template>
            <template v-else>
                <slot />
            </template>
        </span>
        <template v-if="props.appendIcon">
            <component :is="props.appendIcon" class="-mr-0.5 size-5" aria-hidden="true" />
        </template>
    </button>
</template>