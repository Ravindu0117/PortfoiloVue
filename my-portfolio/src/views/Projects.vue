<script setup lang="ts">
const projects = [
  {
    title: "IMS.lk Website",
    desc: "Company website with backend integration and responsive UI",
  },
  {
    title: "MAG System",
    desc: "Internal management system with CRUD and authentication",
  },
]
</script>

<template>
  <section id="projects" class="py-24">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-12 text-center">Projects</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="project in projects"
          :key="project.title"
          class="p-6 glass-card rounded-xl"
        >
          <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-muted-foreground">{{ project.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
