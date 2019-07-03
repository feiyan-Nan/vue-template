export const getTimeState = () => {
  // 获取当前时间
  let timeNow = new Date()
  // 获取当前小时
  let hours = timeNow.getHours()
  // 设置默认文字
  let text = ``
  // 判断当前时间段
  if(hour < 6){document.write("凌晨好！")}

 else if (hour < 9){document.write("早上好！")}

else if (hour < 12){document.write("上午好！")}

else if (hour < 14){document.write("中午好！")}

else if (hour < 17){document.write("下午好！")}

else if (hour < 19){document.write("傍晚好！")}

else if (hour < 22){document.write("晚上好！")}

else {document.write("夜里好！")}
  if (hours >= 0 && hours <= 10) {
    text = `早上好`
  } else if (hours > 10 && hours <= 14) {
    text = `中午好`
  } else if (hours > 14 && hours <= 18) {
    text = `下午好`
  } else if (hours > 18 && hours <= 24) {
    text = `晚上好`
  }
  console.log(`hours >>>>>`, hours)
  console.log(`text >>>>`, text)
  // 返回当前时间段对应的状态
  return text
}