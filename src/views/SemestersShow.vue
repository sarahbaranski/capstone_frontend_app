<template>
  <div class="semesters-show">
    <h2 class="major">{{ semester.name }}</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Students / Scheduled</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="shift in semester.shifts" v-bind:key="shift.id">
            <td>{{ shift.day }}</td>
            <td>{{ shift.time }}</td>
            <td>
              <div v-for="shift_request in shift.shift_requests" v-bind:key="shift_request.shift_id">
                {{ shift_request.student_name }}
                <input
                  v-on:change="updateStudentShift(shift_request)"
                  type="checkbox"
                  v-model="shift_request.scheduled"
                  v-bind:id="`checkbox${shift_request.id}`"
                />
                <label v-bind:for="`checkbox${shift_request.id}`"></label>
              </div>
            </td>
            <div v-bind:class="{ danger: checkOverscheduled(shift) }">
              <td>
                {{ shift.total_required_staff }} required /
                {{ shift.shift_requests.filter(s => s.scheduled).length }} scheduled
              </td>
            </div>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4"></td>
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
      student: {},
    };
  },
  created: function() {
    axios.get("/api/semesters/" + this.$route.params.id).then(response => {
      console.log("semesters show", response);
      this.semester = response.data;
    });
  },
  methods: {
    updateStudentShift: function(shift_request) {
      console.log(shift_request);
      axios.patch("/api/shift_requests/" + shift_request.id, { scheduled: shift_request.scheduled }).then(response => {
        console.log("shifts update", response);
      });
    },
    checkOverscheduled: function(shift) {
      console.log(shift);
      return shift.total_required_staff < shift.shift_requests.filter(s => s.scheduled).length;
    },
  },
};
</script>
