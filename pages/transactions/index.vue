<template>
  <div class="grid w-full gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>All your transaction</p>
        <h1>Transactions</h1>
      </div>
    </header>
    <DataTable />
  </div>
</template>

<script setup>
const loading = ref(false);

const data = ref < any > [];
</script>
