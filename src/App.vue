<template>

    <navigation-bar></navigation-bar>
    <carousal-comp></carousal-comp>
    <about-us id="aboutUs"></about-us>    
    <event-comp id="events"></event-comp>
    <resourses-comp></resourses-comp>

</template>

<script>
import CarousalComp from "./components/layouts/carousal.vue"
import NavigationBar from "./components/layouts/navigation.vue"
import AboutUs from "./components/layouts/aboutus.vue"
import EventComp from "./components/layouts/events.vue"
import ResoursesComp from "./components/layouts/resourses.vue"

export default {
  components:{
    NavigationBar,
    CarousalComp,
    AboutUs,
    ResoursesComp,
    EventComp
  }
}
</script>


<style >

html{
  background-color: rgb(61, 61, 61);
}

</style>