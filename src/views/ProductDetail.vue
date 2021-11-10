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
                                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                    <li class="breadcrumb-item"><router-link to="/shop">Shop</router-link></li>
                                    <li class="breadcrumb-item active" aria-current="page">product details</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- breadcrumb area end -->

        <!-- product details wrapper start -->
        <div class="product-details-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <!-- product details inner end -->
                        <div class="product-details-inner">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="product-large-slider mb-20 slick-arrow-style_2">
                                        <div class="pro-large-img img-zoom" id="img1">
                                            <img :src="single.image" alt="" />
                                        </div>
                                    </div>
                                    <div class="pro-nav slick-padding2 slick-arrow-style_2">
                                       
                                        
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="product-details-des mt-md-34 mt-sm-34">
                                        <h3><a href="product-details.html">{{single.title}}</a></h3>
                                        <div class="ratings">
                                            <span class="good"><i class="fa fa-star"></i></span>
                                            <span class="good"><i class="fa fa-star"></i></span>
                                            <span class="good"><i class="fa fa-star"></i></span>
                                            <span class="good"><i class="fa fa-star"></i></span>
                                            <span><i class="fa fa-star"></i></span>
                                            <div class="pro-review">
                                                <span>1 review(s)</span>
                                            </div>
                                        </div>
                                        <div class="customer-rev">
                                            <a href="#">(1 customer review)</a>
                                        </div>
                                        <div class="availability mt-10">
                                            <h5>Availability:</h5>
                                            <span>1 in stock</span>
                                        </div>
                                        <div class="pricebox">
                                            <span class="regular-price">${{single.price}}</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                            voluptua.<br>
                                            Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse
                                            platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit.
                                            Mauris consequat nisi ut mauris efficitur lacinia.</p>
                                        <div class="quantity-cart-box d-flex align-items-center">
                                            <div class="quantity">
                                                <div class="pro-qty"><input type="text" value="1"></div>
                                            </div>
                                            <div class="action_link">
                                                <a class="buy-btn" @click="addToCart()" href="#">add to cart<i
                                                        class="fa fa-shopping-cart"></i></a>
                                            </div>
                                        </div>
                                        <div class="useful-links mt-20">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i
                                                    class="fa fa-refresh"></i>compare</a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i
                                                    class="fa fa-heart-o"></i>wishlist</a>
                                        </div>
                                        <div class="share-icon mt-20">
                                            <a class="facebook" href="#"><i class="fa fa-facebook"></i>like</a>
                                            <a class="twitter" href="#"><i class="fa fa-twitter"></i>tweet</a>
                                            <a class="pinterest" href="#"><i class="fa fa-pinterest"></i>save</a>
                                            <a class="google" href="#"><i class="fa fa-google-plus"></i>share</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- product details inner end -->

                        
                    </div>
                </div>
            </div>
        </div>
        <!-- product details wrapper end -->
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        
        data() {
            return {
                id: "",
                single:"",
            }
        },
        mounted () {
            this.id = this.$route.params.id;
            this.getSingle();

        },
        methods: {
            getSingle() {
                axios.get('https://fakestoreapi.com/products/' + this.id)
                .then((response)=>{
                    console.log(response.data);
                    this.single = response.data
                })
                .catch((err)=>{
                    console.log(err);
                })
            },
            addToCart(){
                axios.post('https://fakestoreapi.com/carts',{
                    userId:5,
                    date: Date(),
                    products:[this.single]
                })
                .then((response)=>{
                    console.log(response);
                    alert('Product added');
                })
                .catch((err)=>{
                    console.log(err);
                })
                
            }
        },

    }
</script>

<style scoped>
#img1{
    padding: 40px;
}
</style>