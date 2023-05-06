<template>
  <div class="container">
    <!-- <p>{{ receivedData }}</p> -->
    <div class="inner-container">
      <div class="container-date">
        <div class="date-title">
          <p>Seleccione Fecha</p>
        </div>
        <div class="date-inputs">
          <label for="from-date">Desde:</label>
          <input type="date" id="from-date" v-model="fromDate"/>
          <label for="to-date">Hasta:</label>
          <input type="date" id="to-date" v-model="toDate"/>
          <button @click="searchDays">Buscar</button>
        </div>
      </div>
      <div class="calendar-container">
        <div class="calendar-header">
          <div class="calendar-header-inner-left">
            <h2>{{ mes }} {{ year }}</h2>
          </div>
          <div class="calendar-header-inner-right">
            <button @click="nextMonth">&lt;</button>
            <button @click="prevMonth">&gt;</button>
          </div>
        </div>
        <div class="calendario-dias-semana">
          <span>Monday</span>
          <span>Tuesday</span>
          <span>Wednesday</span>
          <span>Thursday</span>
          <span>Friday</span>
          <span>Saturday</span>
          <span>Sunday</span>
        </div>
        <div class="calendario-dias-mes">
      <span v-for="(dia, index) in daysMonth" :key="index"
            :class="{ frequency: inFrequency(dia), 'out-frequency': outFrequency(dia) , reserved: isReserved(dia), disabled: isDisabled(dia) }">{{
          dia
        }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import CalendarDataService from "@/services/CalendarDataService";

export default {
  components: {},
  data() {
    return {
      date: new Date(),
      fromDate: null,
      toDate: null,
      daysReserved: [],
      daysDisabled: [],
      daysInFrequency: [],
      daysOutFrequency: [],
    };
  },
  props: {
    receivedData: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    receivedData: {
      handler: function (newData) {
        this.clearCalendar();
        if (newData === null) {
          Swal.fire({
            icon: 'info',
            title: null,
            text: 'La ruta no tiene días registrados.',
          });
        } else {
          if (Object.keys(newData).length > 0) {
            this.setDaysInFrequency(newData['days_in_frequency'])
            this.setOutFrequencyDay(newData['days_out_frequency']);
            this.setDaysDisabled(newData['days_disabled']);
            this.setDaysReserved(newData['days_reserved']);
          }
        }
      },
      deep: true
    }
  },
  computed: {
    mes() {
      const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      return months[this.date.getMonth()];
    },
    year() {
      return this.date.getFullYear();
    },
    daysMonth() {
      const primerDiaMes = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
      const ultimoDiaMes = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
      const daysMonth = [];
      for (let day = 1; day <= ultimoDiaMes.getDate(); day++) {
        daysMonth.push(day);
      }
      for (let day = 1; day < primerDiaMes.getDay(); day++) {
        daysMonth.unshift(null);
      }
      return daysMonth;
    },
  },
  methods: {
    setOutFrequencyDay(days) {
      for (let i = 0; i < days.length; i++) {
        this.daysOutFrequency.push(new Date(days[i]));
      }
    },
    setDaysReserved(days) {
      for (let i = 0; i < days.length; i++) {
        this.daysReserved.push(new Date(days[i]));
      }
    },
    setDaysDisabled(days) {
      for (let i = 0; i < days.length; i++) {
        this.daysDisabled.push(new Date(days[i]));
      }
    },
    setDaysInFrequency(days) {
      for (let i = 0; i < days.length; i++) {
        this.daysInFrequency.push(new Date(days[i]));
      }
    },
    clearCalendar() {
      this.daysReserved = [];
      this.daysDisabled = [];
      this.daysInFrequency = [];
      this.daysOutFrequency = [];
    },
    nextMonth() {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1);
    },
    prevMonth() {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
    },
    isDisabled(dia) {
      dia = new Date(this.date.getFullYear(), this.date.getMonth(), dia);
      if (this.daysDisabled.length > 0) {
        return this.daysDisabled.some((date) => {
          return date.getFullYear() === dia.getFullYear() && date.getMonth() === dia.getMonth() && date.getDate() === dia.getDate();
        });
      }
      return false;
    },
    isReserved(dia) {
      dia = new Date(this.date.getFullYear(), this.date.getMonth(), dia);
      if (this.daysReserved.length > 0) {
        return this.daysReserved.some((date) => {
          return date.getFullYear() === dia.getFullYear() && date.getMonth() === dia.getMonth() && date.getDate() === dia.getDate();
        });
      }
      return false;
    },
    inFrequency(dia) {
      dia = new Date(this.date.getFullYear(), this.date.getMonth(), dia);
      if (this.daysInFrequency.length > 0) {
        return this.daysInFrequency.some((date) => {
          return date.getFullYear() === dia.getFullYear() && date.getMonth() === dia.getMonth() && date.getDate() === dia.getDate();
        });
      }
      return false;
    },
    outFrequency(dia) {
      dia = new Date(this.date.getFullYear(), this.date.getMonth(), dia);
      if (this.daysOutFrequency.length > 0) {
        return this.daysOutFrequency.some((date) => {
          return date.getFullYear() === dia.getFullYear() && date.getMonth() === dia.getMonth() && date.getDate() === dia.getDate();
        });
      }
      return false;
    },
    async searchDays() {
      let fromDate = this.fromDate;
      let toDate = this.toDate;
      if (fromDate === null) {
        await Swal.fire({
          icon: 'error',
          title: null,
          text: 'Debe seleccionar al menos la fecha de inicio.',
        });
        return;
      }
      CalendarDataService.getCalendarDates(fromDate, toDate)
          .then(response => {
            let newData = response.data;
            this.clearCalendar();
            this.setDaysInFrequency(newData['days_in_frequency']);
            this.setOutFrequencyDay(newData['days_out_frequency']);
            this.setDaysDisabled(newData['days_disabled']);
            this.setDaysReserved(newData['days_reserved']);
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
    }
  },
};
</script>

<style>
.date-title {
  font-size: 0.8rem;
  font-weight: bold;
  text-align: left;
}

.calendar-container {
  width: 95%;
  padding: 10px;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.calendario-dias-semana {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.calendario-dias-semana span {
  width: 14%;
  text-align: center;
  font-size: 0.8rem;
}

.calendario-dias-mes {
  display: flex;
  flex-wrap: wrap;
}

.calendario-dias-mes span {
  width: 13.6%;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
}


.calendario-dias-mes span.frequency {
  color: red;
  border: 1px black solid;
}

.calendario-dias-mes span.out-frequency {
  background-color: orangered;
  color: #fff;
  border: 1px orangered solid;
}

.calendario-dias-mes span.reserved {
  background-color: seagreen;
  color: #fff;
}

.calendario-dias-mes span.disabled {
  background-color: blanchedalmond;
  color: black;
}

.container-date {
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
}

.date-inputs {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.date-inputs label {
  margin-right: 10px;
}

</style>