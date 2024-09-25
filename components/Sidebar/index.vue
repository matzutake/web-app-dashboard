<template>
  <div>
    <div
      class="z-50 flex items-center justify-between w-full h-full p-4 lg:hidden"
    >
      <Logo />
      <Icon
        class="z-50 cursor-pointer left-2 top-2"
        size="30"
        name="iconamoon:menu-burger-horizontal"
        @click="open = true"
      />

      <div
        v-if="open"
        class="absolute bg-white top-0 left-0 w-full h-screen z-[999]"
      >
        <Icon
          class="absolute z-50 cursor-pointer top-4 right-4"
          name="material-symbols:close"
          size="30"
          @click="open = false"
        />
        <SidebarMenu />
      </div>
    </div>

    <div
      class="hidden w-[250px] h-screen flex-col justify-between border-r lg:flex"
    >
      <SidebarMenu />
      <div>
        <UserItem />
      </div>
    </div>
  </div>
</template>

<script setup>
const open = ref(true);
</script>
