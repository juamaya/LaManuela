
<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Carta', to: '/carta' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
]

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-amber-900/10 bg-[#F7F0E6]/95 backdrop-blur-md">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      aria-label="Navegación principal"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-3"
        aria-label="La Taza, inicio"
        @click="closeMenu"
      >
        <span
          class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5A3825] text-xl text-[#F7F0E6]"
          aria-hidden="true"
        >
          ☕
        </span>

        <span class="flex flex-col">
          <span class="text-lg font-extrabold tracking-widest text-[#3D291E]">
            LA MANUELA
          </span>
          <span class="text-[10px] tracking-[0.3em] text-[#876A55]">
            CAFÉ · BAR
          </span>
        </span>
      </NuxtLink>

      <!-- Botón menú móvil -->
      <button
        type="button"
        class="flex h-11 w-11 items-center justify-center rounded-lg text-[#5A3825] transition hover:bg-[#E9DDCE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A3825] md:hidden"
        :aria-expanded="menuOpen"
        aria-controls="main-menu"
        :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
        @click="menuOpen = !menuOpen"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
          class="h-6 w-6"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
          class="h-6 w-6"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m6 6 12 12M18 6 6 18"
          />
        </svg>
      </button>

      <!-- Enlaces -->
      <ul
        id="main-menu"
        class="absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-amber-900/10 bg-[#F7F0E6] px-5 py-4 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none"
        :class="menuOpen ? 'flex' : 'hidden md:flex'"
      >
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="block rounded-lg px-4 py-3 text-sm font-medium text-[#5A3825] transition hover:bg-[#E9DDCE] hover:text-[#9A633B] md:px-0 md:py-2 md:hover:bg-transparent"
            active-class="!font-bold !text-[#9A633B]"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
