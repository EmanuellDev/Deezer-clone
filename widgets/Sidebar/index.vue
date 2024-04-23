<script setup lang="ts">
import BoxL from "@/components/LayoutCompositions/BoxL.vue";
import { colors } from "@/styles/colors/colors";
import { HomeFilled, ThunderboltOutlined } from "@ant-design/icons-vue";
import ClusterL from "~/components/LayoutCompositions/ClusterL.vue";
import TextL from "~/components/LayoutCompositions/TextL.vue";
import StackL from "@/components/LayoutCompositions/StackL.vue";
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
          <ClusterL squeezed>
            <HomeFilled />
            <NuxtLink href="/"><TextL bold large>Início</TextL></NuxtLink>
          </ClusterL>
          <ClusterL squeezed>
            <ThunderboltOutlined />
            <NuxtLink href="/page2">
              <TextL bold large>Explorar</TextL>
            </NuxtLink>
          </ClusterL>
          <ClusterL squeezed>
            <HeartOutlined />
            <TextL bold large>Favoritos</TextL>
          </ClusterL>
        </StackL>
      </StackL>
    </BoxL>
  </BoxL>
</template>

<style lang="stylus" scoped>
input
  all: unset
</style>
