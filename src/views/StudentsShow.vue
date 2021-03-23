<template>
  <div class="students-show">
    <!-- <h2>{{ student.first_name }} {{ student.last_name }}</h2>
    <p>Email: {{ student.email }}</p>
    <p>Phone Number: {{ student.phone_number }}</p>

    <p>Requested Hours: {{ student.requested_hours }}</p>
    <p>Work Study Amount: {{ student.work_study }}</p>
    <div v-for="x in student.hours_each_semester" v-bind:key="x[0]">
      <p v-bind:class="{ dangertext: checkOverscheduled(x[1]) }">
        {{ x[0] }} : {{ x[1] }} hours ({{ semesterEarnings(x[1]) }} dollars earned )
      </p>
    </div> -->
    <!-- Four -->
    <section id="four" class="wrapper alt style1">
      <div class="inner">
        <h2 class="major">{{ student.first_name }} {{ student.last_name }}</h2>
        <section class="features">
          <article class="box">
            <a href="#" class="image"><img src="images/pic04.jpg" alt="" /></a>
            <h3 class="major">Student Information</h3>
            <p>
              <strong>Email:</strong>
              {{ student.email }}
            </p>
            <p>
              <strong>Phone Number:</strong>
              {{ student.phone_number }}
            </p>
            <p>
              <strong>Requested Hours:</strong>
              {{ student.requested_hours }}
            </p>
            <p>
              <strong>Work Study Amount:</strong>
              {{ student.work_study }}
            </p>
            <div v-for="x in student.hours_each_semester" v-bind:key="x[0]">
              <p v-bind:class="{ dangertext: checkOverscheduled(x[1]) }">
                {{ x[0] }} : {{ x[1] }} hours ({{ semesterEarnings(x[1]) }} dollars earned )
              </p>
            </div>
            <!-- <a href="#" class="special">Learn more</a> -->
          </article>
        </section>
        <ul class="actions">
          <!-- <li><a href="/semesters/:id/schedules" class="button">Back to all Requests</a></li> -->
        </ul>
      </div>
    </section>
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
