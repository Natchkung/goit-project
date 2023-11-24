<template>
    <div class="w-full h-full">
        <div class="point" v-show="!Ranking && !Exchangepoints">
                <div
            class="headerpage mt-[7rem] w-[70%] h-[50px] bg-[#1F7B4A] text-white m-auto shadow-[rgba(0,_0,_0,_0.2)_0px_3px_8px] rounded-2xl flex justify-center items-center">
            <span class="text-xl font-bold">POINT</span>
        </div>
        <h1 class="mt-3 ml-3 text-lg font-bold text-[#706E6E]">10 Point = 1 Tree</h1>
        <div class="w-[90%] grid grid-cols-3 gap-3 overflow-auto m-auto mt-5 mb-[120px]">
                <!--  -->
                <div class="tree w-full h-[100px] rounded-lg" v-for="item in users.trees" :key="item">
                        <img src="https://media.discordapp.net/attachments/1133807320573431910/1177157332229165097/Pngtreejungle_tree_clipart_cartoon_tree_11091177.png?ex=65717c32&is=655f0732&hm=ff7455797ddacad41b2d24c75f0c42268850a1f03d57bd5f4a2c9ff6a9784557&=&format=webp&width=671&height=671" :alt="item" class="w-full h-full p-3 object-cover">
                </div>
                <!--  -->
                
        </div>
        <button @click="exchangepoints()" class="w-[60px] h-[60px] fixed bottom-[17%] left-5 z-50">
        <img class="w-full h-full" src="https://media.discordapp.net/attachments/1133807320573431910/1177173876380274748/icons8-exchange-64.png?ex=65718b9a&is=655f169a&hm=1065615ef96bd8b75462309e7f719939cc66aed2c8505296b5b07281fb596ca8&=&format=webp" />
        </button>
        <button @click="ranking()" class="w-[60px] h-[60px] fixed bottom-[17%] right-5 z-50">
        <img class="w-full h-full" src="https://media.discordapp.net/attachments/1133807320573431910/1177159407973449788/icons8-ranking-65.png?ex=65717e21&is=655f0921&hm=eafe14adef2cb3f8e7cf30a2febe4dc9aa654185dceb183bafe9def0937f5551&=&format=webp" />
        </button>
        </div>

        <div v-show="Ranking && !Exchangepoints">
                <div class="w-full h-full mt-[7rem]">
                        <button @click="ranking()">
                        <i class="fa-solid fa-arrow-left text-black text-xl ml-3"></i>
                        </button>
                </div>
            <div class="w-full h-full">
                <h1 class="text-center text-2xl font-bold">RANKING</h1>
                <div class="listranking w-[90%] bg-[#E3E3E3] h-[450px] m-auto rounded-2xl mt-3">
                        <div class="header-ranking w-[90%] m-auto pt-3 flex flex-wrap border-b-2 border-[#9D9D9D] pb-2">
                                <div class="flex flex-wrap gap-3 w-[80%]">
                                        <span class="text-sm font-bold">TOP</span>
                                        <span class="text-sm font-bold">Name</span>
                                </div>
                                <div>
                                        <span class="text-sm font-bold">Trees</span>
                                </div>
                        </div>
                        <!--  -->
                       <div class="w-full grid grid-rows-6 h-[74%] overflow-auto">
                        <!-- item -->
                        <div class="w-[90%] m-auto pt-3 pb-1 flex flex-wrap border-b-2 border-[#9D9D9D]" v-for="item in rankinged" :key="item">
                                <div class="flex flex-wrap gap-3 w-[80%]">
                                        <span class="text-sm font-bold">{{ item.ID }}</span>
                                        <span class="text-sm font-bold">{{ item.username }}</span>
                                </div>
                                <div>
                                        <span class="text-sm font-bold">{{ item.trees }}</span>
                                </div>
                        </div>
                        <!-- end item -->
                       </div>
                        <!--  -->
                        <div class="w-[90%] m-auto mt-2">
                                <h1 class="font-bold">Your rank</h1>
                                <div class="w-full h-[30px] bg-white rounded-2xl flex items-center ">
                                        <div class="w-[90%] m-auto flex flex-wrap">
                                                <div class="flex flex-wrap gap-3 w-[80%]">
                                                        <span class="text-sm font-bold">{{ rankingID }}</span>
                                                        <span class="text-sm font-bold">{{users.username}}</span>
                                                </div>
                                        <div>
                                                <span class="text-sm font-bold">{{ users.trees }}</span>
                                        </div>
                                </div>
                                </div>
                        </div>
                </div>
            </div>
               
        </div>

        <div v-show="Exchangepoints && !Ranking" class="w-full h-full mt-[7rem]">
        <div class="w-full h-full">
                <button @click="exchangepoints()">
                <i class="fa-solid fa-arrow-left text-black text-xl ml-3"></i>
                </button>
         </div>
         <div class="w-[90%] flex items-center justify-between m-auto">
                <div class="image w-[70px] h-[70px] shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] rounded-full overflow-hidden">
                    <img src="../../assets/noavatar.jpg" alt="" class="w-full h-full object-cover">
                </div>
                <div class="w-[70%] h-[35px] bg-white shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] rounded-2xl text-center mr-3 flex items-center justify-center">
                        <span class="font-bold">{{users.fnamelname}}</span>
                </div>
         </div>
         <div class="mypoint mt-7 w-[70%] bg-white shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] rounded-3xl py-2 text-center flex flex-col items-center justify-center m-auto">
                <span class="font-bold">My Points</span>
                <span class="text-4xl font-bold">{{ users.points }}</span>
         </div>
         <div class="mt-5 ex-con w-[90%] h-[300px] grid grid-rows-2 grid-cols-2 gap-3 m-auto">
                <button class="w-full h-[100px] p-5 bg-white shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] rounded-2xl text-center flex flex-col items-center justify-center m-auto">
                <img src="https://media.discordapp.net/attachments/1133807320573431910/1177285038296014889/image.png?ex=6571f322&is=655f7e22&hm=0d2e1a8cbd3acfde5d8bd74f251243665b2698fbedb262fbeca952ce165672a6&=&format=webp" alt="" class="w-[50px] h-[50px] object-cover">
                <span class="text-sm font-bold">Souvenir</span>
                </button>
                
                <button class="w-full h-[100px] p-5 bg-white shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] rounded-2xl text-center flex flex-col items-center justify-center m-auto">
                <img src="https://media.discordapp.net/attachments/1133807320573431910/1177168478575263825/icons8-donate-60.png?ex=65718694&is=655f1194&hm=0dff5d46ee7f2f139853aa0fcb064f4e7513aaac98d8ee2f10aa61e00943f18b&=&format=webp" alt="" class="h-[50px]">
                <span class="text-sm font-bold">Exchange for donate</span>
                </button>
                
                <button class="w-full h-[100px] p-5 bg-white shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] rounded-2xl text-center flex flex-col items-center justify-center m-auto">
                <img src="https://media.discordapp.net/attachments/1133807320573431910/1177168418483474432/icons8-coupon-47.png?ex=65718685&is=655f1185&hm=08f645f99acf997dc31b402cf7f6ab9d747f68381354395644bf043792965fde&=&format=webp" alt="">
                <span class="text-sm font-bold">Exchange for coupons</span>
                </button>

                <button class="w-full h-[100px] p-5 bg-white shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] rounded-2xl text-center flex flex-col items-center justify-center m-auto">
                <img src="https://media.discordapp.net/attachments/1133807320573431910/1177168450188226611/icons8-transfer-64.png?ex=6571868d&is=655f118d&hm=4abe37e04b337850fe867066d17f7db094c4bc6b259b85306bc91140b9090ef7&=&format=webp" alt="" class="h-[50px]">
                <span class="text-sm font-bold">Transfer points</span>
                </button>
         </div>
        </div>
</div>
  
</template>

<script>
import axios from 'axios'
export default {
    name: "TICKET",
    data(){
        return{
        Ranking: false,
        Exchangepoints: false,
        username: null,
        users: [],
        rankinged: [],
        rankingID: null
        }
    },
    methods:{
        ranking(){
                this.Ranking = !this.Ranking
                this.Exchangepoints = false
        
                axios.get('https://sakaeotravel.online:3000/api/ranking').then((response) => {
                        if (response) {
                                this.rankinged = response.data
                                for (const item of this.rankinged) {
                                        if (item.username == this.username) {
                                                this.rankingID = item.ID
                                        }
                                }
                        }       
                }).catch(function (error) {
                        if (error.response) {
                                console.log(error.response.data);
                        }
                        })
        
        },
        exchangepoints(){
                this.Exchangepoints = !this.Exchangepoints
                this.Ranking = false
        },
        refresh(){
           axios.post(`https://sakaeotravel.online:3000/api/CheckcurrentUser/${this.username}`, {})
           .then((response) => {
               if (response) {
                // console.log(response.data)
                this.users = response.data
                   
               }
           }).catch((error) => {
               console.log(error)
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
.tree{
    flex-shrink: 0;
    margin-bottom: 10px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 4px 5px 5.8px 1px rgba(0, 0, 0, 0.25);
}
.ponit-item{
    opacity: 0.2;
}

</style>