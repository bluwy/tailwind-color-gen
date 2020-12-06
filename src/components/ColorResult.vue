<template>
  <highlightjs
    language="javascript"
    class="rounded-lg overflow-hidden"
    :code="colorResultString"
  />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ColorResult',
  computed: {
    ...mapGetters(['colorResult']),
    colorResultString () {
      return JSON.stringify(this.colorResult, null, 2).replace(/"(\w+)"\s*:/g, '$1:')
    }
  }
}
</script>
