import { _ as n } from './index-730300b5.js'
import {
  d as c,
  r as d,
  o as u,
  c as r,
  k as a,
  a as e,
  w as s,
  q as i,
  s as p,
  m as o
} from './.pnpm-c43d4963.js'
const l = c({
    name: 'Dkbuttonsm',
    setup() {
      return {}
    }
  }),
  f = _ => (i('data-v-2302bb5c'), (_ = _()), p(), _),
  h = { class: 'dkButton' },
  m = { class: 'dkButton_DK_csy' },
  y = f(() =>
    a('h4', { class: 'dkButton_DK_csy_title' }, ' 1.\u57FA\u7840\u4F7F\u7528 ', -1)
  ),
  k = { class: 'dkButton_DK_csy_div' },
  v = o('Default'),
  D = o('Default'),
  B = o('Primary'),
  b = o('Success'),
  x = o('Info'),
  g = o('Warning'),
  I = o('danger')
function w(_, S, $, C, F, K) {
  const t = d('Dk-Button')
  return (
    u(),
    r('div', h, [
      a('div', m, [
        y,
        a('div', k, [
          e(t, null, { default: s(() => [v]), _: 1 }),
          e(t, { type: 'default' }, { default: s(() => [D]), _: 1 }),
          e(t, { type: 'primary' }, { default: s(() => [B]), _: 1 }),
          e(t, { type: 'success' }, { default: s(() => [b]), _: 1 }),
          e(t, { type: 'info' }, { default: s(() => [x]), _: 1 }),
          e(t, { type: 'warning' }, { default: s(() => [g]), _: 1 }),
          e(t, { type: 'danger' }, { default: s(() => [I]), _: 1 })
        ])
      ])
    ])
  )
}
var q = n(l, [
  ['render', w],
  ['__scopeId', 'data-v-2302bb5c']
])
export { q as default }
