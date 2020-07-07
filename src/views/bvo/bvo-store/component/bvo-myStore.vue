<template>
  <el-container id="main-content" class="clearfix">
    <el-main id="page-content" iv class="clearfix">
      <div>
        <p class="title">My Stores</p>
        <div class="store">
          <el-table :cell-style="{color: '#666', fontFamily: 'Arial',fontSize:'18px'}" :data="amazonStoreList" :header-cell-style="{color: '#409EFF',fontSize:'18px',fontFamily:'Helvetica'}">
            <el-table-column prop="STORE_NAME" label="Amazon"/>
          </el-table>
          <p class="p">store_001</p>
          <p class="p">store_002</p>
          <p class="p">store_003</p>
        </div>
        <div class="store">
          <el-table :cell-style="{color: '#666', fontFamily: 'Arial',fontSize:'18px'}" :data="ebayStoreList" :header-cell-style="{color: '#409EFF',fontSize:'18px',fontFamily:'Helvetica'}">
            <el-table-column prop="STORE_NAME" label="eBay"/>
          </el-table>
          <p class="p">store_001</p>
          <p class="p">store_002</p>
          <p class="p">store_003</p>
        </div>

        <div style="text-align: right">
          <el-button type="primary" @click="addStore">Add a new store</el-button>
        </div>

        <el-dialog :visible.sync="dialogVisible" width="70%" :close-on-lick-modal="false">
          <div>
            <el-form ref="addFormData" :model="addFormData" :rules="storeRule" label-width="100px" class="">
              <el-row>
                <el-col>
                  <el-form-item label="Platform Type" label-width="160px">
                    <el-input v-model="addFormData.PLATAEFORM_TYPE" style="width: 250px" type="text" autocomplete="off" clearable />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="Store Name" label-width="160px">
                    <el-input v-model="addFormData.STORE_NAME" type="text" autocomplete="off" clearable />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="Seller ID" label-width="160px">
                    <el-input v-model="addFormData.DSR_ID" type="text" autocomplete="off" clearable />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="Marketplace ID" label-width="160px">
                    <el-input v-model="addFormData.GOA_ID" type="text" autocomplete="off" clearable />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="MWS Auth Token" label-width="160px">
                    <el-input v-model="addFormData.TOKEN" type="text" autocomplete="off" clearable />
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
                  <el-button type="info" @click.native="dialogVisible = false,
                  addFormData = { PLATAEFORM_TYPE: '',
                                  STORE_NAME: '',
                                  DSR_ID: '',
                                  GOA_ID: '',
                                  TOKEN: ''
                                  }">Close</el-button>
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
      addFormData: {
        PLATAEFORM_TYPE: '',
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
    addStore() {
      this.addFormData = {
        PLATAEFORM_TYPE: '',
        STORE_NAME: '',
        DSR_ID: '',
        GOA_ID: '',
        TOKEN: ''
      }
      this.dialogVisible = true
    }
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

</style>
