
<script setup lang="ts">
interface Props {
  name: string
  description: string
  image: string
  price: number
  prepTime: number
}

defineProps<Props>()
</script>

<template>
  <article
    class="w-full max-w-sm overflow-hidden rounded-2xl
           bg-white shadow-md transition duration-300
           hover:-translate-y-1 hover:shadow-xl"
  >
    <!-- Imagen -->
    <img
      :src="image"
      :alt="name"
      loading="lazy"
      class="h-56 w-full object-cover"
    />

    <!-- Contenido -->
    <div class="p-5">
      <h2 class="text-xl font-bold text-stone-900">
        {{ name }}
      </h2>

      <p class="mt-2 text-sm leading-6 text-stone-600">
        {{ description }}
      </p>

      <div class="mt-5 flex items-center justify-between">
        <span class="text-2xl font-extrabold text-orange-600">
          {{ price.toFixed(2) }} €
        </span>

        <span class="flex items-center gap-2 text-sm text-stone-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            class="h-5 w-5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 7v5l3 2"
            />
          </svg>

          {{ prepTime }} min
        </span>
      </div>
    </div>
  </article>
</template>
