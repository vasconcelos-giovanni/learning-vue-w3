/* -------------------------------------------------------------------------- */
/*                    main.js tells how to run the Vue code                   */
/* -------------------------------------------------------------------------- */

import { createApp } from 'vue';
import App from './App.vue';

import FoodItem from "./components/FoodItem.vue";

const app = createApp(App);
app.component('food-item', FoodItem);

app.mount('#app');
