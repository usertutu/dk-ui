/**
 * @name get-StyleList
 * @Time 2023年05月04日
 * @param { Function } classes 类名列表
 * @param { Function } styles 样式列表
 * @returns getStyleList 用于生成样式名称的hooks简洁代码
 */
import { computed, ref } from 'vue'
import { getProps } from '../..'
import { isBoolean, humpConversion, sizeChange } from '../../../_utils'
import type { ComputedRef, CSSProperties } from 'vue'
import type { FilterParams } from '../..'
import type { ClassListName } from '../../../_interface'

export interface UseListReturn {
  classes: (list: FilterParams, className?: string) => ComputedRef<ClassListName>
  styles: (
    list: FilterParams,
    pixel?: boolean | string | string[]
  ) => ComputedRef<CSSProperties>,
  stylesList:(borderColor: string[] | string| undefined, index?: number) => string | null
}
/**
 * @name getStyleList
 * @function classes  用于生成样式名称的hooks简洁代码
 * @function styles   用于生成样式hooks简洁代码
 * @function stylesList 用户传来的样式组 用来给类似 ['上','右','下','左']这样的样式组添加样式
 * @description 用于生成样式名称的hooks简洁代码
 */
export const getStyleList = <T extends object>(props: T, name: string): UseListReturn => {
  const { filter } = getProps(props)
  /**
   * @name classes
   * @param { string[] } list 类名列表
   * @param { string } className 类名
   * @description 用于生成样式名称的hooks简洁代码
   */
  const classes = (
    list: FilterParams,
    className?: string
  ): ComputedRef<ClassListName> => {
    return computed((): ClassListName => {
      const classList = ref<ClassListName>([])
      const propList: Record<string, unknown> = filter(list)
      /**
       * @description 如果有className则添加className
       */
      className && classList.value.push(className)
      for (const key in propList) {
        if (propList[key]) {
          /**
           * @name classList
           * @description 利用props的key成样式名称
           */
          classList.value.push(
            `dk-${name}_${isBoolean(propList[key]) ? humpConversion(key) : propList[key]}`
          )
        }
      }
      return classList.value
    })
  }
  /**
   * @name setStyleListType
   * @description setStyleList函数的参数类型
   */
  type setStyleListType = string | number
  /**
   * @name setStyleList
   * @param { string,number } val 表示需要转换的值，可以是字符串或数字
   * @param { string } key 表示需要转换的值的key，用于判断是否需要添加单位
   * @param { boolean,string,string[] } pixel 表示是否需要添加单位，可以是布尔值，字符串，字符串数组
   * @description 函数的主要逻辑是判断 pixel 参数的类型，根据不同的类型来确定是否需要添加单位。如果 pixel 是一个布尔值，那么所有的数字都将添加单位。如果 pixel 是一个字符串，那么只有在 pixel 等于 key 时才不会添加单位。如果 pixel 是一个字符串数组，那么只有在数组中包含当前的值时才不会添加单位。最后，函数返回转换后的值，可以是字符串或数字。
   */
  const setStyleList = (
    val: setStyleListType,
    key: string,
    pixel: boolean | string | string[] = true
  ): string => {
    const shouldAddUnit =
      typeof pixel === 'boolean'
        ? pixel
        : pixel === key || (Array.isArray(pixel) && pixel.includes(val.toString()))
    const valueWithUnit = shouldAddUnit ? sizeChange(val) : val
    return String(valueWithUnit)
  }
  /**
   * @name styles
   * @param { string[] } list 样式列表
   * @param { boolean,string,string[] } pixel 表示是否需要添加单位，可以是布尔值，字符串，字符串数组
   * @description 用于生成样式名称的hooks简洁代码
   */
  const styles = (
    list: FilterParams,
    pixel: boolean | string | string[] = true
  ): ComputedRef<CSSProperties> => {
    const propList = filter(list)
    const styleList = Object.fromEntries(
      Object.entries(propList)
        .filter(([, value]) => value)
        .map(([key, value]) => [
          `--${name}-${humpConversion(key)}`,
          setStyleList(value as string | number, key, pixel)
        ])
    )
    return computed(() => styleList)
  }

  /**
   * @name stylesList
   * @param { string[] } borderColor 用户传来的样式组
   * @param { number } index 数组长度 0 1 2 3 默认0
   * @description 用户传来的样式组 用来给类似 ['上','右','下','左']这样的样式组添加样式
   */
  const stylesList =(borderColor: string[] | string | undefined, index=0): string | null => {
    if (Array.isArray(borderColor)) {
      if (borderColor.length > index) {
        return borderColor[index];
      }
    } else if (typeof borderColor === 'string' && index === 0) {
      return borderColor;
    }
    return null;
  }
  return {
    classes,
    styles,
    stylesList
  }
}
