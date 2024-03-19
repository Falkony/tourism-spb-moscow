<script setup lang="ts">
import { YandexMap, YandexMapDefaultSchemeLayer } from 'vue-yandex-maps';
</script>

<template>
    <yandex-map
        :settings="{
            location: {
                center: [30.335708, 59.935023],
                zoom: 17,
            },
            showScaleInCopyrights: true,
        }"
        height="600px"
    >
        <yandex-map-default-scheme-layer />
    </yandex-map>
</template>
