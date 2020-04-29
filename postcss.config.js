const plugins = [require("tailwindcss")]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    require('@fullhuman/postcss-purgecss')({
      content: ['./public/**/*.html', './src/**/*.vue'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  )
}

module.exports = { plugins }
