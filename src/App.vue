<template>
  <h1>{{ message }}</h1>
  <button @click="removeItem">Remove Item</button>
  <div id="wrapper">
    <food-item v-for="food in foods" :key="food.id" :food-id="food.id" :food-name="food.name" :food-desc="food.desc"
      :is-favorite="food.favorite" @toggle-Favorite="receiveEmit" />
  </div>
</template>

<script>
// 'export default' makes it possible for 'main.js' to catch the data with the import App from './App.vue' so that it can be mounted on the ''<div id = "app">'' tag inside 'index.html'.
export default {
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
      ]
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
</style>