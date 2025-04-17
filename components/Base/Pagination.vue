<!-- Page pagination -->
<template>
  <div class="flex justify-center mt-6 space-x-2">
    <!-- Back to 1st page -->
    <button
      class="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
      :disabled="currentPage === 1"
      @click="$emit('update:page', 1)"
      aria-label="First Page"
    >
      <FontAwesomeIcon icon="angle-double-left" />
    </button>

    <!-- Back 1 page -->
    <button
      class="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
      :disabled="currentPage === 1"
      @click="$emit('update:page', currentPage - 1)"
      aria-label="Previous Page"
    >
      <FontAwesomeIcon icon="chevron-left" />
    </button>

    <span class="px-4 py-2 font-semibold text-gray-800 dark:text-gray-100">
      {{ currentPage }} of {{ totalPages }}
    </span>

    <!-- Forward 1 page -->
    <button
      class="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
      :disabled="currentPage === totalPages"
      @click="$emit('update:page', currentPage + 1)"
      aria-label="Next Page"
    >
      <FontAwesomeIcon icon="chevron-right" />
    </button>

    <!-- Forward to last page -->
    <button
      class="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
      :disabled="currentPage === totalPages"
      @click="$emit('update:page', totalPages)"
      aria-label="Last Page"
    >
      <FontAwesomeIcon icon="angle-double-right" />
    </button>    
  </div>
</template>

<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  }
});

defineEmits(['update:page']);
</script>