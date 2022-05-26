module.exports = {
  // 3.0 版本后，purge 参数更名为 content
  // https://tailwindcss.com/docs/upgrade-guide#configure-content-sources
  content: ['./index.html', './src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
