<template>
  <div class="shifts-index">
    <h1>All Students Availability</h1>
    <div v-for="shift in shifts" v-bind:key="shift.id">
      <h2>{{ shift.student_id }}</h2>
      <p>Day: {{ shift.student_id.day }}</p>
      <p>Time: {{ shift.id.time }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student_id: "",
      shifts: [],
    };
  },
  created: function() {
    axios.get("/api/shifts").then(response => {
      console.log("shifts index", response);
      this.shifts = response.data;
    });
  },
  methods: {},
};
</script>
