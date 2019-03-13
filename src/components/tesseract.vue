/*
 * 图像分析（OCR识别）
 * @Author: HYZhu 
 * @Date: 2019-02-15 15:25:54
 * @Last Modified by: HYZhu
 * @Last Modified time: 2019-02-15 15:25:54
 */
<template>
  <div ref="ocr"
    class="page-container page-qrcode">
    66666666666666
    <img ref="img"
      src="../assets/timg.jpg">
  </div>
</template>
<script>
export default {
  name: "ocr",
  props: {},
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() =>
      this.ocrExperct("http://127.0.0.1:8801/img/timg.19e70f1.jpg")
    );
  },
  watch: {
    // content(val) {
    //   this.createQRCode();
    // },
    // info: {
    //   handler(val) {
    //     this.createQRCode();
    //   },
    //   deep: true
    // }
  },
  computed: {},
  methods: {
    /**
     *实例
     */
    ocrExperct(myImage) {}
  }
};
</script>
<style lang="scss" >
</style>