<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { useGlobalStore } from '@/stores/global';
import SlideItem from '@/components/common/SlideItem.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';

const router = useRouter();

const id = +router.currentRoute.value.params.id;

const globalStore = useGlobalStore();
const { category, isMobile } = globalStore;
const { getCategory } = globalStore;

const selectedTab = ref<number>(0);

const tabs = ['Водные круизы', 'РЖД круизы'];

const widgetDataId = ref(
    'YTo0OntzOjI6IklEIjtzOjQ6IjMxNTMiO3M6NDoiVVNFUiI7czoyMDoiYVc1bWIwQnlkbTB0YzNCaUxuSjEiO3M6NjoiUkFORE9NIjtzOjg6IjI0YmJpMjd2IjtzOjE1OiJJTkZPRkxPVC1BUElLRVkiO3M6NDA6ImJmNWVlNWU0ZmJiNTJhMzIzZTQyOWMxODU0ZmJlZTVhODY4NWY1ZWQiO30='
);

onMounted(async () => {
    if (id === 7) {
        await nextTick();
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = `
        (function(d,w){
            var h=d.getElementsByTagName("script")[0];
            s=d.createElement("script");
            s.src="https://bitrix.infoflot.com/local/templates/infoflot/frontend/js/infoflotIframe.js";
            s.async=true;
            s.onload=function(){
            w.createInfoflotWidget("https://bitrix.infoflot.com/rest/api/search.filter/",{
                key: "${widgetDataId.value}",
                referer: encodeURIComponent(location.href)
            });
            };
            h.parentNode.insertBefore(s,h);
        })(document,window);
        `;
        document.body.appendChild(script);
    }

    await getCategory(id as number);
});
</script>

<template>
    <div class="mt-[130px] l:mt-[155px] mb-[104px] px-10">
        <BaseReturn text="Назад" />

        <div v-if="category?.data.length && id !== 7">
            <div class="list">
                <SlideItem
                    v-for="tour in category.data"
                    :id="tour.id"
                    :key="tour.id"
                    :title="tour.attributes.title"
                    :text="tour.attributes.subtitle"
                    :url="tour.attributes.cover.data?.attributes.url"
                    @click="
                        router.push({
                            name: 'tour',
                            params: { id: tour.id },
                        })
                    "
                />
            </div>
        </div>

        <div v-if="id === 7">
            <div class="tabs max-w-[1200px] mx-auto">
                <BaseTypography
                    v-for="(tab, idx) in tabs"
                    :key="idx"
                    :text="tab"
                    type="subtitle3"
                    class="cursor-pointer"
                    @click="selectedTab = idx"
                    :class="{ active: selectedTab === idx }"
                />
            </div>

            <div v-show="selectedTab === 0">
                <div
                    class="infoflotWidget"
                    :data-id="widgetDataId"
                    :data-index="1"
                />
            </div>

            <div v-show="selectedTab === 1">
                <div class="max-w-[1200px] mx-auto">
                    <BaseTypography
                        text="Страница в разработке"
                        :type="isMobile ? 'subtitle2-m' : 'subtitle2'"
                    />
                </div>
            </div>
        </div>

        <div v-if="!category?.data.length && id !== 7">
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

.tabs {
    display: flex;
    gap: 40px;
    margin-bottom: 20px;
}

.active {
    color: var(--primary-color);
    border-bottom: 3px solid var(--active-color);
}
</style>
