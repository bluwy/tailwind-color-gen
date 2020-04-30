<template>
  <div
    class="p-4 rounded-lg border-2 space-y-3 transition duration-200"
    :style="{ backgroundColor, borderColor: mainColor }"
  >
    <div class="font-xl font-bold">
      {{ label }}
    </div>
    <ShadeListItem
      v-for="shade in shades"
      :key="shade.shade"
      :shade="shade.shade"
      :color="shade.color"
    />
  </div>
</template>

<script>
import chroma from 'chroma-js'
import ShadeListItem from '@/components/ShadeListItem.vue'

export default {
  name: 'ShadeList',
  components: {
    ShadeListItem
  },
  props: {
    label: {
      type: String,
      required: true
    },
    shades: {
      type: Array,
      required: true
    }
  },
  computed: {
    mainColor () {
      const centerIndex = Math.round(this.shades.length / 2)
      return this.shades[centerIndex].color
    },
    backgroundColor () {
      return chroma(this.mainColor).alpha(0.2).hex()
    }
  }
}
</script>
