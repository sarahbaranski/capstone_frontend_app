<template>
  <div class="semesters-show">
    <h1>Mark all available Shifts</h1>
    <form v-on:submit.prevent="createShift()">
      <h2>Monday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="mondaymorning" value="MondayMorning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="mondayafternoon" value="MondayAfternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="mondayevening" value="MondayEvening" v-model="checkedTimes" />
      </div>
      <h2>Tuesday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="tuesdaymorning" value="TuesdayMorning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="tuesdayafternoon" value="TuesdayAfternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="tuesdayevening" value="TuesdayEvening" v-model="checkedTimes" />
      </div>
      <h2>Wednesday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="wednesdaymorning" value="WednesdayMorning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="wednesdayafternoon" value="WednesdayAfternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="wednesdayevening" value="WednesdayEvening" v-model="checkedTimes" />
      </div>
      <h2>Thursday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="thursdaymorning" value="ThursdayMorning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="thursdayafternoon" value="ThursdayAfternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="thursdayevening" value="ThursdayEvening" v-model="checkedTimes" />
      </div>
      <h2>Friday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="fridaymorning" value="FridayMorning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="fridayafternoon" value="FridayAfternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="fridayevening" value="FridayEvening" v-model="checkedTimes" />
      </div>
      <h2>Saturday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="saturdaymorning" value="SaturdayMorning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="saturdayafternoon" value="SaturdayAfternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="saturdayevening" value="SaturdayEvening" v-model="checkedTimes" />
      </div>
      <h2>Sunday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="sundaymorning" value="SundayMorning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="sundayafternoon" value="SundayAfternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="sundayevening" value="SundayEvening" v-model="checkedTimes" />
      </div>
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      checkedTimes: [],
    };
  },
  created: function() {},
  methods: {
    createShift: function() {
      var params = {
        // semester: this.semester.id,
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
