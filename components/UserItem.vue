<template>
  <div
    class="flex items-center justify-start gap-2 p-2 m-2 border rounded cursor-pointer hover:bg-neutral-50 transition"
  >
    <div
      class="flex items-center justify-center w-10 h-10 font-bold text-white bg-green-500 rounded-full"
    >
      {{ name[0] }}
    </div>
    <div>
      <p class="m-0 text-sm font-bold text-black leading-1">
        {{ name }}
      </p>
      <p class="m-0 text-xs">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const loading = ref(false);

const name = ref("Vladimir Pakhmutov");
const description = ref("Frontend Developer");
</script>
