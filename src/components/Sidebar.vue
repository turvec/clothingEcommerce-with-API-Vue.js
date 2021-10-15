<template>
    <div class="col-lg-3 order-2 order-lg-1">
        <!-- category menu start -->
        <Categories/>
        <!-- category menu end -->

        <!-- sidebar banner start -->
        <div class="home-single-sidebar mb-30 mt-md-36">
            <div class="img-container fix img-full">
                <a href="#">
                    <img src="@/assets/img/banner/banner_left2.jpg" alt />
                </a>
            </div>
        </div>
        <!-- sidebar banner end -->

        <!-- best seller area start -->
        <div class="main-sidebar category-wrapper fix mb-24">
            <div class="section-title-2 d-flex justify-content-between mb-28">
                <h3>best seller</h3>
                <div class="category-append"></div>
            </div>
            <!-- section title end -->
            <div class="category-carousel-active row" data-row="3">
                <div class="col">
                    <div class="category-item">
                        <div class="category-thumb">
                            <a href="product-details.html">
                                <img src="@/assets/img/product/product-img1.jpg" alt />
                            </a>
                        </div>
                        <div class="category-content">
                            <h4>
                                <a href="product-details.html">Virtual Product 01</a>
                            </h4>
                            <div class="price-box">
                                <div class="regular-price">$150.00</div>
                                <div class="old-price">
                                    <del>$180.00</del>
                                </div>
                            </div>
                            <div class="ratings">
                                <span class="good">
                                    <i class="fa fa-star"></i>
                                </span>
                                <span class="good">
                                    <i class="fa fa-star"></i>
                                </span>
                                <span class="good">
                                    <i class="fa fa-star"></i>
                                </span>
                                <span class="good">
                                    <i class="fa fa-star"></i>
                                </span>
                                <span>
                                    <i class="fa fa-star"></i>
                                </span>
                                <div class="pro-review">
                                    <span>1 review(s)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end single item -->
                </div>
                <!-- end single item column -->
            </div>
        </div>
        <!-- best seller area end -->

        <!-- testimonial area start -->

        <!-- testimonial area end -->
    </div>
</template>

<script>
    import Categories from '@/components/Categories.vue';

    export default {
     components:{
         Categories,
     }
    }
</script>

<style lang="scss" scoped>

</style>