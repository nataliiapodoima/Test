<template>
    <button v-on:click="show()">Show details</button>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DetailsButton extends Vue {
  @Prop() private itemId:any;

  show() {
      console.log(this.itemId);
  }
}
</script>

<style lang="scss">
    button {
        padding: 0.5rem;
        background-color: #0f3;
    }
</style>