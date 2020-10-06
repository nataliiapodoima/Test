<template>
    <v-btn v-on:click="show()">Show details</v-btn>
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
    // button {
    //     padding: 1.1rem 1.5rem;
    //     background-color: #9c9;
    //     border-radius: 1rem;
    //     border: solid 2px #999;
    //     font-size: 1.2rem;
    // }
</style>