<template>
 <div class="home-single-sidebar hm-4-cat mb-30 mb-sm-34">
            <div class="main-header-inner">
                <div class="category-toggle-wrap max-100">
                    <div class="category-toggle">
                        category
                        <div class="cat-icon">
                            <i class="fa fa-angle-down"></i>
                        </div>
                    </div>
                    <nav class="category-menu static hm-1">
                        <ul>
                            <p v-if="loading == true">loading . . .</p>

                            <li v-else  v-for="(category, index) in categories" :key="index">
                                <a href="shop-grid-left-sidebar.html">
                                    <i class="fa fa-desktop"></i>{{category}}
                                </a>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
</template>

<script>
import  axios from 'axios';
    export default {
        data() {
            return {
                categories: "",
                loading: false,
            }
        },
        mounted () {
            //alert("I was loaded");
            this.getCategories()
        },
        methods: {
            getCategories() {
                this.loading = true;
                axios.get('https://fakestoreapi.com/products/categories')
                .then((response) =>{
                    console.log('i was logged');
                    console.log(response.data);
                    this.categories=response.data
                })
                .catch((err)=>{
                    console.log(err);
                })
                .finally(()=>{
                    this.loading = false;
                });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>