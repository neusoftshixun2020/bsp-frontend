
<template>
  <div id="page-content" class="clearfix">
    <h3 class="header smaller lighter red">Add a new store</h3>
    <div class="content">
      <div class="gray shop">Set up API connection with your store by account authorisation</div>

      <button class="btn btn-primary btn-block shop">Amazon</button><br>
      <button class="btn btn-primary btn-block shop">eBay</button>

    </div>
  </div>

</template>

<script>
export default {
  name: 'ChoosePlatform'
}

</script>

<style scoped>

body,html{
  width: 100%;
  height: 100%;
  background: #fff;
}

.content{
  width: 50%;
  margin:20px auto;
}
.shop{
  width: 80%;
  margin-top: 50px;

}

</style>
