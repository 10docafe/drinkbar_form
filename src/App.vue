<template>
  <v-app>
    <Header />
    <main class="mt-9">
      <v-row justify="center">
        <v-col cols="9">
          <h1 class="text-center">10°DrinkBar</h1>
          <v-row justify="center">
            <v-col cols="8">
              <h3 class="text-center mt-4">ご使用方法</h3>
            </v-col>
            <ol>
              <li class="mb-2">チェックボックスをタップするとカートに商品が入ります</li>
              <li class="mb-2">カートを確認の上、注文ボタンを押してください</li>
              <li>ご注文後のキャンセルはお早めにラインにてご連絡ください。</li>
            </ol>
          </v-row>
          <p></p>
        </v-col>
      </v-row>

      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <v-card>
              <v-tabs v-model="tab" grow color="white">
                <v-tab v-for="menu in menus" :key="menu">{{ menu }}</v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab">
                <!--ドリンク-->
                <v-tab-item>
                  <v-card flat>
                    <Drinks @addDrink="addDrink"></Drinks>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <Cart @err="catchErr" :drinksProp="drinks"></Cart>
    </main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Drinks from "@/components/Drinks.vue";
import Cart from "@/components/Cart.vue";
import liff from "@line/liff";

interface Drink {
  name: string;
  price: number;
}

interface Data {
  tab: "tab";
  menus: ["DRINK"];
  drinks: Drink[];
  loggedIn: boolean;
  inClient: boolean;
  apiLoading: boolean;
}

export default Vue.extend({
  name: "App",
  components: { Header, Footer, Drinks, Cart },
  data(): Data {
    return {
      tab: "tab",
      menus: ["DRINK"],
      drinks: [],
      loggedIn: false,
      inClient: false,
      apiLoading: false
    };
  },
  async created() {
    await this.initializeLiff();
  },
  methods: {
    async initializeLiff(): Promise<void> {
      this.apiLoading = true;
      try {
        const data = await liff.init({ liffId: "1654570764-zyxPpadK" });
        //this.initialized = true;
        // this.loggedIn = liff.isLoggedIn();
        // this.inClient = liff.isInClient();
        // if (this.loggedIn === true) console.log("Logged in!!");
        // else console.log("Not logged in!!");
        this.apiLoading = false;
      } catch (err) {
        throw new Error(err);
      }
    },

    addDrink(drink: Drink) {
      this.drinks.push(drink);
    },

    catchErr(err: any) {
      alert(`エラーが発生いたしました。
      もう一度ご注文をお願い致します。
      ${err}`);
    }
  }
});
</script>

<style>
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
  > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes)
  .v-slide-group__prev {
  display: none !important;
  visibility: hidden;
}
.v-slide-group__content {
  background: linear-gradient(
    rgba(19, 84, 122, 0.5),
    rgba(128, 208, 199, 0.8)
  ) !important;
}
.v-item-group {
  background: linear-gradient(
    rgba(19, 84, 122, 0.5),
    rgba(128, 208, 199, 0.8)
  ) !important;
}
.v-slide-group {
  background: linear-gradient(
    rgba(19, 84, 122, 0.5),
    rgba(128, 208, 199, 0.8)
  ) !important;
}
</style>

<style scoped>
h1,
h3 {
  font-family: "M PLUS 1p";
  border-bottom: solid 3px #cce4ff;
  position: relative;
}
h1:after,
h3::after {
  position: absolute;
  content: " ";
  display: block;
  border-bottom: solid 3px #5472cd;
  bottom: -3px;
  width: 20%;
}
</style>
