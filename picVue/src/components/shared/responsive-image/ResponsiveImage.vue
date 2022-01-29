<template>
    <img class="responsive-image" :src="url" :alt="titulo">
</template>

<script>
export default {

    props: ['url', 'titulo']
}
</script>

<style scoped>


  .panel-fade-enter, .panel-fade-leave-active{
    opacity: 0;
  }

  .panel-fade-enter-active, .panel-fade-leave-active {
      transition: opacity .25s;
  }


  .responsive-image {
    width: 100%
  }

</style>
