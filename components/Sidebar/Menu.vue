<template>
  <div>
    <header
      class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer"
    >
      <Logo />
    </header>
  </div>
</template>

<script setup>
const items = ref([
  {
    title: "Overview",
    path: "/overview",
  },
  {
    title: "Transactions",
    path: "/transactions",
  },
  {
    title: "Account",
    path: "/account",
  },
  {
    title: "Contacts",
    path: "/contacts",
  },
  {
    title: "Settings",
    path: "/settings",
  },
]);
</script>
