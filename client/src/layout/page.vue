<template>
    <div id="page" class="w-full h-full" v-if="checklogin">
        <div class="logo w-full h-[6rem] bg-emerald-600 flex items-center rounded-b-lg fixed top-0 z-50">
      <img src="../assets/hlogo.png" alt="" class="w-[150px] h-[150px] object-cover">
    </div>
        <router-view></router-view>
        <!-- <div class="w-full h-full relative"> -->
        <nav class="w-full h-[100px] shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] fixed bottom-0 flex items-center justify-center bg-[#FFE486] z-50 overscroll-auto  rounded-t-3xl">
            <ul class="flex justify-between items-center w-[90%] m-auto">
                <router-link to="/main" class="flex flex-col items-center" class-active="active">
                   <i class="fas fa-solid fa-house"></i>
                    <span class="mt-2 font-bold">Home</span>
                </router-link>
                <router-link to="/ticket" class="flex flex-col items-center">
                    <i class="fas fa-solid fa-tree"></i>
                    <span class="mt-2 font-bold">Point</span>
                </router-link>
                <router-link to="/editproduct" class="flex flex-col items-center">
                    <i class="fas fa-solid fa-pen-to-square"></i>
                    <span class="mt-2 font-bold">Inventory</span>
                </router-link>
                <router-link to="/users" class="flex flex-col items-center">
                    <i class="fas fa-solid fa-circle-user"></i>
                    <span class="mt-2 font-bold">Account</span>
                </router-link>
            </ul>
            
        </nav>
    </div>
    <div v-else>
        <div class="w-full h-full text-center mt-[350px]">
            <h1 class="text-4xl text-[#e72727] font-bold">คุณยังไม่ได้เข้าสู่ระบบ !!</h1>
            <h1 class="text-lg mt-5">กรุณาคลิกเพื่อกลับไปยังหน้าเข้าสู่ระบบ</h1>
            <router-link to="/login"><button type="button"
                    class="p-3 mt-5 rounded-md bg-emerald-700 duration-500 hover:text-black"><i
                        class="fa-solid fa-right-to-bracket mr-3"></i>เข้าสู่ระบบ</button></router-link>
        </div>
    </div>
  
</template>

<script>
export default {
    name: "PAGE",
    data(){
        return{
            checklogin: false
        }
    },
    created(){
        this.checklogin = localStorage.getItem('checklogin')
    }
}
</script>

<style>
.fas{
    font-size: 1.5rem;
}
.active{
    color: rgb(0, 184, 92);
}
</style>