<template>
    <div class="w-full h-full">
      <div style="position: relative; z-index: 1;" class="logo w-full h-[6rem] bg-emerald-600 flex items-center  rounded-b-lg">
        <img src="../../assets/hlogo.png" alt="" class="w-[150px] h-[150px] object-cover">
      </div>
      <div style="display: grid; grid-template-columns: 36px 36px 5fr 1fr;height: 89px; border-radius: 10px; border: 1px solid #C7C7C7; background: #FFE486; margin-top: -35px; padding-top: 40px; padding-left: 10px;">
        <button @click="backchat()" style="width: 36px; height: 36px;">
          <img style="object-fit: cover;" src="https://s3-alpha-sig.figma.com/img/9cf7/88ed/eab8a448c235f3dd857583bf83d92b7b?Expires=1701648000&Signature=H0NlbT0Gb~-ui7q~hC59MTt9uF2qpXTGdpTNSu52p4mVZ8Ga7Qmk07UCJ6XJO5K6bJ9AFKBNcMgijaNX5PHZNy~ngLHHD0dzGTr3JVEijJOeCWJaiQ1OMPrEvCUXLaEyXiF-jguc1Hh31PFQ-ExEqqxrKoqVxeSIjFnf4lSD0MM5oB0NMbgbAeqP0GF~qkoHfFeqZV9QuNqR16jyIu1bLu~sRmx2XLaDM9cgWCD6nBLxCFkyoYar23Qi-H8NZKXt~JqQ6lpYie3zpMBUH3EAkAQ1ZGyycpj22M9lRvc3Z-QJ-P6MTZizICQ~2hJuHjngpgMTQoG-3BhMQSdugynJhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
        </button>
        <div>
          <div style="width: 36px; height: 36px; margin-left: 15px;">
          <img style="object-fit: cover; border-radius: 50px;" src="https://s3-alpha-sig.figma.com/img/d8d0/0bb3/9c8a2808a01463d097b58188d01b5cdd?Expires=1701648000&Signature=OQgOqOEtTiPWK5C5cP7TzcqTS25GNwIYIJzCTTdfvR0lWa55vMeE23epK5Ak9qi7it~KYBNt-bP33mcgy8slg~18S9mWzgd80y2~e7TtVYxs2m32PIaxMiswupW1g75VlJCmay5kuR6Qx0ELp-sFMZqz26TP4XKNFqj08LLLkeMkjnaqxu-aIEX3RUI7GhTSVu5UYI4ocZR2WmwZk9lD4lEfTiYWm1vutFE-tk8TzMZqFDg-PRqadep7PHiht-Y1pDWBalVxVdXcXTyFVK0PZRVD8UW~jMfdtFvzl9PfTgipir7DlcTictwfj-DcvJjX3-5i1NtQ5fQLbrT5JJxVJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
          </div>
        </div>
        <div style="padding-left: 30px;">
          <p style=" font-size: 22px; font-weight: bold;">Leena Pen Kon</p>
        </div>
        <div style="width: 36px; height: 36px; ">
          <img style="object-fit: cover; border-radius: 50px;" src="https://s3-alpha-sig.figma.com/img/9a51/29b0/7aa3fa3d472c8df980906411d34df661?Expires=1701648000&Signature=Grtqr4X3zyj~CR35TxrImltAY7YJMuUoEM8JvWC4YprSHpJvH4YrEtuIuuj994zOZ6vXShpC~W0tTPxFm~oYk7JD57-uw9qzaQT8Q5FDuKBMWxxa0x5zp2npLswmeUCwOKKu0Ead9JsZ8lgZQfMN0SOpiOE4Mo~LhOKJNzQjcblik6MK~IDB~gxtdjYHaA16LbA9HM7AA8pJ4lydeyOV7Ul~sXXCrtqMTgY6gUYt39uXMaxtyqHD2mRVvCA8Fg7OBkSa2lGa-NU-kT1VnX9j4Pi1vrvZjq6UQaDkuKBGUW4oz9NDN0NFjUmhHPRrw~DGtBhyuKvpNMGjjnp8STmvxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
          </div>
      </div>
  
      <div style="display: grid; grid-template-columns: 36px 1fr; margin-top: 15px;">
          <div style="width: 36px; height: 36px; margin-left: 15px;">
          <img style="object-fit: cover; border-radius: 50px;" src="https://s3-alpha-sig.figma.com/img/d8d0/0bb3/9c8a2808a01463d097b58188d01b5cdd?Expires=1701648000&Signature=OQgOqOEtTiPWK5C5cP7TzcqTS25GNwIYIJzCTTdfvR0lWa55vMeE23epK5Ak9qi7it~KYBNt-bP33mcgy8slg~18S9mWzgd80y2~e7TtVYxs2m32PIaxMiswupW1g75VlJCmay5kuR6Qx0ELp-sFMZqz26TP4XKNFqj08LLLkeMkjnaqxu-aIEX3RUI7GhTSVu5UYI4ocZR2WmwZk9lD4lEfTiYWm1vutFE-tk8TzMZqFDg-PRqadep7PHiht-Y1pDWBalVxVdXcXTyFVK0PZRVD8UW~jMfdtFvzl9PfTgipir7DlcTictwfj-DcvJjX3-5i1NtQ5fQLbrT5JJxVJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
          </div>
          <div style="margin-top: auto; margin-bottom: auto; margin-left: 25px;">
            <p style="width: 100px;background-color: #E2E4E4; text-align: center;padding: 5px; border-radius: 25px;">สวัสดีจ้าาา</p>
          </div>
        </div>
      <div>
        <div style="margin-top: auto; margin-bottom: auto; margin-left: 25px; float: right; padding-right: 15px; margin-bottom: 15px;">
            <p style="width: 50px;background-color: #FFF6D5; text-align: center;padding: 5px; border-radius: 25px;">ครับ</p>
          </div>
      </div>
  
      <div style="display: grid; grid-template-columns: 36px 1fr; margin-top: 30px;">
          <div style="width: 36px; height: 36px; margin-left: 15px;">
          <img style="object-fit: cover; border-radius: 50px;" src="https://s3-alpha-sig.figma.com/img/d8d0/0bb3/9c8a2808a01463d097b58188d01b5cdd?Expires=1701648000&Signature=OQgOqOEtTiPWK5C5cP7TzcqTS25GNwIYIJzCTTdfvR0lWa55vMeE23epK5Ak9qi7it~KYBNt-bP33mcgy8slg~18S9mWzgd80y2~e7TtVYxs2m32PIaxMiswupW1g75VlJCmay5kuR6Qx0ELp-sFMZqz26TP4XKNFqj08LLLkeMkjnaqxu-aIEX3RUI7GhTSVu5UYI4ocZR2WmwZk9lD4lEfTiYWm1vutFE-tk8TzMZqFDg-PRqadep7PHiht-Y1pDWBalVxVdXcXTyFVK0PZRVD8UW~jMfdtFvzl9PfTgipir7DlcTictwfj-DcvJjX3-5i1NtQ5fQLbrT5JJxVJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
          </div>
          <div style="margin-top: auto; margin-bottom: auto; margin-left: 25px;">
            <p style="width: 100px;background-color: #E2E4E4; text-align: center;padding: 5px; border-radius: 25px;">อยู่แถวไหนคะ</p>
          </div>
        </div>
      <div>
        <div style="margin-top: auto; margin-bottom: auto; margin-left: 25px; float: right; padding-right: 15px; margin-bottom: 15px;">
            <p style="width: 100px;background-color: #FFF6D5; text-align: center;padding: 5px; border-radius: 25px;">กรุงเทพครับ</p>
          </div>
      </div>
  
      <div style="display: grid; grid-template-columns: 36px 1fr; margin-top: 30px;">
          <div style="width: 36px; height: 36px; margin-left: 15px;">
          <img style="object-fit: cover; border-radius: 50px;" src="https://s3-alpha-sig.figma.com/img/d8d0/0bb3/9c8a2808a01463d097b58188d01b5cdd?Expires=1701648000&Signature=OQgOqOEtTiPWK5C5cP7TzcqTS25GNwIYIJzCTTdfvR0lWa55vMeE23epK5Ak9qi7it~KYBNt-bP33mcgy8slg~18S9mWzgd80y2~e7TtVYxs2m32PIaxMiswupW1g75VlJCmay5kuR6Qx0ELp-sFMZqz26TP4XKNFqj08LLLkeMkjnaqxu-aIEX3RUI7GhTSVu5UYI4ocZR2WmwZk9lD4lEfTiYWm1vutFE-tk8TzMZqFDg-PRqadep7PHiht-Y1pDWBalVxVdXcXTyFVK0PZRVD8UW~jMfdtFvzl9PfTgipir7DlcTictwfj-DcvJjX3-5i1NtQ5fQLbrT5JJxVJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
          </div>
          <div style="margin-top: auto; margin-bottom: auto; margin-left: 25px;">
            <p style="width: 170px;background-color: #E2E4E4; text-align: center;padding: 5px; border-radius: 10px;">112/4 วงศ์สว่าง 11
บางซื่อ กรุงเทพ
10800
ชื่อ ลีน่า ค่ะ 
099932236</p>
          </div>
        </div>
      <div>
        <div style="margin-top: auto; margin-bottom: auto; margin-left: 25px; float: right; padding-right: 15px; margin-bottom: 15px;">
            <p style="width:120px;background-color: #FFF6D5; text-align: center;padding: 5px; border-radius: 25px;">ส่งพรุ่งนี้นะครับ</p>
          </div>
      </div>
  
      <div style="display: grid; grid-template-columns: 36px 1fr; margin-top: 30px;">
          <div style="width: 36px; height: 36px; margin-left: 15px;">
          <img style="object-fit: cover; border-radius: 50px;" src="https://s3-alpha-sig.figma.com/img/d8d0/0bb3/9c8a2808a01463d097b58188d01b5cdd?Expires=1701648000&Signature=OQgOqOEtTiPWK5C5cP7TzcqTS25GNwIYIJzCTTdfvR0lWa55vMeE23epK5Ak9qi7it~KYBNt-bP33mcgy8slg~18S9mWzgd80y2~e7TtVYxs2m32PIaxMiswupW1g75VlJCmay5kuR6Qx0ELp-sFMZqz26TP4XKNFqj08LLLkeMkjnaqxu-aIEX3RUI7GhTSVu5UYI4ocZR2WmwZk9lD4lEfTiYWm1vutFE-tk8TzMZqFDg-PRqadep7PHiht-Y1pDWBalVxVdXcXTyFVK0PZRVD8UW~jMfdtFvzl9PfTgipir7DlcTictwfj-DcvJjX3-5i1NtQ5fQLbrT5JJxVJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
          </div>
          <div style="margin-top: auto; margin-bottom: auto; margin-left: 25px;">
            <p style="width: 150px;background-color: #E2E4E4; text-align: center;padding: 5px; border-radius: 25px;">ได้ค่า ขอบคุณค่ะ</p>
          </div>
        </div>
  
      <div class="flex items-center justify-between" style=" width: 80%; margin-bottom: 15px;
      padding: 5px;
          font-size: 22px;
          color: #9B9B9B;
          border-radius: 50px;
          background: rgba(222, 222, 222, 0.66);
          display: flex;
          position: absolute;
          left: 10%;
          bottom: 0px;">
        <div><p style="padding-left: 15px;">Type a message</p></div>
        <div class="mr-3"><img style="width: 33px;" src="https://s3-alpha-sig.figma.com/img/c105/0a4e/7afd5e087615c4b87b227454d19cc4e6?Expires=1701648000&Signature=Di88M3Xgcm-vYC3CvTrt0HOGfkI-PSmCRHudrWZD2Y-INwgALbx6tXM1ZI4NsQzfkBgY2oex0S8jzUC4vJeQkLhlEyvNJYa0ZMyiALgw95ClL2KFMwJDUTFoenAQ4iqffRD3wLZIpgy0Pt3caPP9DCfhNrMoOdy5I3YgktLgvRwU3UVxk1KkfibBDbCoLJ2xk2eI-Fj411X9~F48h8a-EmyN3rorc~fWrD92vhY9OvLd7mF9utMYJy3KaXfGZySgUTXgziw-Tl~RUY7zZq2aH5KtNObFkSO8pebbSXczpCy98CgwNfRxdPwraFlZg2mkqGauhyRdJ~k2MBSbyarDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""></div>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
      name: 'CHATCHILDERN',
      methods:{
        backchat(){
          this.$router.push('/chat')
        }
      }
  }
  
  </script>
  
  <style>
  
  </style>