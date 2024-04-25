<script setup lang="ts">
  import PlaylistCard from '@/components/Playlist/Card.vue';
  import ClusterL from '@/components/LayoutCompositions/ClusterL.vue';
  import BoxL from '~/components/LayoutCompositions/BoxL.vue';
  import { colors } from '@/styles/colors/colors';
  import {
    PlayCircleFilled,
    StepBackwardFilled,
    StepForwardFilled,
    RetweetOutlined,
    SoundOutlined,
    AudioOutlined,
    BarsOutlined,
    ControlOutlined,
    BlockOutlined,
  } from '@ant-design/icons-vue';
  import TextL from '~/components/LayoutCompositions/TextL.vue';
</script>

<template>
  <BoxL class="music-player" full-width background-color="#F5F2F8" padding-1>
    <ClusterL between no-gap>
      <!-- TODO: GET music player data from API -->
      <PlaylistCard
        :data="{
          TITLE: 'Many men - 50 cent',
          PLAYLIST_PICTURE:
            'https://e-cdns-images.dzcdn.net/images/cover/8f4dd4d8abf85ceda96b6b4adf217590/500x500.jpg',
        }"
      />
      <StackL compact align-center>
        <ClusterL center>
          <BlockOutlined class="player-icon" />
          <StepBackwardFilled class="player-icon" />
          <PlayCircleFilled class="player-icon play" />
          <StepForwardFilled class="player-icon" />
          <RetweetOutlined class="player-icon" />
        </ClusterL>
        <ClusterL squeezed>
          <TextL small>00:00</TextL>
          <a-slider :min="0" :max="400" style="width: 320px" />
          <TextL small>03:52</TextL>
        </ClusterL>
      </StackL>
      <ClusterL>
        <AudioOutlined />
        <BarsOutlined />
        <SoundOutlined />
        <ControlOutlined />
      </ClusterL>
    </ClusterL>
  </BoxL>
</template>

<style lang="stylus" scoped>
  .music-player
    position: fixed
    bottom: 0px
    border-top: 1px solid #d1d2d6
  .player-icon
    font-size: 1.5rem
    &.play
      font-size: 2rem
      color: v-bind('colors.purple8')
</style>
