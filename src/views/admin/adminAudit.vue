<template>
  <div class="app-container">
     <div class="page-header position-relative">
        <h1 style="color: #2679b5;">
         Administrator
          <small>
            <i class="icon-double-angle-right" />Withdrawal Audit
          </small>
        </h1>
      </div>

    <div class="ProductTable">
      <el-table
        ref="multipleTable"
        v-loading="listLoading"
        :data="AuditData"
        element-loading-text="Loading"
        fit
        border
        highlight-current-row
        width="80%"
      >
        <el-table-column type="selection" />

        <el-table-column align="center" label="Product Name">
          <template slot-scope="scope">
            {{ scope.row.product.title }}
          </template>
        </el-table-column>

        <el-table-column  align="center" label="Category">
          <template slot-scope="scope">
            {{ scope.row.category_name }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="image"  >
          <template slot-scope="scope">
            <img :src="scope.row.img_url" width="80" height="80" >
          </template>
        </el-table-column>

        <el-table-column label="state"  align="center">
          <template slot-scope="scope">
            <el-tag>
              {{ scope.row.product_status }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column  align="center" width="250px"  label = 'Operations' >
          <template slot-scope="scope">
            <el-button type = 'info' size="mini" @click="edit(scope.row)">edit</el-button>
            <el-button type = 'danger' size="mini" @click ='deleteRecord(scope.row,scope.$index)'>delete</el-button>

            <el-button v-if="scope.row.product_status==='待入仓'" type="primary" size="mini" round @click="changeState(scope.row)">入仓</el-button>

            <el-button v-else-if="scope.row.product_status==='待上架'" type="primary" size="mini" round  @click="changeState(scope.row)">上架</el-button>

            <el-button v-else-if="scope.row.product_status==='已上架'" type="primary" size="mini" round @click="changeState(scope.row)">下架</el-button>

            <el-button v-else type = 'primary' size="mini" round :style="{ display: 'none' }"></el-button>

          </template>
        </el-table-column>

      </el-table>

      <el-pagination
        small
        layout="prev, pager, next"
        :total="total"
        @current-change="current_change">
      </el-pagination>

    </div>

    <!--添加信息弹窗-->
    <el-dialog title='Add Product Category' :visible.sync = 'visible' width = '50%' :close-on-lick-modal = 'false'>
      <el-form :model='productCategoryFormData'  ref='productCategoryFormData' label-width='0px' class=''>

        <el-form-item label="product" label-width="130px" prop="sid">
          <el-col :span="8">
            <el-input type="text" v-model="productCategoryFormData.productCategory.product.title" autocomplete="off" placeholder="Product Name">
            </el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="category" label-width="130px"  prop='sid'>
          <el-col :span="8">
            <el-cascader
              :options="options"
              v-model='productCategoryFormData.productCategory.category_name'
              ></el-cascader>
          </el-col>
        </el-form-item>

        <el-form-item label="platform type" label-width="130px"  prop='sid'>
          <el-col :span="8">
            <el-cascader
            :options="platform_options"
            v-model='productCategoryFormData.productCategory.plateform_type'
            ></el-cascader>
          </el-col>
        </el-form-item>

        <el-form-item label="Main Pricture" label-width="130px">
          <el-upload
            action="http://localhost:8088/image/uploadImage"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-success="handleUploadSuccess"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <img height="100px" width="100px" :src="dialogImageUrl" alt="" style="float: left">
        </el-form-item>

      </el-form>
      <span slot = 'footer' class = 'dialog-footer'>
        <el-button type = 'primary' size='small' @click="addProductCategory">Save</el-button>
        <el-button type = 'danger' size='small' @click.native = "visible = false, ProductData = {
                    TITLE:'',
                    CATEGORY_NAME:'',
                    SECOND_CATEGORY:'',
                    image:'' }">Close</el-button>
       </span>
    </el-dialog>

  </div>

</template>

<script>
  export default {
    name: 'adminAudit',
    data() {
      return {
        resultList: [],
        listLoading: false,
        downloadLoading: false,
        sCondition:'',
        head:'Product Name',
        operation:'',
        img_id: '',
        dialogImageUrl: '',
        dialogVisible: false,

        total:0,//默认数据总数
        pagesize:7,//每页的数据条数
        currentPage:1,//默认开始页面

        visible: false,

      }
    },
    mounted() {
      this.loadData()
    },
    methods: {
      current_change:function(currentPage){
        this.currentPage = currentPage;
      },
      loadData() {
       
      },

  }
  }
</script>

<style scoped>
 
</style>