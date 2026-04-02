<script setup lang="ts">
useHead({ title: 'Список продуктів' })

interface Product {
  id: number
  title: string
  description: string
  price: number
  rating: number
  brand: string
  category: string
  thumbnail: string
}

const { data: products, status } = await useFetch<Product[]>('/api/products')
</script>

<template>
  <UPageSection title="Список продуктів">
    <!-- Subscription plans from lab4 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <!-- Starter -->
      <div class="group relative rounded-xl border border-neutral-200 shadow-md overflow-hidden cursor-pointer hover:border-black transition-shadow duration-300 hover:shadow-xl bg-white dark:bg-neutral-900 dark:border-neutral-700">
        <div class="h-1.5 w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-400" />
        <div class="p-9">
          <h2 class="text-xl font-bold text-neutral-900 dark:text-white mb-3">Starter - Annual</h2>
          <span class="inline-block text-xs text-neutral-600 font-bold bg-neutral-100 dark:bg-neutral-800 rounded-sm px-3 py-1 mb-3">3-days free then:</span>
          <div class="flex items-end gap-1 mb-1">
            <span class="text-4xl font-extrabold text-neutral-900 dark:text-white">$83.25</span>
            <span class="text-neutral-500 text-sm mb-1">/month</span>
          </div>
          <p class="text-sm text-neutral-400 mb-1">billed yearly at <s class="text-neutral-400">$1,188</s> <b class="text-neutral-500">$999</b></p>
          <span class="inline-block text-xs font-bold bg-blue-100 text-blue-600 rounded px-3 py-1 mb-5">$189 in savings</span>
          <button class="w-full py-2.5 rounded-lg text-sm font-bold text-white bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 mb-5">Try It Free</button>
          <hr class="border-neutral-200 dark:border-neutral-700 mb-5">
          <ul class="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><div><span class="font-semibold">Primary user only</span><br><span class="text-neutral-400">(extra team members for $35/month)</span></div></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Save unlimited properties</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><div><span class="font-semibold">10,000 exports</span><br><span class="text-neutral-400">(additional exports at $0.02 each)</span></div></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><div><span class="font-semibold">500 free skip traces</span><br><span class="text-neutral-400">(additional skip tracing at $0.08 each)</span></div></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Imports $0.01</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">FREE daily product trainings and support</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Full suite of next-gen investing tools</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Industry first AI powered comp tool</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Includes dedicated support agent</span></li>
          </ul>
        </div>
      </div>

      <!-- Team -->
      <div class="group relative rounded-xl border border-neutral-200 shadow-md overflow-hidden cursor-pointer hover:border-black transition-shadow duration-300 hover:shadow-xl bg-white dark:bg-neutral-900 dark:border-neutral-700">
        <div class="h-1.5 w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-400" />
        <div class="p-9">
          <h2 class="text-xl font-bold text-neutral-900 dark:text-white mb-3">Team - Annual</h2>
          <span class="inline-block text-xs text-neutral-600 font-bold bg-neutral-100 dark:bg-neutral-800 rounded-sm px-3 py-1 mb-3">3-days free then:</span>
          <div class="flex items-end gap-1 mb-1">
            <span class="text-4xl font-extrabold text-neutral-900 dark:text-white">$207.50</span>
            <span class="text-neutral-500 text-sm mb-1">/month</span>
          </div>
          <p class="text-sm text-neutral-400 mb-1">billed yearly at <s class="text-neutral-400">$2,988</s> <b class="text-neutral-500">$2,490</b></p>
          <span class="inline-block text-xs font-bold bg-blue-100 text-blue-600 rounded px-3 py-1 mb-5">$498 in savings</span>
          <button class="w-full py-2.5 rounded-lg text-sm font-bold text-white bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 mb-5">Try It Free</button>
          <hr class="border-neutral-200 dark:border-neutral-700 mb-5">
          <ul class="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><div><span class="font-semibold">Primary user + 2 free team members</span><br><span class="text-neutral-400">(extra team members for $25/month)</span></div></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Save unlimited properties</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><div><span class="font-semibold">50,000 exports</span><br><span class="text-neutral-400">(additional exports at $0.01 each)</span></div></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><div><span class="font-semibold">1,000 free skip traces</span><br><span class="text-neutral-400">(additional skip tracing at $0.08 each)</span></div></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Imports $0.01</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">FREE daily product trainings and support</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Full suite of next-gen investing tools</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Industry first AI powered comp tool</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Includes dedicated support agent</span></li>
          </ul>
        </div>
      </div>

      <!-- Business -->
      <div class="group relative rounded-xl border border-neutral-200 shadow-md overflow-hidden cursor-pointer hover:border-black transition-shadow duration-300 hover:shadow-xl bg-white dark:bg-neutral-900 dark:border-neutral-700">
        <div class="h-1.5 w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-400" />
        <div class="p-9">
          <h2 class="text-xl font-bold text-neutral-900 dark:text-white mb-3">Business - Annual</h2>
          <span class="inline-block text-xs text-neutral-600 font-bold bg-neutral-100 dark:bg-neutral-800 rounded-sm px-3 py-1 mb-3">3-days free then:</span>
          <div class="flex items-end gap-1 mb-1">
            <span class="text-4xl font-extrabold text-neutral-900 dark:text-white">$457.50</span>
            <span class="text-neutral-500 text-sm mb-1">/month</span>
          </div>
          <p class="text-sm text-neutral-400 mb-1">billed yearly at <s class="text-neutral-400">$6,588</s> <b class="text-neutral-500">$5,490</b></p>
          <span class="inline-block text-xs font-bold bg-blue-100 text-blue-600 rounded px-3 py-1 mb-5">$1,098 in savings</span>
          <button class="w-full py-2.5 rounded-lg text-sm font-bold text-white bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 mb-5">Try It Free</button>
          <hr class="border-neutral-200 dark:border-neutral-700 mb-5">
          <ul class="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><div><span class="font-semibold">Primary user + 6 free team members</span><br><span class="text-neutral-400">(extra team members for $20/month)</span></div></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Save unlimited properties</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><div><span class="font-semibold">100,000 exports</span><br><span class="text-neutral-400">(additional exports at $0.01 each)</span></div></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><div><span class="font-semibold">2,000 free skip traces</span><br><span class="text-neutral-400">(additional skip tracing at $0.08 each)</span></div></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Imports $0.01</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">FREE daily product trainings and support</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Full suite of next-gen investing tools</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Industry first AI powered comp tool</span></li>
            <li class="flex gap-2"><span class="text-green-500 font-bold">✦</span><span class="font-semibold">Includes dedicated support agent</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="status === 'pending'" class="flex justify-center py-12">
      <UIcon name="i-lucide-loader-circle" class="size-8 animate-spin text-muted" />
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="group relative rounded-xl border border-neutral-200 shadow-md overflow-hidden cursor-pointer hover:border-black transition-shadow duration-300 hover:shadow-xl bg-white dark:bg-neutral-900 dark:border-neutral-700"
      >
        <div class="h-1.5 w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-400" />

        <div class="p-6">
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="w-full h-40 object-cover rounded-lg mb-4"
          >

          <h2 class="text-sm font-bold text-neutral-900 dark:text-white mb-1 line-clamp-1">
            {{ product.title }}
          </h2>

          <span class="inline-block text-xs text-neutral-600 dark:text-neutral-400 font-bold bg-neutral-100 dark:bg-neutral-800 rounded-sm px-3 py-1 mb-3">
            {{ product.category }}
          </span>

          <div class="flex items-end gap-1 mb-1">
            <span class="text-2xl font-extrabold text-neutral-900 dark:text-white">${{ product.price }}</span>
          </div>

          <p class="text-xs text-neutral-400 mb-4 line-clamp-2">{{ product.description }}</p>

          <hr class="border-neutral-200 dark:border-neutral-700 mb-4">

          <ul class="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
            <li class="flex gap-2 items-center">
              <svg class="w-4 h-4 shrink-0 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
              <span><b>Бренд:</b> {{ product.brand }}</span>
            </li>
            <li class="flex gap-2 items-center">
              <svg class="w-4 h-4 shrink-0 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
              <span>
                <b>Оцінка:</b>
                <span :class="product.rating >= 4.5 ? 'text-green-500' : 'text-red-500'" class="font-bold ml-1">{{ product.rating }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
