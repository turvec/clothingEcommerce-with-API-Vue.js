<template>
  <div class="wrapper box-layout">
    <!-- header area start -->
    <header>
      <!-- header top start -->
      <div class="header-top-area bg-gray text-center text-md-left">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-5">
              <div class="header-call-action">
                <a href="#">
                  <i class="fa fa-envelope"></i>
                  info@website.com
                </a>
                <a href="#">
                  <i class="fa fa-phone"></i>
                  0123456789
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-7">
              <div class="header-top-right float-md-right float-none">
                <nav>
                  <ul>
                    <li>
                      <div class="dropdown header-top-dropdown">
                        <a
                          class="dropdown-toggle"
                          id="myaccount"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          my account
                          <i class="fa fa-angle-down"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="myaccount">
                          <a class="dropdown-item" href="my-account.html"
                            >my account</a
                          >
                          <a class="dropdown-item" href="login-register.html"
                            >login</a
                          >
                          <a class="dropdown-item" href="login-register.html"
                            >register</a
                          >
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#">my wishlist</a>
                    </li>
                    <li>
                      <a href="#">my cart</a>
                    </li>
                    <li>
                      <a href="#">checkout</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- header top end -->

      <!-- header middle start -->
      <div
        class="
          header-middle-area header-middle-style-2
          pt-20
          pb-20 pb-md-0 pb-sm-0
        "
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <div class="brand-logo">
                <a href="index-2.html">
                  <img src="@/assets/img/logo/logo.png" alt="brand logo" />
                </a>
              </div>
            </div>
            <!-- end logo area -->
            <div class="col-lg-9">
              <div class="header-middle-right">
                <div class="header-middle-shipping mb-20">
                  <div class="single-block-shipping">
                    <div class="shipping-icon">
                      <i class="fa fa-clock-o"></i>
                    </div>
                    <div class="shipping-content">
                      <h5>Working time</h5>
                      <span>Mon- Sun: 8.00 - 18.00</span>
                    </div>
                  </div>
                  <!-- end single shipping -->
                  <div class="single-block-shipping">
                    <div class="shipping-icon">
                      <i class="fa fa-truck"></i>
                    </div>
                    <div class="shipping-content">
                      <h5>free shipping</h5>
                      <span>On order over $199</span>
                    </div>
                  </div>
                  <!-- end single shipping -->
                  <div class="single-block-shipping">
                    <div class="shipping-icon">
                      <i class="fa fa-money"></i>
                    </div>
                    <div class="shipping-content">
                      <h5>money back 100%</h5>
                      <span>Within 30 Days after delivery</span>
                    </div>
                  </div>
                  <!-- end single shipping -->
                </div>
                <div class="header-middle-block mb-md-20">
                  <div class="header-middle-searchbox">
                    <input type="text" placeholder="Search..." />
                    <button class="search-btn">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- header middle end -->

      <!-- main menu area start -->
      <div class="main-header-wrapper bdr-bottom1 header-style-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="main-header-inner header-2 header-4">
                <div class="main-menu menu-style-4">
                  <nav id="mobile-menu">
                    <ul>
                      <li class="active">
                        <a href="#">
                          <i class="fa fa-home"></i>Home
                        </a>
                        
                      </li>
                      <li class="static">
                        <a href="#">
                          My account
                          
                        </a>
                        
                      </li>
                      <li>
                        <a href="#">
                          shop
                         
                        </a>
                        
                      </li>
                      
                      <li>
                        <a href="contact-us.html">Contact us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="mini-cart2">
                  <div class="header-mini-cart">
                    <div class="mini-cart-btn">
                      <i class="fa fa-shopping-cart"></i>
                      <span class="cart-notification">2</span>
                    </div>
                    <div class="cart-total-price">
                      <span>total:</span>
                      $50.00
                    </div>
                    <ul class="cart-list">
                      <li>
                        <div class="cart-img">
                          <a href="product-details.html">
                            <img src="@/assets/img/cart/cart-1.jpg" alt />
                          </a>
                        </div>
                        <div class="cart-info">
                          <h4>
                            <a href="product-details.html">simple product 09</a>
                          </h4>
                          <span>$60.00</span>
                        </div>
                        <div class="del-icon">
                          <i class="fa fa-times"></i>
                        </div>
                      </li>
                      <li>
                        <div class="cart-img">
                          <a href="product-details.html">
                            <img src="@/assets/img/cart/cart-2.jpg" alt />
                          </a>
                        </div>
                        <div class="cart-info">
                          <h4>
                            <a href="product-details.html"
                              >virtual product 10</a
                            >
                          </h4>
                          <span>$50.00</span>
                        </div>
                        <div class="del-icon">
                          <i class="fa fa-times"></i>
                        </div>
                      </li>
                      <li class="mini-cart-price">
                        <span class="subtotal">subtotal :</span>
                        <span class="subtotal-price">$88.66</span>
                      </li>
                      <li class="checkout-btn">
                        <a href="#">checkout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 d-block d-lg-none">
              <div class="mobile-menu mean-4"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- main menu area end -->
    </header>
    <!-- header area end -->

    <router-view/>
    

    <!-- footer area start -->
    <footer>
      <!-- footer top start -->
      <div class="footer-top bg-black pt-14 pb-14">
        <div class="container">
          <div class="footer-top-wrapper">
            <div class="newsletter__wrap">
              <div class="newsletter__title">
                <div class="newsletter__icon">
                  <i class="fa fa-envelope"></i>
                </div>
                <div class="newsletter__content">
                  <h3>sign up for newsletter</h3>
                  <p>Duis autem vel eum iriureDuis autem vel eum</p>
                </div>
              </div>
              <div class="newsletter__box">
                <form id="mc-form">
                  <input
                    type="email"
                    id="mc-email"
                    autocomplete="off"
                    placeholder="Email"
                  />
                  <button id="mc-submit">subscribe!</button>
                </form>
              </div>
              <!-- mailchimp-alerts Start -->
              <div class="mailchimp-alerts">
                <div class="mailchimp-submitting"></div>
                <!-- mailchimp-submitting end -->
                <div class="mailchimp-success"></div>
                <!-- mailchimp-success end -->
                <div class="mailchimp-error"></div>
                <!-- mailchimp-error end -->
              </div>
              <!-- mailchimp-alerts end -->
            </div>
            <div class="social-icons">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook"
              >
                <i class="fa fa-facebook"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
              >
                <i class="fa fa-twitter"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram"
              >
                <i class="fa fa-instagram"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Google-plus"
              >
                <i class="fa fa-google-plus"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Youtube"
              >
                <i class="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- footer top end -->

      <!-- footer main start -->
      <div class="footer-widget-area pt-40 pb-38 pb-sm-4 pt-sm-30">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="footer-widget mb-sm-26">
                <div class="widget-title mb-10 mb-sm-6">
                  <h4>contact us</h4>
                </div>
                <div class="widget-body">
                  <ul class="location">
                    <li><i class="fa fa-envelope"></i>support@galio.com</li>
                    <li><i class="fa fa-phone"></i>(800) 0123 456 789</li>
                    <li>
                      <i class="fa fa-map-marker"></i>Address: 1234 - Bandit
                      Tringi Aliquam Vitae. New York
                    </li>
                  </ul>
                  <a class="map-btn" href="contact-us.html"
                    >open in google map</a
                  >
                </div>
              </div>
              <!-- single widget end -->
            </div>
            <!-- single widget column end -->
            <div class="col-md-3 col-sm-6">
              <div class="footer-widget mb-sm-26">
                <div class="widget-title mb-10 mb-sm-6">
                  <h4>my account</h4>
                </div>
                <div class="widget-body">
                  <ul>
                    <li>
                      <a href="#">my account</a>
                    </li>
                    <li>
                      <a href="#">my cart</a>
                    </li>
                    <li>
                      <a href="#">checkout</a>
                    </li>
                    <li>
                      <a href="#">my wishlist</a>
                    </li>
                    <li>
                      <a href="#">login</a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- single widget end -->
            </div>
            <!-- single widget column end -->
            <div class="col-md-3 col-sm-6">
              <div class="footer-widget mb-sm-26">
                <div class="widget-title mb-10 mb-sm-6">
                  <h4>short code</h4>
                </div>
                <div class="widget-body">
                  <ul>
                    <li>
                      <a href="#">gallery</a>
                    </li>
                    <li>
                      <a href="#">accordion</a>
                    </li>
                    <li>
                      <a href="#">carousel</a>
                    </li>
                    <li>
                      <a href="#">map</a>
                    </li>
                    <li>
                      <a href="#">tab</a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- single widget end -->
            </div>
            <!-- single widget column end -->
            <div class="col-md-3 col-sm-6">
              <div class="footer-widget mb-sm-26">
                <div class="widget-title mb-10 mb-sm-6">
                  <h4>product tags</h4>
                </div>
                <div class="widget-body">
                  <ul>
                    <li>
                      <a href="#">computer</a>
                    </li>
                    <li>
                      <a href="#">camera</a>
                    </li>
                    <li>
                      <a href="#">smart phone</a>
                    </li>
                    <li>
                      <a href="#">watch</a>
                    </li>
                    <li>
                      <a href="#">tablet</a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- single widget end -->
            </div>
            <!-- single widget column end -->
          </div>
        </div>
      </div>
      <!-- footer main end -->

      <!-- footer bootom start -->
      <div class="footer-bottom-area bg-gray pt-20 pb-20">
        <div class="container">
          <div class="footer-bottom-wrap">
            <div class="copyright-text">
              <p>
                <a target="_blank" href="https://www.templateshub.net"
                  >Templates Hub</a
                >
              </p>
            </div>
            <div class="payment-method-img">
              <img src="@/assets/img/payment.png" alt />
            </div>
          </div>
        </div>
      </div>
      <!-- footer bootom end -->
    </footer>
    <!-- footer area end -->
  </div>
</template>

