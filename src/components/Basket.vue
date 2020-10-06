<template>
<router-link to="/basket">
    <div id="basket">
        <div id="basket_counter">{{ this.$store.getters.getTotalQuantity }}</div>
    </div>
</router-link>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Basket extends Vue {

    // showTotalQuantity() {
    //     this.$store.getters.getTotalQuantity ? this.$store.getters.getTotalQuantity : 0;
    // }

}
</script>

<style lang="scss">
    #basket {
        position: absolute;
        top: 25px;
        right: 40px;
        width: 50px;
        height: 50px;
        background-image: url('../assets/basket.png');
        background-repeat: no-repeat;
        background-size: cover;

        #basket_counter {
            position: absolute;
            top: -15px;
            right: -15px;
            background: #f00;
            color: #fff;
            width: 25px;
            height: 25px;
            border-radius: 35px;
            font-size: 16px;
            font-weight: 600;
            padding-top: 2px;
        }
    }
</style>