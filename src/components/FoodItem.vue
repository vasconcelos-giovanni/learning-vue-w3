<template>
    <div v-on:click="countClicks">
        <h2>{{ foodName }}
            <img src="/img_quality.svg" v-show="isFavorite">
        </h2>
        <p>{{ foodDesc }}</p>
        <p id="red"> You've clicked me {{ clicks }} times.</p>
        <button @click.stop="toggleFavorite">Favorie</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clicks: 0
        }
    },
    emits: [
        'toggle-favorite'
    ],
    methods: {
        countClicks() {
            this.clicks++;
        },
        onSubmit(event) {
            console.log(event)
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.foodId);
        }
    },
    props: {
        foodId: {
            type: Number,
            required: true
        },
        foodName: {
            type: String,
            required: true
        },
        foodDesc: {
            type: String,
            required: true,
            default: 'Default description',
            validator: function (value) {
                (20 < value.length && value.length < 50) ? true : false;
            }
        },
        isFavorite: {
            type: Boolean,
            required: true
        },
        emailProp: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped="true">
#red {
    font-weight: bold;
    color: rgb(144, 12, 12);
}

img {
    height: 1.5em;
    float: right;
}

p {
    color: crimson;
}
</style>