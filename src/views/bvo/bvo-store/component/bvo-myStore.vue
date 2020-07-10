<template>
  <el-container id="main-content" class="clearfix">
    <el-main id="page-content" iv class="clearfix">
      <div style="margin-left:20%; margin-right:20%">
        <p class="title">My Stores</p>
        <div class="store">
          <el-table :cell-style="{color: '#666', fontFamily: 'Arial',fontSize:'18px'}" :data="amazonStore"
                    :header-cell-style="{color: '#409EFF',fontSize:'18px',fontFamily:'Helvetica'}">
            <el-table-column prop="store_name" label="Amazon"/>
          </el-table>
          <el-row :gutter="20">
            <el-col :span="9"><div class="grid-content" /></el-col>
            <el-col :span="8">
              <div class="grid-content">
                <div class="block">
                  <el-pagination
                    layout="total, prev, pager, next"
                    :total="10"
                    :page-count="6"
                    :page-size="5"/>
                </div>
              </div></el-col>
            <el-col :span="6"><div class="grid-content" /></el-col>
          </el-row>
        </div>
        <div class="store">
          <el-table :cell-style="{color: '#666', fontFamily: 'Arial',fontSize:'18px'}" :data="ebayStore"
                    :header-cell-style="{color: '#409EFF',fontSize:'18px',fontFamily:'Helvetica'}">
            <el-table-column prop="store_name" label="eBay"/>
          </el-table>
          <el-row :gutter="20">
            <el-col :span="9"><div class="grid-content" /></el-col>
            <el-col :span="8">
              <div class="grid-content">
                <div class="block">
                  <el-pagination
                    layout="total, prev, pager, next"
                    :total="10"
                    :page-count="6"
                    :page-size="5"/>
                </div>
              </div></el-col>
            <el-col :span="6"><div class="grid-content" /></el-col>
          </el-row>

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
                    <el-select v-model="addFormData.store.plataeform_type" placeholder="Select Platform" style="width: 300px">
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
                    <el-input v-model="addFormData.store.store_name" type="text" autocomplete="off" clearable style="width: 300px"/>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="Seller ID" label-width="160px">
                    <el-input v-model="addFormData.store.dsr_dropshipper.dsr_id" type="text" autocomplete="off" clearable style="width: 300px"/>
                  </el-form-item>
                </el-col>
              </el-row>
<!--              <el-row>-->
<!--                <el-col>-->
<!--                  <el-form-item label="Marketplace ID" label-width="160px">-->
<!--                    <el-input v-model="addFormData.store.goa_government_area.goa_id" type="text" autocomplete="off" clearable style="width: 300px"/>-->
<!--                  </el-form-item>-->
<!--                </el-col>-->
<!--              </el-row>-->
              <el-row>
                <el-col>
                  <el-form-item label="MWS Auth Token" label-width="160px">
                    <el-input v-model="addFormData.store.eba_ebay_authorization.token" type="text" autocomplete="off" clearable style="width: 300px"/>
                  </el-form-item>
                </el-col>
              </el-row>

            </el-form>s
            <el-row :gutter="100">
              <el-col :span="7">
                <div class="grid-content" />
              </el-col>
              <el-col :span="4">
                <div class="grid-content">
                  <el-button style="width: 1230%" type="info" @click.native="dialogVisible = false">Close</el-button>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content">
                  <el-button style="width: 1230%" type="primary" @click.native="addStore">Submit</el-button>
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
  name:'Store',
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
        store:{
          plataeform_type: '',
          store_name: '',
          dsr_dropshipper:{
            dsr_id: ''
          },
          // goa_government_area:{
          //   goa_id: ''
          // },
          eba_ebay_authorization:{
            token: ''
          }
        }
      },
      storeRule: {
        store_name: [{ required: true, message: 'Store Name can not be null', trigger: 'blur' }],
        plataeform_type: [{ required: true, message: 'Platform Type can not be null', trigger: 'blur' }],
        dsr_id: [{ required: true, message: 'Seller ID can not be null', trigger: 'blur' }],
        token: [{ required: true, message: 'MWS Auth Token can not be null', trigger: 'blur' }],
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
        console.log(result.data)
      })
      this.$store.dispatch('GetEBayStores').then((result) => {
        this.ebayStoreList = result.data
        console.log(result.data)
      })

    },
    clickAdd(){
      this.addFormData = {
        store:{
          plataeform_type: '',
          store_name: '',
          dsr_dropshipper:{
            dsr_id: ''
          },
          // goa_government_area:{
          //   goa_id: ''
          // },
          eba_ebay_authorization:{
            token: ''
          }
        }
      }
      this.dialogVisible = true
    },
    addStore() {
      this.$refs.addFormData.validate(valid => {
        if (valid) {
          this.addFormData.store.dsr_dropshipper.dsr_id = parseInt(this.addFormData.store.dsr_dropshipper.dsr_id)
          // this.addFormData.store.goa_government_area.goa_id = parseInt(this.addFormData.store.goa_government_area.goa_id)

          console.log(this.addFormData)

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
    }
  },
  computed: {
    ebayStore(){
      return this.ebayStoreList.filter(data => {
        return Object.keys(data).some(plataeform_type => {
          return (
            String(data[plataeform_type]) == "2"
          )
        })
      })
    },
    amazonStore(){
      return this.amazonStoreList.filter(data => {
        return Object.keys(data).some(plataeform_type => {
          return (
            String(data[plataeform_type]) == "1"
          )
        })
      })
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
