<template>
    <div>
        <h1>Catalog</h1>
        <p class="book_wrap" v-for="item in books" :key="item.ID">
            <img src="@/assets/book.png" alt="book">
            <ul>
                <li class="book_titile">{{ item.Title }}</li>
                <li class="book_publish_date">{{ item.PublishDate }}</li>
                <li class="book_page_count">{{ item.PageCount }} pages</li>
                <li class="book_excert">{{ item.Excerpt }}</li>
                <li class="book_description">{{ item.Description }}</li>
            </ul>
            <router-link :to="{ name: 'BookPage', params: { id: item.ID }}" class="show_details_link">Show details...</router-link>
        </p>
    </div>
</template>


<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Book from '@/models/Book.ts';
import Data from '@/data/Data.ts';
import URLs from '@/data/URLs.ts';
import BookPage from '@/views/BookPage.vue';

// const booksUrl='http://fakerestapi.azurewebsites.net/api/Books';

@Component({
})

export default class Catalog extends Vue {
    
    books = new Array<Book>();

    mounted() {
        Data.getData(URLs.booksUrl).then((response: any) => {
            this.books = response.data;

        }).catch((error:any)=>{
            
        })
    }
}

</script>


<style lang="scss">
h1 {
    width: 100%;
    padding: 2rem;
    background-color: #000;
    color: #fff;
    font-size: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
}
.book_wrap {
    display: inline-block;
    width: 30%;
    padding: 1rem;
    margin: .5rem;

    img {
        width: 50%;
    }

    ul {
        padding: 0;

        li {
            list-style: none;
            padding-bottom: 10px;


            img {
                max-width: 100%;
            }
            // .book_titile, .book_publish_date, .book_page_count, .book_excert, .book_description {
            // }
        }
        .book_titile {
            font-size: 1.3rem;
            text-transform: uppercase;
        }
    }
}
.show_details_link {
    color: #64DD17 !important;
}
</style>
