<template>
<div class="app-container">
   <div class="page-header position-relative">
        <h1 style="color: #2679b5;">
          Feature Products
        </h1>
      </div>
<<<<<<< Updated upstream

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
=======
  <!-- <div style="width:90%;margin:0px auto">
        <template slot-scope="scope">
          <img :src="scope.row.image" width="100" height="100" @click="showDetail">
        </template>
  </div> -->

 <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col" v-for ="product in productlist" v-bind:todo="product"
      v-bind:key="product.id">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-people" >
         <template slot-scope="scope">
          <img :src="scope.row.image" width="100" height="100" @click="showDetail">
        </template>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            New Visits
          </div>
          <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
 </el-row>
 </div>
</template>

<script>
// export default {
//   name: 'WishList',
//   data() {
//     return {
//       wishListData: [{
//         productname: 'Cola',
//         price: '￥3',
//         image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3450121606,1183124297&fm=26&gp=0.jpg',
//         id: '0001'
//       },
//       {
//         productname: 'Nongfu Spring',
//         price: '￥75',
//         image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593672093486&di=997ecf1797afcac4587a86a1bbafb217&imgtype=0&src=http%3A%2F%2F15992611.s21i.faiusr.com%2F2%2FABUIABACGAAgoKuQ0wUo1p6n9AYwuQM46wI.jpg',
//         id: '0002'
//       }]
//     }
//   },
//   methods: {
//     showDetail(rowData) {
//       this.$router.push({
//         path: '/productDetail'

//       })
//     }
//   }
// }
// </script>

// <style scoped>
>>>>>>> Stashed changes

 </style>
import CountTo from 'vue-count-to'

export default {
<<<<<<< Updated upstream
  name: 'ProductScan',
  data() {
    return {
      productCategoryList:[],
=======
  data:{
    return {
      productlist
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
      this.$store.dispatch('GetProducts').then((result) => {
        console.log(result)
        this.productList = result.data.list
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
>>>>>>> Stashed changes
