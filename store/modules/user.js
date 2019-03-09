// 专门储存用户的数据，和修改用户的方法
import axios from "axios"
export default {
    namespace: "user",
    state: {
        // 用户名
        username: "",
        // 身份信息
        identity:"",
    },

    // 异步修改数据
    actions: {
        login() {
            axios({
                url: "/admin/account/login",
                method: "POST",
                data: "",
                withCredentials: true,
            }).then(res => {
                const { status, message } = res.data;

                if (status == 1) {
                    this.$message.error(message);
                } else {
                    state.username = message.uname;
                    state.identity = message.realname;
                    this.$router.back();
                }
            })
        }
    }
}