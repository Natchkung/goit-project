<template>
  <div class="w-full h-full relative">
        <div class="headerpage mt-[7rem] w-[70%] h-[50px] bg-[#1F7B4A] text-white m-auto shadow-[rgba(0,_0,_0,_0.2)_0px_3px_8px] rounded-2xl flex justify-center items-center">
          <router-link to='/main' class="absolute top-3 left-3 w-7 h-7 bg-emerald-600 flex items-center justify-center rounded-full">
        <i class="fa-solid fa-arrow-left text-white"></i>
    </router-link>
            <span class="text-xl font-bold">MESSENGER</span>
        </div>
        <div class="w-full h-[650px] overflow-auto mt-5">
          <!--  -->
          <button id="chat" @click="Chat()">
            <div>
                <img id ="img" src="https://s3-alpha-sig.figma.com/img/d8d0/0bb3/9c8a2808a01463d097b58188d01b5cdd?Expires=1701648000&Signature=OQgOqOEtTiPWK5C5cP7TzcqTS25GNwIYIJzCTTdfvR0lWa55vMeE23epK5Ak9qi7it~KYBNt-bP33mcgy8slg~18S9mWzgd80y2~e7TtVYxs2m32PIaxMiswupW1g75VlJCmay5kuR6Qx0ELp-sFMZqz26TP4XKNFqj08LLLkeMkjnaqxu-aIEX3RUI7GhTSVu5UYI4ocZR2WmwZk9lD4lEfTiYWm1vutFE-tk8TzMZqFDg-PRqadep7PHiht-Y1pDWBalVxVdXcXTyFVK0PZRVD8UW~jMfdtFvzl9PfTgipir7DlcTictwfj-DcvJjX3-5i1NtQ5fQLbrT5JJxVJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
            </div>
            <div id="text" class="text-left">
                <p class="pl-[10px] text-lg font-bold">Leena Pen Kon</p>
                <p class="pl-[10px]">ได้ค่า ขอบคุณค่ะ</p>
            </div>
            <div style="vertical-align: top; display: inline-block; text-align-last: right; padding-right: 15px; color: rgba(0, 0, 0, 0.50);">
                <p>10:45</p>
            </div>
          </button>
        <!--  -->
        
        
        </div>
    </div>
</template>

<script>
export default {
    name: 'CHAT',
    methods: {
      Chat(){
        this.$router.push('/chatchildern')
      }
        
    },

}
</script>

<style>
#chat {
    padding-left: 15px;
    margin-top: 30px;
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 50px 2fr 1fr;
}

#img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50px;
    border: 2px solid rgb(212, 212, 212);
}

#text{
    vertical-align: top;
}

</style>