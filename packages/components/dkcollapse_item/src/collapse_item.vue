<script lang="ts">
  /**
   * @name dkcollapse_item
   * @author fanKai16
   * @Time 2023/08/02
   * @description 折叠面板-父组件
   **/
  import { defineComponent, reactive, toRefs } from 'vue'
  import { dkCollapseItemProps } from './props'
  export default defineComponent({
    name: 'DkCollapseItem',
    props: dkCollapseItemProps,
    setup(props) {
      const { name, title, icon } = toRefs(props)
      const data = reactive({ isActive: false, with: 0, height: 0 })
      const onClickTitle = (): void => {
        data.isActive = !data.isActive
      }
      return {
        ...toRefs(data),
        title,
        icon,
        name,
        onClickTitle
      }
    }
  })
</script>
<template>
  <div class="dk-collapseItem">
    <div
      role="tab"
      class="dk-collapseItem_title"
      :class="{ 'dk-collapseItem_title_active': isActive }"
      @click="onClickTitle"
    >
      <div class="dk-collapseItem_left">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="dk-collapseItem_right">
        <dk-icon :icon="icon ? icon : 'IconRightArrow1'"></dk-icon>
      </div>
    </div>
    <dk-transition :is-active="isActive">
      <div>
        <slot></slot>
      </div>
    </dk-transition>
  </div>
</template>
