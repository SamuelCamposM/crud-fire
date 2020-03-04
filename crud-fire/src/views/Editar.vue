<template>
  <div>
      {{ id }}  <h1> {{ modelo  }}</h1>
    <h1>Editar</h1>
    <form @submit.prevent="editarModelo(modelo)" class="form-inline">
        <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">nombre</div>
        </div>
        <input type="text" class="form-control" v-model="modelo.nombre">
      </div>
  
        <button type="submit" class="btn btn-info">editar</button>
    </form>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    name:"Editar",
    data(){
        return{
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getModelo','editarModelo'])
    },
    created() {
        this.getModelo(this.id);
    },
     computed: {
        ...mapState(['modelo'])
    },
}
</script>