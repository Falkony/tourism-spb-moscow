<script setup lang="ts"></script>

<template>
    <div class="flex flex-col gap-y-4 items-center">
        <div class="relative w-full mb-[60px]">
            <div class="bridge-layout" />

            <img
                src="@/assets/images/bridge.png"
                class="bridge"
            />
        </div>

        <img
            src="@/assets/images/veles.png"
            class="w-[100px]"
        />
    </div>
</template>

<style scoped>
.bridge-layout {
    display: block;
    position: absolute;
    bottom: -50px;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, var(--primary-color) 50%);
    z-index: -1;
}

.bridge {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
