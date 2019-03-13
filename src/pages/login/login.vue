<template>
  <div>
    <h2>欢迎登陆成功！</h2>
    <img src="../../assets/icon/p.png"
      alt="icon">
    <router-link :to="{path:'/401'}">去报错页面</router-link>
    <button>这是一个展示按钮</button>
    <Tesseract></Tesseract>
  </div>
</template>
<script>
import { Tesseract } from "@/components";
export default {
  name: "login",
  components: { Tesseract }
};
</script>
<style>
button {
  background: red;
}
.boxbut {
  color: aqua;
}
</style>
