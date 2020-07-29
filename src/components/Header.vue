<template>
  <header>
    <v-card width="100%">
      <v-app-bar
        absolute
        color="#fcb69f"
        dark
        shrink-on-scroll
        src="../assets/cafe.jpg"
        scroll-target="#scrolling-techniques-2"
      >
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
        </template>

        <v-toolbar-title>10°CAFE DrinkBar</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>

      <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="600">
        <v-container style="height: 130px;"></v-container>
      </v-sheet>
    </v-card>
  </header>
</template>

<script lang="ts">
export default {};
</script>

<style>
.v-application a {
  color: transparent !important;
}
</style>

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
