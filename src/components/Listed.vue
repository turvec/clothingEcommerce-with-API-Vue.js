<template>
    <div class="col-lg-3 col-md-4 col-sm-6">
        <!-- product single grid item start -->

        <!-- product single grid item end -->
        <!-- product single list item start -->
        <div class="product-list-item mb-30">
            <div class="product-thumb">
                <div id="img-box">
                    <router-link :to="'/product-detail/' + y.id">
                        <img :src="y.image" class="img-pri" alt />
                        <img :src="y.image" class="img-sec" alt />
                    </router-link>
                </div>
                <div class="product-label">
                    <span>hot</span>
                </div>
            </div>
            <div class="product-list-content">
                <h3><a href="product-details.html">{{y.title}}</a></h3>
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
                <div class="pricebox">
                    <span class="regular-price">${{y.price}}</span>
                    <span class="old-price"><del>$90.00</del></span>
                </div>
                <p>{{y.category}}</p>
                <p>{{y.description}}</p>
                <div class="product-list-action-link">
                    <a class="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy
                        <i class="fa fa-shopping-cart"></i>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip"
                            data-placement="top" title="Quick view"><i class="fa fa-search"></i></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i
                            class="fa fa-heart-o"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i
                            class="fa fa-refresh"></i></a>
                </div>
            </div>
        </div>
        <!-- product single list item start -->
    </div>
</template>

<script>
    export default {
        props: {
            y: Object,
        },
    }
</script>

<style scoped>
    #img-box {
        padding: 70px;
    }
</style>