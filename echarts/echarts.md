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
  - 标注区间 ：markArea data 里面还是数组数组里面才是对象进行标注
  - 显示
    - 数值显示 : label
      1. label 属性下设置 show 为 true
      2. rotate 这个可以设置文字的旋转度数
      3. position 文字显示的位置,注意后面＋''

### 3.1. 柱状图

https://echarts.apache.org/zh/option.html#series-bar

- 柱宽度
  > barWidth 默认自适应
- 横向柱状图
  > x 轴和 y 轴的属性换下就可以了

### 3.2. 线状图

https://echarts.apache.org/zh/option.html#series-line

- 线条控制 ：平滑 风格
  - smooth 改为 true 就好
- lineStyle 线状图样式 https://echarts.apache.org/zh/option.html#legend.lineStyle
- areaStyle 填充样式
- boundaryGap 紧挨边缘 第一列跟 y 轴紧挨着 这个在 x 轴设置 值为 false
- scale 缩放 ：脱离 0 值比例 值为 true 就是脱离 默认比例
- 折线图里的 堆叠图 stack：all 俩个保持一样 第二个图相对于第一个图来进行的

### 3.3. 散点图

https://echarts.apache.org/zh/option.html#series-scatter

> x 轴和 y 轴的 type 都是 value

- 气泡图效果
  - 散点的大小不同 symbolSize :function (arg) {} 这个可以获取到数据值
  - 散点的颜色不同 itemStyle 也是支持回调函数的 相当于每个元素的样式
- 涟漪动画效果
  - 设置 type effectScatter
  - rippleEffect 效果大小 scale
  - showEffectOn 有两个参数 render 默认 emphasis 鼠标滑过

### 3.4. 总结

> 直角坐标系图表：柱状图 折线图 散点图

#### 3.4.1. 网格 grid

https://echarts.apache.org/zh/option.html#grid

- grid 是用来控制直角坐标系的布局和大小
- x 轴和 y 轴就是在 grid 的基础上进行绘制的
- 显示 grid
  - show 值为 true x 轴和 y 轴封闭
  - boderWidth 边框的宽度

#### 3.4.2 坐标轴 axis

> 坐标轴分为 x 轴和 y 轴
> 一个 grid 中最多有俩种位置的 x 轴和 y 轴

- 坐标轴类型 type
  - value ：数值轴，自动会从目标数据中读取数据，就是从 series 中寻找 data
  - category ： 类目轴，该类型必须通过 data 设置类目数据
- 显示位置 position
  - xAxis：可取值为 top 或者 bottom
  - yAxis：可取值为 left 或者 left

#### 3.4.3 区域缩放 dataZoom

> 这里不是 toolbox 下的 dataZoom，直接属于 option
> 用于区域缩放，对数据范围过滤，x 轴和 y 轴都可以拥有
> 是一个数组，意味着可以配置多个区域缩放器

- 类型 type
  - slider: 滑块
  - inside: 内置，依赖鼠标滚轮或者双指缩放
- 指明产生的作用的轴
  - xAxisIndex ：设置缩放组件控制的是那个 x 轴，一般写 0 即可
  - yAxisIndex ：设置缩放组件控制的是那个 y 轴，一般写 0 即可
- 指明初始状态的缩放情况
  - start ：数据窗口范围的起始百分比
  - end ：数据窗口范围的结束百分比

#### 3.4.4 直角坐标系图表特点

> 柱状图描述的是分类数据，呈现的是每一个分类中有多少
> 折线图使用场景常用来分析数据随时间的变化趋势
> 散点图可以帮助我们推断出不同纬度数据之间的相关性，可以用在地图上的标注上

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
> feature 各工具配置项

- saveAsImage 导出图片 就是可以下载到本地了
- dataView 数据视图 显示最原始的数据可以修改
- magicType 动态类型切换 图表类型的切换
- dataZoom 数据区域缩放 一共拥有两个按钮 一共是选中查看一共还原
- restore 重置 修改后可以点击还原

### 4.4. 图例 legend

> 用于筛选系列，需要配置和 series 配合使用

- legend 中的 data 是一个数组
- legend 中的 data 的值需要和 series 数组中某组数据的 name 值一致
## 5. 饼图
  - 显示数值