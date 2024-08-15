<script setup lang="ts">
import { toRefs, onMounted, ref, nextTick } from 'vue';
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

const widgetDataId = ref<string>(
    'YTo0OntzOjI6IklEIjtzOjQ6IjMxNTMiO3M6NDoiVVNFUiI7czoyMDoiYVc1bWIwQnlkbTB0YzNCaUxuSjEiO3M6NjoiUkFORE9NIjtzOjg6Ijd6cjlxY3ZsIjtzOjE1OiJJTkZPRkxPVC1BUElLRVkiO3M6NDA6ImJmNWVlNWU0ZmJiNTJhMzIzZTQyOWMxODU0ZmJlZTVhODY4NWY1ZWQiO30='
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

    await getCategory(id);
});
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

        <!-- ToDo: переделать -->
        <div v-if="id === 7">
            <div class="tabs">
                <div class="tab">Водные круизы</div>
                <div class="tab">РЖД круизы</div>
            </div>

            <div
                class="infoflotWidget"
                :data-id="widgetDataId"
                :data-index="1"
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

iframe {
    width: 1100px !important;
}
</style>
