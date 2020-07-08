<template>
  <div style="margin-left:30px; margin-right: 30px">
    <br>
    <br>

    <el-row :gutter="90">
      <el-col :span="5">
        <div class="grid-content">
          <span style="color:#606266">
            <el-input v-model="scondition" autocomplete="off" style="width:280px" placeholder="Please Enter Product Title" />
          </span>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content">
          <el-button type="success" plain icon="el-icon-search" @click="searchProduct">Search</el-button>
        </div>
      </el-col>
      <el-col :span="13"><div class="grid-content" /></el-col>
      <el-col :span="1">
        <div class="grid-content">
          <div class="grid-content"><el-button type="primary" plain icon="el-icon-plus" @click="addProduct">add</el-button></div>
        </div>
      </el-col>
    </el-row>

    <el-table :cell-style="{color: '#666', fontFamily: 'Arial',fontSize:'16px'}" :data="productList" :header-cell-style="{background:'#eef1f6',color:'#606266',fontFamily:'Helvetica'}" style="width: 100%">
      <el-table-column prop="pro_id" sortable label="Product ID" />
      <el-table-column prop="sku_cd" label="SKU Code" />
      <el-table-column prop="title" label="Title" />
      <el-table-column prop="model" label="Model" />
      <el-table-column prop="price" label="Price" />
      <el-table-column prop="stock" label="Stock" />

      <el-table-column label="Operation">
        <template slot-scope = 'scope'>
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
              :total="200"
            />
          </div>
        </div></el-col>
      <el-col :span="8"><div class="grid-content" /></el-col>
    </el-row>

    <el-dialog :visible.sync="dialogVisible" width="70%" :close-on-lick-modal="false">
      <div>
        <el-form ref="addFormData" :model="addFormData" :rules="productRule" label-width="100px" class="">
          <el-row>
            <el-col>
              <el-form-item label="SKU Code" label-width="160px">
                <el-input v-model="addFormData.sku_cd" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Brand ID" label-width="160px">
                <el-input v-model="addFormData.brd_id" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Manufacturer ID" label-width="160px">
                <el-input v-model="addFormData.man_id" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Title" label-width="160px">
                <el-input v-model="addFormData.title" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="UPC Code" label-width="160px">
                <el-input v-model="addFormData.upc" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="ENA Code" label-width="160px">
                <el-input v-model="addFormData.ean" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Model" label-width="160px">
                <el-input v-model="addFormData.model" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="2">
            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Length(cm)" label-width="160px">
                  <el-input v-model="addFormData.length" style="width:150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Width(cm)" label-width="140px">
                  <el-input v-model="addFormData.width" style="width:150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Height(cm)" label-width="130px">
                  <el-input v-model="addFormData.height" style="width:150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Weight(kg)" label-width="130px">
                  <el-input v-model="addFormData.weight" style="width:150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="40">
            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Retail Price" label-width="160px">
                  <el-input v-model="addFormData.price" style="width: 150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="9">
              <div class="grid-content">
                <el-form-item label="Effective Start Date" label-width="195px">
                  <el-date-picker
                    v-model="addFormData.effetive_start_date"
                    type="date"
                    placeholder="选择日期"
                  />
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="9">
              <div class="grid-content">
                <el-form-item label="Effective End Date" label-width="180px">
                  <el-date-picker
                    v-model="addFormData.effective_end_date"
                    type="date"
                    placeholder="选择日期"
                  />
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Replenishment Peroid" label-width="160px">
                <el-input v-model="addFormData.replenishment_period" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Warranty day" label-width="160px">
                  <el-input v-model="addFormData.warranty_day" style="width: 150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Time Unit" label-width="140px">
                  <el-input v-model="addFormData.time_unit" style="width: 150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Warranty Policy" label-width="160px">
                <el-input
                  v-model="addFormData.warranty"
                  type="textarea"
                  :autosize="{ minRows: 5, maxRows: 10}"
                  maxlength="1200"
                  show-word-limit
                  autocomplete="off"
                  clearable
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Description" label-width="160px">
                <el-input
                  v-model="addFormData.descrition"
                  type="textarea"
                  autocomplete="off"
                  :autosize="{ minRows: 5, maxRows: 10}"
                  maxlength="1200"
                  show-word-limit
                  clearable
                />
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
              <el-button style="width: 80px"
                type="info"
                @click.native="dialogVisible = false, addFormData = { pro_id: '',
                                                                      sku_cd: '',
                                                                      brd_id: '',
                                                                      man_id: '',
                                                                      title: '',
                                                                      upc: '',
                                                                      ean: '',
                                                                      model: '',
                                                                      length: '',
                                                                      width: '',
                                                                      height: '',
                                                                      weight: '',
                                                                      price: '',
                                                                      effetive_start_date: '',
                                                                      effective_end_date: '',
                                                                      replenishment_period: '',
                                                                      warranty_day: '',
                                                                      time_unit: '',
                                                                      warranty: '',
                                                                      descrition: ''}">Close</el-button>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content">
              <el-button style="width: 80px" type="primary" @click.native="updateProduct">Submit</el-button>
            </div>
          </el-col>
        </el-row>
      </div>

    </el-dialog>
  </div>
</template>

<script type="javascript">
export default {
  name: 'ProductInput',
  data() {
    return {
      productList: [],
      dialogVisible: false,
      scondition: '',
      addFormData: {
        pro_id: '',
        sku_cd: '',
        brd_id: '',
        man_id: '',
        title: '',
        upc: '',
        ean: '',
        model: '',
        length: '',
        width: '',
        height: '',
        weight: '',
        price: '',
        effetive_start_date: '',
        effective_end_date: '',
        replenishment_period: '',
        warranty_day: '',
        time_unit: '',
        warranty: '',
        descrition: '',
        operationFlag: 'add'
      },
      productRule: {
        TITLE: [{
          required: true,
          message: "Title can't be null.",
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
        pro_id: '',
        sku_cd: '',
        brd_id: '',
        man_id: '',
        title: '',
        upc: '',
        ean: '',
        model: '',
        length: '',
        width: '',
        height: '',
        weight: '',
        price: '',
        effective_start_date: '',
        effective_end_date: '',
        replenishment_period: '',
        warranty_day: '',
        time_unit: '',
        warranty: '',
        descrition: '',
        operationFlag: ''
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
