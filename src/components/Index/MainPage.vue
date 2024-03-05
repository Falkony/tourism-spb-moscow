<script setup lang="ts">
import BaseTypography from '../common/BaseTypography.vue';
</script>

<template>
    <section class="header-section flex-1">
        <div class="h-10 w-10 rounded-full bg-orange-100 z-20">
            <div class="contacts">
                <BaseTypography
                    text="test"
                    color="#fff"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.header-section {
    background-image: url('../../assets/images/bg-header.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.contacts {
    position: absolute;
    top: 170px;
    right: 214px;
}
</style>
