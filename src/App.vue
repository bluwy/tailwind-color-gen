<template>
  <div class="flex flex-col justify-center items-center">
    <header>
      <h1 class="text-3xl my-6">
        Tailwind Color Generator
      </h1>
    </header>
    <label
      for="color"
      class="opacity-75 mb-1"
    >Primary color</label>
    <input
      id="color"
      v-model="inputColor"
      type="text"
      class="border border-gray-500 rounded px-4 py-3 mb-6 focus:border-gray-800 focus:bg-gray-100 transition duration-100"
      placeholder="#ff9faf"
      autofocus
    >
    <section class="flex flex-row flex-wrap space-x-4">
      <ShadeList
        label="Primary"
        :shades="primaryColorShades"
      />
      <ShadeList
        label="Info"
        :shades="infoColorShades"
      />
      <ShadeList
        label="Warning"
        :shades="warningColorShades"
      />
      <ShadeList
        label="Success"
        :shades="successColorShades"
      />
      <ShadeList
        label="Danger"
        :shades="dangerColorShades"
      />
      <ShadeList
        label="Gray"
        :shades="grayColorShades"
      />
    </section>
    <footer class="text-center py-3">
      <p>
        View project on <a href="https://github.com/bjornlug/tailwind-color-gen">GitHub</a>
      </p>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import chroma from 'chroma-js'
import ShadeList from '@/components/ShadeList.vue'

export default {
  name: 'App',
  components: {
    ShadeList
  },
  data: () => ({
    inputColor: ''
  }),
  computed: {
    ...mapState([
      'primaryColor',
      'shades',
      'mainShade'
    ]),
    ...mapGetters([
      'primaryShadeColor',
      'infoColor',
      'warningColor',
      'successColor',
      'dangerColor',
      'grayColor'
    ]),
    primaryColorShades () {
      return this.shades.map(shade => ({
        shade,
        color: this.primaryShadeColor(shade)
      }))
    },
    infoColorShades () {
      return this.shades.map(shade => ({
        shade,
        color: this.infoColor(shade)
      }))
    },
    warningColorShades () {
      return this.shades.map(shade => ({
        shade,
        color: this.warningColor(shade)
      }))
    },
    successColorShades () {
      return this.shades.map(shade => ({
        shade,
        color: this.successColor(shade)
      }))
    },
    dangerColorShades () {
      return this.shades.map(shade => ({
        shade,
        color: this.dangerColor(shade)
      }))
    },
    grayColorShades () {
      return this.shades.map(shade => ({
        shade,
        color: this.grayColor(shade)
      }))
    }
  },
  watch: {
    inputColor (val) {
      if (chroma.valid(val)) {
        this.setPrimaryColor({ color: chroma(val).hex().substring(0, 7) })
      }
    }
  },
  methods: {
    ...mapMutations({
      setPrimaryColor: 'SET_PRIMARY_COLOR'
    })
  }
}
</script>
