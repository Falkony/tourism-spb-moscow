<script setup lang="ts">
import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapDefaultMarker,
} from 'vue-yandex-maps';
import type { LngLat } from '@yandex/ymaps3-types';
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
        <yandex-map-default-features-layer />

        <YandexMapDefaultMarker
            :settings="{
                coordinates: [30.335697, 59.935025] as LngLat,
            }"
        />
    </yandex-map>
</template>

<style scoped>
.pin {
    cursor: pointer;
    max-width: unset;
    width: 75px;
    height: 75px;
    border-radius: 50%;
}
</style>
