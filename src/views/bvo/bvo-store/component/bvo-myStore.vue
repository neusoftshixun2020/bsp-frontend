<template>
  <el-container id="main-content" class="clearfix">
    <el-main id="page-content" iv class="clearfix">
      <div>
        <p class="title">My Stores</p>
        <div class="store">
          <el-table :cell-style="{color: '#666', fontFamily: 'Arial',fontSize:'18px'}" :data="amazonStoreList"
                    :header-cell-style="{color: '#409EFF',fontSize:'18px',fontFamily:'Helvetica'}">
            <el-table-column prop="STORE_NAME" label="Amazon"/>
          </el-table>
        </div>
        <div class="store">
          <el-table :cell-style="{color: '#666', fontFamily: 'Arial',fontSize:'18px'}" :data="ebayStoreList" :header-cell-style="{color: '#409EFF',fontSize:'18px',fontFamily:'Helvetica'}">
            <el-table-column prop="STORE_NAME" label="eBay"/>
          </el-table>

        </div>

        <div style="text-align: right">
          <el-button type="primary" @click="clickAdd">Add a new store</el-button>
        </div>

        <el-dialog :visible.sync="dialogVisible" width="35%" :close-on-lick-modal="false">
          <div>
            <el-form ref="addFormData" :model="addFormData" :rules="storeRule" label-width="100px" class="">
              <el-row>
                <el-col>
                  <el-form-item label="Platform Type" label-width="160px">
                    <el-select v-model="addFormData.PLATFORM_TYPE" placeholder="Select Platform" style="width: 300px">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="Store Name" label-width="160px">
                    <el-input v-model="addFormData.STORE_NAME" type="text" autocomplete="off" clearable style="width: 300px"/>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="Seller ID" label-width="160px">
                    <el-input v-model="addFormData.DSR_ID" type="text" autocomplete="off" clearable style="width: 300px"/>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="Marketplace ID" label-width="160px">
                    <el-input v-model="addFormData.GOA_ID" type="text" autocomplete="off" clearable style="width: 300px"/>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="MWS Auth Token" label-width="160px">
                    <el-input v-model="addFormData.TOKEN" type="text" autocomplete="off" clearable style="width: 300px"/>
                  </el-form-item>
                </el-col>
              </el-row>

            </el-form>
            <el-row :gutter="30">
              <el-col :span="8">
                <div class="grid-content" />
              </el-col>
              <el-col :span="4">
                <div class="grid-content">
                  <el-button style="width: 80px" type="info" @click.native="dialogVisible = false,
                  addFormData = { PLATFORM_TYPE: '',
                                  STORE_NAME: '',
                                  DSR_ID: '',
                                  GOA_ID: '',
                                  TOKEN: ''
                                  }">Close</el-button>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content">
                  <el-button style="width: 80px" type="primary" @click.native="addStore">Submit</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-dialog>
      </div>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name:'Good Store',
  data() {
    return {
      amazonStoreList: [],
      ebayStoreList: [],
      dialogVisible: false,
      options: [{
        value: 'Option 1',
        label: 'Amazon'
      }, {
        value: 'Option 2',
        label: 'eBay'
      }],
      addFormData: {
        PLATFORM_TYPE: '',
        STORE_NAME: '',
        DSR_ID: '',
        GOA_ID: '',
        TOKEN: ''
      },
      storeRule: {
        STORE_NAME: [{
          required: true,
          message: "Store name can't be null.",
          trigger: 'blur'
        }],
        DSR_ID:[{
          required: true,
          message: "Seller ID can't be null.",
          trigger: 'blur'
        }],
        TOKEN:[{
          required: true,
          message: "MWS Auth Token can't be null.",
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
      this.$store.dispatch('GetAmazonStores').then((result) => {
        this.amazonStoreList = result.data
      })
      this.$store.dispatch('GetEBayStores').then((result) => {
        this.ebayStoreList = result.data
      })

    },
    clickAdd(rowData){
      this.addFormData = {
        PLATFORM_TYPE: '',
        STORE_NAME: '',
        DSR_ID: '',
        GOA_ID: '',
        TOKEN: ''
      }
      this.dialogVisible = true
    },
    addStore(rowData) {
      this.$refs.addFormData.validate(valid => {
        if (valid) {
          this.$store.dispatch('AddStore', this.addFormData).then((result) => {
            if (result.data.data) {
              this.$message({
                type: 'info',
                message: `Add Succeeded`
              })
            } else {
              this.$message({
                type: 'info',
                message: `Add Failed`
              })
            }
            this.dialogVisible = false
            this.loadData()
          })
        }
      })
    },

  }

}
</script>

<style>
.el-container {
  margin: 0;
  padding: 8px 20px 24px;
}
.el-main {
  padding-bottom: 0;
  font-family: "Open Sans";
  font-size: 13px;
  min-height: 100%;
}
.title{
  font-family: "Helvetica Neue";
  font-size: 20px;
  color:#909399;
}
.store {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 0 20px 0;
  padding-left: 3%;
}

.p {
  line-height: 40px;
  color: #666;
  border-top: 1px solid #ccc;
  font-family:  Arial;
  font-size: 18px;
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


</style>
