<template>
  <div class="semesters-show">
    <h2>{{ semester.name }}</h2>
    <div v-for="slot in semester.shift_by_times" v-bind:key="slot.day + slot.time">
      <table>
        <tr>
          <h3>
            <th>{{ slot.day }} {{ slot.time }}</th>
          </h3>
        </tr>
        {{ slot.students.length }} requested / {{ slot.total_required_staff }} required /
        {{ slot.students.filter(s => s.scheduled).length }} scheduled

        <ul>
          <li v-for="student in slot.students" v-bind:key="student.shift_id">
            {{ student.student_name }}
            <input v-on:change="updateStudentShift(student)" type="checkbox" v-model="student.scheduled" />
            Scheduled
          </li>
        </ul>
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
    updateStudentShift: function(student) {
      console.log(student);
      axios.patch("/api/shifts/" + student.shift_id, { requested: student.requested }).then(response => {
        console.log("shifts update", response);
        this.$router.push("/shifts");
      });
    },
  },
};
</script>
