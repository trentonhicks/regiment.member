<script setup lang="ts">
import Player from '@vimeo/player';

let player : Player | null;
const video = ref<HTMLDivElement | null>(null);
const props = defineProps<{ src: string }>();
const ready = ref(false);
const emit = defineEmits<{(event: 'completed'): void}>();

onMounted(async () => {
    if (!video.value) {
        return;
    }

    player = new Player(video.value, {
        url: props.src,
        responsive: true,
        controls: true,
        byline: false,
        title: false,
        transparent: false,
    });

    await player.ready();

    ready.value = true;

    player.on('ended', (data) => emit('completed'));
});

onBeforeUnmount(async () => {
    if (player) {
        await player.destroy();
        player = null;
    }
});
</script>

<template>
    <div class="relative aspect-video rounded-md overflow-hidden shadow-lg bg-gray-200 mb-6">
        <div
            ref="video"
            style="position: absolute; top:0; left:0; width:100%; height:100%;"
        />
    </div>
</template>