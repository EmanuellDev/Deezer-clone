<script setup lang="ts">
  import CategoryItem from '@/components/Category/Item.vue';
  import ClusterL from '@/components/LayoutCompositions/ClusterL.vue';
  import { categoriesItens } from '@/widgets/Categories/CategoriesConfig';
</script>

<template>
  <ClusterL start squeezed>
    <template v-for="item in categoriesItens" :key="item.id">
      <CategoryItem :data="item" />
    </template>
  </ClusterL>
</template>
