<script setup lang="ts">
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useGlobalStore } from '@/stores/global';
import SlideItem from '@/components/common/SlideItem.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';

const router = useRouter();
const { t } = useI18n();

const globalStore = useGlobalStore();
const { tours } = toRefs(globalStore);
</script>

<template>
    <div class="mt-[40px] px-10">
        <BaseReturn :text="t('tours.title')" />

        <div class="list">
            <SlideItem
                v-for="tour in tours?.data"
                :key="tour.id"
                :title="tour.attributes.title"
                :text="tour.attributes.subtitle"
                :url="tour.attributes.img.data?.attributes.url"
                @click="
                    router.push({
                        name: 'tour',
                        params: {
                            slug: tour.id === 1 ? 'spb' : 'unknown',
                            id: tour.id,
                        },
                    })
                "
            />
        </div>
    </div>
</template>

<style scoped>
.list {
    @apply flex flex-wrap justify-center gap-y-[56px] gap-x-[104px] max-w-[1126px] mx-auto l:grid l:grid-cols-[428px_428px] l:mb-[104px];
}
</style>
