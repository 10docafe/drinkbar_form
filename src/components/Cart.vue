<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-row justify="center">
              <h3>注文内容</h3>
            </v-row>
          </v-card-title>

          <v-card-text v-if="drinks.length > 0" c>
            <template class="mt-2">
              <!-- <span>ドリンク</span> -->
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left"></th>
                      <th class="text-left">商品</th>
                      <th class="text-left">値段</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(drink, index) in drinks" :key="index">
                      <v-btn @click="deleteItem(index, 'drink')" icon class="pt-3">
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                      <td>{{ drink.name }}</td>
                      <td>0</td>
                      <!-- <td>{{ drink.price }}</td> -->
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </v-card-text>

          <template v-if="drinks.length <= 0">
            <v-row justify="center">
              <h4>注文内容はありません。</h4>
            </v-row>
          </template>

          <template v-if="drinks.length > 0">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left"></th>
                    <th class="text-left"></th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>合計</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>

          <v-row v-if="drinks.length > 0" align="center" justify="center">
            <v-col class="d-flex" cols="8" sm="6">
              <v-select :items="seats" v-model="selectedSeat" outlined label="席番号(ビラに書いてあります)"></v-select>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-row justify="center" v-if="drinks.length > 0 && selectedSeat.length > 0">
              <Dialog @doOrder="doOrder"></Dialog>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    {{ name }}
  </v-container>
</template>

<script lang="ts">
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Vue, { PropType } from "vue";
import Dialog from "../components/Dialog.vue";
import liff from "@line/liff";
import { flexMsg } from "../flexMsg";

interface Drink {
  name: string;
  price: number;
}
interface Item {
  drink: Drink[];
}
interface Msg {
  price: number;
  item: Item;
}

export default Vue.extend({
  name: "Cart",
  components: {
    Dialog
  },
  props: {
    drinksProp: {
      type: Array as PropType<Drink[]>
    }
  },
  data() {
    return {
      drinks: this.drinksProp,
      mainPrice: 0,
      sidesPrice: 0,
      drinkPrice: 0,
      name: "",
      seats: [
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "A8",
        "B1",
        "B2",
        "B3",
        "B4",
        "C1",
        "C2",
        "D1",
        "D2",
        "E1",
        "E2",
        "F1"
      ],
      selectedSeat: ""
    };
  },
  watch: {
    drinks() {
      this.drinkPrice = 0;
      this.drinks.forEach(drink => {
        this.drinkPrice += drink.price;
      });
    }
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    total(this: any) {
      return this.drinkPrice;
    }
  },
  methods: {
    createMsg(data: Msg) {
      flexMsg.contents.header.contents[0].text = `ご注文内容(${this.selectedSeat})`;

      //値段の表示
      flexMsg.contents.body.contents[6].contents![2].text = `${data.price}円`;

      //ドリンク
      if (data.item.drink.length > 0) {
        data.item.drink.forEach(drink => {
          const content = {
            type: "text",
            text: drink.name,
            size: "xs",
            gravity: "top",
            weight: "regular"
          };
          flexMsg.contents.body.contents[4].contents?.push(content);
        });
      }
    },
    sendMessages(data: Msg) {
      //JSONに送信データを追加
      this.createMsg(data);
      console.log(flexMsg);
      liff
        .sendMessages([JSON.parse(JSON.stringify(flexMsg))])
        .then(() => {
          liff.closeWindow();
          console.log("message sent");
        })
        .catch((err: any) => {
          this.$emit("err", err);
          console.log("error", err);
        });
    },
    doOrder() {
      // const url = "https://us-central1-takeout-form.cloudfunctions.net/api";
      const data = {
        price: this.total,
        item: {
          drink: this.drinks
        }
      };
      this.sendMessages(data);
      /*
      axios.post(url, data).catch(err => {
        console.log(err);
      });
      */
    },
    deleteItem(index: number, kind: string): void {
      if (kind === "drink") this.drinks.splice(index, 1);
    }
  }
});
</script>

<style>
th.text-left {
  padding-top: 3px;
}
</style>

<style lang="scss" scoped>
h3 {
  font-family: "Big Shoulders Display", cursive;
  border-bottom: solid 3px #cce4ff;
  position: relative;
}
h3::after {
  position: absolute;
  content: " ";
  display: block;
  border-bottom: solid 3px #5472cd;
  bottom: -3px;
  width: 20%;
}
</style>
