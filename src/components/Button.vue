<template>
  <div :class="disable ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer hover:bg-gray-200 rounded-md  active:transform active:scale-90 scale-100 duration-200'">
    <slot name="content" />
  </div>
</template>

<script setup lang="ts">
interface ButtonProps {
  disable?: boolean;
}
withDefaults(defineProps<ButtonProps>(), {
  disable: false
})

</script>
