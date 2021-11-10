<template>
    <div class="col-lg-3 order-2 order-lg-1">
        <!-- category menu start -->
        <Categories />
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
                <SidebarProduct :sidebarProduct="bar" v-for="bar in sidebar" :key="bar.id" />
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
    import SidebarProduct from '@/components/SidebarProduct.vue';
    import axios from 'axios';
    export default {
        components: {
            Categories,
            SidebarProduct,
        },
        data() {
            return {
                sidebar: ""
            }
        },
        methods: {
            getBar() {
                axios.get('https://fakestoreapi.com/products?limit=8')
                    .then((res) => {
                        this.sidebar = res.data;
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);

                    })
            }
        },
        mounted() {
            this.getBar();
        },
    }
</script>

<style lang="scss" scoped>

</style>