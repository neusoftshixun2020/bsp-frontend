<template>
  <el-container id="main-content" class="clearfix">
    <el-main id="page-content" iv class="clearfix">
      <div style="margin-left:1%; margin-right:1%">
        <br>

        <el-table  :cell-style="{color: '#666', fontFamily: 'Arial',fontSize:'15px'}" :data="account_fund"
                   :header-cell-style="{background:'#f0f9eb', fontFamily:'Helvetica',fontSize:'14px'}" style="width: 100%">
          <el-table-column prop="account_name" label="Account Name" />
          <el-table-column prop="available_money" label="Available Money" />
          <el-table-column prop="withdrawing_money" label="Withdrawing" />

          <el-table-column label="Operation">
            <template slot-scope="scope">
              <el-button style="width: 40%" type="primary" icon="el-icon-money" plain @click="clickWithdraw(scope.row)">Withdraw</el-button><br>
              <el-button style="width: 40%; margin-top: 5%" type="primary" icon="el-icon-time" plain @click="record(scope.row)">Record</el-button>
            </template>
          </el-table-column>
        </el-table>


        <el-dialog :visible.sync="dialogVisible" width="40%" :close-on-lick-modal="false">
          <div>
            <el-form ref="addFormData" :model="addFormData"  :rules="rules" label-width="10%">
              <el-form-item label="Withdraw Amount" prop="withdraw_amount" label-width="30%">
                <el-input style="width: 80%" v-model="addFormData.withdraw_amount" type="text" autocomplete="off" clearable />
              </el-form-item>
              <br>
              <el-form-item label="Password" label-width="30%" prop="password">
                <el-input :type="passw" v-model="addFormData.password" style="width:80%" clearable>
                  <i slot="suffix" :class="icon" @click="showPass"></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button style="width: 15%;margin-left: 30%; margin-top: 2%" type="info" @click.native="dialogVisible = false">Close</el-button>
                <el-button style="width: 15%" type="primary" @click.native="record">Submit</el-button>
              </el-form-item>
            </el-form>
          </div>

        </el-dialog>
      </div>
    </el-main>
  </el-container>
</template>



<script>
export default {
  name: 'mvo-myWalletBalance',
  data(){
    let account_name=this.$route.params.account_name;
    let buyer_id=this.$route.params.buyer_id;
    return{
      buyer_id,
      passw:"password",
      icon:"el-input__icon el-icon-view",
      account_fund:[{account_name:'this.account_name', available_money:200, withdrawing_money:0}],
      dialogVisible: false,
      rules: {
        password: [
          { required: true, message:'Password is required!', trigger: 'blur' }
        ],
        withdraw_amount: [
          { required: true, message: 'Withdraw amount is required!',trigger: 'blur' }
        ]
      },
      addFormData: {
        password:'',
        withdraw_amount:''
      }
    }
  },
  mounted: function() {
    this.loadData()
  },
  methods: {
    showPass(){
      //点击图标是密码隐藏或显示
      if( this.passw=="text"){
        this.passw="password";
        //更换图标
        this.icon="el-input__icon el-icon-view";
      }else {
        this.passw="text";
        this.icon="el-input__icon el-icon-minus";
      };
    },
    loadData() {
      this.$store.dispatch('GetFund',this.buyer_id).then((result) => {
        console.log(result)
        this.account_fund.available_money = result.data.list.available_money,
        this.account_fund.withdrawing_money = result.data.list.withdrawing_money
      })
    },
    clickWithdraw(rowData) {
      this.dialogVisible = true
    },
    record(rowData){
      // this.$router.push({name: 'mvo-myWalletBalance',params:{buyer_id:this.buyer_id}});
      this.$router.push({name: 'mvo-myWalletRecord'});
    }
  },
}

</script>

<style>
</style>
