<template>
  <div class="semesters-index">
    <h1>All Semesters</h1>
    <div v-for="semester in semesters" v-bind:key="semester.id">
      <h2>{{ semester.start_date }}</h2>
      <p>Start Date: {{ semester.start_date }}</p>
      <p>End Date: {{ semester.end_date }}</p>
      <router-link v-bind:to="`/semesters/${semester.id}`">Submit Availability</router-link>
      <div>
        <router-link v-bind:to="`/shifts`">Requested Shifts</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      semesters: [],
    };
  },
  created: function() {
    axios.get("/api/semesters").then(response => {
      console.log("semesters index", response);
      this.semesters = response.data;
    });
  },
  methods: {},
};
</script>
