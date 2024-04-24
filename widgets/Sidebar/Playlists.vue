<script setup lang="ts">
  import BoxL from '@/components/LayoutCompositions/BoxL.vue';
  import { colors } from '@/styles/colors/colors';
  import StackL from '@/components/LayoutCompositions/StackL.vue';

  import { PlusOutlined } from '@ant-design/icons-vue';
  import PlaylistCard from '@/components/Playlist/Card.vue';
  import TextL from '@/components/LayoutCompositions/TextL.vue';
  import ClusterL from '@/components/LayoutCompositions/ClusterL.vue';

  const { data: playlist } = await useFetch<
    [{ PLAYLIST_PICTURE: string; TITLE: string }] | null
  >('/mock/playlists.json', {
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
        :background-color="colors.volcano2"
      >
        <HeartFilled :style="{ color: colors.volcano6, fontSize: '1.3rem' }" />
      </BoxL>
      <TextL>Favorite musics</TextL>
    </ClusterL>
    <template v-for="item in playlist" :key="item.id">
      <PlaylistCard :data="item" />
    </template>
  </StackL>
</template>

<style lang="stylus" scoped>
  input
    all: unset
</style>
