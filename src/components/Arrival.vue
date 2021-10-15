<template>
    <div class="feature-category-area">
        <div class="section-title mb-30">
            <div class="title-icon">
                <i class="fa fa-gift"></i>
            </div>
            <h3>new arrivals</h3>
        </div>
        <!-- section title end -->
        <!-- featured category start -->
        <div class="container">
            <div class="featured-carousel-active2 row slick-arrow-style" data-row="2">
                <!-- product single item start -->
                <Product :x="product" v-for="product in products" :key="product.id" />
                <!-- product single item end -->
                <!-- product single item end -->
            </div>
        </div>
    </div>
</template>

<script>
    import Product from '@/components/Product.vue';
    import axios from 'axios';
    export default {
        components: {
            Product,
        },
        data() {
            return {
                products: ""
            }
        },
        mounted() {
            this.getProduct();
        },
        methods: {
            getProduct() {
                axios.get('https://fakestoreapi.com/products/category/jewelery')
                    .then((response) => {
                        console.log(response);
                        this.products = response.data
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        },
    }
</script>

<style scoped>

</style>