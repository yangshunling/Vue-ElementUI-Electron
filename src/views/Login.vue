<template>
    <div class="content">
        <div class="form">
            <h1>用户登录</h1>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="用户名">
                    <el-input class="inut" v-model="formLabelAlign.user"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input class="inut" v-model="formLabelAlign.password"></el-input>
                </el-form-item>
            </el-form>
            <el-button class="login-btn" type="primary" @click="login">登录</el-button>
        </div>
    </div>
</template>

<script>
  import { fund_info } from '../http/api.js'

  export default {
    name: 'Login',
    data () {
      return {
        labelPosition: 'top',
        formLabelAlign: {
          user: '',
          password: ''
        }
      }
    },
    mounted () {
    },
    methods: {
      login () {

        /* axios默认是json提交,【URLSearchParams】是用来解决【application/x-www-form-urlencoded】报文问题 */
        let para = new URLSearchParams()
        para.set('fund_code', '000001')

        fund_info(para).then(res => {
          console.log(res)
          this.$router.push({ name: 'main' })
        })
      }
    }
  }
</script>

<style scoped lang="less">
    .content {
        height: 100%;
        width: 100%;
        background-color: #324152;
        display: flex;
        justify-content: center;
        align-items: center;

        .form {
            background-color: white;
            width: 450px;
            padding: 40px;
            border-radius: 5px;

            .input {
                width: 100px;
            }

            .login-btn {
                width: 100%;
                margin-top: 20px;
            }
        }
    }
</style>
