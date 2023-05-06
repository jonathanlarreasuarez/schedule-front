<template>
  <div class="container">
    <div class="inner-container">
      <h3>Routas Disponibles</h3>
      <ul class="list-group">
        <li
            class="list-group-item"
            :class="{ active: index === currentIndex }"
            v-for="(route, index) in routes"
            :key="index"
            @click="searchDaysRoute(route, index)"
        >
          {{ route.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RouteDataService from "@/services/RouteDataService";
import Swal from "sweetalert2";

export default {
  name: 'RoutesList',
  data() {
    return {
      routes: [],
      currentRoute: null,
      currentIndex: -1,
      searchTitle: '',
      calendarDaysJson: null
    };
  },
  methods: {
    retrieveRoutes() {
      RouteDataService.getAll()
          .then(response => {
            this.routes = response.data;
          })
          .catch(e => {
            if (e.response.status === 404) {
              Swal.fire({
                icon: 'error',
                title: null,
                text: 'Ha ocurrido un error al buscar los días.',
              });
            }
          });
    },
    async searchDaysRoute(route, index) {
      this.currentRoute = route;
      this.currentIndex = index;
      RouteDataService.getCalendarDays(route.id)
          .then((response) => {
            this.calendarDaysJson = response.data;
            this.$emit('data-sent', this.calendarDaysJson);
          })
          .catch((e) => {
            if (e.response.status === 404) {
              this.calendarDaysJson = null;
              this.$emit('data-sent', this.calendarDaysJson);
            }
          });
    },
  },
  mounted() {
    this.retrieveRoutes();
  },
};
</script>

<style>
.container {
  margin: 20px;
  background-color: white;
  height: 60vh;
  border-radius: 20px;
}

.inner-container {
  padding: 20px;
}

h3 {
  text-align: left;
  font-weight: 800;
}

.list-group-item {
  cursor: pointer;
}

.list-group-item.active {
  background-color: #eee;
  color: #333;
}

li {
  list-style: none;
  border-left: greenyellow 5px solid;
  margin: 10px;
  padding-left: 10px;
}

ul {
  padding: 0;
  margin: 0;
}
</style>