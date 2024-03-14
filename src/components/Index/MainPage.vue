<script setup lang="ts">
import BaseTypography from '../common/BaseTypography.vue';
import BaseButton from '../common/BaseButton.vue';
</script>

<template>
    <section class="header-section flex-1">
        <div class="contacts flex"></div>
    </section>
</template>

<style scoped>
.header-section {
    background-image: url('../../assets/images/bg-header.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
}

.contacts {
    margin-top: calc(100vh - var(--header-height));
}
</style>
