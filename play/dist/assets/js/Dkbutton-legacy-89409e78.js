!(function () {
  var t = document.createElement('style')
  ;(t.innerHTML =
    '.dkButton[data-v-2302bb5c]{width:100%}.dkButton .dkButton_DK_csy[data-v-2302bb5c]{width:100%;margin:0 auto}.dkButton .dkButton_DK_csy .dkButton_DK_csy_title[data-v-2302bb5c]{padding:0 0 10px;box-sizing:border-box}.dkButton .dkButton_DK_csy .dkButton_DK_csy_div[data-v-2302bb5c]{width:100%;display:flex;flex-wrap:wrap}\n'),
    document.head.appendChild(t),
    System.register(
      ['./index-legacy-2961b38d.js', './.pnpm-legacy-3f3ca544.js'],
      function (t) {
        'use strict'
        var e, n, d, a, u, c, s, o, i, _, r
        return {
          setters: [
            function (t) {
              e = t._
            },
            function (t) {
              ;(n = t.d),
                (d = t.r),
                (a = t.o),
                (u = t.c),
                (c = t.k),
                (s = t.a),
                (o = t.w),
                (i = t.q),
                (_ = t.s),
                (r = t.m)
            }
          ],
          execute: function () {
            const l = n({ name: 'Dkbuttonsm', setup: () => ({}) }),
              f = { class: 'dkButton' },
              y = { class: 'dkButton_DK_csy' },
              p = (t => (i('data-v-2302bb5c'), (t = t()), _(), t))(() =>
                c('h4', { class: 'dkButton_DK_csy_title' }, ' 1.基础使用 ', -1)
              ),
              b = { class: 'dkButton_DK_csy_div' },
              k = r('Default'),
              B = r('Default'),
              v = r('Primary'),
              D = r('Success'),
              m = r('Info'),
              g = r('Warning'),
              K = r('danger')
            t(
              'default',
              e(l, [
                [
                  'render',
                  function (t, e, n, i, _, r) {
                    const l = d('Dk-Button')
                    return (
                      a(),
                      u('div', f, [
                        c('div', y, [
                          p,
                          c('div', b, [
                            s(l, null, { default: o(() => [k]), _: 1 }),
                            s(l, { type: 'default' }, { default: o(() => [B]), _: 1 }),
                            s(l, { type: 'primary' }, { default: o(() => [v]), _: 1 }),
                            s(l, { type: 'success' }, { default: o(() => [D]), _: 1 }),
                            s(l, { type: 'info' }, { default: o(() => [m]), _: 1 }),
                            s(l, { type: 'warning' }, { default: o(() => [g]), _: 1 }),
                            s(l, { type: 'danger' }, { default: o(() => [K]), _: 1 })
                          ])
                        ])
                      ])
                    )
                  }
                ],
                ['__scopeId', 'data-v-2302bb5c']
              ])
            )
          }
        }
      }
    )
})()
