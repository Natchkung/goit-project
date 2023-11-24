<template>
        <div class="w-full h-screen flex flex-col justify-center px-6 lg:px-8" id="login">
  <div class="sm:mx-auto">
    <img class="mx-auto h-auto w-auto" src="../../assets/logo.png" alt="logo">
    <h2 class="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-white ">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" @submit.prevent="Login()" >
      <div>
        <label for="username" class="block text-sm font-bold leading-6 text-white">Username</label>
        <div class="mt-2">
          <input id="username" name="username" type="username" autocomplete="username" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 indent-3 focus:outline-none sm:text-sm sm:leading-6" v-model="LoginData.username">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-bold leading-6 text-white foi">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-white">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 indent-3 focus:outline-none sm:text-sm sm:leading-6" v-model="LoginData.password">
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-emerald-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-white">
        Don’t have account?
        <router-link to="/register">
      <span class="font-semibold leading-6 text-black">create new account</span>
      </router-link>
    </p>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LOGIN',
    data() {
        return {
            LoginData: {
                username: null,
                password: null
            }
        }
    },
    methods: {
        Login() {
            axios.post('https://sakaeotravel.online:3000/api/login', this.LoginData).then((response) => {
                if (response) {
                    localStorage.setItem('checklogin', true)
                    localStorage.setItem('username', response.data.user.username)
                    alert("Login Success");
                    this.$router.push({ path: '/main' })
                }
            }
            ).catch(function (error) {
                if (error.response) {
                    if (error.response.data == 'Password Invalid!!!'){
                        alert("User or Password is incorrect")
                    }else if (error.response.data == 'User not found!!'){
                      alert('User not found!!')
                    }
                }
            })
        }
    },
    created() {
        localStorage.clear()
    }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Kdam+Thmor+Pro&family=Mitr:wght@300&display=swap');

#login {
  background: linear-gradient(180deg, #2E744F 42.86%, #FCE38A 101.28%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}


.titelogin {
    font-family: 'Kdam Thmor Pro', sans-serif;
}
</style>