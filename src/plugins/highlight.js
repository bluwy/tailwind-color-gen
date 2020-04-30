import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'

Vue.use(VueHighlightJS, { languages: { javascript } })
