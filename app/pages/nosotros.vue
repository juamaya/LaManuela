
<script setup lang="ts">
import Avatar from '~/components/Avatar.vue'

useSeoMeta({
  title: 'La Manuela | Sabor de Casa',
  description:
    'Conoce nuestra historia, nuestra cocina casera y dónde encontrarnos.',
})


const business = {
  name: 'Sabor de Casa',
  description:
    'Creemos que la mejor comida es la que se prepara con cariño, ingredientes frescos y recetas tradicionales.',
  address: 'C. Bolonia,  Puerto Real, Cádiz, España.',
  phone: '+34 600 000 000',
  email: 'hola@sabordecasa.es',
  latitude: 36.52596,
  longitude: -6.18129,
}

const mapUrl = computed(() => {
  const { latitude, longitude } = business
  const delta = 0.01

  return `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - delta}%2C${latitude - delta}%2C${longitude + delta}%2C${latitude + delta}&layer=mapnik&marker=${latitude}%2C${longitude}`
})

const directionsUrl = computed(
  () =>
    `https://www.google.com/maps/dir/?api=1&destination=${business.latitude},${business.longitude}`,
)
</script>

<template>
  <main class="min-h-screen bg-white text-stone-800">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-orange-50">
    <!-- Avatar -->
       <Avatar/>
  <!-- Avatar END -->

  

      <div
        class="mx-auto grid max-w-7xl items-center gap-12
               px-6 py-16 md:grid-cols-2 md:py-24"
      >
        <div>
           

          <h1
            class="mt-6 text-4xl font-extrabold tracking-tight
                   text-stone-900 sm:text-5xl lg:text-6xl"
          >
            Hecho con cariño,
            <span class="text-orange-600">como en casa.</span>
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-8 text-stone-600">
            En Sabor de Casa cocinamos con ingredientes frescos,
            recetas tradicionales y la ilusión de compartir buenos
            momentos alrededor de la mesa.
          </p>

          <a
            href="#ubicacion"
            class="mt-8 inline-flex items-center rounded-xl
                   bg-orange-600 px-6 py-3 font-semibold text-white
                   transition hover:bg-orange-700"
          >
            Encuéntranos
            <span class="ml-2" aria-hidden="true">↓</span>
          </a>
        </div>

        <div class="relative">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200"
            alt="Comida casera recién preparada y servida en la mesa"
            class="h-80 w-full rounded-3xl object-cover shadow-xl
                   sm:h-[440px]"
          />

          <div
            class="absolute -bottom-5 left-4 rounded-2xl bg-white
                   p-4 shadow-lg sm:left-8 sm:p-5"
          >
            <p class="text-2xl font-extrabold text-orange-600">
              100%
            </p>
            <p class="text-sm text-stone-600">
              Pasión por cocinar
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nuestra historia -->
    <section class="mx-auto max-w-7xl px-6 py-20">
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="text-sm font-bold uppercase tracking-widest text-orange-600"
        >
          Quiénes somos
        </p>

        <h2 class="mt-3 text-3xl font-bold text-stone-900 sm:text-4xl">
          Mucho más que comida
        </h2>

        <p class="mt-6 leading-8 text-stone-600">
          Nacimos con una idea sencilla: recuperar el sabor de las
          recetas de siempre. Cada plato se prepara con dedicación,
          cuidando los ingredientes y prestando atención a los pequeños
          detalles que hacen especial cada comida.
        </p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-3">
        <article
          class="rounded-2xl border border-stone-100 bg-white p-7
                 shadow-sm transition hover:shadow-md"
        >
          <div class="text-3xl" aria-hidden="true">🥕</div>
          <h3 class="mt-4 text-xl font-bold">Ingredientes frescos</h3>
          <p class="mt-3 leading-7 text-stone-600">
            Seleccionamos nuestros ingredientes para ofrecer platos
            llenos de sabor.
          </p>
        </article>

        <article
          class="rounded-2xl border border-stone-100 bg-white p-7
                 shadow-sm transition hover:shadow-md"
        >
          <div class="text-3xl" aria-hidden="true">🍲</div>
          <h3 class="mt-4 text-xl font-bold">Recetas tradicionales</h3>
          <p class="mt-3 leading-7 text-stone-600">
            Respetamos la cocina de siempre con un toque propio.
          </p>
        </article>

        <article
          class="rounded-2xl border border-stone-100 bg-white p-7
                 shadow-sm transition hover:shadow-md"
        >
          <div class="text-3xl" aria-hidden="true">❤️</div>
          <h3 class="mt-4 text-xl font-bold">Trato cercano</h3>
          <p class="mt-3 leading-7 text-stone-600">
            Queremos que cada persona se sienta como en casa.
          </p>
        </article>
      </div>
    </section>

    <!-- Ubicación -->
    <section id="ubicacion" class="bg-stone-50 px-6 py-20">
      <div class="mx-auto max-w-7xl">
        <div class="mb-10">
          <p
            class="text-sm font-bold uppercase tracking-widest text-orange-600"
          >
            Visítanos
          </p>

          <h2 class="mt-3 text-3xl font-bold text-stone-900 sm:text-4xl">
            ¿Dónde estamos?
          </h2>

          <p class="mt-4 text-stone-600">
            Ven a conocernos y disfruta de una buena comida.
          </p>
        </div>

        <div
          class="grid overflow-hidden rounded-3xl border border-stone-200
                 bg-white shadow-sm lg:grid-cols-3"
        >
          <!-- Información -->
          <div class="p-7 sm:p-9">
            <h3 class="text-xl font-bold text-stone-900">
              {{ business.name }}
            </h3>

            <div class="mt-7 space-y-6">
              <div class="flex gap-4">
                <span
                  class="flex h-11 w-11 shrink-0 items-center
                         justify-center rounded-xl bg-orange-100
                         text-xl"
                  aria-hidden="true"
                >
                  📍
                </span>

                <div>
                  <p class="font-semibold text-stone-800">Dirección</p>
                  <p class="mt-1 text-sm leading-6 text-stone-600">
                    {{ business.address }}
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <span
                  class="flex h-11 w-11 shrink-0 items-center
                         justify-center rounded-xl bg-orange-100
                         text-xl"
                  aria-hidden="true"
                >
                  ☎️
                </span>

                <div>
                  <p class="font-semibold text-stone-800">Teléfono</p>
                  <a
                    :href="`tel:${business.phone.replace(/\s/g, '')}`"
                    class="mt-1 block text-sm text-stone-600
                           hover:text-orange-700"
                  >
                    {{ business.phone }}
                  </a>
                </div>
              </div>

              <div class="flex gap-4">
                <span
                  class="flex h-11 w-11 shrink-0 items-center
                         justify-center rounded-xl bg-orange-100
                         text-xl"
                  aria-hidden="true"
                >
                  ✉️
                </span>

                <div>
                  <p class="font-semibold text-stone-800">Correo</p>
                  <a
                    :href="`mailto:${business.email}`"
                    class="mt-1 break-all text-sm text-stone-600
                           hover:text-orange-700"
                  >
                    {{ business.email }}
                  </a>
                </div>
              </div>
            </div>

            <a
              :href="directionsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-8 inline-flex w-full items-center justify-center
                     rounded-xl bg-orange-600 px-5 py-3
                     text-center font-semibold text-white
                     transition hover:bg-orange-700"
            >
              Cómo llegar
              <span class="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>

          <!-- Mapa -->
          <div class="min-h-[350px] lg:col-span-2 lg:min-h-[500px]">
            <iframe
              :src="mapUrl"
              title="Mapa de ubicación de Sabor de Casa"
              width="100%"
              height="100%"
              class="min-h-[350px] w-full border-0 lg:min-h-[500px]"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Llamada a la acción -->
    <section class="bg-orange-600 px-6 py-16 text-center text-white">
      <h2 class="text-3xl font-extrabold sm:text-4xl">
        ¡Te esperamos en nuestra mesa!
      </h2>

      <p class="mx-auto mt-4 max-w-2xl leading-7 text-orange-50">
        Descubre nuestros platos, conoce nuestro equipo y disfruta
        del auténtico sabor de la cocina casera.
      </p>

  
    </section>
  </main>
</template>
