<template>
  <div class="home-page">
    <div class="content">
      <div class="column-left">
        <Sidebar />
      </div>
      <div class="column-center">
        <MainComponent />
      </div>
    </div>
  </div>
</template>

<script>
import MainComponent from './MainComponent.vue';
import Sidebar from './Sidebar.vue'
//import Header from "@/components/Header.vue";
//import RoutesList  from "@/components/Routes/RoutesList.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    MainComponent,
    Sidebar
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: ghostwhite;
}

.content {
  display: flex;
  /*flex-direction: row;
  flex: 1;*/
  justify-content: center;
}

.column-left {
  flex-basis: 20%;
  height: 92vh;
  /* Estilos adicionales para la columna izquierda */
}

.column-center {
  flex-basis: 80%;
  /* Estilos adicionales para la columna izquierda */
}

.column-right {
  flex-basis: 25%;
  /* Estilos adicionales para la columna derecha */
}
</style>