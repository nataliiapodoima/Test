<template>
    <div>
        <h1>Book {{ this.$route.params.id }}</h1>
        <router-link to="/catalog" id="back_arrow">&larr;&nbsp;Back</router-link>
        <div class="card">
            <img src="../assets/book.png" alt="book">
            <div class="card_text_part">
                <span class="card_item">Publish date: {{ book.PublishDate }}</span>
                <span class="card_item">{{ book.PageCount }} pages</span>
                <span class="card_item">{{ book.Excerpt }}</span>
                <span class="card_item">{{ book.Description }}</span>
                <button class="card_item button" v-on:click="() => this.$store.commit('increment', this.$route.params.id)">Add to cart</button>
            </div>            
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Data from '@/data/Data.ts';
import Book from '@/models/Book';



@Component
export default class BookPage extends Vue {

    // @Prop() private itemId: number = 0;

    booksUrl = "http://fakerestapi.azurewebsites.net/api/Books/";
    book = new Book();

    mounted() {
        Data.getData(this.booksUrl + this.$route.params.id)
        .then((response: any) => {
            this.book = response.data;
            // console.log(this.book);

        }).catch((error: any) => {

        })
    }

    addToCart(id : number) {
        this.$store.commit('increment', id);
    }

}
</script>

<style lang="scss">
    #back_arrow {
        color: #9e9e9e;
        font-size: 1.5rem;
        text-transform: lowercase;
        text-decoration: none;
        display: inline-block;
        margin: 30px 0;
    }
    .card {
        display: flex;
        color: #bdbdbd;
        background-color: #000;
        margin: 1rem;
        padding: 3rem;
        border-radius: 1rem;

        img {
            width: 50%;
        }
        .card_text_part {
            text-align: left;
            padding-left: 3rem;
            

            .card_item {
                display: block;
                margin: 1rem;
            }
            .button {
                margin: 1rem;
                padding: 20px;
                color: #000;
                background-color: #64DD17;
                border-radius: .5rem;
            }
        }
        
    }
    
</style>
