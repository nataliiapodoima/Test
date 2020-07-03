<template>
    <div class="item">
        
    </div>
</template>


<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CartItem extends Vue {
    @Prop() private items:any;
}

</script>



