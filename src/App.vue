<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NuxtErrorBoundary>
      <template #error="{ error, clearError }">
        You can display the error locally here: {{ error }}
        <button @click="clearError">
          This will clear the error.
        </button>
      </template>
    </NuxtErrorBoundary>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }

  .app {
    display: flex;
  }

  main {
    flex: 1 1 0;
    padding: 2rem;
  }

  .orange-btn{
    background: #EE8434;
    color: #F5F5F5;
  }

  .orange-btn:hover{
    background: black;
    color: #EE8434;
  }

  .orange-text{
      color:#EE8434;
  }
  
  .orange-text:hover{
      color: #F5F5F5;
      background: #EE8434;
      cursor: pointer;
  }

  .skeleton{
    animation: skeleton-animation 1s linear infinite alternate;
  }

  @keyframes skeleton-animation {
    0% {
      background-color: hsl(204,18%,26%)
    }

    100% {
      background-color: hsl(204,18.8%,46%)
    }
  }

  @media (max-width: 768px) {
    main{
      padding-left: 6rem;
    }
  }

  /* datepicker color */
  .dp__theme_light {
    --dp-background-color: #36454F !important;
    --dp-text-color: #EE8434 !important;
    --dp-hover-color: #232d33 !important;
    --dp-hover-text-color: #EE8434 !important;
    --dp-hover-icon-color: #EE8434 !important;
    --dp-primary-color: #EE8434 !important;
    --dp-primary-text-color: #f8f5f5;
    --dp-secondary-color: #c0c4cc;
    --dp-border-color: #ddd !important;
    --dp-menu-border-color: #ddd !important;
    --dp-border-color-hover: #aaaeb7 !important;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #959595;
    --dp-success-color: #76d275;
    --dp-success-color-disabled: #a3d9b1;
    --dp-icon-color: #EE8434 !important;
    --dp-danger-color: #ff6f60;
    --dp-highlight-color: #212121 !important;
  }
</style>

<script setup lang="ts">
  const nuxtApp = useNuxtApp()
</script>
