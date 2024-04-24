<script setup lang="ts">
  import BoxL from '@/components/LayoutCompositions/BoxL.vue';
  import { colors } from '@/styles/colors/colors';
  import { HomeFilled, ThunderboltOutlined } from '@ant-design/icons-vue';
  import ClusterL from '~/components/LayoutCompositions/ClusterL.vue';
  import TextL from '~/components/LayoutCompositions/TextL.vue';
  import StackL from '@/components/LayoutCompositions/StackL.vue';
  import Playlists from './Playlists.vue';
  import { menuItems } from './menuConfig';

  const route = useRoute();
</script>

<template>
  <BoxL border-solid no-sharp no-padding full-height background-color="#F5F2F8">
    <BoxL
      no-sharp
      :style="{ padding: '1.5rem 1rem' }"
      background-color="#F5F2F8"
    >
      <StackL wide>
        <NuxtImg src="/logo.svg" alt="logo" width="126" />
        <StackL>
          <ClusterL
            squeezed
            v-for="(menu, index) in menuItems"
            :class="{ 'menu-active': route.path === menu.page }"
            :key="index"
          >
            <Component :is="menu.icon" :style="{ color: colors.black }" />
            <NuxtLink :href="menu.page">
              <TextL bold large>{{ menu.title }}</TextL>
            </NuxtLink>
          </ClusterL>
        </StackL>
      </StackL>
    </BoxL>
    <Playlists />
  </BoxL>
</template>

<style lang="stylus" scoped>
  input
    all: unset
  .menu-active
    *
      color: v-bind('colors.purple7')
</style>
