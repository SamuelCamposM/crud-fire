<template>
  <div>
    <h1>lista de tareas</h1>
    <router-link :to="{name:'agregar'}">
        <button class="btn btn-primary btn-block">agregar</button>
    </router-link>
    <ul class="list-group mt-4 ">
      <li class="list-group-item"
       v-for="modelo in modelos" :key="modelo.id" >
        {{ modelo.nombre }} - {{ modelo.id }}
     <div class="float-right">
        <router-link class="btn btn-warning mx-4 btn-sm"
        :to="{name: 'editar' , params:{id: modelo.id}}">
       editar
        </router-link>
        

        <button @click="eliminarTarea(modelo.id)" class="btn btn-danger  mx-4 btn-sm">eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Inicio",
  methods: {
    ...mapActions(["getModelos","eliminarTarea"])
  },
  created() {
    this.getModelos();
  },
  computed: {
    ...mapState(["modelos"])
  }
};
</script>