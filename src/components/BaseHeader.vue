<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { toRefs, ref } from 'vue';
import { useGlobalStore } from '@/stores/global';
import LocaleSwitcher from '@/components/common/LocaleSwitcher.vue';
import NavMenu from '@/components/common/NavMenu.vue';

const globalStore = useGlobalStore();
const { isMainPage } = toRefs(globalStore);

const { width } = useWindowSize();

const toggle = ref<boolean>(false);

const toggleMenu = () => {
    toggle.value = !toggle.value;
    const body = document.querySelector('body');
    if (body) {
        if (toggle.value) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }
};
</script>

<template>
    <header class="root">
        <nav
            class="header_container"
            :class="{
                menu_active: toggle,
                '!bg-[var(--base-white)] border-b': !isMainPage,
            }"
        >
            <router-link to="/">
                <div
                    v-if="width < 1024"
                    class="logo_mobile"
                >
                    <img src="@/assets/images/mobile/logo_primary_mobile.png" />
                </div>

                <div
                    v-else
                    class="logo_desktop"
                >
                    <img src="@/assets/images/logo_btm.png" />
                </div>
                <!-- </div> -->
            </router-link>

            <div
                v-if="width < 1024"
                class="burger_menu"
            >
                <label class="hamburger-menu">
                    <input
                        v-model="toggle"
                        type="checkbox"
                        @click="toggleMenu"
                    />
                </label>
            </div>

            <div
                class="flex w-full pl-10"
                v-else
            >
                <NavMenu />

                <LocaleSwitcher
                    class="ml-auto"
                    color="var(--black-color)"
                />
            </div>
        </nav>

        <menu
            class="menu sidebar"
            :class="{
                '!bg-[var(--base-white)]': toggle,
                active: toggle,
            }"
        >
            <NavMenu @close="toggleMenu" />
        </menu>
    </header>
</template>

<style scoped>
.root {
    @apply absolute top-0 left-0 z-20 w-full h-[100px] l:h-[183px];
}

.header_container {
    @apply bg-[var(--bg-color)] flex flex-row items-center px-4 py-[33px] l:py-5 xxl:py-[33px] l:px-[140px];
}

.burger_menu {
    cursor: pointer;

    @apply pr-7 ml-auto;
}

.menu {
    background-color: var(--grey-color);

    @apply px-8 py-10;
}

.menu_active {
    @apply border-b;
}

.overlay {
    @apply fixed inset-0 bg-black opacity-60 z-[-1];
}
</style>
