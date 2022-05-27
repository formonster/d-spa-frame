基于 vite + react + ts 的 spa 脚手架

## 特性

- antd
  - 现存问题：打包后默认为暗色主题（设置的亮色主题）
- less
- redux
- swr
- ahooks
- tailwindcss
  - 现存问题：tailwindcss 会覆盖 antd 的基础样式(暂时删除 tailwindscss 的基础样式)
- eslint

## 有意思的功能

- 全局弹窗
  - 可全局调用
  - 可异步加载
  - 可自定义 TS 类型，并且使用时带有类型提示
  - 弹窗和弹窗状态不用写在页面里了，使用起来贼方便 😁

## Docs

- [tailwindcss](https://www.tailwindcss.cn/docs)
- [swr](https://www.npmjs.com/package/swr)
- [ahooks](https://ahooks.js.org/zh-CN/hooks/use-request/index)
- [husky](https://typicode.github.io/husky/#/)
- [commitlint](https://commitlint.js.org/#/reference-cli)：规范 git commit 信息
- [prettier](https://www.prettier.cn/docs//install.html)：用于检查代码格式
  - 安装 vscode 插件：
    - Prettier - Code formatter
    - Formatting Toggle
  - 设置保存自动格式化
    - 首选项 -> 设置 -> 文本编辑器 -> 格式化 -> Format On Save
  - 将 Prettier - Code formatter 设备为默认格式化工具
    - 在文件中右键 -> 使用...格式化文档 -> 配置默认格式化程序 -> Prettier - Code formatter
- [stylelint](https://github.com/prettier/stylelint-config-prettier)：用于检查 css 代码格式
- [lint-staged](https://www.npmjs.com/package/lint-staged)：对暂存的 git 文件运行 linter，不要让 💩 溜进你的代码库！
