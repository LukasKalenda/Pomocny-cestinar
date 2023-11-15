// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import ProfileLayout from './ProfileLayout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProfileLayout', ProfileLayout)
  }
}