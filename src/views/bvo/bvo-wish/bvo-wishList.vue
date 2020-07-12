<template>
    <div class="app-container">
<!--      <el-page-header @back="goBack" content="Wish List"></el-page-header>-->
      <span style="color:#3CB371; font-weight: bold; font-size: 22px">WishList</span>
      <div class="WishListTable">
    <el-table :data="wishList" width="100%" :cell-style="cellStyle">

      <el-table-column type="selection" />
      <el-table-column align="center"  width="160">
        <template slot-scope="scope">
          <img :src="scope.row.URI" width="150" height="150" @click="showDetail(scope.row)">

<!--          <el-card class="box-card" width="100%" :body-style="{ padding: '0px' }">-->
<!--            <img :src="scope.row.URI" width="200" height="200" @click="showDetail(scope.row)">-->
<!--            <div class="right learfix">-->
<!--              <time class="time">{{scope.row.TITLE}}</time>-->
<!--              <el-button type="text" class="button">操作按钮</el-button>-->
<!--            </div>-->
<!--          </el-card>-->

        </template>
      </el-table-column>

      <el-table-column >
        <template slot-scope="scope" >
          <div class="title" >{{scope.row.TITLE}}</div>

          <div class="price">{{'$'+scope.row.RETAIL_PRICE}}</div>
          <div class="sku">{{'sku:'+scope.row.SKU_CD}}</div>

<!--          <el-card class="box-card" width="70%">-->
<!--            <div slot="header" class="clearfix">-->
<!--              <span style="color:#66CDAA; font-weight: bold; font-size: 18px">{{scope.row.TITLE}}</span>-->
<!--            </div>-->
<!--            <div>-->
<!--              <div class="price">{{'$'+scope.row.RETAIL_PRICE}}</div>-->
<!--              <div class="sku">{{'sku: '+scope.row.SKU_CD}}</div>-->
<!--            </div>-->
<!--          </el-card>-->
        </template>
      </el-table-column>

    </el-table>
    </div>
  </div>

</template>

<script>
export default {
  name: 'WishList',
  data() {
    return {
      wishList:[],
      head:'Wish List',
      wishListData: [{
        productname: 'Cola',
        price: '￥3',
        image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3450121606,1183124297&fm=26&gp=0.jpg',
        id: '0001'
      },
      {
        productname: 'Nongfu Spring',
        price: '￥75',
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593672093486&di=997ecf1797afcac4587a86a1bbafb217&imgtype=0&src=http%3A%2F%2F15992611.s21i.faiusr.com%2F2%2FABUIABACGAAgoKuQ0wUo1p6n9AYwuQM46wI.jpg',
        id: '0002'
      }]
    }
  },
  created() {
  this.loadData()
  },
  mounted() {
  this.loadData();
  },
  methods: {
    loadData(){
      /**
       * PRO_ID,TITLE,RETAIL_PRICE,SKU_CD
       */
      this.$store.dispatch('GetProductList').then((result) => {
       // console.log("---------result.data-------")
       // console.log(JSON.stringify(result.data))
        this.wishList = result.data.items
      })
    },
    showDetail(rowData) {
      console.log("传递PRO_ID:"+rowData.PRO_ID)
      this.$router.push({
        name: 'productDetail',
        query: {
          'PRO_ID': rowData.PRO_ID,
           isAddBtn:false
        }
      })
    },
    cellStyle({columnIndex}){
      if(columnIndex === 2){//指定列号
        return 'float:left; margin-top:20px; margin-left: 160px;'
      }else{
        return ''
      }
    },

  }
}
</script>

<style scoped>
  .WishListTable {
    margin-top: 0px;
    margin-left: 200px;
    margin-right: 100px;
  }
  .head{
    margin-top: 0px;
    font-size:25px;
  }
  .title{
    font-weight: bold;
    font-size:18px;
<<<<<<< Updated upstream
=======
    //vertical-align: top;
>>>>>>> Stashed changes
    color:#66CDAA;
    font-weight: bold;
  }
  .price{
    color:#F56C6C;
    font-size:16px;
    margin-top:5px;
  }
  .sku{
    font-size:16px;
  }
<<<<<<< Updated upstream
 
=======
  .box-card{

  }
>>>>>>> Stashed changes

</style>

