<template>
    <div class="w-full h-full">
        <div
            class="headerpage mt-[7rem] w-[70%] h-[50px] bg-[#1F7B4A] text-white m-auto shadow-[rgba(0,_0,_0,_0.2)_0px_3px_8px] rounded-2xl flex justify-center items-center">
            <span class="text-xl font-bold">INVENTORY</span>
        </div>
        <div class="w-full h-full m-auto mt-5 overflow-auto mb-[120px]">
            <!--  -->
            <div class="w-[90%] flex items-center justify-between m-auto p-2" v-for="item in showproduct" :key="item">
                <div class="image w-[80px] h-[80px] shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] rounded-lg overflow-hidden">
                    <img :src="`https://sakaeotravel.online/upload_image/${item.image}`"  :alt="item.image" class="w-full h-full object-cover">
                </div>
                <div class="text-center text-sm flex flex-col gap-1">
                    <div class="flex">
                        <span class="w-5 h-5 text-sm text-white bg-[#459A6D] rounded-full">{{item.itemcounts}}</span>
                        <h1 class="ml-3">{{item.itemname}}</h1>
                    </div>
                    <p>{{item.itemprice}} Bath</p>
                    <p><i class="fa-solid fa-star text-yellow-500 mr-2"></i><span class="ml-1">{{ item.itemstatus  }}</span></p>
                </div>
                <div class="text-center flex flex-wrap gap-3 text-md">
                    <button>
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button @click="DeleteProduct(item)">
                        <i class="fa-solid fa-trash text-[#D40000]"></i>
                    </button>
                </div>
            </div>
            <!--  -->
            
        </div>
        <button @click="showpost()" class="fixed bottom-[15%] right-5 z-50">
            <i class="fa-solid fa-circle-plus text-[#4CBB17] ml-1.5 text-[2.5rem] bg-white rounded-full"></i>
    </button>

        <div v-show="Showpost" class="forminventory w-full pb-5 absolute top-1/2 left-1/2 mt-[-30px] transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] z-10 rounded-lg overflow-hidden scale-75 ">
        <div class="w-full h-[50px] bg-emerald-500 flex items-center">
           <div class="text-white ml-2 flex items-center"><i class="fa-solid fa-file-pen"></i><h1 class="ml-2 font-bold">Create Post</h1></div>
        </div>
        <form @submit.prevent="CreatePost()" method="post" enctype="multipart/form-data" class="w-[90%] m-auto flex flex-col justify-center items-center">
            <div class="flex flex-col mt-3">
                <label>Product name</label>
              <input type="text"
                class="w-full p-1 rounded-[5px] bg-transparent border-2 border-slate-500 indent-3 focus:outline-none focus:border-3 focus:border-sky-500 focus:bg-transparent" v-model="product.itemname" required/>
            </div>
            <div class="flex flex-col mt-3">
                <label>Product details</label>
              <input type="text"
                class="w-full p-1 rounded-[5px] bg-transparent border-2 border-slate-500 indent-3 focus:outline-none focus:border-3 focus:border-sky-500 focus:bg-transparent" v-model="product.itemdetail" required/>
            </div>
            <div class="w-[75%] flex flex-col mt-3">
                <label>Product integrity</label>
              <input type="Number" id="itemstatus" name="itemstatus"
                class="w-full p-1 rounded-[5px] bg-transparent border-2 border-slate-500 indent-3 focus:outline-none focus:border-3 focus:border-sky-500 focus:bg-transparent" v-model="product.itemstatus" min="1" max="5" step="0.01" required/>
            </div>
            <div class="w-[75%] flex flex-col mt-3">
                <label>Product Count</label>
              <input type="Number" id="itemstatus" name="itemstatus"
                class="w-full p-1 rounded-[5px] bg-transparent border-2 border-slate-500 indent-3 focus:outline-none focus:border-3 focus:border-sky-500 focus:bg-transparent" v-model="product.itemcounts" min="1" required/>
            </div>
            <div class="flex flex-col mt-3">
                <label>City</label>
              <input type="text"
                class="w-full p-1 rounded-[5px] bg-transparent border-2 border-slate-500 indent-3 focus:outline-none focus:border-3 focus:border-sky-500 focus:bg-transparent" v-model="product.city" required/>
            </div>
            <div class="flex flex-col mt-3">
                <label>Location</label>
              <input type="text"
                class="w-full p-1 rounded-[5px] bg-transparent border-2 border-slate-500 indent-3 focus:outline-none focus:border-3 focus:border-sky-500 focus:bg-transparent" v-model="product.location" required/>
            </div>
            <div class="flex flex-col mt-3">
                <input type="file"
                    class="w-[80%] p-1 rounded-[5px] bg-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 mt-3 m-auto"
                    ref="image" required/>
            </div>

            <div class="w-full flex justify-center items-center mt-5">
            <button type="submit" class="px-7 p-3 bg-emerald-700 rounded-lg text-white hover:bg-emerald-500">Save Data</button>
        </div>
        </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'EDITPRODUCT',
    data(){
        return{
            Showpost: false,
            username: null,
            product:{
                username: null,
                itemname: null,
                itemdetail: null,
                itemstatus: null,
                itemcounts: null,
                city: null,
                location: null,
                image: null
            },
            showproduct: []

        }
    },
    methods:{
        showpost(){
            this.Showpost = !this.Showpost
        },
        CreatePost(){
            this.product.username = localStorage.getItem('username')
            this.product.image = this.$refs.image.files[0]

            const formWithImageData = new FormData()
            
            for (const key in this.product) {
                formWithImageData.append(key, this.product[key])
            }
            
            axios.post('https://sakaeotravel.online:3000/api/create-product', formWithImageData).then((response) => {
                if (response) {
                    alert("Save success");
                    this.Showpost = false
                    this.refresh()

                }
            }).catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
          }
        })
        },
        refresh(){
            axios.get(`https://sakaeotravel.online:3000/api/products-user/${this.username}`).then((response) => {
            if (response) {
                this.showproduct = response.data.inventory
            }
        }
        ).catch(function (error) {
            if (error.response) {
                console.log(error.response.data)
            }
        })
        },
        DeleteProduct(e){
                axios.delete(`https://sakaeotravel.online:3000/api/products/${e.itemid}/${e.username}`).then((response) => {
                if (response) {
                    alert("Delete success");
                    this.refresh()
                }
            }
            ).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data)
                }
            })
        }
    },
    created(){
        this.username = localStorage.getItem('username')
        this.refresh()

    }

}
</script>

<style>
</style>