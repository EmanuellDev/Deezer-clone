<script setup lang="ts">
import BoxL from "@/components/LayoutCompositions/BoxL.vue";
import ClusterL from "@/components/LayoutCompositions/ClusterL.vue";
import { colors } from "@/styles/colors/colors";
import { Button, Input, InputSearch, Flex } from "ant-design-vue";
import { SearchOutlined, BellOutlined } from "@ant-design/icons-vue";
</script>

<template>
  <BoxL no-sharp borderless class="topbar">
    <ClusterL between full-width>
      <Input
        placeholder="Artistas,temas, podecasts..."
        :style="{ width: '345px', height: '48px' }"
      >
        <template #prefix>
          <SearchOutlined style="margin-right: 0.5rem" />
        </template>
      </Input>
      <ClusterL>
        <a-badge count="5" color="#A238FF">
          <BellOutlined style="font-size: 1.2rem" />
        </a-badge>
        <a-avatar color="#FFFF"> E </a-avatar>
      </ClusterL>
    </ClusterL>
  </BoxL>
</template>

<style lang="stylus" scoped>
.topbar
  border-bottom: 1px solid #d1d2d6
.ant-input-affix-wrapper-focused
  border-color: #A238FF !important
  box-shadow: none
.ant-input-affix-wrapper:hover:not(.ant-input-affix-wrapper-focused)
  border-color: transparent
.ant-input-affix-wrapper
  background: #ebe7ee
  border-color: transparent
:deep(.ant-input)
  background: transparent !important
</style>
