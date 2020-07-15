<template>
 <el-container id="main-content" class="clearfix">
    <el-header>
      <div class="page-header position-relative">
        <h1 style="color: #2679b5;">
         Order Management
        </h1>
      </div>
       <el-input type='text' v-model='sCondition' autocomplete='off' placeholder='please enter the product name' style='width:20%' ></el-input>
      <el-button type = 'primary' size="small" @click="search" style="margin-left:30px">Search</el-button>
    </el-header>
       <el-main>
            <!-- <待支付> -->
      <el-tabs style="margin-top:70px">
      <el-tab-pane label="Awaiting Payment" >

      <el-table
        ref="multipleTable"
        v-loading="listLoading"
        :data="AwaitingPaymentData"
        element-loading-text="Loading"
        fit
        highlight-current-row
        width="80%"
      >

        <el-table-column align="center" label="Title">
          <template slot-scope="scope">
            <el-button type="text"  @click="track(scope.row)" > {{ scope.row.product.title }}</el-button>
          </template>
        </el-table-column>

        <el-table-column  align="center" label="Price">
          <template slot-scope="scope">
            {{ scope.row.product.price }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="QTY"  >
          <template slot-scope="scope">
            {{ scope.row.product.QTY }}
          </template>
        </el-table-column>

        <el-table-column label="Sku"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.product.sku_cd }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Order No"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.product_status }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="Creation Date"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.creation_date }}
            </el-tag>
          </template>
        </el-table-column>
        </el-table>
      <el-pagination
        small
        layout="prev, pager, next"
        :total="total"
        @current-change="current_change">
      </el-pagination>
    </el-tab-pane>

    <!-- <待发货> -->
    <el-tab-pane label="Awaiting Shipment">
      <el-table
        ref="multipleTable"
        v-loading="listLoading"
        :data="AwaitingShipmentData"
        element-loading-text="Loading"
        fit
        highlight-current-row
        width="80%"
      >
        <el-table-column type="selection" />
        <el-table-column align="center" label="Title">
          <template slot-scope="scope">
         <el-button type="text"  @click="track(scope.row)" > {{ scope.row.product.title }}</el-button>
          </template>
        </el-table-column>

        <el-table-column  align="center" label="Price">
          <template slot-scope="scope">
            {{ scope.row.product.price }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="QTY"  >
          <template slot-scope="scope">
            {{ scope.row.product.QTY }}
          </template>
        </el-table-column>

        <el-table-column label="Sku"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.product.sku_cd }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Order No"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.product_status }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="Creation Date"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.creation_date }}
            </el-tag>
          </template>
        </el-table-column>

         <el-table-column label="Operation">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit" plain circle @click="deliver(scope.row)">Deliver</el-button>
            </template>
          </el-table-column>
        </el-table>

      <el-pagination
        small
        layout="prev, pager, next"
        :total="total"
        @current-change="current_change">
      </el-pagination>
    </el-tab-pane>

       <!-- <已发货> -->
    <el-tab-pane label="Shiped">
       <el-table
        ref="multipleTable"
        v-loading="listLoading"
        :data="AwaitingShipmentData"
        element-loading-text="Loading"
        fit
        highlight-current-row
        width="80%"
      >
        <el-table-column type="selection" />

        <el-table-column align="center" label="Title">
          <template slot-scope="scope">
              <el-button type="text"  @click="track(scope.row)" > {{ scope.row.product.title }}</el-button>
          </template>
        </el-table-column>

        <el-table-column  align="center" label="Price">
          <template slot-scope="scope">
            {{ scope.row.product.price }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="QTY"  >
          <template slot-scope="scope">
            {{ scope.row.product.QTY }}
          </template>
        </el-table-column>

        <el-table-column label="Sku"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.product.sku_cd }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Order No"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.product_status }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="Creation Date"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.creation_date }}
            </el-tag>
          </template>
        </el-table-column>

         <el-table-column label="Tracking No"  align="center">
          <template slot-scope="scope">
             <el-button type="text"  @click="track(scope.row)" >{{ scope.row.product.tracking_no }}</el-button>
          </template>
        </el-table-column>


         <el-table-column label="Operation">
            <template slot-scope="scope">
              <el-button type="primary"  plain circle @click="cancel(scope.row)" >Cancel</el-button>        
          </template>
          </el-table-column>
        </el-table>

      <el-pagination
        small
        layout="prev, pager, next"
        :total="total"
        @current-change="current_change">
      </el-pagination>
    </el-tab-pane>

       <!-- <已完成> -->
    <el-tab-pane label="Completed Orders">
         <el-table
        ref="multipleTable"
        v-loading="listLoading"
        :data="AwaitingShipmentData"
        element-loading-text="Loading"
        fit
        highlight-current-row
        width="80%"
      >
        <el-table-column type="selection" />

        <el-table-column align="center" label="Title">
          <template slot-scope="scope">
           <el-button type="text"  @click="track(scope.row)" > {{ scope.row.product.title }}</el-button>
          </template>
        </el-table-column>

        <el-table-column  align="center" label="Price">
          <template slot-scope="scope">
            {{ scope.row.product.price }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="QTY"  >
          <template slot-scope="scope">
            {{ scope.row.product.QTY }}
          </template>
        </el-table-column>

        <el-table-column label="Sku"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.product.sku_cd }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Order No"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.product_status }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="Creation Date"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.creation_date }}
            </el-tag>
          </template>
        </el-table-column>

          <el-table-column label="Tracking No"  align="center">
          <template slot-scope="scope">
        <el-button type="text"  @click="track(scope.row)" >{{ scope.row.product.tracking_no }}</el-button>
          </template>
        </el-table-column>

        </el-table>
      <el-pagination
        small
        layout="prev, pager, next"
        :total="total"
        @current-change="current_change">
      </el-pagination>
    </el-tab-pane>


       <!-- <已取消> -->
    <el-tab-pane label="Cancelled Orders">
         <el-table
        ref="multipleTable"
        v-loading="listLoading"
        :data="AwaitingShipmentData"
        element-loading-text="Loading"
        fit
        highlight-current-row
        width="80%"
      >
        <el-table-column align="center" label="Title">
          <template slot-scope="scope">
              <el-button type="text"  @click="track(scope.row)" > {{ scope.row.product.title }}</el-button>
          </template>
        </el-table-column>

        <el-table-column  align="center" label="Price">
          <template slot-scope="scope">
            {{ scope.row.product.price }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="QTY"  >
          <template slot-scope="scope">
            {{ scope.row.product.QTY }}
          </template>
        </el-table-column>

        <el-table-column label="Sku"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.product.sku_cd }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Order No"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.product_status }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="Creation Date"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.creation_date }}
            </el-tag>
          </template>
        </el-table-column>
        </el-table>
      <el-pagination
        small
        layout="prev, pager, next"
        :total="total"
        @current-change="current_change">
      </el-pagination>
    </el-tab-pane>
    </el-tabs>
    </el-main>
</el-container>
</template>

<script>
import {fetchUser} from '@/api/user'
 export default {
    name: 'MVOOrderManagement',
    data() {
      return {   
        resultList: [],
        sCondition:'',
        AwaitingPaymentData:[],  
        AwaitingShipmentData:[],
        listLoading: false,   
        total:0,//默认数据总数
        pagesize:7,//每页的数据条数
        currentPage:1,//默认开始页面
      }
  },
   mounted() {
      this.loadData()
    },
    

    methods: {
      current_change:function(currentPage){
        this.currentPage = currentPage;
      },
      loadData(){
        const user_id=this.$store.getters.userid
       console.log('user_id is:'+ this.user_id)
        let arr = []
        let userData = JSON.parse(JSON.stringify(arr))
        userData.push(this.user_id)
        console.log('userData is:'+ this.userData)
        login(this.userData).then((result) => {
        console.log("result.data-----userData")
        this.userData = result.data
      })
      }
      
  },
   computed: {
      AwaitingPaymentData () {
        const search = this.sCondition
        return this.resultList.filter(data => {
          const a =  Object.keys(data.product).some(key => {
            return (
              String(data.product[key])
                .toLowerCase()
                .indexOf(search) > -1
            )
          })
          const b = Object.keys(data).some(key => {
              return (
                String(data[key])
                  .toLowerCase()
                  .indexOf(search) > -1
              )
            })
          // console.log("a:", a)
          // console.log("b:" ,b)
          return (a || b)
        })
        // return this.tableDataDisease
      }
    }
}
</script>

<style>
 
</style>