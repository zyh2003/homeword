# echarts

## 1. series 类型

![avatar](D:\study\practice\Practice2\component\echarts\image\series官方文档类型.png)
![avatar](D:\study\practice\Practice2\component\echarts\image\series图类型.png)

地址:https://echarts.apache.org/zh/option.html#series

## 2. 七大图表

- 图表 1: 柱状图
- 图表 2: 折线图
- 图表 3: 散点图
- 图表 4: 饼图
- 图表 5: 地图
- 图表 6: 雷达图
- 图表 7: 仪表图

## 3. Echarts 实现布置

- 最基本:
  - 引入 js 文件，DOM 容器，初始化对象，设置 option
  - x 轴数据、y 轴数据
  - 在 series 下设置图表类型
- 常见效果 官方地址:https://echarts.apache.org/zh/option.html#series
  - 最大值、最小值：markPoint
    > 前面代表最大值，后面代表最小值 ，name 是显示文字
  - 平均值 ：markLine
  - 显示
    - 数值显示 : label
      1. label 属性下设置 show 为 true
      2. rotate 这个可以设置文字的旋转度数
      3. position 文字显示的位置,注意后面＋''
  - 柱宽度
    > barWidth 默认自适应
  - 横向柱状图
    > x 轴和 y 轴的属性换下就可以了

## 4. 通用配置

### 4.1. 标题 title

- 文字样式 textStyle https://echarts.apache.org/zh/option.html#title.textStyle

- 标题边框
  ![avatar](D:\study\practice\Practice2\component\echarts\image\标题边框.png)
- 标题位置
  ![avatar](D:\study\practice\Practice2\component\echarts\image\标题位置.png)

### 4.2. 提示 tooltip

> 用于配置鼠标滑过或点击图标时的显示框

1.  触发类型 ：trigger

- item 这个是移上去才会显示
- axis 这个是到那一列就会上去

2.  触发时机 ：triggerOn

- click 点击才会显示
- mouseover 鼠标移上去 默认

3.  格式化 ：formatter

- 写什么显示什么 https://echarts.apache.org/zh/option.html#grid.tooltip.formatter
- 字符串模板
- 回调函数 会获取到当前类目

### 4.3. 工具按钮 toolbox

https://echarts.apache.org/zh/option.html#toolbox

> 内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具

- saveAsImage 导出图片
- dataView 数据视图
- magicType 动态类型切换
- dataZoom 数据区域缩放
-  restore 重置 

### 4.4. 图例 legend
