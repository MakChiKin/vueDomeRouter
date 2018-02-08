<template>
    <div>{{msg}}
      <p>{{$route.query.goodsId}}</p>
    </div>

</template>

<script>
    export default {
        name: "",
        data() {
            return {
                msg: "这是购物车页面"
            }
        }
    }
</script>

<style scoped>

</style>
