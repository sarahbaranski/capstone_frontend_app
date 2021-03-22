<template>
  <div class="schedules-index">
    <h1>All semesters</h1>
    <div>
      <p>
        <select v-model="selectedSemester">
          <option>All Semesters</option>
          <option v-for="semester in semesters" v-bind:key="semester.id">{{ semester.name }}</option>
        </select>
      </p>
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
      this.semesters = response.data.semesters;
    });
  },
  methods: {},
};
</script>
