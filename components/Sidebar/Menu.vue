<template>
  <div class="overflow-hidden">
    <header
      class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer"
    >
      <Logo />
      <p class="font-bold text-black">Nuxt Finance</p>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <NuxtLink
          v-for="(item, index) in items"
          :key="index"
          :href="item.path"
          class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100"
        >
          <Icon size="20" :name="item.icon" color="black" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    title: "Overview",
    path: "/",
    icon: "ri:dashboard-line",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: "ph:arrows-left-right",
  },
  {
    title: "Account",
    path: "/account",
    icon: "mingcute:settings-1-line",
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: "ri:account-circle-line",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: "solar:settings-outline",
  },
]);
</script>
