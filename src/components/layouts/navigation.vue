<template>
    <nav  class="navbar sticky shadow-xl flex-wrap content-around text-center p-4 items-center flex bg-bluegray-800 font-mono">

        <div  class="md:flex flex-1 text-xl text-white font-bold self-center tracking-wider cursor-pointer " id="logo">THE NAV</div>

        <div class="flex-1 " >
            <transition
                enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__fadeOutUp"
            >
                <ul v-if="show" class="hidden md:flex justify-around flex-wrap text-white font-bold tracking-wider " id="menu">
                    <li :class="bindLinkClasses"><a href="#">Home</a></li>
                    <li :class="bindLinkClasses"> <button  v-scroll-to="'#aboutUs'" >AboutUs</button></li>
                    <li :class="bindLinkClasses"> <button  v-scroll-to="'#events'" > Events </button> </li>
                    <li :class="bindLinkClasses"> <button  v-scroll-to="'#contactUs'" > ContactUs </button></li>
                </ul>
            </transition>
        </div>

        <div @click="burgerClick()">
            <svg v-if="burgerOrCross"  id="svg1" class="w-9 md:hidden cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else id="svg2" class="w-9 md:hidden cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>

    </nav>

</template>


    <script>
    export default {
        data() {
            return {
                show:true,
                burgerOrCross:true,
                linkClasses:'px-2 py-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-2 hover:bg-blue-600 border-b-2 border-fuchsia-600'
            }
        },
        computed:{
            bindLinkClasses(){
                return this.linkClasses
            }
        },
        methods:{
            burgerClick(){
                this.burgerOrCross = !this.burgerOrCross
                const menu = document.querySelector('#menu')
                const logodiv = document.querySelector('#logo')

                
                if(menu.classList.contains('hidden'))
                {
                    menu.classList.remove('hidden')
                    logodiv.classList.add('hidden')
                }
                else {
                    menu.classList.add('hidden')
                    logodiv.classList.remove('hidden')
                }
            }
        },

    }
    </script>


<style >
    .navbar {
        overflow: hidden;
        position: fixed;
        top: 0;
        width: 100%;
    }
</style>