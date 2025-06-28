<template>
    <div class="page">
        <article>
            <slot></slot>
        </article>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.page {
    margin-bottom: 30px;

    .title {
        border-bottom: 1px solid #eaecef;
        padding-bottom: 4px;

    }

    .content {
        font-size: 16px;
        color: #2c3e50;
        font-family: -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        line-height: 1.5;
    }
}
</style>