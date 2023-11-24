<template>
  <div class="w-full h-full">
        <div
            class="headerpage mt-[7rem] w-[70%] h-[50px] bg-[#1F7B4A] text-white m-auto shadow-[rgba(0,_0,_0,_0.2)_0px_3px_8px] rounded-2xl flex justify-center items-center">
            <span class="text-xl font-bold">USER ACCOUNT</span>
        </div>
        <div class="userprofile w-full mb-10 flex">
          <div class="avatar w-[5rem] h-[5rem] mt-[3.5rem] ml-5 ">
            <img :src="`https://sakaeotravel.online/upload_avatar/${users.avatar}`" :alt="users.avatar" class="w-full h-full object-cover rounded-full border-2 border-emerald-500">
          </div>
          <div class="userdetail w-[70%] mt-[4rem] ml-5 font-bold flex flex-col">
            <span>{{users.fnamelname}}</span>
            <span>{{users.phonenumber}}</span>
            <span>{{users.mail}}</span>
            <span>MONEY : {{users.money}}</span>
          </div>
        </div>
        <hr>
        <div class="settingusers ml-5">
          <ul class="list-disc flex flex-col flex-wrap gap-3 ml-7 mt-5">
            <li>Setting</li>
            <li>Help</li>
            <li><router-link to="/login">Logout</router-link></li>
          </ul>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'USERS',
    data(){
      return{
        username: null,
        users: []
      }
    },
    methods: {
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


</style>