<template>
  <el-container id="main-content" class="clearfix">
    <el-main>
      <el-form class="login-container" label-position="left" label-width="0px">
        <h3 class="login_title">钱包登录</h3>
        <el-form-item>
          <el-input type="text" v-model="loginForm.account_name" auto-complete="off" placeholder="Account Name"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="Password"></el-input>
        </el-form-item>

        <el-form-item style="width: 100%">
          <el-button type="primary" style="width: 100%;border: none; font-family:sans-serif"  v-on:click="login">Login</el-button>
        </el-form-item>
        <el-row style="text-align: center; margin-top: -5%;font-family:sans-serif; margin-bottom: 5%">
          <el-link type="primary" @click="doRegister()">Have no account?  Click here to register</el-link>
        </el-row>
      </el-form>

    </el-main>

  </el-container>

</template>

<script>
export default {
  path: 'mvo-myWallet',
  data(){
    return{
      loginForm: {
        account_name:'',
        password:''
      }
    }
  },
  methods:{
    doRegister() {
      this.$router.push({
        name: 'mvo-myWalletRegister',

      })
    }
  }
}
</script>

<style scoped>
  .main-content {
    padding-left: 30%;
    padding-right: 30%;
  }

  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 12% auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .login_title {
    margin: 0px auto 10% auto;
    text-align: center;
    color: #505458;
  }


</style>
