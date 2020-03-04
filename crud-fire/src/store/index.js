import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modelos: [],
    modelo: { modelo: '', id: '' }
  },
  mutations: {
    setModelos(state, modelos) {
      state.modelos = modelos
    },
    setModelo(state, modelo) {
      state.modelo = modelo

    },
    eliminarModelo(state, id){
state.modelos = state.modelos.filter(doc => {
return doc.id != id
})
    }
  },
  actions: {
    getModelos({ commit }) {
      let modelos = []
      db.collection('modelos').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            // console.log(doc.data());
            // console.log(doc.id);
            let modelo = doc.data()
            modelo.id = doc.id

            modelos.push(modelo)


          })
        })
      commit('setModelos', modelos)
    },
    getModelo({ commit }, id) {
      db.collection('modelos').doc(id).get()
        .then(doc => {
          // console.log(doc.data());
          // console.log(doc.id);
          let modelo = doc.data();
          modelo.id = doc.id
          commit('setModelo', modelo)
        })
    },
    editarModelo({ commit }, modelo) {
      db.collection('modelos').doc(modelo.id).update({
        nombre: modelo.nombre
      })
        .then(() => {
          router.push({ name: 'inicio' })
        })
    },
    agregarModelo({ commit }, nombre) {
      db.collection('modelos').add({
        nombre: nombre
      })
        .then(doc => {
          console.log(doc.id);
          router.push({ name: 'inicio' })
        })
    },
    eliminarTarea({ commit , dispatch}, id) {
      db.collection('modelos').doc(id).delete()
      .then(() =>{
        alert('la tarea se elimino')
        // dispatch('getModelos')
        commit('eliminarModelo', id)
      })
    }

  },
  modules: {
  }
})
