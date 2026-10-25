
<script setup lang="ts">
import { ref } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const loading = ref(false)
const success = ref(false)
const error = ref('')

async function handleSubmit() {
  success.value = false
  error.value = ''

  if (
    !form.value.name.trim() ||
    !form.value.email.trim() ||
    !form.value.subject.trim() ||
    !form.value.message.trim()
  ) {
    error.value = 'Por favor, completa todos los campos.'
    return
  }

  loading.value = true

  try {
    const response = await $fetch(
      'https://formsubmit.co/ajax/19fcf70f277172b1f6e5cf44cfd77e9e',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: {
          name: form.value.name,
          email: form.value.email,
          subject: form.value.subject,
          message: form.value.message,
        },
      },
    )

    success.value = true

    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  } catch (e) {
    console.error('Error al enviar el formulario:', e)
    error.value =
      'No se pudo enviar el mensaje. Comprueba la configuración e inténtalo de nuevo.'
  } finally {
    loading.value = false
  }
}
 
 
</script>

<template>
  <section class="bg-stone-50 px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <!-- Encabezado -->
      <div class="mb-10 text-center">
        <span
          class="text-sm font-bold uppercase tracking-widest text-orange-600"
        >
          Estamos para ayudarte
        </span>

        <h1 class="mt-3 text-3xl font-extrabold text-stone-900 sm:text-4xl">
          Contacta con nosotros
        </h1>

        <p class="mt-4 text-stone-600">
          ¿Tienes alguna pregunta o sugerencia? Escríbenos.
        </p>
      </div>

      <!-- Formulario -->
    <form
  action="https://formsubmit.co/marinamaya69@gmail.com"
  method="POST"
  class="space-y-6 rounded-2xl border border-stone-100
         bg-white p-6 shadow-lg sm:p-10"
  @submit.prevent="handleSubmit"
>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <!-- Nombre -->
          <div>
            <label
              for="name"
              class="mb-2 block text-sm font-semibold text-stone-700"
            >
              Nombre completo
            </label>

            <input
              id="name"
              v-model="form.name"
              type="text"
              name="name"
              autocomplete="name"
              placeholder="Tu nombre"
              required
              maxlength="100"
              class="w-full rounded-xl border border-stone-300
                     bg-stone-50 px-4 py-3 text-stone-900
                     outline-none transition placeholder:text-stone-400
                     focus:border-orange-500 focus:ring-2
                     focus:ring-orange-100"
            />
          </div>

          <!-- Email -->
          <div>
            <label
              for="email"
              class="mb-2 block text-sm font-semibold text-stone-700"
            >
              Correo electrónico
            </label>

            <input
              id="email"
              v-model="form.email"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="tu@email.com"
              required
              maxlength="254"
              class="w-full rounded-xl border border-stone-300
                     bg-stone-50 px-4 py-3 text-stone-900
                     outline-none transition placeholder:text-stone-400
                     focus:border-orange-500 focus:ring-2
                     focus:ring-orange-100"
            />
          </div>
        </div>

        <!-- Asunto -->
        <div>
          <label
            for="subject"
            class="mb-2 block text-sm font-semibold text-stone-700"
          >
            Asunto
          </label>

          <input
            id="subject"
            v-model="form.subject"
            type="text"
            name="subject"
            placeholder="¿Sobre qué quieres hablar?"
            required
            maxlength="150"
            class="w-full rounded-xl border border-stone-300
                   bg-stone-50 px-4 py-3 text-stone-900
                   outline-none transition placeholder:text-stone-400
                   focus:border-orange-500 focus:ring-2
                   focus:ring-orange-100"
          />
        </div>

        <!-- Mensaje -->
        <div>
          <label
            for="message"
            class="mb-2 block text-sm font-semibold text-stone-700"
          >
            Mensaje
          </label>

          <textarea
            id="message"
            v-model="form.message"
            name="message"
            rows="5"
            placeholder="Escribe tu mensaje aquí..."
            required
            maxlength="5000"
            class="w-full resize-y rounded-xl border border-stone-300
                   bg-stone-50 px-4 py-3 text-stone-900
                   outline-none transition placeholder:text-stone-400
                   focus:border-orange-500 focus:ring-2
                   focus:ring-orange-100"
          ></textarea>

          <p class="mt-1 text-right text-xs text-stone-400">
            {{ form.message.length }}/5000 caracteres
          </p>
        </div>

        <!-- Mensajes de estado -->
        <p
          v-if="success"
          role="status"
          class="rounded-xl bg-green-50 p-4 text-sm text-green-700"
        >
          ¡Mensaje enviado correctamente! Gracias por contactarnos.
        </p>

        <p
          v-if="error"
          role="alert"
          class="rounded-xl bg-red-50 p-4 text-sm text-red-700"
        >
          {{ error }}
        </p>

        <!-- Botón -->
        <button
          type="submit"
          :disabled="loading"
          class="flex w-full items-center justify-center gap-2
                 rounded-xl bg-orange-600 px-6 py-3.5
                 font-semibold text-white shadow-sm transition
                 hover:bg-orange-700 focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:ring-orange-500
                 focus-visible:ring-offset-2
                 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <svg
            v-if="loading"
            class="h-5 w-5 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 0 1 8-8V0C5.37 0 0 5.37 0 12h4z"
            />
          </svg>

          {{ loading ? 'Enviando...' : 'Enviar mensaje' }}
        </button>

        <p class="text-center text-xs text-stone-500">
          Te responderemos lo antes posible.
        </p>

        
      </form>
    </div>
  </section>
</template>
