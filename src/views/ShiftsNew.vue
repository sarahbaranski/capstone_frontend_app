<template>
  <div class="semesters-show">
    <h1>Mark all available Shifts</h1>
    <form v-on:submit.prevent="createShift()">
      <h2>Monday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="mondaymorning" value="Monday:morning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="mondayafternoon" value="Monday:afternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="mondayevening" value="Monday:evening" v-model="checkedTimes" />
      </div>
      <h2>Tuesday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="tuesdaymorning" value="Tuesday:morning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="tuesdayafternoon" value="Tuesday:afternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="tuesdayevening" value="Tuesday:evening" v-model="checkedTimes" />
      </div>
      <h2>Wednesday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="wednesdaymorning" value="Wednesday:morning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="wednesdayafternoon" value="Wednesday:afternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="wednesdayevening" value="Wednesday:evening" v-model="checkedTimes" />
      </div>
      <h2>Thursday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="thursdaymorning" value="Thursday:morning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="thursdayafternoon" value="Thursday:afternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="thursdayevening" value="Thursday:evening" v-model="checkedTimes" />
      </div>
      <h2>Friday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="fridaymorning" value="Friday:morning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="fridayafternoon" value="Friday:afternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="fridayevening" value="Friday:evening" v-model="checkedTimes" />
      </div>
      <h2>Saturday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="saturdaymorning" value="Saturday:morning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="saturdayafternoon" value="Saturday:afternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="saturdayevening" value="Saturday:evening" v-model="checkedTimes" />
      </div>
      <h2>Sunday:</h2>
      <div>
        Morning:
        <input type="checkbox" id="sundaymorning" value="Sunday:morning" v-model="checkedTimes" />
      </div>
      <div>
        Afternoon:
        <input type="checkbox" id="sundayafternoon" value="Sunday:afternoon" v-model="checkedTimes" />
      </div>
      <div>
        Evening:
        <input type="checkbox" id="sundayevening" value="Sunday:evening" v-model="checkedTimes" />
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
      console.log(this.checkedTimes);
      var params = {
        semester_id: this.$route.params.id,
        checked_times: this.checkedTimes,
      };
      axios
        .post("/api/shifts_all", params)
        .then(response => {
          console.log("shifts create", response);
          // this.$router.push("/shifts");
        })
        .catch(error => {
          console.log("shifts create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
