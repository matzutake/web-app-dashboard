<template>
  <Card>
    <CardHeader class="px-4 pt-4 pb-2">
      <div class="flex justify-between items-center">
        <p>{{ card.title }}</p>
        <Badge class="bg-green-400">{{ "+" + card.progression + "%" }}</Badge>
      </div>
    </CardHeader>
    <CardContent class="flex items-center justify-end px-4 pt-0 pb-2 border-b">
      <div class="flex text-[48px] font-[800]">
        <span class="text-neutral-300">$</span>
        {{ card.amount }}
      </div>
    </CardContent>
    <CardFooter class="flex items-center justify-between gap-2 px-2 py-2">
      <div
        class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center"
      >
        <Icon size="20" :name="card.icon" color="black" />
      </div>
      <p class="text-xs grow">{{ card.description }}</p>
      <Button variant="outline">{{ card.label }}</Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const props = defineProps(["card"]);
</script>
