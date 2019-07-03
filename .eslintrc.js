// https://eslint.org/docs/user-guide/configuring
const isProdEnv = process.env.NODE_ENV === 'production' ? true : false
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': isProdEnv ? 'error' : 'off',
    // 文件最后必须有空行
    'eol-last': 0,
    'comma-dangle': 0,
    // 禁止访问未定义的变量或方法,
    'no-undef': 0,
    'indent': [2],
    // 连续空行的数量限制
    'no-multiple-empty-lines': 2,
    //禁止出现空语句块
    'no-empty': 2,
    //函数内允许多大代码行数
    'max-statements': [2,25],
    //禁止重复导入
    'no-duplicate-imports': 2,
    //驼峰命名
    'camelcase': 2,
    // 最大回调深度为 3 层
    'max-nested-callbacks': [2, 3],
    // 禁止对 const 定义重新赋值
    'no-const-assign': 2,
    // 禁止 alert
    'no-alert': 1,
    // 最大块嵌套深度为 5 层
    'max-depth': [2, 5],
    // 每一个 switch 的 case 都需要有 break, return 或 throw
    // 包含注释的情况下允许
    'no-fallthrough': [2, { 'commentPattern': '.' }],
    // 禁止使用 var，必须用 let 或 const
    'no-var': 2,
    // 禁止出现未使用过的变量
    'no-unused-vars': isProdEnv ? 2 : 0,
    //生产环境禁用console
    // 'no-console': isProdEnv ? 2 : 0,(先注释了)
  }
}
