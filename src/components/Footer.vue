<template>
  <footer>
    <v-row justify="center">
      <v-col cols="12">
        <div class="text-center contact">
          <strong>Contact info</strong>
          <p>03-6912-6109</p>
          <p>10docafe@gmail.com</p>
          <a href="https://twitter.com/10docafe" target="_blank">
            <v-icon color="#55acee" size="70px" class="twitter">mdi-twitter</v-icon>
          </a>
          <a href="https://www.instagram.com/10docafe" target="_blank">
            <v-icon color="#d93177" size="70px" class="instagram">mdi-instagram</v-icon>
          </a>
          <hr class="socket" />
          <span>&copy;10°CAFE All Rights Reserved.</span>
        </div>
      </v-col>
    </v-row>
  </footer>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.contact {
  font-size: 2rem;
}

header {
  font-family: "M PLUS 1p";
}

footer {
  background: linear-gradient(
      -45deg,
      rgba(19, 84, 122, 0.5),
      rgba(128, 208, 199, 0.8)
    ),
    url("../assets/cafe.jpg");
  background-size: cover;
  font-family: "Big Shoulders Display", cursive;
  background-size: cover;
  color: black;
  padding: 2rem 0 2rem;
  margin-top: 4rem;
}

hr.socket {
  text-align: center;
  width: 100%;
  border-top: 0.2rem solid #666b71;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

span {
  font-size: 1.5rem;
}
</style>

<style lang="scss">
* :not(.v-icon) {
  font-family: "Big Shoulders Display", cursive;
}
.v-label .theme--light {
  font-family: "Big Shoulders Display", cursive !important;
}
</style>
