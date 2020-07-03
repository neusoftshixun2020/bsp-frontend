<template>
  <div style="margin:20px">
    <h1 style="color: #2679b5;">
      MVO
      <small>
        <i class="icon-double-angle-right" /> Company Information
      </small>
    </h1>
    <br>
    <div style="margin:20px;margin-left:20px;color: #2679b5;">
      Company Information
    </div>

    <div style="width:90%;margin:0px auto">

      <el-table :data="wishListData" width="100%">
        <el-table-column
          prop="man_id"
          label="Company ID"
          show-overflow-tooltip
          align="center"
        />

        <el-table-column
          prop="name_cn"
          label="Brand Name(CN)"
          show-overflow-tooltip
          align="center"
        />

        <el-table-column
          prop="name_en"
          label="Brand Name(EN)"
          show-overflow-tooltip
          align="center"
        />

        <el-table-column
          prop="gmc_report_type"
          label="GMC Report Type"
          show-overflow-tooltip
          align="center"
        />
        <el-table-column
          prop="gmc_report_url"
          label="GMC Report Url"
          show-overflow-tooltip
          align="center"
        />

        <el-table-column label="operations" align="center">
          <template slot-scope="scope" label="operations">
            <el-button size="mini" type="primary" @click="editCompany(scope.row)">edit</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>

    <div style="margin:20px;margin-left:20px;color: #2679b5;">
      Brand Information
    </div>

    <div style="width:90%;margin:0px auto">

      <el-table :data="wishListData" width="100%">

        <el-table-column type="selection" align="center" />

        <el-table-column
          prop="name_cn"
          label="Brand Name(CN)"
          show-overflow-tooltip
          align="center"
        />
        <el-table-column
          prop="name_en"
          label="Brand Name(EN)"
          show-overflow-tooltip
          align="center"
        />

        <el-table-column align="center" label="image" width="160" prop="image">
          <template slot-scope="scope">
            <img :src="scope.row.image" width="100" height="100">
          </template>
        </el-table-column>

        <el-table-column label="operations" align="center">
          <template slot-scope="scope">
            <el-button type="info" @click="modifyBrand(scope.row)">Modify</el-button>
            <el-button type="warning" @click="deleteBrand(scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      wishListData: [{
        productname: 'Cola',
        price: '￥3',
        image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3450121606,1183124297&fm=26&gp=0.jpg',
        id: '0001'
      },
      {
        productname: 'Nongfu Spring',
        price: '￥75',
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593672093486&di=997ecf1797afcac4587a86a1bbafb217&imgtype=0&src=http%3A%2F%2F15992611.s21i.faiusr.com%2F2%2FABUIABACGAAgoKuQ0wUo1p6n9AYwuQM46wI.jpg',
        id: '0002'
      }]
    }
  },

  methods: {

  }
}

</script>

<style>
.flex{
    display: flex;
    height: 600px;
    flex-direction: column;
     line-height: 40px;
}
</style>
