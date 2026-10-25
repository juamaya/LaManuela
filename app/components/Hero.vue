
<script setup lang="ts">
</script>

<template>
  <section
    class="relative overflow-hidden bg-[#F7F0E6]"
    aria-labelledby="hero-title"
  >
    <div
      class="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24"
    >
      <!-- Texto principal -->
      <div class="relative z-10">
        <span
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9C5AF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#805B3F]"
        >
          <span class="h-2 w-2 rounded-full bg-[#A8754D]"></span>
          Café · Desayunos · Tapas
        </span>

        <h1
          id="hero-title"
          class="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-[#3D291E] sm:text-5xl lg:text-6xl"
        >
          Tu pausa
          <span class="text-[#A8754D]">favorita.</span>
        </h1>

        <p
          class="mt-6 max-w-lg text-base leading-7 text-[#765D4B] sm:text-lg sm:leading-8"
        >
          Un buen café por la mañana, algo rico para compartir y
          momentos que merecen quedarse. Bienvenido a La Taza.
        </p>

        <!-- Botones -->
        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <NuxtLink
            to="/carta"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5A3825] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#5A3825]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#70482F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5A3825]"
          >
            Descubre nuestra carta
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="h-4 w-4"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/contacto"
            class="inline-flex items-center justify-center rounded-xl border border-[#CDB59D] px-7 py-4 text-sm font-semibold text-[#5A3825] transition duration-300 hover:bg-[#EDE1D2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5A3825]"
          >
            Ven a visitarnos
          </NuxtLink>
        </div>

        <!-- Información adicional -->
        <div
          class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#DDCDBB] pt-6 text-sm text-[#765D4B]"
        >
          <span class="flex items-center gap-2">
            <span aria-hidden="true">☕</span>
            Café de calidad
          </span>

          <span class="flex items-center gap-2">
            <span aria-hidden="true">♡</span>
            Hecho con cariño
          </span>
        </div>
      </div>

      <!-- Imagen principal -->
      <div class="relative mx-auto w-full max-w-xl lg:max-w-none">
        <div
          class="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-[#E5D0B8] sm:-right-6 sm:-top-6 sm:h-44 sm:w-44"
          aria-hidden="true"
        ></div>

        <div
          class="absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-[#D8B99A] sm:-bottom-6 sm:-left-6 sm:h-36 sm:w-36"
          aria-hidden="true"
        ></div>

        <div
          class="relative aspect-4/3 overflow-hidden rounded-4xl shadow-2xl shadow-[#5A3825]/15 sm:aspect-5/4 lg:aspect-4/5"
        >
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85"
            alt="Ambiente acogedor de una cafetería con luz cálida"
            class="h-full w-full object-cover transition duration-700 hover:scale-105"
            fetchpriority="high"
          />

          <div
            class="absolute inset-0 bg-linear-to-t from-[#2D1B12]/50 via-transparent to-transparent"
          ></div>

          <div class="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
            <div
              class="rounded-2xl border border-white/30 bg-white/15 p-4 text-white shadow-lg backdrop-blur-md sm:p-5"
            >
              <p class="text-xs uppercase tracking-[0.2em] text-white/80">
                Un lugar para disfrutar
              </p>
              <p class="mt-2 text-xl font-semibold sm:text-2xl">
                Saborea el momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
