<template>
  <footer class="relative py-16 border-t border-border/30">
    <div class="absolute inset-0 bg-secondary/30" />

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid md:grid-cols-3 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Code2 class="w-5 h-5 text-primary" />
            </div>
            <span class="font-semibold text-lg text-foreground">Ravindu Samarasinghe</span>
          </div>
          <p class="text-muted-foreground text-sm leading-relaxed max-w-sm">
            Full Stack Developer passionate about creating innovative digital solutions.
            Let's build something amazing together.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.label">
              <a :href="link.href" class="text-muted-foreground hover:text-primary transition-colors text-sm">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h4 class="font-semibold text-foreground mb-4">Connect</h4>
          <p class="text-muted-foreground text-sm mb-4">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <div class="flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              class="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-border/30">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-muted-foreground text-sm">
            © {{ currentYear }} Ravindu Samarasinghe. All rights reserved.
          </p>
          <p class="text-muted-foreground text-sm">
            Built with <span class="text-primary">♥</span> using Vue & Tailwind
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Code2, Github, Linkedin, Twitter, Mail } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#', label: 'Email' },
]

const quickLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
]
</script>


