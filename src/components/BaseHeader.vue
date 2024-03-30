<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { toRefs, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useGlobalStore } from '@/stores/global';
import LocaleSwitcher from './common/LocaleSwitcher.vue';
import NavMenu from './common/NavMenu.vue';

const globalStore = useGlobalStore();
const { width } = useWindowSize();

const { t } = useI18n();
const { isMainPage } = toRefs(globalStore);

const toggle = ref<boolean>(false);

const toggleMenu = () => (toggle.value = !toggle.value);
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
                <div v-if="isMainPage">
                    <div
                        v-if="width < 1024"
                        class="logo_mobile"
                    >
                        <img src="@/assets/images/mobile/logo_white_mobile.png" />
                    </div>

                    <div
                        v-else
                        class="logo_desktop"
                    >
                        <img src="@/assets/images/logo.png" />
                    </div>
                </div>

                <div v-else>
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
                </div>
            </router-link>

            <div
                v-if="width < 1024"
                class="burger_menu"
            >
                <label
                    class="hamburger-menu"
                    :class="{ 'after:bg-[var(--black-color)] before:bg-[var(--black-color)]': !isMainPage }"
                >
                    <input
                        :class="{
                            'hamburger-menu-not-main': !isMainPage,
                        }"
                        type="checkbox"
                        @click="toggleMenu"
                    />
                </label>
            </div>

            <div
                class="flex w-full pl-10"
                v-else
            >
                <NavMenu @close="toggleMenu" />

                <LocaleSwitcher
                    class="ml-auto"
                    :color="isMainPage ? 'var(--base-white)' : 'var(--black-color)'"
                />
            </div>
        </nav>

        <menu
            class="menu sidebar"
            :class="{
                '!bg-[var(--base-white)]': toggle && !isMainPage,
                active: toggle,
            }"
        >
            <NavMenu @close="toggleMenu" />
        </menu>

        <div
            v-if="toggle"
            class="overlay"
            @click="toggleMenu"
        />
    </header>
</template>

<style scoped>
.root {
    @apply absolute top-0 left-0 z-20 w-full h-[183px];
}

.header_container {
    background-color: var(--black-color);

    @apply flex flex-row items-center px-4 py-[76px] l:py-[33px] l:px-[140px] l:bg-[var(--white-color)];
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
    background-color: var(--grey-color);

    @apply border-b;
}

.overlay {
    @apply fixed inset-0 bg-black opacity-60 z-[-1];
}
</style>
