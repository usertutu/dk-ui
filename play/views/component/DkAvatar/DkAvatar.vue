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
  <div class="box">
    <dk-avatar></dk-avatar>
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
