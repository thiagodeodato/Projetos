<template>
  <div class="body">
    <h1 class="centralized">{{ titulo }}</h1>
    
    <input type="search" class="filter" @input="picFilter = $event.target.value" placeholder="filtre pelo título">
    <ul class="pics-list">
      <li class="pics-list-item" v-for="foto of filteredPics">
      
      <pic-panel :titulo="foto.titulo">
        <responsive-image :url="foto.url" :titulo="foto.titulo"></responsive-image>
      </pic-panel>
      
      </li>
    </ul>
  
  </div>
</template>

<script>
import Panel from './components/shared/panel/Panel.vue';
import ResponsiveImage from './components/shared/responsive-image/ResponsiveImage.vue';

export default {

  components: {
    'pic-panel': Panel,
    'responsive-image': ResponsiveImage
  },

  data() {
    
    return {
      titulo: 'Galeria de Fotos',
      fotos: [
        
      ],
      picFilter: ''
      
    }
  },
  
  computed: {

    filteredPics() {

      if(this.picFilter) {
        let exp = new RegExp(this.picFilter.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos; 
      }

    }
  },

  created() {

    /*
    let promise = this.$http.get('http://localhost:3000/v1/fotos');
    promise
      .then(res => res.json())
      .then(fotos => this.fotos = fotos);
    */
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
  
}
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .centralized {
    text-align: center;
  }

  .pics-list {
    list-style: none;
  }

  .pics-list-item {
    display: inline-block;
  }

  .filter {
    display: block;
    width: 100%;
  }
</style>
