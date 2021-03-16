<template>
  <div class="semesters-index inner">
    <!-- Wrapper -->
    <section id="wrapper">
      <!-- One -->
      <section id="one" class="wrapper spotlight style1">
        <div class="inner">
          <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
          <div class="content">
            <h2 class="major">Magna arcu feugiat</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non,
              sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam
              ultrices, neque et faucibus viverra, ex nulla cursus.
            </p>
            <a href="#" class="special">Learn more</a>
          </div>
        </div>
      </section>
      <!-- Two -->
      <section id="two" class="wrapper alt spotlight style2">
        <div class="inner">
          <a href="#" class="image"><img src="images/pic02.jpg" alt="" /></a>
          <div class="content">
            <h2 class="major">Tempus adipiscing</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non,
              sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam
              ultrices, neque et faucibus viverra, ex nulla cursus.
            </p>
            <a href="#" class="special">Learn more</a>
            <h1>All Semesters</h1>
            <div v-for="semester in semesters" v-bind:key="semester.id">
              <h2>{{ semester.name }}</h2>
              <p>Start Date: {{ semester.start_date }}</p>
              <p>End Date: {{ semester.end_date }}</p>
              <router-link v-bind:to="`/semesters/${semester.id}/shifts/new`">Submit Availability</router-link>
              <div>
                <router-link v-bind:to="`/shifts`">Requested Shifts</router-link>
              </div>
              <div>
                <router-link v-bind:to="`/semesters/${semester.id}`">Requested Shifts in Semestershow</router-link>
              </div>
              <div>
                <router-link v-bind:to="`/semesters/${semester.id}/schedules`">Schedule</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
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
