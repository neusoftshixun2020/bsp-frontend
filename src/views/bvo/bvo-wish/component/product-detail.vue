<template>
  <div id="wishListDetailContainer">
    <div style="overflow: hidden; width: 100%">
      <span style="width: 420px; float: left">
        <img :src="productDetail[0].URI" style="width: 380px; height: 380px">
      </span>
      <!--      <span style="width: 200px; float: left">-->
      <div class="info">
        <div class="productproperty" style="font-weight: 700; font-size: 22px;">{{ productDetail[0].TITLE }}</div>
        <div class="productproperty" style="color: red">{{'$'+productDetail[0].RETAIL_PRICE }}</div>
        <div class="productproperty">sku:  {{ productDetail[0].SKU_CD }}</div>
        <div class="productproperty">brand: {{ productDetail[0].NAME_EN }}</div>
        <div class="productproperty">Stock: {{ productDetail[0].STOCK }}</div>

        <div style="margin-top: 20px">
          <el-row style="width: 1000px">
            <el-button type="primary" size="mini" class="productproperty" @click="dropShip()">Dropship Now</el-button>
            <el-button v-if="this.isAddBtn===true" type="primary" size="mini" class="productproperty" >Add to Wish List</el-button>
            <el-button v-else type="primary" size="mini" class="productproperty" >Add to Wish List</el-button>
          </el-row>
        </div>
      </div>
      <!--      </span>-->
    </div>
    <div>
      <div class="wishlistTitle">Item Description</div>
      <el-tabs v-model="activeName" type="border-card" style="font-size: 20px; width: 800px">
        <el-tab-pane label="ebay description" name="first"><div class="productproperty">{{ productDetail[0].ebayDescription }}</div></el-tab-pane>
        <el-tab-pane label="Amazon description" name="second"><div class="productproperty">{{ productDetail[0].amazonDescription }}</div></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WishListDetail',
  data() {
    return {
      productDetail:[],
      PRO_ID:'',
      isAddBtn:true,
      activeName: 'first'
    }
  },
  created:function(){
    this.getParams();
    this.loadProductDetailByPRO_ID();
  },
  mounted(){
    this.loadProductDetailByPRO_ID();
  },
  watch:{
      // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$route': 'getParams'
    },
  methods:{
    getParams(){
      var routerParams = this.$route.query.PRO_ID
      this.PRO_ID = routerParams
      this.isAddBtn = this.$route.query.isAddBtn
    },
    loadProductDetailByPRO_ID(){
      /**
       * 根据PRO_ID获取：TITLE,
       * RETAIL_PRICE,SKU_CD,NAME_EN(BRD_ID=>NAME_EN),
       * URI(ENTITY_ID(PRO_ID)=>URI,
       * PLATEFORM_TYPE(PR0_ID=>PRC_ID=>PLATEFORM_TYPE),
       * STOCK
       * ebayDescription & amazonDescription
       */
    //  this.isAddBtn = this.$route.query.isAddBtn;
      this.PRO_ID = this.$route.query.PRO_ID,
      console.log("收到的PRO_ID:"+this.PRO_ID);
      this.$store.dispatch('LoadProductDetailByPRO_ID',this.PRO_ID).then((result) => {
        console.log("---------Detail: result-------");
        console.log(JSON.stringify(result));
        console.log("---------Detail: result.data-------");
        console.log(JSON.stringify(result.data));
        console.log("---------Detail: result.data.items-------");
        console.log(JSON.stringify(result.data.items));
        this.productDetail = result.data.items
      })
    },
    dropShip(){
      console.log("dripship")
      this.$router.push({
        path: 'storechoose',
      })
    }
  }
}
</script>

<style scoped>
  #wishListDetailContainer {
    margin-top:30px;
    margin-left:30px;
  }

  .productproperty{
    margin-top: 25px;
    margin-right: 10px;
    margin-left: 10px;
    font-size: 18px;
  }

  .wishlistTitle {
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .info{
    margin-top: 48px;
    margin-left: 10px;
    font-size: 18px;
  }

</style>
