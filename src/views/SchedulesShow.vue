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
            <th>Students</th>
          </tr>
        </thead>
        <tbody v-for="shift in semester.shifts" v-bind:key="shift.id">
          <tr v-if="shift.shift_requests.filter(r => r.scheduled).length > 0">
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
    };
  },
  created: function() {
    axios.get("/api/semesters/" + this.$route.params.id).then(response => {
      console.log("schedules show", response);
      this.semester = response.data;
    });
  },
  // methods: {
  //   updateStudentShift: function(shift_request) {
  //     console.log(shift_request);
  //     // axios.patch("/api/shift_requests/" + shift_request.id, { scheduled: shift_request.scheduled }).then(response => {
  //     //   console.log("shifts update", response);
  //     });
  //   },
  // },
};
</script>
