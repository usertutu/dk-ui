<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'DkAvatarComp',
    setup() {
      return {}
    }
  })
</script>
<template>
  <h4>基础样式(默认圆)</h4>
  <div class="box">
    <dk-avatar></dk-avatar>
    <dk-avatar shape="square"></dk-avatar>
  </div>
  <div class="box">
    <dk-avatar size="large"></dk-avatar>
    <dk-avatar size="default"></dk-avatar>
    <dk-avatar size="small"></dk-avatar>
  </div>
</template>

<style lang="scss" scoped>
  .box {
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
  }
</style>
