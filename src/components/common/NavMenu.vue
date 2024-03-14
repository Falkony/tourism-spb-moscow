<template>
    <nav class="horizontal-menu">
        <ul>
            <li><router-link to="/about">О компании</router-link></li>
            <li><router-link to="/tours">Туры</router-link></li>
            <li><router-link to="/excursions">Экскурсии</router-link></li>
            <li><router-link to="/contacts">Контакты</router-link></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
</script>

<style scoped>
.horizontal-menu {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
}

.horizontal-menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
}

.horizontal-menu li {
    margin: 0 10px;
}

.horizontal-menu a {
    text-decoration: none;
    color: var(--bg-color);
}

.horizontal-menu a:hover {
    color: var(--active-color);
}

.horizontal-menu a:active {
    color: var(--active-color);
}
</style>
