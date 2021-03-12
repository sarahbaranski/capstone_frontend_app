<template>
  <div class="semesters-show">
    <h1>Mark all available Shifts</h1>
    <form v-on:submit.prevent="createShifts()">
      <h2>Monday:</h2>
      Morning:
      <input type="checkbox" id="MondayMorning" value="MondayMorning" v-model="newMorningTime" />
      <br />
      Afternoon:
      <input type="checkbox" id="MondayAfternoon" value="MondayAfternoon" v-model="newAfternoonTime" />
      <br />
      Evening:
      <input type="checkbox" id="MondayEvening" value="MondayEvening" v-model="newEveningTime" />
      <br />
      <input type="submit" value="Create" />
      <h2>Tuesday:</h2>
      Morning:
      <input type="checkbox" id="checkbox" v-model="newMorningTime" />
      <br />
      Afternoon:
      <input type="checkbox" id="checkbox" v-model="newAfternoonTime" />
      <br />
      Evening:
      <input type="checkbox" id="checkbox" v-model="newEveningTime" />
      <br />
      <input type="submit" value="Create" />
      <h2>Wednesday:</h2>
      Morning:
      <input type="checkbox" id="checkbox" v-model="newMorningTime" />
      <br />
      Afternoon:
      <input type="checkbox" id="checkbox" v-model="newAfternoonTime" />
      <br />
      Evening:
      <input type="checkbox" id="checkbox" v-model="newEveningTime" />
      <br />
      <input type="submit" value="Create" />
      <h2>Thursday:</h2>
      Morning:
      <input type="checkbox" id="checkbox" v-model="newMorningTime" />
      <br />
      Afternoon:
      <input type="checkbox" id="checkbox" v-model="newAfternoonTime" />
      <br />
      Evening:
      <input type="checkbox" id="checkbox" v-model="newEveningTime" />
      <br />
      <input type="submit" value="Create" />
      <h2>Friday:</h2>
      Morning:
      <input type="checkbox" id="checkbox" v-model="newMorningTime" />
      <br />
      Afternoon:
      <input type="checkbox" id="checkbox" v-model="newAfternoonTime" />
      <br />
      Evening:
      <input type="checkbox" id="checkbox" v-model="newEveningTime" />
      <br />
      <input type="submit" value="Create" />
      <h2>Saturday:</h2>
      Morning:
      <input type="checkbox" id="checkbox" v-model="newMorningTime" />
      <br />
      Afternoon:
      <input type="checkbox" id="checkbox" v-model="newAfternoonTime" />
      <br />
      Evening:
      <input type="checkbox" id="checkbox" v-model="newEveningTime" />
      <br />
      <input type="submit" value="Create" />
      <h2>Sunday:</h2>
      Morning:
      <input type="checkbox" id="checkbox" v-model="newMorningTime" />
      <br />
      Afternoon:
      <input type="checkbox" id="checkbox" v-model="newAfternoonTime" />
      <br />
      Evening:
      <input type="checkbox" id="checkbox" v-model="newEveningTime" />
      <br />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newDay: "",
      newMorningTime: "",
      newAfternoonTime: "",
      newEveningTime: "",
    };
  },
  created: function() {},
  methods: {
    createShift: function() {
      var params = {
        day: this.newday,
        MorningTime: this.newMorningTime,
        AfternoonTime: this.newAfternoonTime,
        EveningTime: this.newEveningTime,
      };
      axios
        .post("/api/shifts", params)
        .then(response => {
          console.log("shifts create", response);
          this.$router.push("/shifts");
        })
        .catch(error => {
          console.log("shifts create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
