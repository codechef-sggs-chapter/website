<template>
    <div class="text-center">

        <div class=" text-center flex-wrap bg-gradient-to-r from-bluegray-800 to-black  p-5">

           <div>
               <p class="text-4xl font-bold font-mono text-white m-5">CODECHEF SGGSIE&T CHAPTER</p>
           </div> 

           <div class=" flex flex-wrap justify-center ">
               <img class=" w-80 " src="../../assets/sggscodechef.png" alt="">
           </div>

           <div class="text-white font-bold font-mono p-5 mb-3">
               <p> <span class="text-yellow-500">" Our Belief "</span> <br> <span class="text-green-300">bool</span> <span class="text-blue-500" >learning</span>  <span class="text-yellow-500">=</span> <span class="text-blue-500"  >true</span> <span class="text-yellow-500">,</span> <span class="text-blue-500">practicing</span> <span class="text-yellow-500">=</span> <span class="text-blue-500">true</span> <span class="text-yellow-500">;</span>
                    <br> <span class="text-green-300">while</span> <span class="text-yellow-500">(</span> <span class="text-blue-500">learning</span> <span class="text-yellow-500">&&</span> <span class="text-blue-500">practicing</span> <span class="text-yellow-500">)</span> <br><span class="text-yellow-500">{</span><br> <span class="text-green-300">cout</span> &lt;&lt; <span class="text-yellow-500">"SUCCES";</span> <br> <span class="text-yellow-500">}</span>
               </p>
           </div>

           <button class="m-5 font-mono bg-transparent hover:bg-blue-500 text-white font-bold text-xl hover:text-white py-2 px-4 border-4 border-blue-500 hover:border-transparent rounded-2xl">
               beome a member
           </button>

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {    
            count:0,
            para1:false,
            tagLine:' '
        }
    },
//       created() {
//     document.addEventListener('scroll', this.counter)
//   },
//   unmounted() {
//     document.removeEventListener('scroll', this.counter)
//   },
//     methods:{
//         counter() {
//              console.log(document.documentElement.scrollTop )
//             if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
//                 this.para1 = true
//             }
//             else{
//                 this.para1 = false
//             }
//         }
//     }
}
</script>