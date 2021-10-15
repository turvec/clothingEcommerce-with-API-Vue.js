<template>
  <div class="category-tab-area mb-30 mt-md-16 mt-sm-16">
    <div class="category-tab">
      <ul class="nav">
        <li>
          <i class="fa fa-star-o"></i>
        </li>
        <li>
          <a class="active" data-toggle="tab" href="#tab_one">featured</a>
        </li>

      </ul>
    </div>
  </div>
  <div class="tab-content">
    <div class="tab-pane fade show active" id="tab_one">
      <div class="feature-category-carousel-wrapper">
        <div class="container">
          <div class="
                        featured-carousel-active2
                        row
                        arrow-space
                        slick-arrow-style
                      " data-row="2">
            <!-- product single item start -->
            <Product :x="product" v-for="product in products" :key="product.id" />
            <!-- product single item end -->
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  import Product from '@/components/Product.vue';
  import axios from 'axios';
  export default {
    data() {
      return {
        products: ""
      }
    },
    mounted () {
      this.getProduct();
    },
    components: {
      Product,
    },
    methods: {
      getProduct() {
        axios.get('https://fakestoreapi.com/products?limit=8')
        .then((response)=>{
          console.log(response);
          this.products= response.data;
        })
        .catch((err)=>{
          console.log(err);
        });
      }
    },

  }
</script>

<style lang="scss" scoped>

</style>