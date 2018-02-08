<template>
    <div>
        <p>This is a goodslist!</p>
        <p>{{$route.params.goodsId}}</p>
        <p>{{$route.params.goodsName}}</p>
        <router-link to="/goodsList/title">显示商品标题</router-link>
        <router-link to="/goodsList/image">显示商品图片</router-link>
        <div>
          <router-view></router-view>
        </div>
        <!--跳转方法1-->
        <div>
          <router-link to="/cart">跳转到购物车方法1</router-link>
        </div>
        <!--跳转方法2-->
        <div>
          <button @click="jump02">跳转到购物车方法2路径</button>
        </div>
        <!--跳转方法3-->
        <div>
          <button @click="jump03">跳转到购物车方法3路径</button>
        </div>
        <!--跳转方法4-->
        <div>
          <button @click="jump04">跳转到购物车方法4路径传参数</button>
        </div>
        <!--跳转方法5-->
        <div>
          <button @click="jump05">跳转到购物车方法5前进后退</button>
        </div>
        <!--跳转方法6-->
        <div>
          <router-link v-bind:to="{name:'cart'}">跳转到购物车方法6视图命名</router-link>
        </div>
        <!--跳转方法7-->
        <div>
          <router-link v-bind:to="{name:'cart',params:{cartId:2402}}">跳转到购物车方法7视图命名带参数</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Makchikin First Vue App'
            }
        },
        methods:{
            // 跳转方法2
            jump02(){
                this.$router.push("/cart");
            },
            jump03(){
                this.$router.push({path:"/cart"});
            },
            jump04(){
                this.$router.push({path:"/cart?goodsId=123"});
            },
            jump05(){
                this.$router.go(-2);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
