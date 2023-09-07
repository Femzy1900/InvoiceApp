<template>
    <!-- <div>
        <h2>{{ invoice.invoiceId }}</h2>
    </div> -->
    <router-link class="invoice flex" :to="{name: 'Invoice', params: {invoiceId: invoice.invoiceId}}">
        <div class="left flex">
            <span>#{{ invoice.invoiceId }}</span>
            <span>{{ invoice.paymentDueDate }}</span>
            <span></span>
        </div>
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