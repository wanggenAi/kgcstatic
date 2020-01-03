<template>
  <div class='kgcuser'>
      <div ><h1>欢迎你{{uid}}</h1></div>
  </div>
</template>

<script>
export default {
  name: 'kgcuser',
  props:['uid'],
  data () {
    return {
        
    }
  },
  components: {

  }
}
</script>

<style scoped>
.kgcuser div{
    height: 800px;
    padding-top: 30px;
}
 
</style>
