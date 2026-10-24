
<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name?: string
  src?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  alt?: string
  rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Usuario',
  src: '',
  size: 'md',
  alt: '',
  rounded: true,
})

const imageError = ref(false)

const sizeClasses = computed(() => ({
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-lg',
  xl: 'h-20 w-20 text-2xl',
}[props.size]))

const initials = computed(() => {
  return props.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('') || 'U'
})

const shapeClass = computed(() =>
  props.rounded ? 'rounded-full' : 'rounded-xl',
)
</script>

<template>
  <div
    class="inline-flex shrink-0 items-center justify-center
           overflow-hidden bg-orange-100 font-semibold
           text-orange-800"
    :class="[sizeClasses, shapeClass]"
  >
    <img
      v-if="src && !imageError"
      :src="src"
      :alt="alt || `Avatar de ${name}`"
      class="h-full w-full object-cover"
      @error="imageError = true"
    />

    <span v-else :aria-label="name">
      {{ initials }}
    </span>
  </div>
</template>
