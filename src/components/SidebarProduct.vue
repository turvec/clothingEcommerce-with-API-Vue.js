<template>
    <div class="col">
        <div class="category-item">
            <div class="category-thumb">
                <router-link :to="'/product-detail/' + sidebarProduct.id">
                    <img :src="sidebarProduct.image" class="img-pri" alt />
                </router-link>
            </div>
            <div class="category-content">
                <h4>
                    <a href="product-details.html">{{sidebarProduct.category}}</a>
                </h4>
                <div class="price-box">
                    <div class="regular-price">${{sidebarProduct.price}}</div>
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
</template>

<script>
    export default {
        props: {
            sidebarProduct: Object,
        },
    }
</script>

<style scoped>
.category-thumb{
    padding: 15px;
}
</style>