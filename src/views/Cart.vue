<template>
    <div>
        <h1>Vue Cart</h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                <img :src="item.imgsrc" :alt="item.name">
                <div class="item_info_wrapper">
                    <div class="item_name">{{ item.name }}</div>
                    <div class="item_price">${{ item.price }}</div>
                    <DetailsButton :itemId="item.id" />
                </div>
            </li>
        </ul>
    </div>
</template>


<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Product from '@/models/Product.ts';
import DetailsButton from '@/components/DetailsButton.vue'

@Component({
  components: {
    DetailsButton
  }
})

export default class Cart extends Vue {
    items: Array<Product> = [
        new Product(1, 'Notebook 1', 30, require('@/assets/7nl76pa-hp-14s-dk0089au-14-inch-laptop.jpg')), 
        new Product(2, 'Notebook 2', 60, require('@/assets/80d57feac746c94ab094374eea5591662e90ff558c448b879c58861e57f882f7.jpg')), 
        new Product(3, 'Notebook 3', 50, require('@/assets/m509da-br139t-asus-vivobook-m509-laptop.jpg')), 
        new Product(4, 'Notebook 4', 45, require('@/assets/mi_note_1.jpg')), 
        new Product(5, 'Notebook 5', 55, require('@/assets/MicrosoftSurfaceLaptop3-15__1__02.jpg')), 
        new Product(6, 'Notebook 6', 85, require('@/assets/02107b3c662d9bcfb778e7b95aec7d0b625d08873db3ccdd143f266e905ebbda.jpg'))
    ]
}

</script>


<style lang="scss">
h1 {
    width: 100%;
    padding: 2rem;
    background-color: #000;
    color: #fff;
    font-size: 3rem;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
}
ul {
    display: flex;
    flex-wrap: wrap;
    li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        list-style: none;
        width: 30%;
        border: solid 1px #999;
        border-radius: .5rem;
        padding: 1rem;
        margin: .5rem;
        background-color: #fff;

        img {
            max-width: 100%;
        }

        .item_info_wrapper {

            .item_name {
                font-size: 1.5rem;
                font-weight: 600;
            }

            .item_price {
                font-style: italic;
                font-size: 1.2rem;
            }
        }
    }
}
</style>
