/**
 * storage 存储的关键key
 */
export const STORAGE = {
  LANGUAGE_TEXT: 'LANGUAGE_TEXT',
  TASK_FILTERS: 'TASK_FILTERS',
  TRANS_TASK_FILTERS: 'transTaskFilters'
}
/**
 * 任务相关的常量
 */
export const TASK_DETAIL = {
  DAY_TYPE_ALL: 1, // 全天
  DAY_TYPE_UN: 2, // 非全天
  TIME_TYPE_TASK: 1, // 到期时间：任务
  TIME_TYPE_CALENDAR: 2, // 起止时间：日程
  VALID_DELETED: 0, // 已删除
  VALID_UN: 1, // 未删除
  STATE_FINISHED: 1, // 已完成
  STATE_UN: 0 // 未完成
}

/**
 * 权限位常量
 */
export const PERMISSIONS = {
  MAT_MATTER_TIMELOG_ADD: 'MAT:matter.timeLog:add'
}

/**
 * 任务状态
 */
export const TASK_STATUS = {
  UN_FINISH: {
    value: 1,
    label: '未完成'
  },
  FINISHED: {
    value: 2,
    label: '已完成'
  },
  DELETED: {
    value: 3,
    label: '已删除'
  }
}
// 任务状态
export const TASK_FINISH_STATUS = {
  FINISHED: 1,
  UN_FINISH: 0
}
// 因为未分组没有id，所以自定义ID
export const UN_GROUP_ID = 'UN_GROUP_ID'
export const GUANZHU = 'GUANZHU'
// 分页的相关配置
export const PAGE = {
  // 不包含关注的数量（每页显示多少条）
  PAGESIZE: 300,
  // 规定未完成的关注的任务数
  UN_FINISH_FAVORITE_TASKS_NUM: 200,
  // 任务达到多少条开始友情提示
  REMINDER_TASK_SNUM: 1000,
  // 普通的任务组每点击一次加载更多的数量
  COMMON_TASK_LOAD_NUM: 100,
  // 关注的任务组每点击一次加载更多的数量
  FAVORITE_TASKS_LOAD_NUM: 100,
  // 普通的任务组点击显示已完成的一次显示的数量
  COMMON_TASK_SHOW_FINISHED_NUM: 200,
  // 关注的任务组点击显示已完成的一次显示的数量
  FAVORITE_TASKS_SHOW_FINISHED_NUM: 200,
  // *********** 这里的COMMON_TASK_SHOW_FINISHED_NUM和COMMON_TASK_LOAD_NUM-----必须-----成整数倍
  // 加载更多从第几页开始
  COMMON_TASK_PAGEINDEX () {
    return this.COMMON_TASK_SHOW_FINISHED_NUM / this.COMMON_TASK_LOAD_NUM + 1
  },
  // 这里的FAVORITE_TASKS_SHOW_FINISHED_NUM和FAVORITE_TASKS_LOAD_NUM-----必须-----成整数倍
  // 关注的加载更多从第几页开始
  FAVORITE_TASKS_PAGEINDEX () {
    return this.FAVORITE_TASKS_SHOW_FINISHED_NUM / this.FAVORITE_TASKS_LOAD_NUM + 1
  }
}
// export const PAGE = {
//   // 不包含关注的数量（每页显示多少条）
//   PAGESIZE: 500,
//   // 规定未完成的关注的任务数
//   UN_FINISH_FAVORITE_TASKS_NUM: 200,
//   // 任务达到多少条开始友情提示
//   REMINDER_TASK_SNUM: 510,
//   // 普通的任务组每点击一次加载更多的数量
//   COMMON_TASK_LOAD_NUM: 5,
//   // 关注的任务组每点击一次加载更多的数量
//   FAVORITE_TASKS_LOAD_NUM: 5,
//   // 普通的任务组点击显示已完成的一次显示的数量
//   COMMON_TASK_SHOW_FINISHED_NUM: 10,
//   // 关注的任务组点击显示已完成的一次显示的数量
//   FAVORITE_TASKS_SHOW_FINISHED_NUM: 10,
//   // *********** 这里的COMMON_TASK_SHOW_FINISHED_NUM和COMMON_TASK_LOAD_NUM-----必须-----成整数倍
//   // 加载更多从第几页开始
//   COMMON_TASK_PAGEINDEX () {
//     return this.COMMON_TASK_SHOW_FINISHED_NUM / this.COMMON_TASK_LOAD_NUM + 1
//   },
//   // 这里的FAVORITE_TASKS_SHOW_FINISHED_NUM和FAVORITE_TASKS_LOAD_NUM-----必须-----成整数倍
//   // 关注的加载更多从第几页开始
//   FAVORITE_TASKS_PAGEINDEX () {
//     return this.FAVORITE_TASKS_SHOW_FINISHED_NUM / this.FAVORITE_TASKS_LOAD_NUM + 1
//   }
// }
export const TASK_DAYTYPE = {
  FULL: {
    value: 1,
    label: '全天'
  },
  UN_FULL: {
    value: 2,
    label: '非全天'
  }
}
export const TASK_TIMETYPE = {
  DUE: {
    value: 1,
    label: '到期',
    text: '仅设置到期时间'
  },
  STARTEND: {
    value: 2,
    label: '开始结束',
    text: '设置开始结束时间'
  }
}

export const CUSTOM_RULE_UNIT = {
  D: {
    value: 'D',
    label: '天'
  },
  W: {
    value: 'W',
    label: '周'
  },
  M: {
    value: 'M',
    label: '月'
  },
  Y: {
    value: 'Y',
    label: '年'
  }
}
export const WEEK_LIST = {
  MONDAY: {
    value: 1,
    label: '周一',
    name: '一'
  },
  TUESDAY: {
    value: 2,
    label: '周二',
    name: '二'
  },
  WEDNESDAY: {
    value: 3,
    label: '周三',
    name: '三'
  },
  THURSDAY: {
    value: 4,
    label: '周四',
    name: '四'
  },
  FRIDAY: {
    value: 5,
    label: '周五',
    name: '五'
  },
  SATURDAY: {
    value: 6,
    label: '周六',
    name: '六'
  },
  SUNDAY: {
    value: 7,
    label: '周日',
    name: '日'
  }
}

export const DEFAULT_RULES = {
  none: {
    label: '无',
    value: 'none'
  },
  every_day: {
    label: '每天',
    value: 'every_day'
  },
  every_week: {
    label: '每周',
    value: 'every_week'
  },
  every_month: {
    label: '每月',
    value: 'every_month'
  },
  every_year: {
    label: '每年',
    value: 'every_year'
  },
  every_workday: {
    label: '每周一至周五',
    value: 'every_workday'
  }
}

export const END_RULES = {
  unlimited: {
    label: '无限重复',
    value: 'unlimited'
  },
  end_by_day: {
    label: '结束日期',
    value: 'end_by_day'
  },
  end_by_times: {
    label: '重复次数',
    value: 'end_by_times'
  }
}

export const REMIND_DAY_OPTIONS = {
  '0DB_9AM': {
    value: '0DB_9AM',
    label: '当天（09:00）'
  },
  '1DB_9AM': {
    value: '1DB_9AM',
    label: '前1天（09:00）'
  },
  '2DB_9AM': {
    value: '2DB_9AM',
    label: '前2天（09:00）'
  },
  '1WB_9AM': {
    value: '1WB_9AM',
    label: '前1周（09:00）'
  },
  '2WB_9AM': {
    value: '2WB_9AM',
    label: '前2周（09:00）'
  }
}

export const REMIND_TIME_OPTIONS = {
  '0MB': {
    value: '0MB',
    label: '时'
  },
  '10MB': {
    value: '10MB',
    label: '前10分钟'
  },
  '30MB': {
    value: '30MB',
    label: '前30分钟'
  },
  '1HB': {
    value: '1HB',
    label: '前1小时'
  }
}

// 排序规则
export const sortRule = {
  // 默认排序
  sortDefault (a, b) { return a.gmtCreate - b.gmtCreate },
  // 按名称排序
  sortName (a, b) { return a.name.localeCompare(b.name) },
  // 按创建时间排序
  sortCreateTime (a, b) { return b.gmtCreate - a.gmtCreate },
  // 按到期时间排序
  sortExpirationTime (a, b) { return b.dueTime - a.dueTime }
}
