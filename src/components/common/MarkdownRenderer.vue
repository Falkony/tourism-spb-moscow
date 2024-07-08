<template>
    <div v-html="sanitizedHtml"></div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default defineComponent({
    name: 'MarkdownRenderer',
    props: {
        markdown: {
            type: String as PropType<string>,
            required: true,
        },
    },
    setup(props) {
        const sanitizedHtml = computed(() => {
            const rawHtml = marked(props.markdown);
            return DOMPurify.sanitize(rawHtml);
        });

        return {
            sanitizedHtml,
        };
    },
});
</script>
