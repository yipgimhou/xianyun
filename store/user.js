export const state= {
    userInfo:{}
}

export const mutations= {
    setuserInfo(state,data){
        state.userInfo = data
    }
}

export const actions={
    login({commit},data){
       return this.$axios({
            url:'/accounts/login',
            method:'POST',
            data:data
        })
        .then(res=>{
            const user = res.data
            commit('setuserInfo',user)
            return true
        })
        .catch(res=>{
            this.$message.warning('登录失败，用户信息有误')
        })
    }
}

