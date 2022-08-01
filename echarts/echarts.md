# echarts 基础

## 1. series 类型

![avatar](D:\study\practice\Practice2\component\echarts\image\series官方文档类型.png)
![avatar](D:\study\practice\Practice2\component\echarts\image\series图类型.png)

地址:https://echarts.apache.org/zh/option.html#series

## 2. 七大图表

- 图表 1: 柱状图 bar
- 图表 2: 折线图 line
- 图表 3: 散点图 scatter/effectScatter
- 图表 4: 饼图 pie
- 图表 5: 地图 map
- 图表 6: 雷达图 radar
- 图表 7: 仪表图 gauge

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

- 显示数值 label.formatter
- 圆环 radius
  > 饼图的半径 可以直接设置
  > 也可以用百分比百分比是根据盒子宽度和高度较小的那一部分的一半进行百分比设置
  > 设置数组内环和外环第 0 个元素是内环的半径，第 1 个元素是外环半径
- 南丁格尔图
  > roseType : radius 相当于占比越高就越大 每个半径都是不同的
- 选中效果
  > selectedMode : 'single' 点击选中偏离原点，点击下一个上一个会回到原点 multiple 点击选中偏离原点，点击俩下回到原点
  > selectedOffset 偏离的距离

## 6. 地图

https://echarts.apache.org/zh/option.html#geo
https://echarts.apache.org/zh/option.html#series-map

> 使用方式：
>
> - 百度地图 API
>   - 需要申请百度地图 ak
> - 矢量地图 map
>   - 需要准备矢量地图数据
>     - 缩放拖动：roam 值为 true
>     - 名称显示：label show 值为 true
>     - 初始化缩放比例：zoom 默认为 1
>     - 中心点：center []
>     - visualMap 旁边出现滚动条
>       - calculable : true 滚动条可以滑动
>     - geoIndex : 可以指定一个 geo 连接
>     - 让散点图使用地图坐标系统 coordinateSystem ：geo

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- 补全视口标签 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,user-scalable=no, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
    />
    <title>市井皆是温柔,弄堂藏匿浪漫</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/echarts/5.3.3/echarts.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  </head>

  <body>
    <div
      id="main"
      style="width: 600px;height:400px;border: 1px solid #ccc;"
    ></div>
    <script>
      var myChart = echarts.init(document.getElementById("main"));
      var airData = [
        { name: "北京", value: 39.92 },
        { name: "天津", value: 39.13 },
        { name: "上海", value: 31.22 },
        { name: "重庆", value: 66 },
        { name: "河北", value: 147 },
        { name: "河南", value: 113 },
        { name: "云南", value: 25.04 },
        { name: "辽宁", value: 50 },
        { name: "黑龙江", value: 114 },
        { name: "湖南", value: 175 },
        { name: "安徽", value: 117 },
        { name: "山东", value: 92 },
        { name: "新疆", value: 84 },
        { name: "江苏", value: 67 },
        { name: "浙江", value: 84 },
        { name: "江西", value: 96 },
        { name: "湖北", value: 273 },
        { name: "广西", value: 59 },
        { name: "甘肃", value: 99 },
        { name: "山西", value: 39 },
        { name: "内蒙古", value: 58 },
        { name: "陕西", value: 61 },
        { name: "吉林", value: 51 },
        { name: "福建", value: 29 },
        { name: "贵州", value: 71 },
        { name: "广东", value: 38 },
        { name: "青海", value: 57 },
        { name: "西藏", value: 24 },
        { name: "四川", value: 58 },
        { name: "宁夏", value: 52 },
        { name: "海南", value: 54 },
        { name: "台湾", value: 88 },
        { name: "香港", value: 66 },
        { name: "澳门", value: 77 },
        { name: "南海诸岛", value: 55 },
      ];
      var scatterData = [{ value: [117.283042, 31.86119] }];
      $.get("json/china.json", function (res) {
        console.log(res);
        // 地图注册 就是注册名称
        echarts.registerMap("chinaMap", res);
        // 设置图表的配置项
        let option = {
          geo: {
            type: "map", //设置图表类型
            map: "chinaMap", //需与上面echarts.registerMap方法的第一个参数保持一致
            roam: true, //设置缩放和拖动
            // 里面的文字显示
            label: {
              show: true,
            },
            zoom: 1, // 设置初始化的缩放比例
            center: [116.405285, 39.904989], //设置地图中心点
          },
          series: [
            {
              data: airData,
              geoIndex: 0, //将空气质量数据跟第0个geo配置关联在一起
              type: "map",
            },
            {
              data: scatterData, //涟漪动画的散点数据
              type: "effectScatter",
              coordinateSystem: "geo",
              rippleEffect: {
                scale: 10,
              },
            },
          ],
          visualMap: {
            min: 0,
            max: 300,
            inRange: {
              color: ["white", "red"], //控制颜色渐变的范围
            },
            calculable: true,
          },
        };
        //生成图表（地图）
        myChart.setOption(option);
      });
    </script>
  </body>
</html>
```

## 7. 雷达图

https://echarts.apache.org/zh/option.html#radar

> radar 代表雷达图

- indicator 代表最大值
- 在 series 下的 data 配置数据
- areaStyle 雷达图形成阴影的面积
- shape circle 外层的图形为圆的 polygon 默认

## 8.仪表盘图

https://echarts.apache.org/zh/option.html#series-gauge

> gauge 仪表盘图

- min max 控制仪表盘数值范围

## 9. 总结

![avatar](D:\study\practice\Practice2\component\echarts\image\总结1.png)
![avatar](D:\study\practice\Practice2\component\echarts\image\总结2.png)
![avatar](D:\study\practice\Practice2\component\echarts\image\总结3.png)
![avatar](D:\study\practice\Practice2\component\echarts\image\总结4.png)
![avatar](D:\study\practice\Practice2\component\echarts\image\总结5.png)
![avatar](D:\study\practice\Practice2\component\echarts\image\总结6.png)

### 七大图表特点

> 1. 柱状图描述的是分类数据，呈现的是每一个分类中有多少
> 2. 折线图使用场景常用来分析数据随时间的变化趋势
> 3. 散点图可以帮助我们推断出不同纬度数据之间的相关性，可以用在地图上的标注上
> 4. 地图主要可以帮助我们从宏观的角度快速看出不同地理位置上数据的差异
> 5. 饼图可以更好地帮助用户快速了解不同分类的数据的占比情况
> 6. 雷达图可以用来分析多个纬度的数据与标准数据的对比情况
> 7. 仪表盘可以更直观的表现出摸个指标的进度或实际情况

