<template>
  <div class="mixin-components-container">
    <el-header>
        <h1 style="color: #2679b5;">
          Wish List
        </h1>
    </el-header>
    <div class="list">
    <el-row :gutter="20" style="margin-top:30px;">
      <div v-for="product in wishList" :key="product.product.title">
        <el-col :span="13">
          <el-card class="box-card":body-style="{ padding: '10px' }">

            <div style="height:150px;">

              <img :src="product.product.productCategory.img_url" class="img" width="220" height="220" @click="showDetail(product.product.title,product.product.pro_id)">
              <div class="info" span="6" >
                <div class="title" >{{product.product.title}}</div>
                <div class="price">{{'Price: $'+product.product.price.price}}</div>
                <div class="sku">{{'SKU:'+product.product.sku_cd}}</div>
                <div class="sku">Brand: {{product.product.brand.name_en }}</div>
                <div class="sku">Stock: {{ product.product.stock }}</div>
                <el-button  icon="el-icon-delete" style="float: right; padding: 5px 3px 5px 3px; margin-top:20px; margin-right: 0px"
                            type="success" plain round @click="remove(product.wit_id)">remove</el-button>
              </div>

            </div>

          </el-card>
        </el-col>
      </div>
    </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Wishlist',

  created() {
    this.loadData()
  },
  mounted() {
    this.loadData();
  },
  data() {
    return {
      wishList:[],
      category:[],
      user_id:'',
      wishlistData:{
        dsr_id:'12',
        pro_id:'',
      }
    }
  },
  methods:{
    loadData(){
      /**
       * PRO_ID,TITLE,RETAIL_PRICE,SKU_CD
       */
      const user_id = this.$store.getters.userid;
      console.log("----user_id----"+user_id);
      this.$store.dispatch('GetWishListProducts',parseInt(this.wishlistData.dsr_id)).then((result) => {
        console.log("---------wishlist----result-------")
        console.log(JSON.stringify(result))
        console.log("---------wishlist----result.data-------")
        console.log(JSON.stringify(result.data))
        console.log("---------wishlist----result.data.items-------")
        console.log(JSON.stringify(result.data.items))
        this.wishList = result.data
      })
    },
    showDetail(title,pro_id) {
      console.log("传递title:"+title)
      console.log("传递pro_id:"+pro_id)
      this.$router.push({
        name: 'productDetail',
        query: {
          'title': title,
          'pro_id':pro_id,
          isAddBtn:false
        }
      })
    },
    remove(wit_id){
      this.$confirm('Are you sure to remove this product from wishlist?', '提示', {
        type: 'warning'
      }).then(() => {
        console.log("remove-----"+wit_id)
        this.$store.dispatch('RemoveWishlist',parseInt(wit_id)).then((result) => {
          if(result.code===200){
            this.$message({
              type: 'info',
              message: 'Remove Succeed！'
            })
          }else{
            this.$message({
              type:'info',
              message:'Remove Failed！'
            })
          }
          this.loadData();
        })
      }).catch(() => {
      })
    }
  }
}
</script>

<style scoped>
/*.mixin-components-container {*/
/*  background-color: #f0f2f5;*/
/*  padding: 30px 0px 50px 100px;*/
/*  min-height: calc(100vh - 84px);*/
/*}*/
.component-item{
  min-height: 100px;
}
.box-card{
  height:240px;
  width: 850px;
  margin-top: 10px;
}
.title{
  font-weight: bold;
  font-size:18px;
//vertical-align: top;
  color:#66CDAA;
  font-weight: bold;
}
.price{
  color:#F56C6C;
  font-size:16px;
  margin-top:12px;
}
.sku{
  font-size:16px;
  color:#808080;
  margin-top: 8px;
}
.info{
  float: right;
  padding: 30px 180px 30px 0px;
}
.list{
  margin-top: 0px;
  margin-left: 120px;
}
</style>
