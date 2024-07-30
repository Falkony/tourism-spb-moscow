<script setup lang="ts">
import { toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useGlobalStore } from '@/stores/global';
import SlideItem from '@/components/common/SlideItem.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';

const { t } = useI18n();
const router = useRouter();

const id = +router.currentRoute.value.params.id;

const globalStore = useGlobalStore();
const { category, isMobile } = toRefs(globalStore);
const { getCategory } = globalStore;

getCategory(id);
</script>

<template>
    <div class="mt-[130px] l:mt-[155px] mb-[104px] px-10">
        <BaseReturn text="Назад" />

        <div
            v-if="category?.data.length"
            class="list"
        >
            <SlideItem
                v-for="tour in category?.data"
                :id="tour.id"
                :key="tour.id"
                :title="tour.attributes.title"
                :text="tour.attributes.subtitle"
                :url="tour.attributes.cover.data?.attributes.url"
                @click="
                    router.push({
                        name: 'tour',
                        params: {
                            id: tour.id,
                        },
                    })
                "
            />
        </div>

        <div v-else>
            <BaseTypography
                text="Страница в разработке"
                :type="isMobile ? 'subtitle2-m' : 'subtitle2'"
            />
        </div>
    </div>
</template>

<style scoped>
.list {
    @apply flex flex-wrap justify-center gap-y-[56px] gap-x-[104px] max-w-[1126px] mx-auto l:grid l:grid-cols-[428px_428px] l:mb-[104px];
}
</style>
