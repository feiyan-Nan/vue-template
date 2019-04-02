## API

```html
<ic-pagination @change="onChange" :totalCount="50" />
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| totalCount | 数据总数 | number | 0 |
| pageSize | 每页条数 | number | 10 |
| currPage | 当前页 | number | 1 |
| itemCount | 分页器按钮个数 | number | 9 |

### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 页码改变的回调，参数是改变后的页码| Function(page) |