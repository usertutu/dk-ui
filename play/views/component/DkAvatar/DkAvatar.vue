<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'DkCheckboxComp',
    setup() {
      const handleChange = (value: boolean): void => {
        value
      }
      const checked = ref<boolean>(true)
      const checked1 = ref<boolean>(true)
      const checked2 = ref<boolean>(true)
      const checked3 = ref<boolean>(false)
      const handleCheckboxChange = (value: string[]): void => {
        console.log(value)
      }
      const checkList = [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2'},
        { label: '选项3', value: '3' }
      ]
      return {
        handleChange,
        isIndeterMinate: true,
        checked,
        checked1,
        checked2,
        checked3,
        handleCheckboxChange,
        checkList
      }
    }
  })
</script>
<template>
  <div class="box">
    <h4>group组</h4>
    <dk-checkbox-group v-model="checkList" @change="handleCheckboxChange">
      <dk-checkbox v-for="item in checkList" :key="item.value" v-model="checked1" :label="item.label" :value="item.value"></dk-checkbox>
    </dk-checkbox-group>
  </div>
</template>

<style lang="scss" scoped>
.box{
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
