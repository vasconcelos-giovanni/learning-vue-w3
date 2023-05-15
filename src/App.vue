<template>
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

  <div id="to-do-example">
    <h1>To-do list</h1>
    <ul>
      <todo-item v-for="item in items" :key="item" :item-name="item" style="background-color: lightgreen;" />
    </ul>
    <input v-model="newItem" />
    <button @click="addItem">Add</button>
  </div>

  <div id="foods-example">
    <h1>Foods</h1>
    <button @click="removeItem">Remove Item</button>
    <div id="wrapper">
      <food-item v-for="food in foods" :key="food.id" :food-id="food.id" :food-name="food.name" :food-desc="food.desc"
        :is-favorite="food.favorite" @toggle-Favorite="receiveEmit" />
    </div>
  </div>

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
import SlotComp from "./components/SlotComp.vue";

// 'export default' makes it possible for 'main.js' to catch the data with the import App from './App.vue' so that it can be mounted on the ''<div id = "app">'' tag inside 'index.html'.
export default {
  components: {
    'slot-comp': SlotComp
  },
  data() {
    return {
      foods: [
        {
          id: 1,
          name: 'Apples',
          desc: 'Apples are a type of fruit that grow on trees.',
          favorite: true
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
          favorite: false
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
      items: ['Buy apples', 'Make pizza', 'Mow the lawn']
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
      foundFood.favorite = !foundFood.favorite;
    },
    addItem() {
      this.items.push(this.newItem),
        this.newItem = '';
    }
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