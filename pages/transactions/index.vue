<template>
  <div class="grid w-full gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>All your transaction</p>
        <h1>Transactions</h1>
      </div>
    </header>
    <DataTable :data="data" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { columns } from "./columns";

const data = ref<any>([]);

function generateRandomData(numObjects: any) {
  const statuses = ["pending", "processing", "completed"];
  const emails = [
    "example@gmail.com",
    "m@example.com",
    "text@example.com",
    "user@example.com",
  ];

  const randomData: any[] = [];

  for (let i = 0; i < numObjects; i++) {
    const id = Math.random().toString(36).substring(2, 8);
    const amount = Math.floor(Math.random() * 500) + 50;
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const email = emails[Math.floor(Math.random() * emails.length)];

    randomData.push({ id, amount, status, email });
  }

  return (data.value = randomData);
}

onMounted(() => {
  generateRandomData(10);
});
</script>
