<template>
  <!-- hero slider start -->
  <div class="hero-slider-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="slider-wrapper-area4 mt-18 mt-md-0 mt-sm-0">
            <div class="hero-slider-active hero__4 slick-dot-style hero-dot">

              <div class="single-slider d-flex align-items-center" style="
                    background-image: url(assets/img/slider/slider4_bg2.jpg);
                  ">
                <div class="container">
                  <div class="slider-main-content">
                    <div class="slider-text">
                      <h2>
                        <span>fashion new 2018</span>
                      </h2>
                      <h1>
                        <span>collection 2018</span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit
                      </p>
                      <a class="home-btn hm4-btn" href="#">shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- hero slider end -->

  <!-- page wrapper start -->
  <div class="page-wrapper pt-20">
    <div class="container">
      <div class="row">
        <!-- sidebar start -->
        <Sidebar />
        <!-- sidebar end -->
        <!-- main wrapper start -->
        <div class="col-lg-9 order-1 order-lg-2">
          <!-- category tab area start -->
          <Features />
          <!-- category tab area start -->

          <!-- banner statistics start -->
          <div class="banner-statistic banner-style-4 pb-36">
            <div class="img-container fix img-full">
              <a href="#">
                <img src="@/assets/img/banner/home3_static5.jpg" alt />
              </a>
            </div>
          </div>
          <!-- banner statistics end -->

          <!-- featured category area start -->
          <Arrival />
          <!-- featured category area end -->
        </div>
        <!-- main wrapper end -->
      </div>
    </div>
  </div>
  <!-- page wrapper end -->
</template>

<script>
  import Sidebar from '@/components/Sidebar.vue';
  import Features from '@/components/Features.vue';
  import Arrival from '@/components/Arrival.vue';



  export default {
    name: 'Home',
    components: {
      Sidebar,
      Features,
      Arrival,
    }
  }
</script>