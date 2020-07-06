<template>
  <el-container id="main-content" class="clearfix">
    <el-main id="page-content" iv class="clearfix">
      <div>
        <p class="title">My Stores</p>
        <div class="store">
          <h3 class="blue">amamzon</h3>
          <p class="p">store_001</p>
          <p class="p">store_002</p>
          <p class="p">store_003</p>
        </div>
        <div class="store">
          <h3 class="blue">ebay</h3>
          <p class="p">store_001</p>
          <p class="p">store_002</p>
          <p class="p">store_003</p>
        </div>

        <div style="text-align: right">
          <el-button type="primary" @click="go()">Add a new store</el-button>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.push({
        path: '/choosePlatform'
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
.blue{
  font-family:  Helvetica;
  color: #409EFF;
  font-size: 18px;
}
.p {
  line-height: 40px;
  color: #666;
  border-top: 1px solid #ccc;
  font-family:  Arial;
  font-size: 18px;
}

</style>
