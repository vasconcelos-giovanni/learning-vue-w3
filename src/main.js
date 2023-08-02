/* -------------------------------------------------------------------------- */
/*                    main.js tells how to run the Vue code                   */
/* -------------------------------------------------------------------------- */

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import FoodItem from "./components/FoodItem.vue";
import TodoItem from "./components/TodoItem.vue";
import FoodSlot from "./components/FoodSlot.vue";
import Routed from "./components/Routed.vue";

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes: [{ path: "/", component: Routed }],
});

const app = createApp(App);
app.use(router);
app.component("food-item", FoodItem);
app.component("todo-item", TodoItem);
app.component("food-slot", FoodSlot);

app.mount("#app");
