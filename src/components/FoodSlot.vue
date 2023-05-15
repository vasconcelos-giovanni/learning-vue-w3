<template>
    <div>
        <slot name="topSlot"></slot>
        <slot name="bottomSlot">
            <p>I am the fallback of the bottom <strike>slot</strike> paragraph</p>
        </slot>
    </div>
</template>

<style scoped="true">
div {
    background-color: lightgreen;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    flex-basis: 150px;
    border-radius: 10px;
    border: solid black 2px;
    margin: 10px;
    padding: 0px 10px 0 10px;
}

div:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

h4 {
    color: rgb(159, 0, 0);
}
</style>