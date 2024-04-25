<script setup lang="ts">
  import TextL from '@/components/LayoutCompositions/TextL.vue';
  import StackL from '../LayoutCompositions/StackL.vue';
  import BoxL from '../LayoutCompositions/BoxL.vue';
  import { colors } from '@/styles/colors/colors';
  import { PlayCircleFilled } from '@ant-design/icons-vue';

  interface PlaylistCardProps {
    data: {
      image?: string;
      color: string;
      title: string;
    };
  }
  const props = defineProps<PlaylistCardProps>();
</script>

<template></template>

<style lang="stylus" scoped></style>
