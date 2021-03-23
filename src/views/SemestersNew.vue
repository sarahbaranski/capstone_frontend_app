<template>
  <div class="semesters-new">
    <h1>Create a New Semester</h1>
    <form v-on:submit.prevent="createSemester()">
      <ul>
        <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newSemesterName" />
      Start Date:
      <input type="date" v-model="newSemesterStartDate" />
      End Date:
      <input type="date" v-model="newSemesterEndDate" />
      <br />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<style scoped>
.semesters-new {
  margin: 4em;
}
form {
  padding: 2em;
}
input[type="date"] {
  width: 65%;
  margin-top: 0.25em;
  margin-bottom: 0.75em;
}

input[type="text"] {
  width: 65%;
  margin-top: 0.25em;
  margin-bottom: 0.75em;
}
</style>

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
        start_date: this.newSemesterStartDate,
        end_date: this.newSemesterEndDate,
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
