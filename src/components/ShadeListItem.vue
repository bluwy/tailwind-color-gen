<template>
  <div class="flex flex-row items-center">
    <div
      class="w-10 h-10 rounded-lg shadow-inner transition duration-200"
      :style="{ backgroundColor: color }"
    />
    <div class="text-gray-800 ml-2 leading-none">
      <div class="font-semibold mb-1">
        {{ shade }}
      </div>
      <div class="opacity-75">
        {{ color }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShadeListItem',
  props: {
    shade: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>
