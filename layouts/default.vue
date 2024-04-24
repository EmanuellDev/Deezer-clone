<script setup lang="ts">
  import Topbar from '@/widgets/Topbar/index.vue';
  import Sidebar from '@/widgets/Sidebar/index.vue';
</script>

<template>
  <a-extract-style>
    <div class="wrapper">
      <header>
        <Topbar />
      </header>
      <article>
        <slot />
      </article>
      <aside>
        <Sidebar />
      </aside>
    </div>
  </a-extract-style>
</template>

<style>
  header {
    grid-area: header;
  }
  article {
    grid-area: content;
    height: 100dvh;
  }
  aside {
    grid-area: sidebar;
    height: 100%;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      'sidebar  header'
      'sidebar content';
  }
  @media (max-width: 500px) {
    .wrapper {
      grid-template-columns: 4fr;
      grid-template-areas:
        'header'
        'content'
        'sidebar';
    }
  }
</style>
