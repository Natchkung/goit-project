<template>
  <div class="w-full h-full">
    <div class="logo w-full h-[6rem] bg-emerald-600 flex items-center  rounded-b-lg">
      <img src="../../assets/hlogo.png" alt="" class="w-[150px] h-[150px] object-cover">
    </div>
    <div class="w-full h-full relative">
        <router-link to='/main' class="absolute top-3 left-3 w-7 h-7 bg-emerald-600 flex items-center justify-center rounded-full">
        <i class="fa-solid fa-arrow-left text-white"></i>
    </router-link>
        <div class="w-full h-[3rem] bg-[#FFE486] flex items-center justify-center ">
            <span class="text-2xl font-bold">BASKET</span>
        </div>
    </div>
    
    <div class="w-full h-full m-auto mt-5 overflow-auto mb-[100px]">
            <!--  -->
            <div class="w-[95%] flex items-center justify-between m-auto p-2" v-for="item in basket" :key="item">
                <input type="checkbox" id="checkbox" name="checkbox">
                <div class="image w-[80px] h-[80px] shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] rounded-lg overflow-hidden">
                    <img :src="`https://sakaeotravel.online/upload_image/${item[0].image}`"  :alt="item[0].image" class="w-full h-full object-cover">
                </div>
                <div class="text-center text-sm flex flex-col gap-1">
                    <h1 class="w-[100px]">{{item[0].itemname}}</h1>
                    <p>{{item[0].itemprice}} Bath</p>
                    <p><i class="fa-solid fa-star text-yellow-500 mr-2"></i><span class="ml-1">{{item[0].itemstatus}}</span></p>
                </div>
                <div class="text-center flex flex-col flex-wrap gap-4 text-md">
                    <button>
                        <i class="fa-solid fa-trash text-[#D40000]"></i>
                    </button>
                    <div class="w-[4rem] bg-[#FFC690] rounded-xl overflow-hidden text-sm">
                       <div class="w-[90%] flex item-center justify-between m-auto">
                        <button><i class="fa-solid fa-minus" @click="item[0].itemcounts--"></i></button>
                       <span class="px-2 h-full bg-[#C7C7C7]">{{item[0].itemcounts}}</span>
                       <button><i class="fa-solid fa-plus" @click="item[0].itemcounts++"></i></button>
                       </div>
                    </div>
                </div>
            </div>
            <!--  -->
    </div>
            

        <div class="w-full h-[4.7rem] fixed bottom-0 flex items-center justify-between">
            <div class="w-[60%] h-full bg-[#FFE486] flex items-center justify-between">
                <div class="flex ml-5 text-lg font-bold">
                    <input type="checkbox" id="All" name="All" value="">
                    <label for="All" class="ml-2">All</label>
                </div>
                <div class="flex text-lg font-bold mr-5">
                    <span class="mr-3">{{ totalprice }}</span>Bath
                </div>
            </div>
            <div class="w-[40%] h-full bg-[#D95353] flex items-center justify-center">
                <button class="text-lg font-bold">Payment</button>
            </div>
        </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'BASKET',
    data(){
        return{
            basket: null,
            username: localStorage.getItem('username') ,
            totalprice: 0
        }
    },
    methods:{
        GetBasket(){
            axios.get(`https://sakaeotravel.online:3000/api/getcart/${this.username}`)
            .then(res => {
                this.basket = res.data.payload
            })
        }
    },
    created(){
        this.GetBasket()
    }

}
</script>

<style>

</style>