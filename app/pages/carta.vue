
<script setup lang="ts">
const dishes = [
  {
    name: 'Lasaña casera',
    description: 'Lasaña de carne con bechamel y queso gratinado.',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800',
    price: 12.50,
    prepTime: 35,
  },
  {
    name: 'Ensalada mediterránea',
    description: 'Verduras frescas, aceitunas, queso y aceite de oliva.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    price: 8.90,
    prepTime: 15,
  },
  {
    name: 'Albóndigas caseras',
    description: 'Albóndigas tradicionales con salsa de tomate casera.',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800',
    price: 10.50,
    prepTime: 30,
  },
  {
    name: 'Paella de verduras',
    description: 'Arroz mediterráneo con verduras frescas y azafrán.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
    price: 13.50,
    prepTime: 40,
  },
  {
    name: 'Espaguetis a la boloñesa',
    description: 'Pasta con salsa casera de tomate y carne picada.',
    image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=800',
    price: 10.90,
    prepTime: 25,
  },
  {
    name: 'Pollo al horno',
    description: 'Pollo asado con hierbas aromáticas y patatas.',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800',
    price: 11.90,
    prepTime: 45,
  },
  {
    name: 'Croquetas caseras',
    description: 'Croquetas cremosas con bechamel y jamón.',
    image: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=800',
    price: 8.50,
    prepTime: 20,
  },
  {
    name: 'Tortilla española',
    description: 'Tortilla tradicional de patatas y cebolla.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800',
    price: 7.50,
    prepTime: 25,
  },
  {
    name: 'Crema de calabaza',
    description: 'Crema suave de calabaza con un toque de nata.',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800',
    price: 6.90,
    prepTime: 20,
  },
  {
    name: 'Hamburguesa casera',
    description: 'Carne a la plancha con lechuga, tomate y pan artesanal.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    price: 12.90,
    prepTime: 20,
  },
  {
    name: 'Patatas bravas',
    description: 'Patatas crujientes acompañadas de salsa brava casera.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800',
    price: 6.50,
    prepTime: 20,
  },
  {
    name: 'Salmón al horno',
    description: 'Salmón con limón, hierbas frescas y verduras.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800',
    price: 14.90,
    prepTime: 30,
  },
  {
    name: 'Pisto manchego',
    description: 'Guiso de verduras con tomate, pimiento y calabacín.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800',
    price: 8.00,
    prepTime: 30,
  },
  {
    name: 'Arroz con pollo',
    description: 'Arroz casero con pollo, verduras y especias.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
    price: 11.50,
    prepTime: 35,
  },
  {
    name: 'Tarta de queso',
    description: 'Tarta cremosa de queso con base de galleta.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800',
    price: 5.50,
    prepTime: 15,
  },
]
</script>

<template>
  <main class="min-h-screen bg-orange-50/50 px-6 py-12">
    <h1 class="mb-8 text-3xl font-bold text-stone-900">
      Nuestros platos caseros
    </h1>

    <section
      class="grid grid-cols-1 justify-items-center gap-8
             sm:grid-cols-2 lg:grid-cols-3"
    >
      <FoodCard
        v-for="dish in dishes"
        :key="dish.name"
        v-bind="dish"
      />
    </section>
  </main>
</template>
