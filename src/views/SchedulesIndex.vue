<template>
  <div class="schedules-index">
    <!-- <h1>Dashboard</h1> -->
    <div>
      <!-- <p>
        <select v-on:change="updateGraph()" v-model="selectedSemester">
          <option>Choose a Semester</option>
          <option v-for="semester in semesters" v-bind:key="semester.id" v-bind:value="semester">
            {{ semester.name }}
          </option>
        </select>
      </p>
      <div>
        <graph-pie
          :width="500"
          :height="500"
          :padding-top="100"
          :padding-bottom="100"
          :padding-left="100"
          :padding-right="100"
          :values="values"
          :names="names"
          :active-index="[0, 2]"
          :active-event="'click'"
          :show-text-type="'outside'"
          :data-format="dataFormat"
        >
          <legends :names="names"></legends>
          <tooltip :names="names"></tooltip>
        </graph-pie>
      </div> -->

      <section id="four" class="wrapper alt style1">
        <div class="inner">
          <h1 id="graph-heading">Semester Scheduling At A Glance</h1>
          <section class="features">
            <article class="box">
              <h3 class="major">
                <p>
                  <select v-on:change="updateGraph()" v-model="selectedSemester">
                    <option>Choose a Semester</option>
                    <option v-for="semester in semesters" v-bind:key="semester.id" v-bind:value="semester">
                      {{ semester.name }}
                    </option>
                  </select>
                </p>
              </h3>
              <div>
                <graph-pie
                  :width="400"
                  :height="500"
                  :padding-top="100"
                  :padding-bottom="100"
                  :padding-left="100"
                  :padding-right="100"
                  :values="values"
                  :names="names"
                  :active-index="[0, 2]"
                  :active-event="'click'"
                  :show-text-type="'outside'"
                  :data-format="dataFormat"
                >
                  <legends :names="names"></legends>
                  <tooltip :names="names"></tooltip>
                </graph-pie>
              </div>
            </article>
          </section>
          <!-- <ul class="actions">
            <li><a href="#" class="button">Browse All</a></li>
          </ul> -->
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.box {
  margin-left: 0em;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.major {
  margin-bottom: 2.5em;
}

#graph-heading {
  font-size: 22px;
}
select {
  width: 350px;
  margin-right: 1.5em;
}
</style>

<script>
import Vue from "vue";
import VueGraph from "vue-graph";

Vue.use(VueGraph);

import axios from "axios";
export default {
  data: function() {
    return {
      semesters: [],
      shifts: [],
      selectedSemester: "Choose a Semester",
      values: [20, 15],
      names: ["Scheduled", "Not-Scheduled"],
    };
  },
  created: function() {
    axios.get("/api/semesters").then(response => {
      console.log("semesters index", response);
      this.semesters = response.data.semesters;

      this.semesters.forEach(semester => {
        var scheduled = 0;
        var unscheduled = 0;
        semester.shifts.forEach(shift => {
          scheduled += Math.min(shift.shift_requests.filter(s => s.scheduled).length, shift.total_required_staff);
          unscheduled += Math.max(shift.total_required_staff - shift.shift_requests.filter(s => s.scheduled).length, 0);
        });
        console.log(semester.name, scheduled, unscheduled);
        semester.scheduled = scheduled;
        semester.unscheduled = unscheduled;
      });
      console.log(this.semesters);
      this.values = [this.semesters[0].scheduled, this.semesters[0].unscheduled];
    });
  },
  methods: {
    dataFormat: function(a, b) {
      if (b) return b + " shifts";
      return a;
    },
    updateGraph: function() {
      console.log(this.selectedSemester);
      this.values = [this.selectedSemester.scheduled, this.selectedSemester.unscheduled];
    },
  },
};
</script>
