<template>
  <div class="grid w-full gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Welcome back, matzutake!</p>
        <h1>Dashboard</h1>
      </div>
      <ProductNew />
    </header>

    <main class="grid gap-4">
      <Tabs :default-value="list[0].title">
        <TabsList class="max-w-[400px]">
          <TabsTrigger
            v-for="(item, index) in list"
            :key="index"
            :value="item.title"
            @click="setCurrentCategory"
          >
            {{ item.title }}
          </TabsTrigger>
        </TabsList>

        <TabsContent
          v-for="(item, index) in list"
          :key="index"
          :value="item.title"
        >
          <Chart
            v-if="data.length > 0"
            :current-category="currentCategory"
            :data="data"
          />
        </TabsContent>
      </Tabs>
    </main>
    <footer>
      <div class="grid gap-4 lg:grid-cols-3">
        <Card v-for="(item, index) in cards" :key="index" :card="item"></Card>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const list = [
  { title: "Today", component: resolveComponent("TabsToday") },
  { title: "Week", component: "week" },
  { title: "Month", component: "month" },
  { title: "Year", component: "year" },
];

let data = ref([]);
let currentCategory = ref("today");

const setCurrentCategory = (event) => {
  let v = event.target.innerText.toLowerCase();
  currentCategory.value = v;

  switch (currentCategory.value) {
    case "today":
      generateRandomData(24);
      break;
    case "week":
      generateRandomData(7);
      break;
    case "month":
      generateRandomData(31);
      break;
    case "year":
      generateRandomData(12);
      break;
  }

  return values;
};

function generateRandomData(number) {
  let values = [];
  for (let i = 0; i < number; i++) {
    values.push(Math.floor(Math.random() * 100));
  }

  data.value = values;
}

const cards = [
  {
    title: "Sales",
    progression: 12,
    amount: 1243.43,
    label: "View sales",
    description: "Sales of September 2024",
    icon: "solar:ticket-sale-outline",
  },
  {
    title: "Refunds",
    progression: 8,
    amount: 84.44,
    label: "View refunds",
    description: "Refunds since beginning of the year",
    icon: "heroicons-outline:receipt-refund",
  },
  {
    title: "Payouts",
    progression: 14,
    amount: 899.99,
    label: "View payouts",
    description: "Payouts of this week",
    icon: "tabler:zoom-money",
  },
];

onMounted(() => {
  generateRandomData(24);
});
</script>
