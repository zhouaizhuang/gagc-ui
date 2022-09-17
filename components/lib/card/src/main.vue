<template>
  <div class="m-card">
    <div class="m-card-img">
      <img src="" alt="img" />
    </div>
    <div class="m-card-summary">
      summary
    </div>
    <div class="footer">
      footer
    </div>
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
<style scoped>
</style>