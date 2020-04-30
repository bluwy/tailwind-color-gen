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
      v-model="colorInput"
      type="text"
      class="border border-gray-500 rounded px-4 py-3 mb-6 focus:border-gray-800 focus:bg-gray-100 transition duration-100"
      placeholder="#ff9faf"
      autofocus
    >
    <section class="flex flex-row flex-wrap space-x-4">
      <ShadeList
        label="Primary"
        :color="primaryColor"
      />
      <ShadeList
        label="Info"
        :color="infoColor"
      />
      <ShadeList
        label="Warning"
        :color="warningColor"
      />
      <ShadeList
        label="Success"
        :color="successColor"
      />
      <ShadeList
        label="Danger"
        :color="dangerColor"
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
import chroma from 'chroma-js'
import ShadeList from '@/components/ShadeList.vue'

export default {
  name: 'App',
  components: {
    ShadeList
  },
  data: () => ({
    colorInput: ''
  }),
  computed: {
    primaryColor () {
      return chroma.valid(this.colorInput)
        ? chroma(this.colorInput).hex().substring(0, 7)
        : '#ff9faf'
    },
    infoColor () {
      return chroma.mix('#3df', this.primaryColor, 0.2, 'lab')
    },
    warningColor () {
      return chroma.mix('#fd0', this.primaryColor, 0.2, 'lab')
    },
    successColor () {
      return chroma.mix('#3e4', this.primaryColor, 0.2, 'lab')
    },
    dangerColor () {
      return chroma.mix('#f34', this.primaryColor, 0.2, 'lab')
    }
  }
}
</script>
