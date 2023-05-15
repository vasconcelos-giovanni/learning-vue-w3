<!-- <template>
    <slot name="uniqueSlot" :localData="data"></slot>
</template> -->

<template>
    <div>
        <slot :giovanni="giovanni" :home="home"></slot>
        <slot name="namedSlot" :alicia="alicia" :aliciaHome="aliciaHome"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            giovanni: 'Giovanni is learning Vue',
            home: 'Canada',
            alicia: 'Alicia is perfect',
            aliciaHome: 'Los Angeles'
        }
    }
}
</script>