export const state= {
    userInfo:{}
}

export const mutations= {
    setuserInfo(state,data){
        state.name = data
    }
}

export const actions={
    login({commit},data){
        this.$axios({
            url:'/accounts/login',
            method:'POST',
            data:data
        })
        .then(res=>{
            const user = res.data
            commit('userInfo',user)
        })
        .catch(res=>{
            this.$message.warning('登录失败，用户信息有误')
        })
    }
}

