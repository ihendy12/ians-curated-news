<template>
    <div>
        <h1 class="subTitle">Top News in Tech</h1>
        <technology-list></technology-list>
    </div>
</template>

<script>
import TechnologyList from '@/components/TechnologyList.vue';

export default {
    components: {
        TechnologyList
    }
}
</script>

<style>
 .subTitle{
    text-align: center;
 }
</style>