<script setup lang="ts">
  import TextL from '@/components/LayoutCompositions/TextL.vue';
  import ClusterL from '@/components/LayoutCompositions/ClusterL.vue';

  interface PlaylistCardProps {
    data: {
      PLAYLIST_PICTURE: string;
      TITLE: string;
    };
  }
  const props = defineProps<PlaylistCardProps>();
</script>

<template>
  <ClusterL squeezed hover-shadow>
    <NuxtImg
      width="46"
      :src="props.data.PLAYLIST_PICTURE"
      :alt="props.data.TITLE"
    />
    <TextL>{{ props.data.TITLE }}</TextL>
  </ClusterL>
</template>
