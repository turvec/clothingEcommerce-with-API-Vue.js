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
                                    <li class="breadcrumb-item active" aria-current="page">login</li>
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
                        <!-- Login Content Start -->
                        <div class="col-12">
                            <div class="login-reg-form-wrap  pr-lg-50">
                                <h2>Sign In</h2>
                                <form @submit.prevent="postAccount()">
                                    <div class="single-input-item">
                                        <input type="text" v-model="username" placeholder=" Username" required />
                                    </div>
                                    <div class="single-input-item">
                                        <input type="password" v-model="password" placeholder="Enter your Password" required />
                                    </div>
                                    <div class="single-input-item">
                                        <div
                                            class="login-reg-form-meta d-flex align-items-center justify-content-between">
                                            <div class="remember-meta">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="rememberMe">
                                                    <label class="custom-control-label" for="rememberMe">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <a href="#" class="forget-pwd">Forget Password?</a>
                                        </div>
                                    </div>
                                    <div class="single-input-item">
                                        <button class="sqr-btn">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- Login Content End -->

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
                password: "",
                username: "",
            }
        },
        methods: {
            postAccount() {
                axios.post('https://fakestoreapi.com/auth/login', {
                    email: this.email,
                    username: this.username,
                    password: this.password,
                })
                .then((posted)=>{
                    console.log(posted);
                    
                })

            }
        },
    }
</script>

<style scoped>

</style>