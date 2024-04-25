<script setup lang="ts" async>
  import BoxL from '@/components/LayoutCompositions/BoxL.vue';
  import StackL from '@/components/LayoutCompositions/StackL.vue';
  import { colors } from '@/styles/colors/colors';
  import TextL from '@/components/LayoutCompositions/TextL.vue';
  import CategoriesWidget from '@/widgets/Categories/index.vue';

  const { data: posts } = await useFetch<[{ name: string }] | null>(
    '/mock/data.json',
    {
      server: false,
      lazy: true,
    },
  );
</script>

<template>
  <BoxL borderless>
    <StackL compact>
      <TextL large bold>Flow: listen how you feel</TextL>
      <TextL mid :color="colors.grey7">
        An endless, personalized stream of music you like and new discoveries
      </TextL>
      <CategoriesWidget />
    </StackL>
  </BoxL>
</template>
<style>
  body {
    margin: 0;
  }
  a {
    text-decoration: auto;
  }
</style>
