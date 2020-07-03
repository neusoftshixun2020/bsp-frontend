<template>
  <div style="margin-left:10px">
    <br>
    <br>

    <el-row :gutter="6">
      <el-col :span="5">
        <div class="grid-content">
          <span style="color:#606266">
            Product Title:
            <el-input v-model="scondition" autocomplete="off" style="width:228px" placeholder="please enter product title" />
          </span>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content">
          <el-button type="success" icon="el-icon-search" circle @click="searchProduct" />
        </div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content">
          <div class="grid-content"><el-button type="primary" plain icon="el-icon-plus" @click="addProduct">add</el-button></div>
        </div>
      </el-col>
    </el-row>

    <el-table :data="productList" style="width: 100%">
      <el-table-column prop="PRO_ID" sortable label="Product ID" />
      <el-table-column prop="SKU_CD" label="SKU Code" />
      <el-table-column prop="TITLE" label="Title" />
      <el-table-column prop="MODEL" label="Model" />
      <el-table-column prop="WARRANTY_DAY" label="Warranty Day" />
      <el-table-column prop="RETAIL_PRICE" label="Retail Price" />
      <el-table-column prop="STS_CD" label="State" />
      <el-table-column prop="STOCKSETING" label="Stock Setting" />

      <el-table-column label="Operation">
        <template>
          <el-button type="primary" icon="el-icon-edit" circle @click="modifyProduct(scope.row)" />
          <el-button type="danger" icon="el-icon-delete" circle @click="deleteProduct(scope.row)" />
        </template>
      </el-table-column>
    </el-table>

    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content" /></el-col>
      <el-col :span="8">
        <div class="grid-content">
          <div class="block">
            <el-pagination
              :page-size="20"
              layout="total, prev, pager, next"
              :total="1000"
            />
          </div>
        </div></el-col>
      <el-col :span="8"><div class="grid-content" /></el-col>
    </el-row>

    <el-dialog :visible.sync="dialogVisible" width="70%" :close-on-lick-modal="false">
      <div>
        <el-form ref="addFormData" :model="addFormData" :rules="productRule" label-width="0px" class="">
          <el-row>
            <el-col>
              <el-form-item label="SKU CODE" label-width="160px">
                <el-input v-model="addFormData.SKU_CD" type="text" autocomplete="off" placeholder="SKU_CD" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Brand ID" label-width="160px">
                <el-input v-model="addFormData.BRD_ID" type="text" autocomplete="off" placeholder="BRD_ID" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Manufacturer" label-width="160px">
                <el-input v-model="addFormData.MAN_ID" type="text" autocomplete="off" placeholder="MAN_ID" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Title" label-width="160px">
                <el-input v-model="addFormData.TITLE" type="text" autocomplete="off" placeholder="TITLE" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="UPC Code" label-width="160px">
                <el-input v-model="addFormData.UPC" type="text" autocomplete="off" placeholder="UPC" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="ENA Code" label-width="160px">
                <el-input v-model="addFormData.EAN" type="text" autocomplete="off" placeholder="EAN" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Model" label-width="160px">
                <el-input v-model="addFormData.MODEL" type="text" autocomplete="off" placeholder="MODEL" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Retail Price" label-width="160px">
                <el-input v-model="addFormData.RETAIL_PRICE" type="text" autocomplete="off" placeholder="RETAIL_PRICE" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Minimal Retail Price" label-width="160px">
                <el-input v-model="addFormData.MININUM_RETAIL_PRICE" type="text" autocomplete="off" placeholder="MININUM_RETAIL_PRICE" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Remark" label-width="160px">
                <el-input v-model="addFormData.REMARK" type="text" autocomplete="off" placeholder="REMARK" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Status Code" label-width="160px">
                <el-input v-model="addFormData.STS_CD" type="text" autocomplete="off" placeholder="STS_CD" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Replenishment Peroid" label-width="160px">
                <el-input v-model="addFormData.REPLENISHMENT_PERIOD" type="text" autocomplete="off" placeholder="REPLENISHMENT_PERIOD" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Warranty day" label-width="160px">
                <el-input v-model="addFormData.WARRANTY_DAY" type="text" autocomplete="off" placeholder="WARRANTY_DAY" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Warranty Policy" label-width="160px">
                <el-input v-model="addFormData.WARRANTY" type="text" autocomplete="off" placeholder="WARRANTY" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="grid-content" />
          </el-col>
          <el-col :span="2">
            <div class="grid-content">
              <el-button
                type="info"
                @click.native="dialogVisible = false, addFormData = { SKU_CD: '', BRD_ID: '', MAN_ID: '', TITLE: '', UPC: '', EAN: '', MODEL: '',
                                                                      RETAIL_PRICE: '', MININUM_RETAIL_PRICE: '', REMARK: '', STS_CD: '', REPLENISHMENT_PERIOD: '', WARRANTY_DAY: '',WARRANTY: ''}"
              >Close</el-button>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content">
              <el-button type="primary" @click.native="updateProduct">Submit</el-button>
            </div>
          </el-col>
        </el-row>
      </div>

    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ProductInput',
  data() {
    return {
      productList: [],
      dialogVisible: false,
      scondition: '',
      addFormData: {
        SKU_CD: '',
        BRD_ID: '',
        MAN_ID: '',
        TITLE: '',
        UPC: '',
        EAN: '',
        MODEL: '',
        RETAIL_PRICE: '',
        MININUM_RETAIL_PRICE: '',
        REMARK: '',
        STS_CD: '',
        REPLENISHMENT_PERIOD: '',
        WARRANTY_DAY: '',
        WARRANTY: '',
        operationFlag: 'add'
      },
      productRule: {
        TITLE: [{
          required: true,
          message: "Title shouldn't be null.",
          trigger: 'blur'
        }]
      }
    }
  },
  mounted: function() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$store.dispatch('GetProducts').then((result) => {
        this.productList = result.data
      })
    },
    addProduct(rowData) {
      this.addFormData = {
        SKU_CD: '',
        BRD_ID: '',
        MAN_ID: '',
        TITLE: '',
        UPC: '',
        EAN: '',
        MODEL: '',
        RETAIL_PRICE: '',
        MININUM_RETAIL_PRICE: '',
        REMARK: '',
        STS_CD: '',
        REPLENISHMENT_PERIOD: '',
        WARRANTY_DAY: '',
        WARRANTY: '',
        operationFlag: 'add'
      }
      this.dialogVisible = true
    },
    searchProduct(rowData) {
      this.$store.dispatch('GetProductByTitle', this.scondition).then((result) => {
        this.productList = result.data
      })
    },
    modifyProduct(rowData) {
      this.addFormData = Object.assign({}, rowData)
      this.dialogVisible = true
      this.addFormData.operationFlag = 'modify'
    },
    updateProduct(rowData) {
      this.$refs.addFormData.validate(valid => {
        if (valid) {
          this.$store.dispatch('AddAndUpdateProduct', this.addFormData).then((result) => {
            if (result.data.data) {
              this.$message({
                type: 'info',
                message: `Succeeded`
              })
            } else {
              this.$message({
                type: 'info',
                message: `Failed`
              })
            }
            this.dialogVisible = false
            this.loadData()
          })
        }
      })
    },
    deleteProduct(rowData) {
      this.$confirm('Do you want to delete this record', 'Record delete', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteProduct', rowData.tid).then((result) => {
          if (result.data.data) {
            this.$message({
              type: 'info',
              message: `Record deleted`
            })
          } else {
            this.$message({
              type: 'info',
              message: `Delete failed`
            })
          }
          this.loadData()
        })
      }).catch(() => {
      })
    }
  }
}

</script>

<style>
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

.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
}
</style>
