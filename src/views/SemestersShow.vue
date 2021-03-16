<template>
  <div class="semesters-show">
    <h2>{{ semester.name }}</h2>
    <div v-for="shift in semester.shifts" v-bind:key="shift.id">
      <table>
        <tr>
          <h3>
            <th>{{ shift.day }} {{ shift.time }}</th>
          </h3>
        </tr>
        <tr>
          {{ shift.shift_requests.length }} requested / {{ shift.total_required_staff }} required /
          {{ shift.shift_requests.filter(s => s.scheduled).length }} scheduled
        </tr>
        <td>
          <ul>
            <li v-for="shift_request in shift.shift_requests" v-bind:key="shift_request.shift_id">
              {{ shift_request.student_name }}
              <input
                v-on:change="updateStudentShift(shift_request)"
                type="checkbox"
                v-model="shift_request.scheduled"
                v-bind:id="`checkbox${shift_request.id}`"
              />
              <label v-bind:for="`checkbox${shift_request.id}`">Scheduled</label>
            </li>
          </ul>
        </td>
      </table>
    </div>
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
  methods: {
    updateStudentShift: function(shift_request) {
      console.log(shift_request);
      axios.patch("/api/shift_requests/" + shift_request.id, { scheduled: shift_request.scheduled }).then(response => {
        console.log("shifts update", response);
      });
    },
  },
};
</script>
