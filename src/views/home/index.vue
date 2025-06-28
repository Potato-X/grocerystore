<template>
  <div class="home-page">
    <div class="header">
      知识杂货铺
    </div>
    <div class="home-body">

      <SideBar></SideBar>
      <div class="home-content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SideBar from './components/sidebar/index.vue';

</script>
<style lang="scss" scoped>
.home-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    height: 48px;
    line-height: 24px;
    border-bottom: 1px solid #eaecef;
    padding: 12px 16px;
    box-sizing: border-box;
    font-weight: 600;
    color: #2c3e50;
  }

  .home-body {
    flex: 1;
    display: flex;
    height: 0;

    .home-content {
      flex: 1;
      height: 100%;
      overflow: auto;
      padding: 0 40px;
      box-sizing: border-box;
    }
  }
}
</style>