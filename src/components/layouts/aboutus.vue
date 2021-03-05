<template >
    <base-container>
            <template v-slot:zero>
                    <div class="flex p-2 font-mono rounded-xl text-white  ">
                        <svg class="w-8 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="font-bold text-4xl">ABOUT US</p>
                    </div>

                    <h1 class="text-xl mt-6 mb-6 text-blue-500 font-bold">WHO WE ARE</h1>
            </template>
            <template v-slot:one>
                <div class="text-white  font-semibold">
                        <p>CodeChef ZHCET Chapter is the programming community run and maintained by the official chapter leaders, from Zakir Husain College of Engineering and Technology and mentored by CodeChef. </p>
                        <br>
                        <p>We conduct different activities and engagements to achieve the mission, such as: </p> 
    
                        <ul class="p-4  list-disc list-outside">
                            <li v-for="list in ourWork" :key="list.id">
                                {{list.text}}
                            </li>
                        </ul> 
                </div>
            </template>
            <template v-slot:two>
                <div class="text-white font-semibold text-left">
                    <p class="mb-3 ">Our mission is to build a robust competitive programming 
                        culture at ZHCET and help students become better problem 
                        solvers, foster learning environment and focus on development 
                        of all individuals in terms of their technical knowledge.
                    </p>
                    <button class="font-mono bg-transparent hover:bg-blue-500 text-blue-500 font-bold text-lg hover:text-white py-1 px-2 border-4 border-blue-500 hover:border-transparent rounded-2xl">
                        Let's Explore
                    </button>
                </div>
            </template>
    </base-container>
</template>

<script>

export default {
    data() {
        return {
            ourWork:[{id:1,text:'Organizing events, meetups, and speaker sessions on campus to raise awareness'},
                     {id:2,text:'Hosting various contests and competitions to facilitate learning '},
                     {id:3,text:'Conducting programming workshops and doubt-sessions for better learning'}]
        }   
    }
}
</script>






