<template>
  <ul class="details">
    <li>消息编号：{{$route.query.id}}</li>
    <li>消息标题：{{$route.query.title}}</li>
    <li>公司信息：{{$route.query.info}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted(){
    console.log(this.$route);
  }
};
</script>

<style scoped>
/* .details {
  padding: 25px;
  box-shadow: #ccc 0 0 5px;
  border-radius: 6px;
  font-size: 16px;
} */
li {
  list-style-type: decimal;
}
</style>