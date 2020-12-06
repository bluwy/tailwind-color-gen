import Vue from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'

hljs.registerLanguage('javascript', javascript)

Vue.use(hljs.vuePlugin)
