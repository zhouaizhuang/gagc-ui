<template>
  <div class="m-card" :style="width? {width: width + 'px'}: {}">
    <div class="m-card-img" :style="imgHeight ? {height: imgHeight + 'px'} : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="m-card-summary">
      {{summary}}---测试989---
    </div>
    <div v-else class="m-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    width: {
      type: Number,
      default: 0
    },
    imgSrc: {
      type: String,
      default: ''
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: '',
    },
  },
  components:{},
  data(){
    return {
      
    }
  },
  methods:{
  },
  created(){
  },
  mounted(){
    
  },
}
</script>
<style lang="scss">
  @import './Card.scss';
</style>