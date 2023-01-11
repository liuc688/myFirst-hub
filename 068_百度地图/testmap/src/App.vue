<template>
  <div id="app">
  	<!-- 必须要设置div的高度 -->
    <div id="map" style="height: 810px;" />
  </div>
</template>
<script>
// 引入百度地图
import BMap from 'BMap'
export default {
  name: '',
  data() {
    return {
      map: '',
      mapZoom: 14
    }
  },
  created() {
    this.$nextTick(() => {
      this.initMap()
    })
  },
  methods: {
  	// 初始化
  	initMap() {
      // 创建Map实例
      this.map = new BMap.Map('map');
      // 初始化地图,设置中心点坐标和地图级别
      this.map.centerAndZoom(new BMap.Point(115.98,36.45), this.mapZoom);
      // 添加控件
      this.map.addControl(new BMap.NavigationControl());
      this.map.addControl(new BMap.ScaleControl());
      this.map.addControl(new BMap.OverviewMapControl());
      this.map.addControl(new BMap.MapTypeControl());
      // 设置地图显示的城市 此项是必须设置的
      this.map.setCurrentCity('聊城');
      // 启用滚轮放大缩小，默认禁用
      this.map.enableScrollWheelZoom(true);
      // 启用地图惯性拖拽，默认禁用
      this.map.enableContinuousZoom(true);
      // 标注
      var point1 = new BMap.Point(115.961054,36.484553);  // 昌润小学
      var point2 = new BMap.Point(116.007658,36.481071);  // 星光水晶城
      var marker1 = new BMap.Marker(new BMap.Point(115.961054,36.484553));  // 创建标注，昌润小学
      var marker2 = new BMap.Marker(new BMap.Point(116.007658,36.481071));  // 创建标注，星光水晶城
      this.map.addOverlay(marker1);  // 将标注添加到地图中 
      this.map.addOverlay(marker2);  // 将标注添加到地图中 
      // 监听标注的事件，当我们点击了标注的时候会触发
      marker1.addEventListener("click", function(e){    
          alert(e);
          console.log('e',e)
      });  
    }
  }
}
</script>
<style>
.anchorBL{
  display:none;
}
#map {
  width: 800px;
  height: 400px !important;
  margin: 100px;
  border: 1px solid deeppink;
  border-radius: 15px;

}
</style>
