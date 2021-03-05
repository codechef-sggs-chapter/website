<template id="event_page">

        <base-container>

            <template v-slot:zero  >
                <div class="flex text-white mb-12">
                    <svg class="w-8 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                         <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                     <p class=" text-4xl font-bold">EVENTS</p>
                </div>
                <button :class="bindBtn" @click="ToggleComponent('tech-talk')">Tech talk</button>
                <button :class="bindBtn" @click="ToggleComponent('coding-compititions')">Coding Competitions</button>
            </template>

            <template v-slot:one>
               <div class=" text-white font-bold">
                    <h1 class="font-bold text-2xl m-2">{{heading}}</h1>
                    <ul class="m-2 list-disc list-outside p-4">
                        <li  v-for="l in list" :key="l.id">{{l.text}}</li>
                    </ul>
                    <p>{{note}}</p>
               </div>
            </template>

            <template v-slot:two>
                <div class="justify-center" v-if=" (comp === 'tech-talk') ">
                    <img class="w-100 items-center" src="../../assets/event-talks.svg" alt="">
                </div>
                <div class="justify-center text-center " v-else>
                    <img class=" w-60 items-center" src="../../assets/programming.gif" alt="">
                </div>
            </template>

    </base-container>

</template>



<script>


export default {
    computed:{
        bindBtn(){
            return this.btnClasses
        },
        bindImg(){
            return this.img
        }
    },
    data() {
        return {
            comp:'tech-talk',
            btnClasses:'px-4 py-2 rounded text-blue-500 text-2xl font-bold m-3 border-4 border-blue-500 focus:text-white rounded-xl focus:bg-blue-700' ,
            eventHeading:'Active organisation of tech talks by industry experts.',
            ccHeading:'Organisation of various coding events at codechef platform',

            eventList:[{id:1,text:' Allowing students to get their doubts cleared by industry experts.'},
                       {id:2,text:'A healthy discussion with experts motivates students to aim higher.'},
                       {id:3,text:'These journeys are exciting and tell the importance of peer coding culture in struggle of these experts.'}],
            
            ccList:[{id:1,text:' Inculcates the habit of peer coding.'},
                       {id:2,text:' Help students learn various new concepts during contest.'},
                       {id:3,text:"These contests are organised for various difficulty levels and therefore, they are fun for absolute begginers and a challenge for pro's "}],
            eventNote:'We as a community have organised various events that enables students to interact with industry experts.We encourage to you join our upcoming events and get the most out of them! ',
            ccNote:'',

            heading:'Active organisation of tech talks by industry experts.',
            list:[{id:1,text:' Allowing students to get their doubts cleared by industry experts.'},
                       {id:2,text:'A healthy discussion with experts motivates students to aim higher.'},
                       {id:3,text:'These journeys are exciting and tell the importance of peer coding culture in struggle of these experts.'}],
            note:'We as a community have organised various events that enables students to interact with industry experts.We encourage to you join our upcoming events and get the most out of them! ',
            eventImg:'../../assets/event-talks.svg',
            ccImg:'../../assets/programming.gif',

            img:'../../assets/event-talks.svg'

        }
    },
    methods:{
        ToggleComponent(c){
            this.comp = c
            if(c === 'tech-talk')
            {
                this.heading = this.eventHeading
                this.list = this.eventList
                this.note = this.eventNote
                this.img = this.eventImg
            }
            else{
                this.heading = this.ccHeading
                this.list = this.ccList
                this.note = this.ccNote
                this.img = this.ccImg
            }
        }
    }
}
</script>