<template>
    <div class="p-4">
        <div class="flex gap-2 items-center bg-[#81B29A] p-2 rounded-lg ">
            <!-- Input for Group Name -->
            <input type="text" class="flex-1 text-3xl font-semibold text-white bg-inherit p-2 outline-none placeholder-white" placeholder="Enter group name" @blur="updateGroupName" @keyup.enter="$event.target.blur()"/>
            <button class="px-4 py-2 focus:outline-none"
                @click="toggleCollapse">
                <img src="../assets/images/expand_icon.svg" class="transition-transform duration-300" :class="isCollapsed ? '' : 'rotate-90'" alt="">
            </button>
        </div>

        <!-- Group content -->
        <div v-show="!isCollapsed" class="bg-[#517061]">
            <div class="flex items-center flex-wrap gap-8 justify-center p-4 ">
                <Card v-for="(card, index) in cardsInfo" :key="index" :cardInfo="card" />
            </div>
        </div>
    </div>
</template>
  
<script>

import Card from './Card.vue';

export default {
    name: 'CollapseTabComponent',

    data() {
        return {
            isCollapsed: true, // Initially, the group is collapsed
        };
    },
    props: {
        cardsInfo: Object
    },
    components: {
        Card
    },
    methods: {
        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
        },
        updateGroupName(){

        }
    },
};
</script>
  