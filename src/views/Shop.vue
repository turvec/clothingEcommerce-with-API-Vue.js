<template>
    <div>
        <!-- breadcrumb area start -->
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-wrap">
                            <nav aria-label="breadcrumb">
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <router-link to="/">Home</router-link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Shop</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- breadcrumb area end -->

        <!-- page wrapper start -->
        <div class="page-main-wrapper">
            <div class="container">
                <div class="row">
                    <!-- product main wrap start -->
                    <div class="col-12">
                        <div class="shop-banner img-full">
                            <img src="assets/img/banner/banner_static1.jpg" alt="">
                        </div>
                        <!-- product view wrapper area start -->
                        <div class="shop-product-wrapper pt-34">
                            <!-- shop product top wrap start -->
                            <div class="shop-top-bar">
                                <div class="row">
                                    <div class="col-lg-7 col-md-6">
                                        <div class="top-bar-left">
                                            <div class="product-view-mode mr-70 mr-sm-0">
                                                <a class="active" href="#" data-target="grid"><i
                                                        class="fa fa-th"></i></a>
                                                <router-link to="/shopList"><i class="fa fa-list"></i></router-link>

                                            </div>
                                            <div class="product-amount">
                                                <p>Showing 1–16 of 21 results</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-6">
                                        <div class="top-bar-right">
                                            <div class="product-short">
                                                <p>Sort By : </p>
                                                <select class="nice-select" name="sortby">
                                                    <option value="trending">Relevance</option>
                                                    <option value="sales">Name (A - Z)</option>
                                                    <option value="sales">Name (Z - A)</option>
                                                    <option value="rating">Price (Low &gt; High)</option>
                                                    <option value="date">Rating (Lowest)</option>
                                                    <option value="price-asc">Model (A - Z)</option>
                                                    <option value="price-asc">Model (Z - A)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- shop product top wrap start -->

                            <!-- product item start -->
                            <div class="shop-product-wrap grid row">
                                <Product :x="singleProduct" v-for="singleProduct in allProducts"
                                    :key="singleProduct.id" />
                            </div>
                            <!-- product item end -->
                        </div>
                        <!-- product view wrapper area end -->

                        <!-- start pagination area -->
                        <div class="paginatoin-area text-center pt-28">
                            <div class="row">
                                <div class="col-12">
                                    <ul class="pagination-box">
                                        <li><a class="Previous" href="#">Previous</a></li>
                                        <li class="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a class="Next" href="#"> Next </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- end pagination area -->

                    </div>
                    <!-- product main wrap end -->
                </div>
            </div>
        </div>
        <!-- page wrapper end -->


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
                allProducts: "",
            }
        },
        mounted() {
            this.getAllproduct();
        },
        methods: {
            getAllproduct() {
                axios.get('https://fakestoreapi.com/products')
                    .then((response) => {
                        console.log(response);
                        this.allProducts = response.data
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>