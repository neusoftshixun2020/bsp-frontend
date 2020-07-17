<template>
  <el-container id="main-content" class="clearfix">
    <el-main id="page-content" iv class="clearfix">
      <div style="margin-left:1%; margin-right:1%">
        <br>
        <el-button style="margin-left: 93%" type="primary" plain @click.native="goBack">Go Back</el-button>
        <el-table  :cell-style="{color: '#666', fontFamily: 'Arial',fontSize:'15px'}" :data="recordList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                   :header-cell-style="{background:'#f0f9eb', fontFamily:'Helvetica',fontSize:'14px'}" style="width: 100%; margin-top: 1%">
          <el-table-column prop="transaction_number" label="Transcation Number" />
          <el-table-column prop="transaction_type" label="Transaction Type" />
          <el-table-column prop="transaction_money" label="Transaction amount" />
          <el-table-column prop="create_time" label="Time" />
          <el-table-column prop="status" label="Status" />

        </el-table>

        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content" /></el-col>
          <el-col :span="8">
            <div class="grid-content">
              <div class="block" style="alignment: center">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20, 30, 50, 100]"
                  :page-size="pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total= this.recordList.length
                />
              </div>
            </div></el-col>
          <el-col :span="8"><div class="grid-content" /></el-col>
        </el-row>


      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'mvo-myWalletRecord',
  data(){
    return{
      // 当前页
      currentPage: 1,
      // 每页多少条
      pageSize: 10,
      recordList: [],
      buyerData:{
        buyer_id:''
      }
    }
  },
  mounted: function() {
    this.loadData()
  },
  methods: {
    loadData() {
      console.log("---------")
      console.log(this.buyerData.buyer_id)
      this.$store.dispatch('GetTransactionRecord',this.buyerData).then((result) => {
        console.log(result)
        this.recordList = result.data
      })
    },
    goBack(){
      this.$router.push({name: 'mvo-myWalletBalance'})
    },
    getParams(){
      this.buyerData.buyer_id = this.$route.params.buyer_id;
    },
    // 每页多少条
    handleSizeChange(val) {
      this.pageSize = val;
    },
    // 当前页
    handleCurrentChange(val) {
      this.currentPage = val;
    }

  },
  created:function(){
    this.getParams();
  }

}
</script>

<style scoped>
  .el-container {
    margin: 0;
    padding: 8px 20px 24px;
  }
  .el-main {
    padding-bottom: 0;
    font-family: "Open Sans";
    font-size: 13px;
    min-height: 100%;
  }
  .container{
    margin-left:20px;

  }
  .top {
    display: flex;
    flex-direction: row;
    width: 20%;
    font-size: 15px;
    font-weight: bold;
    justify-content: space-between;
  }


  .el-col {
    border-radius: 4px ;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
</style>
