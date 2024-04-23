<script setup lang="ts" async>
import BoxL from "~/components/LayoutCompositions/BoxL.vue";
import StackL from "~/components/LayoutCompositions/StackL.vue";
import TextL from "~/components/LayoutCompositions/TextL.vue";

const { data: posts } = await useFetch<[{ name: string }] | null>(
  "/mock/data.json",
  {
    server: false,
    lazy: true,
  }
);
</script>

<template>
  <BoxL borderless>
    <StackL compact>
      <TextL large bold>Flow: ouvir de acordo como se sente</TextL>
      <TextL mid>
        Uma interminável e personalizada sequência de música que você gosta e de
        novas descobertas
      </TextL>
      <TextL mid v-for="(post, index) in posts" :key="index">
        {{ post.name }}
      </TextL>
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
