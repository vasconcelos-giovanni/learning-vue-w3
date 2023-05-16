<template>
  <router-view></router-view>

  <h1>Food Kinds (Provide/Inject)</h1>
  <food-kinds />

  <hr />

  <div>
    <button @click="fetchDataWithFetch">Fetch data with fetch</button>
    <button @click="fetchDataWithAxios">Fetch data with Axios</button>
    <p v-if="fetchedData">
      {{ fetchedData }}
    </p>
    <p v-else>
      Nothing fetched yet.
    </p>
  </div>

  <hr />

  <p>The former next paragraph of here was teleported to &lt;body&gt; (page end).</p>
  <Teleport to="body">
    <hr />
    <p :style="teleportP">Giovanni is learning Vue!</p>
  </Teleport>

  <hr />

  <h1>Dynamic Components</h1>
  <p>App.vue switches between which component to show.</p>
  <button @click="toggleValue = !toggleValue">Switch component</button>
  <KeepAlive>
    <component :is="activeComp"></component>
  </KeepAlive>

  <hr />

  <vue-form />

  <hr />

  <slot-comp>
    <template v-slot="dataFromSlot">
      <h3>{{ dataFromSlot.giovanni }} and {{ dataFromSlot.home }} is his home.</h3>
      <pre>{{ dataFromSlot }}</pre>
    </template>
    <template #namedSlot="dataFromSlot">
      <h3>{{ dataFromSlot.alicia }} and {{ dataFromSlot.aliciaHome }} is her home.</h3>
      <pre>{{ dataFromSlot }}</pre>
    </template>
  </slot-comp>

  <hr />

  <div id="to-do-example">
    <h1>To-do list</h1>
    <ul>
      <todo-item v-for="item in items" :key="item" :item-name="item" style="background-color: lightgreen;" />
    </ul>
    <input v-model="newItem" />
    <button @click="addItem">Add</button>
  </div>

  <hr />

  <div id="foods-example">
    <h1>Foods</h1>
    <button @click="removeItem">Remove Item</button>
    <div id="wrapper">
      <food-item v-for="food in foods" :key="food.id" :food-id="food.id" :food-name="food.name" :food-desc="food.desc"
        :is-favorite="food.favorite" @toggle-Favorite="receiveEmit" />
    </div>
  </div>

  <hr />

  <div id="food-slots-example">
    <h1>Food cards</h1>
    <div id="wrapper2">
      <food-slot v-for="food in foods" :key="food.id" :food-id="food.id" :food-name="food.name">
        <template #topSlot>
          <h2>{{ food.name }}</h2>
          <p>{{ food.desc }}</p>
        </template>
      </food-slot>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import SlotComp from './components/SlotComp.vue';
import VueForm from './components/VueForm.vue';
import FoodKinds from './components/FoodKinds.vue';

// 'export default' makes it possible for 'main.js' to catch the data with the import App from './App.vue' so that it can be mounted on the ''<div id = "app">'' tag inside 'index.html'.
export default {
  components: {
    'slot-comp': SlotComp,
    'vue-form': VueForm,
    'food-kinds': FoodKinds
  },
  computed: {
    activeComp() {
      return (this.toggleValue) ? 'food-slot' : 'vue-form';
    }
  },
  data() {
    return {
      foods: [
        {
          id: 1,
          name: 'Apples',
          desc: 'Apples are a type of fruit that grow on trees.',
          favorite: false
        },
        {
          id: 2,
          name: 'Pizza',
          desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
          favorite: false
        },
        {
          id: 3,
          name: 'Rice',
          desc: 'Rice is a type of grain that people like to eat.',
          favorite: true
        },
        {
          id: 4,
          name: 'Fish',
          desc: 'Fish is an animal that lives in water.',
          favorite: true
        },
        {
          id: 5,
          name: 'Cake',
          desc: 'Cake is something sweet that tastes good.',
          favorite: false
        }
      ],
      newItem: '',
      items: ['Buy apples', 'Make pizza', 'Mow the lawn'],
      toggleValue: true,
      teleportP: 'font-weight: bold; color: blue;',
      fetchedData
        : null
      // foods: [
      //   { name: 'Pizza' },
      //   { name: 'Apple' },
      //   { name: 'Cake' },
      //   { name: 'Fish' },
      //   { name: 'Rice' }
      // ]
    }
  },
  methods: {
    removeItem() {
      this.foods.splice(1, 1);
    },
    receiveEmit(foodId) {
      const foundFood = this.foods.find(
        food => food.id === foodId
      );
      console.log('FOUND FOOD: ' + foundFood.name);
      foundFood.favorite = !foundFood.favorite;
    },
    addItem() {
      this.items.push(this.newItem),
        this.newItem = '';
    },
    async fetchDataWithFetch() {
      let data = await fetch('https://random-data-api.com/api/v2/users');
      data = await data.json();
      this.fetchedData = `${data.first_name} ${data.last_name}\'s name was fetched with \"fetch()\" and \"await\".`;
    },
    fetchDataWithAxios() {
      axios.get('https://random-data-api.com/api/v2/users')
        .then(
          randomUser => this.fetchedData = `${randomUser.data.first_name} ${randomUser.data.last_name}\'s name was fetched with Axios and \"then\".`
        )
        .catch(
          error => {
            console.log(error);
            this.fetchedData = 'Something  went wrong and nothing was fetched.'
          }
        );
    }
  },
  provide() {
    return {
      foods: this.foods
    }
  },
  updated() {
    console.log("This message refers to the value of the dynamic component exersise, the value of toggleValue, which is: " + this.toggleValue);
  }
}
</script>

<style>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}

#wrapper>div {
  border: dashed black 1px;
  flex-basis: 120px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}

#wrapper2 div {
  width: 150px;
}

#wrapper2 h4 {
  text-align: center;
}
</style>