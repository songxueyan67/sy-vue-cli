<template>
  <section class="main-layout">
    <nav-header />
    <section class="main">
      <nav-menu />
      <div class='router-view'>
        <router-view></router-view>
      </div>
    </section>
  </section>
</template>

<script lang='ts' setup>
import NavHeader from './NavHeader.vue'
import NavMenu from './NavMenu.vue'
</script>
<style scoped lang='scss'>
.main-layout {
  width: 100%;
  height: 100%;

  .main {
    height: calc(100vh - 56px);
    display: flex;

    .router-view {
      flex: 1;
      padding: 20px;
    }
  }
}

</style>