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
    // 这里是没有开启的
    // 禁止使用按位运算符
    "no-bitwise": 0,
    // 禁止使用三目运算符0:不禁止 1: 禁止
    "no-ternary": 0,
    "no-continue": 0,//禁止使用continue
    "no-else-return": 0,//如果if语句里面有return,后面不能跟else语句
    "no-empty-label": 0,//禁止使用空label
    "no-nested-ternary": 0,//禁止使用嵌套的三目运算
    "no-new": 1,//禁止在使用new构造一个实例后不赋值
    "no-new-func": 1,//禁止使用new Function
    "no-new-object": 2,//禁止使用new Object()
    "no-new-require": 2,//禁止使用new require
    "no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
    "no-obj-calls": 2,//不能调用内置的全局对象，比如Math() JSON()
    "no-octal": 2,//禁止使用八进制数字
    "no-octal-escape": 2,//禁止使用八进制转义序列
    "no-native-reassign": 2,//不能重写native对象
    "no-negated-in-lhs": 2,//in 操作符的左边不能有!
    "no-multi-str": 2,//字符串不能用\换行
    "no-lonely-if": 2,//禁止else语句内只有if语句
    "no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    "no-implied-eval": 2,//禁止使用隐式eval
    "no-eval": 1,//禁止使用eval
    "no-ex-assign": 2,//禁止给catch语句中的异常参数赋值
    "no-eq-null": 2,//禁止对null使用==或!=运算符
    "no-empty-character-class": 2,//正则表达式中的[]内容不能为空
    "no-delete-var": 2,//不能对var声明的变量使用delete操作符
    "no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
    "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 2,//函数参数不能重复
    "no-duplicate-case": 2,//switch中的case标签不能重复
    "no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
    "no-class-assign": 2,//禁止给类赋值
    "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
    "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
    "no-control-regex": 2,//禁止在正则表达式中使用控制字符
    // 禁止给参数重新赋值
    "no-param-reassign": 2,
    // 禁止在正则表达式字面量中使用多个空格 /foo bar/
    "no-regex-spaces": 2,
    // 禁止重复声明变量
    "no-redeclare": 2,
    // 禁止使用__proto__属性
    "no-proto": 2,
    // return 语句中不能有赋值表达式
    "no-return-assign": 1,
    // 一行结束后面不要有空格
    "no-trailing-spaces": 1,
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
    // 连续空行的数量限制最多两行
    'no-multiple-empty-lines': [1, {"max": 2}],
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
    'no-console': isProdEnv ? 2 : 0
  }
}
