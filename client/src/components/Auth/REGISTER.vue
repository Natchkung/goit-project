<template>
  <div class="w-full h-screen" id="register">
    <div class="logo w-[150px] h-[150px]"><img src="../../assets/logo.png" alt=""></div>
    <h1 class="titeregister text-[40px] font-bold text-white text-center mt-0">REGISTER</h1>
    <div class="con-login w-[70%] m-auto">
      <form @submit.enter.prevent="SaveData()" method="post" enctype="multipart/form-data">
        <div>
          <input type="text"
            class="w-full p-3 bg-whtie border-2 border-slate-500 mt-3 indent-3 focus:outline-none focus:border-3 focus:border-sky-500 rounded-xl"
            placeholder="Yourname" v-model="regData.fnamelname" required />
        </div>
        <div>
          <input type="text"
            class="w-full p-3 bg-whtie border-2 border-slate-500 mt-3 indent-3 focus:outline-none focus:border-3 focus:border-sky-500 rounded-xl"
            placeholder="mail" v-model="regData.mail" required />
        </div>
        <div>
          <input type="text"
            class="w-full p-3 bg-whtie border-2 border-slate-500 mt-3 indent-3 focus:outline-none focus:border-3 focus:border-sky-500 rounded-xl"
            placeholder="phonenumber" v-model="regData.phonenumber" required />
        </div>
        <div>
          <input type="text"
            class="w-full p-3 bg-whtie border-2 border-slate-500 mt-3 indent-3 focus:outline-none focus:border-3 focus:border-sky-500 rounded-xl"
            placeholder="username" v-model="regData.username" required />
        </div>
        <div>
          <input type="password"
            class="w-full p-3 bg-whtie border-2 border-slate-500 mt-3 indent-3 focus:outline-none focus:border-3 focus:border-sky-500 rounded-xl"
            placeholder="password" v-model="regData.password" required />
        </div>
        <input type="file"
          class="w-full p-1 rounded-[5px] bg-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 mt-3"
          ref="avatar" required/>

          <div class="w-full flex justify-center items-center mt-5">
        <button type="submit" class="px-7 p-4 bg-emerald-700 rounded-lg text-white hover:bg-emerald-500">REGISTER</button>
      </div>
      </form>
        
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'REGISTER',
  data() {
    return {
      regData: {
        fnamelname: null,
        mail: null,
        phonenumber: null,
        username: null,
        password: null,
        avatar: null
      }

    }
  },
  methods: {
    SaveData() {
      this.regData.avatar = this.$refs.avatar.files[0]

      const formWithImageData = new FormData()

      for (const key in this.regData) {
        formWithImageData.append(key, this.regData[key])
      }

      axios.post("https://sakaeotravel.online:3000/api/register", formWithImageData)
        .then((response) => {
          if (response.data == "Existing User") {
            alert("Existing User!!")
          } else {
            alert("Register success")
            this.$router.push({path: '/login'})
          }
        }).catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
          }
        })

    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Kdam+Thmor+Pro&family=Mitr:wght@300&display=swap');

#register {
  background: radial-gradient(circle at 10% 20%, rgb(50, 172, 109) 0%, rgb(209, 251, 155) 100.2%);
}

.titeregister {
  font-family: 'Kdam Thmor Pro', sans-serif;
}
</style>