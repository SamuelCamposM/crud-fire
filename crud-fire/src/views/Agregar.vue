<template>
  <div>
    <h1>agregar</h1>
    <form @submit.prevent="agregarModelo(nombre)" class="form-inline">
      
      <!-- <button type="submit">agregar</button> -->
       <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">nombre</div>
        </div>
        <input type="text" class="form-control" v-model="nombre" >
      </div>
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "agregar",
  data(){
      return{
          nombre: ''
      }
  },
  methods: {
      ...mapActions(['agregarModelo'])
  },
};
</script>