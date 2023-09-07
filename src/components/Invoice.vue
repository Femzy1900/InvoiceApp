<template>
    <!-- <div>
        <h2>{{ invoice.invoiceId }}</h2>
    </div> -->
    <router-link :to="{name: 'Invoice'}">

    </router-link>
</template>
<script>
export default {
    name: "invoice",
    props: ['invoice']
}
</script>
<style lang="">
    
</style>