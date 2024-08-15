<script setup lang="ts">
import { ref, onMounted, defineComponent, computed, nextTick } from 'vue';

const selectedTab = ref(0);

const loadWidgetScript = (widgetDataId: string) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://bitrix.infoflot.com/local/templates/infoflot/frontend/js/infoflotIframe.js';
    script.onload = () => {
        setTimeout(() => {
            // Добавляем задержку
            (window as any).createInfoflotWidget('https://bitrix.infoflot.com/rest/api/search.filter/', {
                key: widgetDataId,
                referer: encodeURIComponent(location.href),
            });
        }, 0);
    };
    document.body.appendChild(script);
};

const WaterTab = defineComponent({
    template: `
    <div class="infoflotWidget" :data-id="widgetDataId" :data-index="1"></div>
  `,
    setup() {
        const widgetDataId = ref(
            'YTo0OntzOjI6IklEIjtzOjQ6IjMxNTMiO3M6NDoiVVNFUiI7czoyMDoiYVc1bWIwQnlkbTB0YzNCaUxuSjEiO3M6NjoiUkFORE9NIjtzOjg6IjI0YmJpMjd2IjtzOjE1OiJJTkZPRkxPVC1BUElLRVkiO3M6NDA6ImJmNWVlNWU0ZmJiNTJhMzIzZTQyOWMxODU0ZmJlZTVhODY4NWY1ZWQiO30='
        );

        onMounted(async () => {
            await nextTick();
            loadWidgetScript(widgetDataId.value);
        });

        return { widgetDataId };
    },
});

const RjdTab = defineComponent({
    template: `
    <div>Страница в разработке</div>
  `,
});

const tabs = computed(() => [
    { name: 'Водные круизы', component: WaterTab },
    { name: 'РЖД круизы', component: RjdTab },
]);
</script>

<template>
    <div>
        <div class="tabs">
            <button
                v-for="(tab, index) in tabs"
                :key="index"
                @click="selectedTab = index"
                :class="{ active: selectedTab === index }"
            >
                {{ tab.name }}
            </button>
        </div>

        <component :is="tabs[selectedTab]?.component" />
    </div>
</template>

<style scoped>
.tabs {
    display: flex;
    gap: 10px;
}

button.active {
    font-weight: bold;
}
</style>
