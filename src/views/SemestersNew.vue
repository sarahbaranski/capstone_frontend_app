<template>
  <div class="semesters-new">
    <h1>New Semester</h1>
    <form v-on:submit.prevent="createSemester()">
      <ul>
        <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newSemesterName" />
      Start Date:
      <input type="text" v-model="newSemesterStartDate" />
      End Date:
      <input type="text" v-model="newSemesterEndDate" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newSemesterName: "",
      newSemesterStartDate: "",
      newSemesterEndDate: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    createSemester: function() {
      var params = {
        name: this.newSemesterName,
        width: this.newSemesterStartDate,
        height: this.newSemesterEndDate,
      };
      axios
        .post("/api/semesters", params)
        .then(response => {
          console.log("semesters create", response);
          this.$router.push("/semesters");
        })
        .catch(error => {
          console.log("semesters create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
