
<script setup lang="ts">
const currentYear = new Date().getFullYear()

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Carta', to: '/carta' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
]

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: 'instagram',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: 'facebook',
  },
 
  {
    name: 'WhatsApp',
    url: 'https://wa.me/34000000000',
    icon: 'message-circle',
  },
]
</script>

<template>
  <footer class="bg-[#3D291E] text-[#F7F0E6]">
    <div class="mx-auto max-w-7xl px-6 py-12 sm:px-8">

      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

        <!-- Marca -->
        <div>
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <span class="text-3xl" aria-hidden="true">☕</span>

            <span>
              <span class="block text-xl font-extrabold tracking-widest">
                LA MANUELA
              </span>
              <span class="text-xs tracking-[0.3em] text-[#C9A98B]">
                CAFÉ · BAR
              </span>
            </span>
          </NuxtLink>

          <p class="mt-4 text-sm leading-6 text-[#D8C6B5]">
            Tu pausa favorita. Café de calidad, sabores irresistibles
            y momentos para compartir.
          </p>
        </div>

        <!-- Navegación -->
        <div>
          <h2 class="mb-5 text-sm font-bold uppercase tracking-widest">
            Navegación
          </h2>

          <ul class="space-y-3">
            <li v-for="link in links" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-sm text-[#D8C6B5] transition hover:text-white"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
 

        <!-- Redes sociales -->
        <div>
          <h2 class="mb-5 text-sm font-bold uppercase tracking-widest">
            Síguenos
          </h2>

          <p class="mb-5 text-sm leading-6 text-[#D8C6B5]">
            Descubre nuestras novedades, cafés y momentos especiales.
          </p>

          <div class="flex flex-wrap gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A98B]/40 text-[#F7F0E6] transition duration-300 hover:-translate-y-1 hover:border-[#C9A98B] hover:bg-[#C9A98B] hover:text-[#3D291E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A98B]"
            >
              <!-- Instagram -->
              <svg
                v-if="social.icon === 'instagram'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                class="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>

              <!-- Facebook -->
              <svg
                v-else-if="social.icon === 'facebook'"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v1.8H7v3.1h2.8v8h3.7Z"
                />
              </svg>

             
              <!-- WhatsApp -->
              <svg
                v-else
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.3A8.4 8.4 0 1 1 21 11.5Z"
                />
                <path d="M9 9a5 5 0 0 0 6 6l1-1.5-2.5-1.2-1 1a6 6 0 0 1-2.5-2.5l1-1L9.8 7.5 9 9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-center sm:flex-row sm:text-left"
      >
        <p class="text-xs text-[#C9A98B]">
          © {{ currentYear }} La Manuela Café-Bar. Todos los derechos reservados.
        </p>

        
      </div>
    </div>
  </footer>
</template>
