<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

useHead({ title: 'Таблиця' })

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

const globalFilter = ref('')
const sorting = ref([])

const pageSize = 10
const currentPage = ref(1)

const filteredProducts = computed(() => {
  if (!products.value) return []
  const q = globalFilter.value.toLowerCase()
  if (!q) return products.value
  return products.value.filter(p =>
    p.title.toLowerCase().includes(q)
    || p.description.toLowerCase().includes(q)
    || p.brand?.toLowerCase().includes(q)
    || p.category.toLowerCase().includes(q)
  )
})

const sortedProducts = computed(() => {
  if (!sorting.value.length) return filteredProducts.value
  const [{ id, desc }] = sorting.value as { id: keyof Product; desc: boolean }[]
  return [...filteredProducts.value].sort((a, b) => {
    const av = a[id]
    const bv = b[id]
    if (av === bv) return 0
    const cmp = av < bv ? -1 : 1
    return desc ? -cmp : cmp
  })
})

const totalRows = computed(() => sortedProducts.value.length)
const totalPages = computed(() => Math.ceil(totalRows.value / pageSize))

const pagedProducts = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return sortedProducts.value.slice(start, start + pageSize)
})

watch(globalFilter, () => { currentPage.value = 1 })
watch(sorting, () => { currentPage.value = 1 })

const columns: TableColumn<Product>[] = [
  { accessorKey: 'thumbnail', header: 'Фото', enableSorting: false },
  { accessorKey: 'title', header: 'Назва', enableSorting: true },
  { accessorKey: 'description', header: 'Опис', enableSorting: false },
  { accessorKey: 'price', header: 'Ціна', enableSorting: true },
  { accessorKey: 'rating', header: 'Оцінка', enableSorting: true },
  { accessorKey: 'brand', header: 'Бренд', enableSorting: true },
  { accessorKey: 'category', header: 'Категорія', enableSorting: true }
]
</script>

<template>
  <UPageSection title="Таблиця">
    <div class="w-full overflow-x-auto rounded-md border border-neutral-200 dark:border-neutral-700">
      <!-- Toolbar -->
      <div class="flex items-center gap-4 px-4 py-3 border-b border-neutral-200 dark:border-neutral-700">
        <UInput
          v-model="globalFilter"
          placeholder="Пошук..."
          icon="i-lucide-search"
          class="max-w-xs"
        />
        <div class="flex items-center gap-4 ml-auto text-neutral-500 text-xs">
          <span class="text-sm text-muted">{{ totalRows }} записів</span>
        </div>
      </div>

      <div v-if="status === 'pending'" class="flex justify-center py-12">
        <UIcon name="i-lucide-loader-circle" class="size-8 animate-spin text-muted" />
      </div>

      <UTable
        v-else
        v-model:sorting="sorting"
        :data="pagedProducts"
        :columns="columns"
        :ui="{
          thead: 'bg-neutral-800 dark:bg-neutral-800',
          th: 'text-white font-semibold text-xs px-4 py-3',
          td: 'px-4 py-4 text-xs text-neutral-600 dark:text-neutral-300',
          tr: 'hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-100 border-b border-neutral-100 dark:border-neutral-700'
        }"
      >
        <template #thumbnail-cell="{ row }">
          <img
            :src="row.original.thumbnail"
            :alt="row.original.title"
            class="w-[100px] h-[100px] object-cover rounded"
          >
        </template>

        <template #title-cell="{ row }">
          <div class="font-medium text-neutral-900 dark:text-white">{{ row.original.title }}</div>
        </template>

        <template #description-cell="{ row }">
          <div class="max-w-xs line-clamp-3">{{ row.original.description }}</div>
        </template>

        <template #price-cell="{ row }">
          <div class="font-semibold text-neutral-900 dark:text-white">${{ row.original.price }}</div>
        </template>

        <template #rating-cell="{ row }">
          <span
            class="font-bold"
            :class="row.original.rating >= 4.5 ? 'text-green-500' : 'text-red-500'"
          >
            {{ row.original.rating }}
          </span>
        </template>
      </UTable>

      <!-- Pagination -->
      <div class="flex items-center justify-between px-4 py-3 border-t border-neutral-200 dark:border-neutral-700">
        <span class="text-xs text-neutral-500">
          Сторінка {{ currentPage }} з {{ totalPages }}
        </span>
        <UPagination
          v-model:page="currentPage"
          :total="totalRows"
          :items-per-page="pageSize"
        />
      </div>
    </div>
  </UPageSection>
</template>
