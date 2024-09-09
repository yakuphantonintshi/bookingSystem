<template>
    <h1>AVAILABLE TICKETS:</h1>
    <div class="available" v-if="departure?.length">
     

    </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue'
export default{
    components: {
        CardComp
    }
}
</script>