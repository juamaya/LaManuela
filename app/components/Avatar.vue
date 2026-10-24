        <script setup lang="ts">
        
const user = {
  name: 'María García',
  avatar: 'https://i.pravatar.cc/150?img=47',
}
const user1 = {
  name: 'María García',
  avatar: 'https://i.pravatar.cc/150?img=47',
}

const user2 = {
  name: 'María García',
  avatar: 'https://i.pravatar.cc/150?img=47',
}
        </script>



<template>
    <div>
  <!-- UserAvatar -->
      <div
  class="grid grid-cols-1 gap-6 p-4
         sm:grid-cols-2
         lg:grid-cols-3"
>
  <!-- Usuario 1 -->
  <div
    class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm
           transition hover:shadow-md"
  >
    <UserAvatar
      :name="user.name"
      :src="user.avatar"
      size="xl"
    />

    <h2 class="wrap-break-word font-semibold text-stone-900">
      {{ user.name }}
    </h2>
  </div>

  <!-- Usuario 2 -->
  <div
    class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm
           transition hover:shadow-md"
  >
    <UserAvatar
      :name="user1.name"
      :src="user1.avatar"
      size="xl"
    />

    <h2 class="wrap-break-word font-semibold text-stone-900">
      {{ user1.name }}
    </h2>
  </div>

  <!-- Usuario 3 -->
  <div
    class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm
           transition hover:shadow-md"
  >
    <UserAvatar
      :name="user2.name"
      :src="user2.avatar"
      size="xl"
    />

    <h2 class="wrap-break-word font-semibold text-stone-900">
      {{ user2.name }}
    </h2>
  </div>
</div>
  <!-- UserAvatar END -->

    </div>
</template>


<style scoped>

</style>