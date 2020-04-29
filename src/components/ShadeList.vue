<template>
  <div
    class="p-4 rounded-lg border-2 space-y-3 transition duration-200"
    :style="{ backgroundColor, borderColor: color }"
  >
    <div class="font-xl font-bold">
      {{ label }}
    </div>
    <ShadeListItem
      v-for="shade in shades"
      :key="shade"
      :shade="shade"
      :color="getColor(shade)"
    />
  </div>
</template>

<script>
import chroma from 'chroma-js'
import ShadeListItem from '@/components/ShadeListItem.vue'

const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const mainShade = 500

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
    color: {
      type: String,
      required: true
    }
  },
  data: () => ({
    shades
  }),
  computed: {
    backgroundColor () {
      return chroma(this.color).alpha(0.2)
    }
  },
  methods: {
    getColor (shade) {
      const darkenValue = (shade - mainShade) / 100 / 2
      return chroma(this.color).darken(darkenValue)
    }
  }
}
</script>
