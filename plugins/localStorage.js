// import createPersistedState from 'vuex-persistedstate'

// export default ({store}) => {
//     window.onNuxtReady(() => {
//         createPersistedState({
//             key: "store", // 读取本地存储的数据到store
//         })(store)
//     })
// }

import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  window.onNuxtReady(() => {
    // 文档地址：https://github.com/robinvdvleuten/vuex-persistedstate#createpersistedstateoptions
    createPersistedState()(store)
  })
}