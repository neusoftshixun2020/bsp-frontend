<template>
      <div>
        <el-col :span = '20' class = 'toolbar'>
          <p class="title" style="color:#3CB371; font-weight: bold;">My Stores</p>
        </el-col>
        <el-row>
          <el-col :span="12" >
            <el-card class="box-card-ebay" width="100%">
              <div slot="header" class="clearfix">
                <span style="color:#66CDAA; font-weight: bold; font-size: 18px">eBay</span>
              </div>
              <div>
                <el-table :data="ebayStoreList.slice((currentPage-1)*pagesize,currentPage*pagesize)" width="100%" >
                  <el-table-column type="selection"/>
                  <el-table-column label="Store Name">
                    <template slot-scope="scope">
                      <div class="storename" >{{scope.row.STORE_NAME}}</div>
                    </template>
                  </el-table-column>
                </el-table>
                <el-pagination
                  small
                  layout="prev, pager, next"
                  :total="enbaytotal"
                  @current-change="current_change">
                </el-pagination>
              </div>
            </el-card>
          </el-col>

          <el-col :span="12" >
            <el-card class="box-card-amazon">
              <div slot="header" class="clearfix">
                <span style="color:#66CDAA; font-weight: bold; font-size: 18px">Amazon</span>
              </div>
              <div>
                <el-table :data="amazonStoreList.slice((currentPage-1)*pagesize,currentPage*pagesize)" width="50%" :cell-style="cellStyle">
                  <el-table-column type="selection" />
                  <el-table-column label="Store Name">
                    <template slot-scope="scope" >
                      <div class="storename" >{{scope.row.STORE_NAME}}</div>
                    </template>
                  </el-table-column>
                </el-table>
                <el-pagination
                  small
                  layout="prev, pager, next"
                  :total="amazontotal"
                  @current-change="current_change">
                </el-pagination>
              </div>

            </el-card>
          </el-col>
        </el-row>
        <div class="btn">
        <el-button type = 'success' size="small" @click = 'push' round>Push</el-button>
        </div>
      </div>

</template>

<script>
  export default {
    name: 'storechoose',
    data(){
      return{
        ebayStoreList:[],
        amazonStoreList:[],
        //分页
        enbaytotal:0,//默认数据总数
        amazontotal:0,
        pagesize:5,//每页的数据条数
        currentPage:1,//默认开始页面
      }
    },
    mounted(){
      this.getEbayStoreList();
      this.getAmazonStoreList();
    },
    methods: {
      current_change:function(currentPage){
        this.currentPage = currentPage;
      },
      getEbayStoreList(){
        this.$store.dispatch('GetEbayStoreList').then((result) => {
           console.log("---------result.data-------");
           console.log(JSON.stringify(result.data));
           console.log("---------result.data.items-------");
           console.log(JSON.stringify(result.data.items));
           this.ebayStoreList = result.data.items;

            this.enbaytotal = this.ebayStoreList.length;
           for(let i=0;i<this.ebayStoreList.length;i++){
             console.log("ebayStore_Name:"+this.ebayStoreList[i].STORE_NAME);
           }
        })
      },
      getAmazonStoreList(){
        this.$store.dispatch('GetAmazonStoreList').then((result) => {
          // console.log("---------result.data-------")
          // console.log(JSON.stringify(result.data))
          console.log("---------amazon-result.data-------");
          console.log(JSON.stringify(result.data));
          console.log("---------amazon-result.data.items-------");
          console.log(JSON.stringify(result.data.items));
          this.amazonStoreList = result.data.items
        })
      },
      push(){
        this.$confirm('Are you sure to push these products?', '提示', {
          type: 'warning'
        })
          .then(() => {
            this.$store.dispatch('Push',row.PRC_ID).then((result) => {
              if(result.code===200){
                this.$message({
                  type: 'info',
                  message: 'Push Succeed！'
                })
              }else{
                this.$message({
                  type:'info',
                  message:'Push Failed！'
                })
              }
              this.fetchData()
            })
          })
          .catch(() => {
          })
      }

    }
  }
</script>

<style>
  .el-main {
    padding-bottom: 0;
    font-family: "Open Sans";
    font-size: 13px;
    min-height: 100%;
  }
  .title{
    font-family: "Helvetica Neue";
    font-size: 20px;
    color:#909399;
  }
  .store {
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 20px 0 20px 0;
    padding-left: 3%;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card-ebay {
    width: 450px;
    margin-left:120px ;
  }
  .box-card-amazon {
    width: 450px;
  }
  .btn{
    float:left;
    position:absolute;
    right:70px;
    bottom:60px;
  }


</style>
