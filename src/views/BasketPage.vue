<template>
    <div>
        <h1>Basket</h1>
        <div v-for="book in booksInBasket" :key="book.id">
            <p class="book_row">
                <span class="book_name">Book {{ book.id }}</span>
                <span class="book_quantity">quantity: {{ book.quantity }}</span>
                <span class="increment_quantity" v-on:click="incrementQuantity(book.id)"></span>
                <span class="decrement_quantity" v-on:click="decrementQuantity(book.id)"></span>
                <span class="delete_from_cart" v-on:click="deleteFromBasket(book.id)"></span>
            </p>
        </div>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="800px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on" class="checkout_btn">
                        Checkout
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">Checkout</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-form 
                            ref="form" 
                            id="form" 
                            @submit="formIsSubmitted()" 
                            action="#" 
                            method="post">
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="First name*"
                                    v-model="firstname"
                                    :counter="10"
                                    :rules="nameRules"
                                    required ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Middle name">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Last name*" 
                                    v-model="lastname"
                                    :counter="10"
                                    :rules="nameRules"
                                    required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Email*" 
                                    v-model="email"
                                    :rules="emailRules"
                                    required
                                    type="email" ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Phone number*" 
                                    type="tel" 
                                     v-model="phone"
                                    :rules="phoneRules"
                                    placeholder="380998887766"
                                    required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-radio-group v-model="row" row>
                                        <v-radio label="Delivery to your adress" value="delivery"></v-radio>
                                        <v-radio label="Nova poshta" value="novaposhta"></v-radio>
                                        <v-radio label="Pickup from the store" value="from_the_store"></v-radio>
                                    </v-radio-group>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-dialog ref="dialog1" v-model="modal" :return-value.sync="date" persistent
                                        width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="date" label="Pick a date" readonly
                                                v-bind="attrs" v-on="on"></v-text-field>
                                        </template>
                                        <v-date-picker v-if="modal" v-model="date" scrollable>
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                            <v-btn text color="primary" @click="$refs.dialog1.save(date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-dialog>
                                </v-col>
                                <v-col cols="11" sm="5">
                                    <v-dialog ref="dialog2" v-model="modal2" :return-value.sync="time" persistent
                                        width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="time" label="Pick a time"
                                                 readonly v-bind="attrs" v-on="on">
                                            </v-text-field>
                                        </template>
                                        <v-time-picker v-if="modal2" v-model="time" full-width>
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
                                            <v-btn text color="primary" @click="$refs.dialog2.save(time)">OK</v-btn>
                                        </v-time-picker>
                                    </v-dialog>
                                </v-col>
                            </v-row>
                            </v-form>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red darken-1" text @click="dialog = false" type="reset">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="sendOrder()" type="submit">Order</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Basket extends Vue {
    
    dialog = false;
    column = null;
    row = null;
    date = new Date().toISOString().substr(0, 10);
    menu = false;
    modal = false;
    menu2 = false;
    time = null;
    modal2 = false;
    valid = false;
    firstname = '';
    lastname = '';
    nameRules = [
        (v: any) => !!v || 'Name is required',
        (v: any) => v.length <= 10 || 'Name must be less than 10 characters',
      ];
    email = '';
    emailRules = [
        (v: any) => !!v || 'E-mail is required',
        (v: any) => new RegExp('.+@.+').test(v) || 'E-mail must be valid',
      ];
    phone = '';
    phoneRules = [
        (v: any) => !!v || 'Phone number is required', 
        (v: any) => new RegExp('^[0-9\+]{8,13}$').test(v) || 'Phone number must be walid'
    ];
    booksInBasket = this.$store.state.basket;

    deleteFromBasket(id: number) {
        this.$store.commit('remove', id);
    }
    decrementQuantity(id: number) {
        this.$store.commit('decrement', id)
    }
    incrementQuantity(id: number) {
        this.$store.commit('increment', id)
    }
    sendOrder() {
        if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
            this.$store.commit('clean');
            this.dialog = false;
        } else {
            alert('Fill all fields of the form correctly please');
        }
    }
}
</script>

<style lang="scss">
    .book_row {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .book_name, .book_quantity, .delete_from_cart, .decrement_quantity, .increment_quantity {
        display: inline-block;
        font-size: 1.2rem;
        margin: 20px;
    }
    .delete_from_cart {
        background-image: url('../assets/remove.png');
        
    }
    .decrement_quantity {
        background-image: url('../assets/minus.png');
    }
    .increment_quantity {
        background-image: url('../assets/plus.png');
    }
    .delete_from_cart, .decrement_quantity, .increment_quantity {
        cursor: pointer;
        width: 30px;
        height: 30px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .checkout_btn {
        margin: 30px;
    }

</style>