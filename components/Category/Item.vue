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

<template>
  <StackL compact align-center>
    <BoxL
      flex-center
      class="category-item"
      :background-color="colors.grey4"
      borderless
      padding-regular
    >
      <NuxtImg
        class="icon"
        width="130"
        :src="props.data.image"
        :alt="props.data.title"
      />
      <BoxL
        class="overlay-click"
        borderless
        padding-regular
        flex-center
        :background-color="props.data.color"
      >
        <PlayCircleFilled style="font-size: 3rem; color: white" />
      </BoxL>
    </BoxL>
    <TextL mid>{{ props.data.title }}</TextL>
  </StackL>
</template>

<style lang="stylus" scoped>
  .category-item
    border-radius: 50%
    position: relative
    &:hover
      .overlay-click
        opacity: 1
        transition: 0.25s
        cursor: pointer
    .overlay-click
      position: absolute;
      width: 100%
      height: 100%
      border-radius: 50%
      opacity: 0
</style>
