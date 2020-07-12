<template>
<div class="app-container">
   <div class="page-header position-relative">
        <h1 style="color: #2679b5;">
          Feature Products
        </h1>
      </div>

 <el-row :gutter="10" class="panel-group" >  
    <div>
    <el-col :span="7" v-for="products in productCategoryList" v-bind:key="products.prc_id">  
     <el-card >
    <div style="height:300px;width:300px" >
       <img :src="products.img_url" class="image"  @click="showDetail(products)">
      <div class="category">{{products.category_name}}</div>
       <div class="category">{{products.product.retail_price}}</div>
    </div>
  </el-card>
   <br>
  </el-col>
  </div>
     </el-row>

</div>

 </style>
import CountTo from 'vue-count-to'

export default {
  name: 'ProductScan',
  data() {
    return {
      productCategoryList:[],
    }
  }
  components: {
    CountTo
  },
   mounted: function() {
    this.loadData()
  },
  methods: {
    loadData() {
      // const userid=this.$store.getters.userid
      // console.log('userid:'+userid)
      this.$store.dispatch('getAllProductCategory').then((result) => {
        console.log("productCategoryList:"+result.data)
        this.productCategoryList = result.data
      })
    },
    showDetail(rowData) {
      console.log("rowData.pro_id:"+rowData.pro_id)
      this.$router.push({
        name: 'mystore',
        query: {
          'pro_id': rowData.pro_id,
        }
      })
    },
    handleSetLineChartData(type) {
      // this.$emit('handleSetLineChartData', type)
      this.$router.push({
         path: '/productDetail'
    }
  }
}
</script>

<style scoped>
.category{
    font-size: 20px;
    color: #999;

}

.el-card {
    
    display:inline-block;
    transition: all .5s;
    height:300px;
    width:270px;
    display:flex;
    display:-webkit-flex;
    justify-content:space-between;
  }
 
  .el-card:hover{
    margin-top: -5px;
    
  }
  .image{
   
    width:220px;
    height:220px;
    display: block;
  }
</style>
