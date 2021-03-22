<template>
  <div class="students-show">
    <h2>{{ student.first_name }} {{ student.last_name }}</h2>
    <p>Email: {{ student.email }}</p>
    <p>Phone Number: {{ student.phone_number }}</p>

    <p>Requested Hours: {{ student.requested_hours }}</p>
    <p>Work Study Amount: {{ student.work_study }}</p>
    <div v-for="x in student.hours_each_semester" v-bind:key="x[0]">
      <p v-bind:class="{ dangertext: checkOverscheduled(x[1]) }">
        {{ x[0] }} : {{ x[1] }} hours ({{ semesterEarnings(x[1]) }} dollars earned )
      </p>
    </div>
  </div>
</template>

<style scoped>
.dangertext {
  color: red;
}
</style>
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
  methods: {
    semesterEarnings: function(hours) {
      var earned = hours * 13 * 15;
      return earned;
    },
    checkOverscheduled: function(hours) {
      var isOverhours = hours > this.student.requested_hours;
      var isOverpaid = this.semesterEarnings(hours) > this.student.work_study;
      return isOverhours || isOverpaid;
    },
  },
};
</script>
