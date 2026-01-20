<script setup lang="ts">
// import { Motion } from "@vueuse/motion"
import { Github, Linkedin, Mail } from "lucide-vue-next"
import profileImage from "@/assets/profile.jpeg"
</script>

<template>
  <section id="home" class="min-h-screen flex items-center">
    <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <!-- Text -->
      <Motion :initial="{ opacity: 0, x: -50 }" :enter="{ opacity: 1, x: 0 }">
        <h1 class="text-5xl font-bold mb-4">
          Ravindu <span class="text-gradient">Samarasinghe</span>
        </h1>
        <p class="text-xl text-muted-foreground mb-6">
          Full Stack Developer & Software Engineer
        </p>

        <div class="flex gap-4">
          <a class="btn-primary">View My Work</a>
          <a class="btn-outline">Download CV</a>
        </div>

        <div class="flex gap-4 mt-6">
          <Github />
          <Linkedin />
          <Mail />
        </div>
      </Motion>

      <!-- Image -->
      <Motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1 }">
        <img
          :src="profileImage"
          class="w-72 h-72 rounded-full object-cover border-4 border-primary/30"
        />
      </Motion>
    </div>
  </section>
</template>
