<script setup lang="ts">
import { toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useGlobalStore } from '@/stores/global';
import SlideItem from '@/components/common/SlideItem.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';

const router = useRouter();
const { t } = useI18n();

const globalStore = useGlobalStore();
const { categories } = toRefs(globalStore);
const { getCategories } = globalStore;

getCategories();
</script>

<template>
    <div class="mt-[150px] mb-[104px] px-10">
        <BaseReturn :text="t('tours.title')" />

        <div class="list">
            <SlideItem
                v-for="category in categories?.data"
                :key="category.id"
                :id="category.id"
                :title="category.attributes.title"
                :text="category.attributes.subtitle"
                :url="category.attributes.Cover.data?.attributes.url"
                @click="
                    router.push({
                        name: 'category',
                        params: {
                            id: category.id,
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
