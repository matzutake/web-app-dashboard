<template>
	<div class="relative">
		<div
			class="z-50 flex items-center justify-center w-full h-full p-4 lg:hidden bg-green-500"
		>
			<Logo />
			<Icon
				class="z-50 cursor-pointer left-2 top-2"
				size="30"
				name="iconamoon:menu-burger-horizontal"
				@click="open = true"
			/>
			<SidebarMenu />
		</div>
		<div
			class="lg:flex w-[250px] h-screen flex-col justify-between border-r bg-red-500"
		>
			<SidebarMenu />
			<div>UserItem</div>
		</div>
	</div>
</template>

<script setup>
const open = ref(true)
</script>
