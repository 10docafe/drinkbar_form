<template>
  <v-list>
    <v-list-group v-for="drink in drinks" :key="drink.genre" no-action>
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="drink.genre"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item v-for="drink in drink.data" :key="drink.name">
        <v-list-item-content>
          <v-row justify="center">
            <v-col cols="8" class="d-flex flex-row align-center">
              <v-row justify="center">
                <h4 class="pt-3">{{ drink.name }}</h4>
              </v-row>
            </v-col>
            <v-row justify="center">
              <v-row justify="center" class="pt-3">
                <v-btn @click="addItem(drink.name)">追加</v-btn>
              </v-row>
            </v-row>
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { drinkData } from "../db/drink";

interface Menus {
  tab: string;
  content: string;
}

export default Vue.extend({
  name: "Drink",
  data() {
    return {
      drinks: drinkData,
      selected: ""
    };
  },
  methods: {
    addItem(name: string, price: number): void {
      this.$emit("addDrink", { name, price });
    }
  }
});
</script>

<style>
.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 0px !important;
}
</style>
