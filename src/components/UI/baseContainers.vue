<template>
        <div class="mt-6 mb-6 p-4 md:p-0 grid grid-cols-6 leading-tight font-mono ">
        <div></div>
        <div class="col-start-2 col-span-4 ">
            <slot name="zero"> </slot>
            <div class=" av grid grid-cols-1 shadow-xl md:grid-cols-2 p-4 md:gap-8">
                <div>
                    <slot name="one"> </slot>
                </div>
                <div class="justify-center">
                    <slot name="two"> </slot>
                </div>
            </div>
        </div>
        <div></div><div></div><div></div><div></div>
    </div>
</template>



<style scoped>
.av{
    background-color: rgb(56, 55, 55);
}
</style>