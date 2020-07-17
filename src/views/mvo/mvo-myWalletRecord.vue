<template>
  <el-container id="main-content" class="clearfix">
    <el-main id="page-content" iv class="clearfix">
      <div style="margin-left:1%; margin-right:1%">
        <br>
        <el-button style="margin-left: 93%" type="primary" plain @click.native="goBack">Go Back</el-button>
        <el-table  :cell-style="{color: '#666', fontFamily: 'Arial',fontSize:'15px'}" :data="recordList"
                   :header-cell-style="{background:'#f0f9eb', fontFamily:'Helvetica',fontSize:'14px'}" style="width: 100%; margin-top: 1%">
          <el-table-column prop="transaction_number" label="Transcation Number" />
          <el-table-column prop="transaction_type" label="Transaction Type" />
          <el-table-column prop="transaction_money" label="Transaction amount" />
          <el-table-column prop="create_time" label="Time" />
          <el-table-column prop="status" label="Status" />

        </el-table>


              <div class="block">
                <el-pagination
                  style="margin-left: 35%"
                  :page-size="20"
                  layout="total, prev, pager, next"
                  :total="1000"
                />
              </div>


      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'mvo-myWalletRecord',
  data(){
    let buyer_id=this.$route.params.buyer_id;
    return{
      recordList: [],
      buyer_id
    }
  },
  mounted: function() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$store.dispatch('GetTransactionRecord',this.buyer_id).then((result) => {
        console.log(result)
        this.recordList = result.data
      })
    },
    goBack(){
      this.$router.push({name: 'mvo-myWalletBalance'})
    }

  }
}
</script>

<style scoped>

</style>
