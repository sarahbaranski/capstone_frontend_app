<template>
  <div class="schedules-show">
    <h2 class="major">{{ semester.name }} Schedule</h2>
    <h3>
      <p>
        Semester Start Date:
        {{ semester.start_date }}
      </p>
      <p>
        Semester End Date:
        {{ semester.end_date }}
      </p>
    </h3>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>
              <select v-model="selectedStudent">
                <option>All Students</option>
                <option v-for="student in students" v-bind:key="student">{{ student }}</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody v-for="shift in semester.shifts" v-bind:key="shift.id">
          <tr v-if="validShift(shift)">
            <td>{{ shift.day }}</td>
            <td>{{ shift.time }}</td>
            <td>
              <div v-for="shift_request in shift.shift_requests" v-bind:key="shift_request.id">
                <div v-if="shift_request.scheduled === true">
                  {{ shift_request.student_name }}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2"></td>
            <td><router-link to="/semesters">Back to all semesters</router-link></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      semester: {},
      shift: {},
      shift_request: [],
      selectedStudent: "All Students",
    };
  },
  created: function() {
    axios.get("/api/semesters/" + this.$route.params.id).then(response => {
      console.log("schedules show", response);
      this.semester = response.data;
    });
  },
  computed: {
    students: function() {
      var result = [];
      this.semester.shifts.forEach(shift => {
        shift.shift_requests.forEach(shift_request => {
          result.push(shift_request.student_name);
        });
      });
      return [...new Set(result)];
    },
  },
  methods: {
    validShift: function(shift) {
      var isScheduled = shift.shift_requests.filter(r => r.scheduled).length > 0;
      var isStudent =
        shift.shift_requests.filter(r => r.student_name === this.selectedStudent && r.scheduled).length > 0;
      if (this.selectedStudent === "All Students") {
        isStudent = true;
      }
      return isScheduled && isStudent;
    },
  },
};
</script>
