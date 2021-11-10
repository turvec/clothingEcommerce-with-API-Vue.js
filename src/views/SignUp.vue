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
                                    <li class="breadcrumb-item active" aria-current="page">Create Account</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- breadcrumb area end -->

        <!-- login register wrapper start -->
        <div class="login-register-wrapper">
            <div class="container">
                <div class="member-area-from-wrap">
                    <div class="row">
                        <!-- Register Content Start -->
                        <div class="col-12">
                            <div class="login-reg-form-wrap mt-md-34 mt-sm-34">
                                <h2>Sign Up</h2>
                                <form @submit.prevent="postAccount()">
                                    <div class="single-input-item">
                                        <input type="text" v-model="fullname" placeholder="Full Name" required />
                                    </div>
                                    <div class="single-input-item">
                                        <input type="email" v-model="email" placeholder="Enter your Email" required />
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="single-input-item">
                                                <input type="tel" v-model="phone" placeholder="Phone no." required />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="single-input-item">
                                                <input type="password" v-model="password"
                                                    placeholder="Enter your Password" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-input-item">
                                        <div class="login-reg-form-meta">
                                            <div class="remember-meta">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input"
                                                        id="subnewsletter">
                                                    <label class="custom-control-label" for="subnewsletter">Subscribe
                                                        Our Newsletter</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-input-item">
                                        <button class="sqr-btn">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- Register Content End -->
                    </div>
                </div>
            </div>
        </div>
        <!-- login register wrapper end -->
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                email: "",
                password: '',
                phone: "",
                fullname: "",
            }
        },
        methods: {
            postAccount() {
                console.log('loading. . .');
                axios.post('https://fakestoreapi.com/users', {
                    email: this.email,
                    username: this.fullname,
                    password: this.password,
                    phone: this.phone,
                })
                .then((posted)=>{
                    console.log(posted);
                    
                })

            }
        },
    }
</script>

<style lang="scss" scoped>

</style>