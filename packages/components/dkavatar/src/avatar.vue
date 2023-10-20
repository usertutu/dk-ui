<script lang="ts">
  /**-
   * @name dk-avatar
   * @author zdy
   * @Time 2023/10/20
   * @description 头像
   **/
  import { defineComponent, toRefs } from 'vue'
  import { dkAvatarProps } from './props'
  export default defineComponent({
    name: 'DkAvatar',
    props: dkAvatarProps,
    emits: [],
    setup(Props) {
      const { size = 'default', shape = 'circle', icon } = toRefs(Props)
      return {
        size,
        shape,
        icon: icon.value || 'IconShanchu1'
      }
    }
  })
</script>
<template>
  <div :class="[`dk-avatar`, shape === 'square' ? `dk-avatar-square` : ``]">
    <slot v-if="icon === '' || icon === null" name="icon"></slot>
    <div v-if="icon">
      <dk-icon :icon="icon"></dk-icon>
    </div>
  </div>
</template>
