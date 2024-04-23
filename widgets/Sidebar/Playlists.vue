<script setup lang="ts">
import BoxL from "@/components/LayoutCompositions/BoxL.vue";
import { colors } from "@/styles/colors/colors";
import StackL from "@/components/LayoutCompositions/StackL.vue";

import { PlusOutlined } from "@ant-design/icons-vue";
import TextL from "~/components/LayoutCompositions/TextL.vue";
import ClusterL from "~/components/LayoutCompositions/ClusterL.vue";

const { data: playlist } = await useFetch<
  [{ PLAYLIST_PICTURE: string; TITLE: string }] | null
>("/mock/playlists.json", {
  server: false,
  lazy: true,
});
</script>

<template>
  <StackL compact padding>
    <ClusterL between>
      <TextL bold large>Playlists</TextL>
      <PlusOutlined />
    </ClusterL>
    <ClusterL squeezed hover-shadow>
      <BoxL
        no-sharp
        style="width: 46px; height: 46px"
        flex-center
        no-padding
        background-color="#FFD0C3"
      >
        <HeartFilled style="color: #e85e38; font-size: 1.3rem" />
      </BoxL>
      <TextL>Temas favoritos</TextL>
    </ClusterL>
    <ClusterL
      squeezed
      hover-shadow
      v-for="(item, index) in playlist"
      :key="index"
    >
      <NuxtImg width="46" :src="item.PLAYLIST_PICTURE" :alt="item.TITLE" />
      <TextL>{{ item.TITLE }}</TextL>
    </ClusterL>
  </StackL>
</template>

<style lang="stylus" scoped>
input
  all: unset
</style>
