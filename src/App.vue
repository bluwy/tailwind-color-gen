<template>
  <div class="flex flex-col justify-center items-center">
    <header>
      <h1 class="font-light text-2xl my-5">
        Tailwind Color Generator
      </h1>
    </header>
    <input
      v-model="inputColor"
      type="text"
      class="border border-gray-500 rounded px-4 py-3 mb-5 focus:border-gray-800 focus:bg-gray-100 transition duration-100"
      placeholder="Primary color, e.g. #ff9faf"
      autofocus
    >
    <section>
      <ShadeList
        class="inline-block m-2"
        label="Primary"
        :shades="primaryColorShades"
      />
      <ShadeList
        class="inline-block m-2"
        label="Info"
        :shades="infoColorShades"
      />
      <br class="block sm:hidden">
      <ShadeList
        class="inline-block m-2"
        label="Warning"
        :shades="warningColorShades"
      />
      <br class="hidden sm:block lg:hidden">
      <ShadeList
        class="inline-block m-2"
        label="Success"
        :shades="successColorShades"
      />
      <br class="block sm:hidden">
      <ShadeList
        class="inline-block m-2"
        label="Danger"
        :shades="dangerColorShades"
      />
      <ShadeList
        class="inline-block m-2"
        label="Gray"
        :shades="grayColorShades"
      />
    </section>
    <section class="w-full max-w-sm m-3">
      <ColorResult />
    </section>
    <footer class="text-center py-5">
      <p>
        View project on
        <a
          class="font-semibold underline"
          href="https://github.com/bjornlug/tailwind-color-gen"
        >
          GitHub
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import chroma from 'chroma-js'
import ColorResult from '@/components/ColorResult.vue'
import ShadeList from '@/components/ShadeList.vue'

export default {
  name: 'App',
  components: {
    ColorResult,
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
