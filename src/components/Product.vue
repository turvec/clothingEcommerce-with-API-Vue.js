<template>
  <div class="col-md-3">
    <div class="product-item fix mb-30">
      <div class="product-thumb">
        <div id="img-box">
          <router-link :to="'/product-detail/' + x.id">
            <img :src="x.image" class="img-pri" alt />
            <img :src="x.image" class="img-sec" alt />
          </router-link>
        </div>


        <div class="product-label">
          <span>hot</span>
        </div>
        <div class="product-action-link">
          <a href="#" data-toggle="modal" data-target="#quick_view">
            <span data-toggle="tooltip" data-placement="left" title="Quick view">
              <i class="fa fa-search"></i>
            </span>
          </a>
          <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist">
            <i class="fa fa-heart-o"></i>
          </a>
          <a href="#" data-toggle="tooltip" data-placement="left" title="Compare">
            <i class="fa fa-refresh"></i>
          </a>
          <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart">
            <i class="fa fa-shopping-cart"></i>
          </a>
        </div>
      </div>
      <div class="product-content">
        <h4>
          <a href="product-details.html">{{x.title}}</a>
        </h4>
        <div class="pricebox">
          <span class="regular-price">{{x.price}}</span>
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
            <div class="pro-review">
              <span>1 review(s)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: {
      x: Object,
    },
  }
</script>

<style scoped>
  #img-box {
    padding: 60px;
  }
</style>