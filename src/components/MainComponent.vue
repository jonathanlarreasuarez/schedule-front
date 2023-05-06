<template>
  <Header/>
  <div class="content">

    <div class="column-inner-left">
      <!--<CalendarView/>-->
      <CalendarView :receivedData="jsonData"/>
    </div>
    <div class="column-inner-right">
      <RoutesList @data-sent="handleDataSent"/>
    </div>
  </div>
</template>

<script>
import CalendarView from "@/components/Schedule/calendarView.vue";
import Header from "@/components/Header.vue";
import RoutesList from "@/components/Routes/RoutesList.vue";

export default {
  name: 'MainComponent',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    CalendarView,
    Header,
    RoutesList
  },
  data() {
    return {
      jsonData: {},
    };
  },
  methods: {
    handleDataSent(data) {
      this.jsonData = data;
    },
  }
};
</script>

<style>

.content {
  display: flex;
  justify-content: center;

}


.column-inner-left {
  flex-basis: 60%;
  /* Estilos adicionales para la columna izquierda */
}

.column-inner-right {
  flex-basis: 40%;
  /* Estilos adicionales para la columna izquierda */
}


.container {
  margin: 20px;
  background-color: white;
  height: 60vh;
  border-radius: 20px;
}

.inner-container {
  padding: 20px;
}

</style>