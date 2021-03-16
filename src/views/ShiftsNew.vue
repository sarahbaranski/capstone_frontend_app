<template>
  <div class="semesters-show">
    <h1>Mark all available Shifts</h1>
    <form v-on:submit.prevent="createShift()">
      <div v-for="shift in semester.shifts" v-bind:key="shift.id">
        <h2>{{ shift.day }} {{ shift.time }}</h2>
        <input type="checkbox" v-bind:id="`checkbox${shift.id}`" v-bind:value="shift.id" v-model="shiftIds" />
        <label v-bind:for="`checkbox${shift.id}`">Requested</label>
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
      semester: {},
      shiftIds: [],
    };
  },
  created: function() {
    axios.get("/api/semesters/" + this.$route.params.id).then(response => {
      console.log("semesters show", response);
      this.semester = response.data;
    });
  },
  methods: {
    createShift: function() {
      console.log(this.shiftIds);
      var params = {
        semester_id: this.$route.params.id,
        shift_ids: this.shiftIds,
      };
      console.log(params);
      axios
        .post("/api/shift_requests_all", params)
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
