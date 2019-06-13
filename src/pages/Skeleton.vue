<template>
    <div class="skeleton-wrapper">
        <section class="skeleton-block">
            <!-- eslint-disable vue/max-len -->
            <div>骨架</div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'Skeleton'
}
</script>

<style scoped>
.skeleton-block {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background:#f7f7f7;
}
</style>