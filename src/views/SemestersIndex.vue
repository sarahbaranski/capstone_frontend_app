<template>
  <div class="semesters-index inner">
    <!-- Wrapper -->
    <section id="wrapper">
      <section id="banner">
        <div class="inner">
          <!-- <div class="logo"><span class="icon fa-gem"></span></div> -->
          <h2>All Semesters</h2>
          <p></p>
        </div>
      </section>
      <!-- One -->
      <section
        v-for="(semester, index) in semesters"
        v-bind:key="semester.id"
        class="wrapper spotlight"
        v-bind:class="{ style1: index % 2 === 0, style2: index % 2 === 1, alt: index % 2 === 1 }"
      >
        <div class="inner">
          <!-- <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a> -->
          <div class="content">
            <h2 class="major">{{ semester.name }}</h2>
            <p>Start Date: {{ semester.start_date }} End Date: {{ semester.end_date }}</p>
            <div v-if="is_student">
              <router-link class="special" v-bind:to="`/semesters/${semester.id}/shifts/new`">
                Submit Availability
              </router-link>
            </div>
            <div v-if="is_supervisor">
              <router-link class="special" v-bind:to="`/semesters/new`">
                Create New Semester/Shift
              </router-link>
            </div>
            <div v-if="is_supervisor">
              <router-link class="special" v-bind:to="`/semesters/${semester.id}`">
                Schedule Requested Shifts
              </router-link>
            </div>
            <router-link class="special" v-bind:to="`/semesters/${semester.id}/schedules`">View Schedule</router-link>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
.inner {
  margin-top: 0em;
  padding-top: 0em;
  margin-bottom: 0em;
}

.wrapper {
  margin-top: 1em;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      semesters: [],
      is_student: false,
      is_supervisor: true,
    };
  },
  created: function() {
    axios.get("/api/semesters").then(response => {
      console.log("semesters index", response);
      this.semesters = response.data.semesters;
      this.is_student = response.data.is_student;
      this.is_supervisor = response.data.is_supervisor;
    });
  },
  methods: {},
};
</script>
