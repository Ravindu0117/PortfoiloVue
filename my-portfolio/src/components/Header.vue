<script setup lang="ts">
import { ref } from "vue"
// import { Motion } from "@vueuse/motion"
import { Menu, X, Code2 } from "lucide-vue-next"

const isOpen = ref(false)

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
]
</script>

<template>
  <Motion
    tag="header"
    :initial="{ y: -100 }"
    :enter="{ y: 0 }"
    class="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="home" class="flex items-center gap-2">
        <div class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
          <Code2 class="w-5 h-5 text-primary" />
        </div>
        <span class="font-semibold text-lg">Ravindu</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="text-muted-foreground hover:text-primary font-medium"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Mobile Button -->
      <button class="md:hidden" @click="isOpen = !isOpen">
        <X v-if="isOpen" />
        <Menu v-else />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden px-6 pb-4 flex flex-col gap-4">
      <a
        v-for="item in navItems"
        :key="item.label"
        :href="item.href"
        @click="isOpen = false"
      >
        {{ item.label }}
      </a>
    </div>
  </Motion>
</template>
