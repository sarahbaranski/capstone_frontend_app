<template>
  <div class="shifts-index">
    <h1>All Students Availability</h1>
    <div v-for="shift in shifts" v-bind:key="shift.id">
      <div v-if="shift.requested === true">
        <h2>{{ shift.student_name }}</h2>
        <p>Day: {{ shift.day }}</p>
        <p>Time: {{ shift.time }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student_id: this.student_id,
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
