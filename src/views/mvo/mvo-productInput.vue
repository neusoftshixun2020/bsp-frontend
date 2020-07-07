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
      <el-table-column prop="PRO_ID" sortable label="Product ID" />
      <el-table-column prop="SKU_CD" label="SKU Code" />
      <el-table-column prop="TITLE" label="Title" />
      <el-table-column prop="MODEL" label="Model" />
      <el-table-column prop="PRICE" label="Price" />
      <el-table-column prop="STOCK" label="Stock" />

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
        <el-form ref="addFormData" :model="addFormData" :rules="productRule" label-width="100px" class="">
          <el-row>
            <el-col>
              <el-form-item label="SKU Code" label-width="160px">
                <el-input v-model="addFormData.SKU_CD" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Brand ID" label-width="160px">
                <el-input v-model="addFormData.BRD_ID" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Manufacturer ID" label-width="160px">
                <el-input v-model="addFormData.MAN_ID" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Title" label-width="160px">
                <el-input v-model="addFormData.TITLE" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="UPC Code" label-width="160px">
                <el-input v-model="addFormData.UPC" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="ENA Code" label-width="160px">
                <el-input v-model="addFormData.EAN" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Model" label-width="160px">
                <el-input v-model="addFormData.MODEL" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="2">
            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Length(cm)" label-width="160px">
                  <el-input v-model="addFormData.LENGTH" style="width:150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Width(cm)" label-width="140px">
                  <el-input v-model="addFormData.WIDTH" style="width:150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Height(cm)" label-width="130px">
                  <el-input v-model="addFormData.HEIGHT" style="width:150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Weight(kg)" label-width="130px">
                  <el-input v-model="addFormData.WEIGHT" style="width:150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="40">
            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Retail Price" label-width="160px">
                  <el-input v-model="addFormData.PRICE" style="width: 150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="9">
              <div class="grid-content">
                <el-form-item label="Effective Start Date" label-width="195px">
                  <el-date-picker
                    v-model="addFormData.EFFETIVE_START_DATE"
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
                    v-model="addFormData.EFFECTIVE_END_DATE"
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
                <el-input v-model="addFormData.REPLENISHMENT_PERIOD" type="text" autocomplete="off" clearable />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Warranty day" label-width="160px">
                  <el-input v-model="addFormData.WARRANTY_DAY" style="width: 150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <el-form-item label="Time Unit" label-width="140px">
                  <el-input v-model="addFormData.TIME_UNIT" style="width: 150px" type="text" autocomplete="off" clearable />
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="Warranty Policy" label-width="160px">
                <el-input
                  v-model="addFormData.WARRANTY"
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
                  v-model="addFormData.DESCRITION"
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
              <el-button
                type="info"
                @click.native="dialogVisible = false, addFormData = { PRO_ID: '',
                                                                      SKU_CD: '',
                                                                      BRD_ID: '',
                                                                      MAN_ID: '',
                                                                      TITLE: '',
                                                                      UPC: '',
                                                                      EAN: '',
                                                                      MODEL: '',
                                                                      LENGTH: '',
                                                                      WIDTH: '',
                                                                      HEIGHT: '',
                                                                      WEIGHT: '',
                                                                      PRICE: '',
                                                                      EFFETIVE_START_DATE: '',
                                                                      EFFECTIVE_END_DATE: '',
                                                                      REPLENISHMENT_PERIOD: '',
                                                                      WARRANTY_DAY: '',
                                                                      TIME_UNIT: '',
                                                                      WARRANTY: '',
                                                                      DESCRITION: ''}">Close</el-button>
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
      productList: [{PRO_ID:'aa',SKU_CD:'aa',TITLE:'aa',MODEL:'aa', PRICE:'aa', STOCK:'aa'}],
      dialogVisible: false,
      scondition: '',
      addFormData: {
        PRO_ID: '',
        SKU_CD: '',
        BRD_ID: '',
        MAN_ID: '',
        TITLE: '',
        UPC: '',
        EAN: '',
        MODEL: '',
        LENGTH: '',
        WIDTH: '',
        HEIGHT: '',
        WEIGHT: '',
        PRICE: '',
        EFFETIVE_START_DATE: '',
        EFFECTIVE_END_DATE: '',
        REPLENISHMENT_PERIOD: '',
        WARRANTY_DAY: '',
        TIME_UNIT: '',
        WARRANTY: '',
        DESCRITION: '',
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
        PRO_ID: '',
        SKU_CD: '',
        BRD_ID: '',
        MAN_ID: '',
        TITLE: '',
        UPC: '',
        EAN: '',
        MODEL: '',
        LENGTH: '',
        WIDTH: '',
        HEIGHT: '',
        WEIGHT: '',
        PRICE: '',
        EFFETIVE_START_DATE: '',
        EFFECTIVE_END_DATE: '',
        REPLENISHMENT_PERIOD: '',
        WARRANTY_DAY: '',
        TIME_UNIT: '',
        WARRANTY: '',
        DESCRITION: '',
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
