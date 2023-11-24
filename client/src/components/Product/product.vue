<template>
    <div class="w-full h-full mt-[6rem]">
        <div class="imageproduct w-full h-[250px] relative">
            <img :src="`https://sakaeotravel.online/upload_image/${products.image}`" :alt="products.image" class="w-full h-full object-cover">
            <router-link to='/main' class="absolute top-3 left-3 text-xl">
                <i class="fa-solid fa-arrow-left text-black"></i>
            </router-link>
        </div>
        <div class="product w-full h-full ">
            <div class="titleproduct w-full mt-3 flex flex-col font-bold">
                <div class="w-[90%] m-auto mb-3">
                    <div>
                        <h1>{{ products.itemname}}</h1>
                    </div>
                    <div class="text-sm mt-2"><i class="fa-solid fa-star text-yellow-500"></i><span id="itemstatus"
                            class="text-[0.7rem] font-bold ml-1">{{products.itemstatus}}</span>
                    </div>
                </div>
                <hr>
            </div>
            <div class="profileproduct w-[90%] flex flex-wrap gap-3 m-auto mt-3">
                <div>
                    <img src="../../assets/noavatar.jpg" alt="" class="w-10 h-10 bg-white rounded-full border-2 border-black">
                </div>
                <div class="flex items-center">
                    <span>{{products.username}}</span>
                </div>
            </div>
            <div class="detailproduct w-[90%] text-sm m-auto mt-5">
                Product details : <span>{{products.itemdetail}}</span>
            </div>
        </div>
        <div class="productevent w-full h-[4rem] absolute bottom-[100px] flex text-white">
            <button class="w-[50%] bg-emerald-400">
                <div class="w-[70%] m-auto">
                    <i class="fa-solid fa-comment-dots text-xl"></i>
                    <span class="ml-2">Chat now</span>
                </div>
            </button>
            <button @click="AddCart(products)" class="w-[50%] bg-[#BE7057]">
                <div class="w-[70%] m-auto">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <span class="ml-2">Add to cart</span>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'product',
    data() {
        return {
            productID: null,
            products: []

        }
    },
    methods:{
        AddCart(e){
            axios.post('https://sakaeotravel.online:3000/api/addcart', {
                username: localStorage.getItem('username'),
                targetname: e.username,
                targetid: e.itemid
            }).then((response) => {
                if (response.data == 'Already have Basket!') {
                    alert("This product is already in your cart!!")
                }
                else{
                    alert("Add to cart success!!")
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    created(){
        this.productID = this.$route.params.productId
        axios.get('https://sakaeotravel.online:3000/api/products/'+this.productID).then((response) => {
            if (response) {
                this.products = response.data.inventory
            }
        }
        ).catch(function (error) {
            if (error.response) {
                console.log(error.response.data)
            }
        })
    }
}
</script>

<style></style>