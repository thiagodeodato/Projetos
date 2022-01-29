

<template>
  <div class="body">
    <h1 class="centralized">{{ titulo }}</h1>
    <ul class="pics-list">
      <li class="pics-list-item" v-for="foto of fotos">
        <div class="panel">
          <h2 class="panel-title">{{ foto.titulo }}</h2>
          <div class="panel-content">
            <img class="responsive-image" :src="foto.url" :alt="foto.titulo">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  data() {
    
    return {
      titulo: 'Galeria de Fotos',
      fotos: [
        
      ]
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

   .panel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .panel .panel-title {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  .responsive-image {
    width: 100%
  }
</style>
