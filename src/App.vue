<template>
  <div id="app">
    <!-- Page Wrapper -->
    <div id="page-wrapper">
      <!-- Header -->
      <header id="header" class="alt">
        <h1><a href="index.html">Solid State</a></h1>
        <nav>
          <a href="#menu">Menu</a>
        </nav>
      </header>
      <router-view />

      <!-- Footer -->
      <section id="footer">
        <div class="inner">
          <h2 class="major">Contact us</h2>
          <p>
            Please contact us for more information concerning your scheduling needs.
          </p>
          <form method="post" action="#">
            <div class="fields">
              <div class="field">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div class="field">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
            </div>
            <ul class="actions">
              <li><input type="submit" value="Send Message" /></li>
            </ul>
          </form>
          <ul class="contact">
            <li class="icon solid fa-home">
              Kevco Inc
              <br />
              1234 Somewhere Road Suite #2894
              <br />
              Chicago, IL 00000-0000
            </li>
            <li class="icon solid fa-phone">(866) 555-0000</li>
            <li class="icon solid fa-envelope"><a href="#">wami@kevco.org</a></li>
            <!-- <li class="icon brands fa-twitter"><a href="#">twitter.com/untitled-tld</a></li>
            <li class="icon brands fa-facebook-f"><a href="#">facebook.com/untitled-tld</a></li>
            <li class="icon brands fa-instagram"><a href="#">instagram.com/untitled-tld</a></li> -->
          </ul>
          <ul class="copyright">
            <li>&copy; Kevco Inc. All rights reserved.</li>
          </ul>
        </div>
      </section>
    </div>
    <nav id="menu">
      <div class="inner">
        <h2>Menu</h2>
        <ul class="links">
          <li><a href="/">Home</a></li>
          <li><a href="/semesters">Semesters</a></li>
          <li><a href="/semesters/new">New Semester</a></li>
          <li><a v-if="!isLoggedIn()" href="/signup">Sign Up</a></li>
          <li><a v-if="!isLoggedIn()" href="/login">Log In</a></li>
          <li><a v-if="isLoggedIn()" href="/logout">Log Out</a></li>
        </ul>
        <a href="#" class="close">Close</a>
      </div>
    </nav>
  </div>
</template>

<style></style>

<script>
export default {
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },
  },
};
</script>
