<template>
  <div class="semesters-show">
    <h2>{{ semester.name }}</h2>
    <p>shifts: {{ semester.shift_by_times }}</p>
    <router-link to="/semesters">Back to all semesters</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      semester: {},
    };
  },
  created: function() {
    axios.get("/api/semesters/" + this.$route.params.id).then(response => {
      console.log("semesters show", response);
      this.semester = response.data;
    });
  },
  methods: {},
};
</script>
