<template>
  <div class="students-show">
    <h2>{{ student.first_name }} {{ student.last_name }}</h2>
    <p>Email: {{ student.email }}</p>
    <p>Phone Number: {{ student.phone_number }}</p>
    <p>Requested Hours: {{ student.requested_hours }}</p>
    <p>Work Study Amount: {{ student.work_study }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student: {},
    };
  },
  created: function() {
    axios.get("/api/students/" + this.$route.params.id).then(response => {
      console.log("students show", response);
      this.student = response.data;
    });
  },
  methods: {},
};
</script>
