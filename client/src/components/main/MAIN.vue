<template>
  <div class="w-full h-full">
    <div class="w-[95%] h-[3rem] mt-[7rem] flex justify-between items-center m-auto">
      <!-- search -->
      <div
        class="ml-2 w-[70%] h-[2rem] flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md bg-white">
        <span class="flex select-none items-center pl-3 pr-2 text-gray-500 sm:text-sm"><i class="fa-solid fa-magnifying-glass"></i></span>
        <input type="text" name="username" id="username" autocomplete="username"
          class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
          placeholder="Search" />
      </div>
      <div class="flex flex-warp gap-1">
        <router-link to="/chat">
        <i class="fa-solid fa-comment-dots p-3 bg-white shadow-[rgba(0,_0,_0,_0.3)_0px_3px_8px] rounded-full"></i>
      </router-link>
      <button @click="Basket()">
        <i class="fa-solid fa-basket-shopping p-3 bg-white shadow-[rgba(0,_0,_0,_0.3)_0px_3px_8px] text-md rounded-full"></i>
      </button>
      </div>
      <!--  -->
    </div>
    <div class="headermain w-[90%] h-[120px] m-auto rounded-xl mt-5 text-center flex flex-col items-center justify-center shadow-[rgba(0,_0,_0,_0.3)_0px_3px_8px]">
      <h1 class="text-2xl text-yellow-300 font-bold drop-shadow-2xl">BEST</h1>
      <p class="text-white text-[0.8rem] font-semibold">Shopping and Saving the World</p>
      <p class="text-white text-xl font-bold">PLATFORM</p>
    </div>
    <div class="items w-[90%] h-full mt-2 m-auto">
      <div class="titeitem flex item-center">
        <div>
          <h1 class="text-black text-lg font-bold">All Things</h1>
        </div>
      </div>
      <div class="w-full h-full m-auto grid grid-cols-2 gap-3 mt-3 mb-[120px]">
        <!-- box-item -->
        <button @click="GetProduct(item)" class="item w-full bg-[#1b975b] shadow-[rgba(0,_0,_0,_0.3)_0px_3px_8px] rounded-lg flex flex-col p-2" v-for="item in products" :key="item">
          <div class="w-[90%] rounded-lg mx-auto mt-2 bg-gray-300">
            <img :src="`https://sakaeotravel.online/upload_image/${item.image}`" :alt="item.image"
              class="h-[130px] w-full object-cover rounded-lg">
          </div>
          <div class="w-[90%] detail-item flex flex-col items-start m-auto mt-2 text-sm text-white">
            <p>{{ item.itemname }}</p>
            <p>Province: {{ item.city }}</p>
            <p><i class="fa-solid fa-star text-yellow-500 mr-2"></i> {{ item.itemstatus}}</p>
          </div>
        </button>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "MAIN",
  data() {
    return {
      products: []
    }
  },
  methods:{
    GetProduct(e){
      this.$router.push({name:'product',
      params:{productId:e.itemid}}
      )
    },
    Basket(){
      this.$router.push({name:'BASKET'})
    }
  },
  created() {
    axios.get('https://sakaeotravel.online:3000/api/products').then((response) => {
      if (response) {
        this.products = response.data

      }
    }
    ).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    })

  }
}
</script>

<style>
.headermain{
  background: url('https://media.discordapp.net/attachments/1133807320573431910/1177198153401905262/1.png?ex=6571a237&is=655f2d37&hm=f637ee51ecec93c7f6b2bbd049b83df21ab6b60164b86c5638a0653228196277&=&format=webp');
  background-repeat: no-repeat;
  background-size: auto;
  object-fit: cover;

}</style>