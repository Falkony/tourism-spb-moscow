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
const { excursions } = toRefs(globalStore);
</script>

<template>
    <div class="mt-[40px] px-10">
        <BaseReturn :text="t('excursion.title')" />

        <div class="list">
            <SlideItem
                v-for="excursion in excursions?.data"
                :key="excursion.id"
                :id="excursion.id"
                :title="excursion.attributes.title"
                :text="excursion.attributes.subtitle"
                :url="excursion.attributes.img.data?.attributes.url"
                :price="excursion.attributes.summForGroup"
                @click="
                    router.push({
                        name: 'excursion',
                        params: {
                            id: excursion.id,
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
