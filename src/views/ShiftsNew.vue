<template>
  <div class="semesters-show">
    <h1>Mark all available Shifts</h1>
    <form v-on:submit.prevent="createShift()">
      <div v-for="shift in semester.shifts" v-bind:key="shift.id">
        <h3>{{ shift.day }} {{ shift.time }}</h3>
        <input type="checkbox" v-bind:id="`checkbox${shift.id}`" v-bind:value="shift.id" v-model="shiftIds" />
        <label v-bind:for="`checkbox${shift.id}`">Requested</label>
      </div>
      <input type="submit" value="Create" />
    </form>
    <section>
      <h3 class="major">Mark all available Shifts</h3>
      <h4></h4>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Requested</th>
            </tr>
          </thead>
          <div v-for="shift in semester.shifts" v-bind:key="shift.id">
            <tbody>
              <tr>
                <td>{{ shift.day }}</td>
                <td>{{ shift.time }}</td>
                <td>
                  <input type="checkbox" v-bind:id="`checkbox${shift.id}`" v-bind:value="shift.id" v-model="shiftIds" />
                  <label v-bind:for="`checkbox${shift.id}`"></label>
                </td>
              </tr>
            </tbody>
          </div>
          <tfoot>
            <tr>
              <td colspan="2"></td>
              <td><input type="submit" value="Create" /></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      semester: {},
      shiftIds: [],
    };
  },
  created: function() {
    axios.get("/api/semesters/" + this.$route.params.id).then(response => {
      console.log("semesters show", response);
      this.semester = response.data;
    });
  },
  methods: {
    createShift: function() {
      console.log(this.shiftIds);
      var params = {
        semester_id: this.$route.params.id,
        shift_ids: this.shiftIds,
      };
      console.log(params);
      axios
        .post("/api/shift_requests_all", params)
        .then(response => {
          console.log("shifts create", response);

          // this.$router.push("/shifts");
        })
        .catch(error => {
          console.log("shifts create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
