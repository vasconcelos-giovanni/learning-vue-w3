<template>
    <form @submit.prevent="addItem">
        <h2>Add item</h2>
        <p>Item name: <input type="text" required v-model="itemName"></p>
        <p>How many: <input type="number" v-model="itemNumber"></p>
        <button type="submit">Add item</button>
    </form>
    <h3>Shopping list</h3>
    <ul>
        <li v-for="item in shoppingList">{{ item.number }} {{ item.name }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            itemName: null,
            itemNumber: null,
            shoppingList: [
                { name: 'Tomatoes', number: 5 }
            ]
        }
    },
    methods: {
        addItem() {
            // Create the item object
            const item = {
                name: this.itemName,
                number: this.itemNumber
            };

            this.shoppingList.push(item);

            // Clean the form
            this.itemName = null;
            this.itemNumber = null;
        }
    }
}
</script>