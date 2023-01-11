<template>
  <div class="mains_page">
    <!-- 企业基本信息 -->
    <a-card class="basc_info">
      <span slot="title">基本信息</span>
      <a slot="extra" href="#" @click="edit_bascinfo" v-if="visble_bascinfo">
        <a-icon type="edit" />编辑
      </a>
      <span slot="extra" v-else>
        <a href="#" @click="submitbasc"> 保存 </a>
        <a-divider type="vertical" />
        <a
          href="#"
          @click="
            () => {
              visble_bascinfo = true;
            }
          "
        >
          取消
        </a>
      </span>

      <div v-if="visble_bascinfo" style="padding-top: 20px">
        <a-row :gutter="24">
          <a-col :span="4" style="text-align: center">
            <img src="../imges/logs.png" />
          </a-col>
          <a-col :span="20">
            <div style="font-weight: 600">
              <a-tag color="blue">在营</a-tag>
              {{ bascform.name }}
            </div>
            <div style="margin: 20px 0">
              <span style="width: 500px; display: inline-block">
                联系人:{{ bascform.contacts }}
              </span>
              <span> 联系电话: {{ bascform.Telephone }} </span>
            </div>
            <div style="margin: 20px 0">
              <span style="width: 500px; display: inline-block">
                电子邮件:{{ bascform.e_mail }}
              </span>
              <span> 企业地址: {{ bascform.address }} </span>
            </div>
            <div style="margin: 20px 0">
              <p style="font-size: 24px; font-weight: 600">企业简介</p>
              <span>{{ bascform.introduction }} </span>
            </div>
          </a-col>
        </a-row>
      </div>
      <div v-else style="padding-top: 20px">
        <a-form-model
          ref="bascform"
          :model="bascform"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-row>
            <a-col :span="12">
              <a-form-model-item label="企业名称" prop="name">
                <a-input v-model="bascform.name" placeholder="请输入企业名称" />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item label="联系人" prop="contacts">
                <a-input
                  v-model="bascform.contacts"
                  placeholder="请输入企业联系人"
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item label="联系电话" prop="Telephone">
                <a-input
                  v-model="bascform.Telephone"
                  placeholder="请输入企业联系电话"
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item label="电子邮件" prop="e_mail">
                <a-input
                  v-model="bascform.e_mail"
                  placeholder="请输入企业电子邮件"
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item label="企业地址" prop="address">
                <a-input
                  v-model="bascform.address"
                  placeholder="请输入企业地址"
                />
              </a-form-model-item>
            </a-col>

            <a-col :span="12">
              <a-form-model-item label="企业简介" prop="introduction">
                <a-textarea
                  v-model="bascform.introduction"
                  placeholder="请输入企业简介"
                />
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-form-model>
      </div>
    </a-card>
    <!-- 企业工商信息 -->
    <a-card class="business_info">
      <span slot="title">工商信息</span>
      <a slot="extra" href="#" @click="edit_business" v-if="visble_business">
        <a-icon type="edit" />编辑
      </a>
      <span slot="extra" v-else>
        <a href="#" @click="submitbusiness"> 保存 </a>
        <a-divider type="vertical" />
        <a
          href="#"
          @click="
            () => {
              visble_business = true;
            }
          "
        >
          取消
        </a>
      </span>
      <div v-if="visble_business" style="padding-top: 20px">
        <a-form-model :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-row>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">法定代表人</span>
                {{ businessform.legal }}
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">成立日期</span>
                {{ businessform.date }}
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">公司状态</span>
                <a-tag :color="statuslist[businessform.status].color">{{
                  statuslist[businessform.status].name
                }}</a-tag>
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">公司规模</span>
                <a-tag :color="scalelist[businessform.scale].color">{{
                  scalelist[businessform.scale].name
                }}</a-tag>
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">统一信用代码 </span>
                {{ businessform.creditcode }}

                <a-tooltip>
                  <template slot="title">
                    <p>
                      一般指法人和其他组织统一社会信用代码，相当于让法人和其他组织拥有了一个全国统一的“身份证号”。
                    </p>
                  </template>
                  <a-icon type="question-circle" />
                </a-tooltip>
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">是否高企</span>
                {{ businessform.high ? "是" : "否" }}
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">GIS标点</span>
                {{
                  businessform.gis[0] +
                  "&nbsp;，&nbsp;&nbsp;" +
                  businessform.gis[1]
                }}
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">行业</span>
                <a-tag
                  v-for="item in businessform.industry"
                  :key="'industry' + item"
                  >{{ item }}</a-tag
                >
              </a-form-model-item>
            </a-col>
            <a-divider orientation="left"> 用地情况 </a-divider>
            <div
              v-for="(item, index) in businessform.lands"
              :key="'lands' + index"
            >
              <a-col :span="6">
                <a-form-model-item
                  class="fontsize_label"
                  :label-col="{ span: '8' }"
                  :wrapper-col="{ span: '16' }"
                >
                  <span slot="label" class="fontsize_label">用地性质</span>
                  {{ item.type }}
                </a-form-model-item>
              </a-col>
              <a-col :span="6">
                <a-form-model-item
                  class="fontsize_label"
                  :label-col="{ span: '8' }"
                  :wrapper-col="{ span: '16' }"
                >
                  <span slot="label" class="fontsize_label">用地面积</span>
                  {{ item.area }}亩
                </a-form-model-item>
              </a-col>
              <a-col :span="8">
                <a-form-model-item
                  class="fontsize_label"
                  :label-col="{ span: '8' }"
                  :wrapper-col="{ span: '16' }"
                >
                  <span slot="label" class="fontsize_label">亩产效益</span>
                  {{ item.benefit }}%
                </a-form-model-item>
              </a-col>
              <a-divider dashed style="margin: 0"></a-divider>
            </div>

            <a-col :span="24">
              <a-divider orientation="left"> 资质荣誉 </a-divider>
              <div style="margin: 20px 5%">
                <div
                  class="imgwalls"
                  v-for="(path, ind) in businessform.qualifications"
                  :key="'qualifications' + ind"
                >
                  <img
                    :src="path.url"
                    @click="
                      onPicPreviews(businessform.qualifications, path.url)
                    "
                  />
                  <div>{{ path.name }}</div>
                </div>
              </div>
            </a-col>
            <a-col :span="24">
              <a-divider orientation="left"> 专利信息 </a-divider>
              <div style="margin: 20px 5%">
                <div
                  class="imgwalls"
                  v-for="(path, index) in businessform.patent"
                  :key="'patent' + index"
                >
                  <img
                    :src="path.url"
                    @click="onPicPreviews(businessform.patent, path.url)"
                  />
                  <div>{{ path.name }}</div>
                </div>
              </div>
            </a-col>
            <a-col :span="24">
              <a-divider orientation="left"> 形象墙 </a-divider>
              <div style="margin: 20px 5%">
                <div
                  class="imgwalls"
                  v-for="(path, indefx) in businessform.imgwall.img"
                  :key="'img' + indefx"
                >
                  <img
                    :src="path.url"
                    @click="onPicPreviews(businessform.imgwall.img, path.url)"
                  />
                  <div>{{ path.name }}</div>
                </div>
                <div
                  class="imgwalls_video"
                  v-for="(paths, indexs) in businessform.imgwall.video"
                  :key="'video' + indexs"
                >
                  <video controls :src="paths.url"></video>
                  <div>{{ paths.name }}</div>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-form-model>
      </div>
      <div v-else style="margin-top: 20px">
        <a-form-model
          ref="businessform"
          :model="businessform"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-row>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">法定代表人</span>
                <a-input
                  v-model="businessform.legal"
                  placeholder="请输入企业法定代表人"
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">成立日期</span>
                <a-date-picker
                  style="width: 100%"
                  v-model="businessform.date"
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label"> 公司状态</span>
                <a-select
                  style="width: 100%"
                  placeholder="请选择公司公司状态"
                  v-model="businessform.status"
                >
                  <a-select-option
                    v-for="item in statuslist"
                    :key="'statuslist' + item.key"
                  >
                    {{ item.name }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label"> 公司规模</span>
                <a-select
                  style="width: 100%"
                  placeholder="请选择公司公司状态"
                  v-model="businessform.scale"
                >
                  <a-select-option
                    v-for="item in scalelist"
                    :key="'scalelist' + item.key"
                  >
                    {{ item.name }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">统一信用代码</span>
                <a-input
                  v-model="businessform.creditcode"
                  placeholder="请输入企业统一信用代码"
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">是否高企</span>
                <a-radio-group name="radioGroup" v-model="businessform.high">
                  <a-radio :value="true"> 是 </a-radio>
                  <a-radio :value="false"> 否 </a-radio>
                </a-radio-group>
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">GIS标点</span>
                <a-input-group compact>
                  <a-input
                    style="width: 25%"
                    placeholder="请选择经纬度"
                    v-model="businessform.gis[0]"
                  />
                  <a-input
                    style="width: 25%"
                    placeholder="请选择经纬度"
                    v-model="businessform.gis[1]"
                  />
                  <a-button type="primary" @click="getgis(businessform.gis)"
                    >标点</a-button
                  >
                </a-input-group>
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item class="fontsize_label">
                <span slot="label" class="fontsize_label">行业</span>
                <a-tree-select
                  v-model="businessform.industry"
                  multiple
                  allowClear
                  :dropdown-style="{ maxHeight: '300px', overflow: 'auto' }"
                  :treeData="industrytree"
                  placeholder="请选择搜索站点"
                  :replaceFields="{
                    value: 'key',
                    title: 'key',
                  }"
                  :filterTreeNode="
                    (value, node) => {
                      const data = node.componentOptions.propsData.dataRef;
                      return data.key.indexOf(value) !== -1;
                    }
                  "
                >
                </a-tree-select>
              </a-form-model-item>
            </a-col>
            <a-divider orientation="left"> 用地情况 </a-divider>
            <k-form-build :value="formlands" :config="config" ref="formlands" />
            <a-divider orientation="left"> 资质荣誉 </a-divider>
            <k-form-build
              :value="formqualifications"
              :config="config"
              ref="formqualifications"
            />
            <a-divider orientation="left"> 专利信息 </a-divider>
            <k-form-build
              :value="formpatent"
              :config="config"
              ref="formpatent"
            />
            <a-divider orientation="left"> 形象墙 </a-divider>
            <k-form-build
              :value="formimgwall"
              :config="config"
              ref="formimgwall"
            />
          </a-row>
        </a-form-model>
      </div>
    </a-card>
    <pic-preview
      :file-preview-show="previewShow"
      :img-list="preImages"
      :current-img="currentImg"
      style="width: 1200px"
      @close="() => (previewShow = false)"
    ></pic-preview>
    <a-modal
      title="获取经纬度"
      width="50%"
      :visible="mapvisible"
      @ok="getOk()"
      @cancel="
        () => {
          mapvisible = false;
        }
      "
    >
      <div style="width: 100%; height: 600px">
        <div style="height: 50px">
          <a-row :gutter="24">
            <a-col :span="10">
              <a-form-model-item
                label="经纬度"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-input-number
                  v-model="center.lng"
                  :disabled="true"
                  style="width: 50%"
                />
                <a-input-number
                  v-model="center.lat"
                  :disabled="true"
                  style="width: 50%"
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="7">
              <a-form-model-item
                label="区域"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-input
                  style="width: 100%"
                  @change="changed"
                  v-model="location"
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="7">
              <a-form-model-item
                label="关键词"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-input style="width: 100%" v-model="keyword" />
              </a-form-model-item>
            </a-col>
          </a-row>
        </div>
        <baidu-map
          class="bm-view"
          :center="center"
          scroll-wheel-zoom
          :zoom="zoom"
          @click="clickes"
          ak="NCy3L8EKCdf4QgHF8cNdNbOQADq7xx34"
          keyboard
          CityListControl
          auto-resize
        >
          <bm-local-search
            :keyword="keyword"
            :auto-viewport="true"
            :panel="false"
            :selectFirstResult="true"
            @searchcomplete="resultshtmlset"
            :location="location"
          ></bm-local-search>
          <bm-marker :position="center" @click="checkDetail"> </bm-marker>
        </baidu-map>
      </div>
    </a-modal>
  </div>
</template>
<script>
import PicPreview from "@/components/PicPreview";
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmLocalSearch from "vue-baidu-map/components/search/LocalSearch.vue";
import BmMarker from "vue-baidu-map/components/overlays/Marker.vue";
import { form_get } from "@/services/forms";
import Cookie from "js-cookie";
export default {
  props: {
    params: {
      //传递的数据
      type: Object,
    },
    event: {
      type: Function,
    },
    onOpen: {
      type: Function,
    },
  },
  components: {
    PicPreview,
    BaiduMap,
    BmLocalSearch,
    BmMarker,
  },
  data() {
    return {
      visble_bascinfo: true,
      bascform: {
        name: "礼遇南塘文化传媒",
        address: "聊城市东昌府区建设路水岸花语",
        contacts: "李煜",
        Telephone: "18354275575",
        e_mail: "18354275575@163.com",
        introduction: "暂无简介",
      },
      rules: {},
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      visble_business: true,
      statuslist: [
        { key: 0, name: "筹建", color: "#4a8731" },
        { key: 1, name: "在建", color: "#2db7f5" },
        { key: 2, name: "在营", color: "#87d068" },
        { key: 3, name: "停业", color: "#ff4d4f" },
        { key: 4, name: "注销", color: "#606060" },
      ],
      scalelist: [
        { key: 0, name: "小微", color: "green" },
        { key: 1, name: "中小", color: "cyan" },
        { key: 2, name: "规上", color: "blue" },
      ],
      industrytree: [
        {
          key: "农业产品",
          children: [
            {
              key: "谷物",
            },
            {
              key: "油料",
            },
            {
              key: "豆类",
            },
            {
              key: "农作物副产品",
            },
          ],
        },
        {
          key: "农副食品加工业",
          children: [
            {
              key: "豆制品制造",
            },
            {
              key: "蛋品加工",
            },
            {
              key: "谷物磨制",
            },
            {
              key: "饲料加工",
            },
            {
              key: "植物油加工",
            },
          ],
        },
        {
          key: "有色金属",
          children: [
            { key: "贵金属矿" },
            {
              key: "常用有色金属矿",
              children: [
                { key: "铜矿" },
                { key: "镍矿" },
                { key: "钴矿" },
                { key: "锡矿" },
                { key: "镁矿" },
              ],
            },
            { key: "稀有稀土金属矿" },
            { key: "放射性金属矿" },
          ],
        },
      ],
      landslist: [],
      businessform: {
        legal: "李云兵",
        date: "2022-06-29",
        status: 2,
        scale: 2,
        creditcode: "546131465313566153",
        high: true,
        gis: [116.022669, 36.47652],
        industry: ["农副食品加工业", "铜矿"],
        // 用地情况
        lands: [
          { type: "租赁", area: "200", benefit: "30" },
          { type: "自用", area: "200", benefit: "20" },
          { type: "出租", area: "200", benefit: "10" },
        ],

        // 资质荣誉
        // 图片墙
        imgwall: [
          require("../imges/001.jpg"),
          require("../imges/002.jpg"),
          require("../imges/003.jpg"),
        ],

        // 资质荣誉
        qualifications: [
          {
            type: "img",
            name: "信用企业.png",
            status: "done",
            uid: "vc-upload-1657777151597-7",
            url: "/resources/public/20220718/62d529e5cc1561a8c352797c.png",
          },
          {
            type: "img",
            name: "先进单位.jpg",
            status: "done",
            uid: "vc-upload-1657777151597-9",
            url: "/resources/public/20220718/62d529dacc1561a8c3527979.jpg",
          },
        ],
        // 专利信息
        patent: [
          {
            type: "img",
            name: "专利1.jpg",
            status: "done",
            uid: "vc-upload-1657777151597-7",
            url: "/resources/public/20220718/62d52a55cc1561a8c352797f.png",
          },
          {
            type: "img",
            name: "专利2.jpg",
            status: "done",
            uid: "vc-upload-1657777151597-9",
            url: "/resources/public/20220718/62d52a5acc1561a8c3527982.png",
          },
        ],
        // 形象墙
        imgwall: {
          img: [
            {
              type: "img",
              name: "background.jpeg",
              status: "done",
              uid: "vc-upload-1657777151597-52",
              url: "/resources/public/20220714/62cfc814453f011d577e85fc.jpeg",
            },
          ],
          video: [
            {
              type: "file",
              name: "尚可网络.mp4",
              status: "done",
              uid: "62cfc7d8453f011d577e85f5",
              url: "/resources/public/20220714/62cfc7d8453f011d577e85f6.mp4",
            },
          ],
        },
      },
      currentImg: "",
      preImages: [],
      previewShow: false,
      mapvisible: false,
      center: {},
      keyword: "",
      location: "聊城市",
      zoom: 15,
      formlands: {},
      formqualifications: {},
      formpatent: {},
      formimgwall: {},
    };
  },
  computed: {
    userinfo() {
      return this.$store.getters["account/user"];
    },
    config() {
      return {
        uploadFileHeaders: {
          Authorization: Cookie.get("Authorization"),
        },
        uploadImageHeaders: {
          Authorization: Cookie.get("Authorization"),
        },
      };
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      Promise.all([
        form_get({ name: "zjxf_lands" }),
        form_get({ name: "zdxf_zzryfiles" }),
        form_get({ name: "zdxf_patent" }),
        form_get({ name: "zdxf_Imagewall" }),
      ])
        .then((Response) => {
          this.formlands = Response[0].data.data.form;
          this.formqualifications = Response[1].data.data.form;
          this.formpatent = Response[2].data.data.form;
          this.formimgwall = Response[3].data.data.form;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    edit_bascinfo() {
      this.visble_bascinfo = false;
    },

    submitbasc() {
      this.$refs.bascform.validate((valid) => {
        if (valid) {
          console.log(this.bascform);
          this.visble_bascinfo = true;
        }
      });
    },
    submitbusiness() {
      this.visble_business = true;
      this.$refs.formlands.getData().then((res) => {
        console.log("res", res);
      });
      this.$refs.formqualifications.getData().then((res) => {
        console.log("res", res);

        this.businessform.qualifications = res.qualifications;
      });
      this.$refs.formpatent.getData().then((res) => {
        console.log("res", res);
        this.businessform.patent = res.patent;
      });
      this.$refs.formimgwall.getData().then((res) => {
        console.log("res", res);
        this.businessform.imgwall = res;
      });
    },
    edit_business() {
      this.visble_business = false;
      this.$nextTick(() => {
        this.$refs.formlands.setData({
          lands: this.businessform.lands,
        });
        this.$refs.formqualifications.setData({
          qualifications: this.businessform.qualifications,
        });
        this.$refs.formpatent.setData({
          patent: this.businessform.patent,
        });
        this.$refs.formimgwall.setData({
          img: this.businessform.imgwall.img,
          video: this.businessform.imgwall.video,
        });
      });
    },
    onvideos(record, currentImg) {
      console.log(record, currentImg);
    },
    onPicPreviews(record, currentImg) {
      console.log(record, currentImg);
      this.preImages = record.map((item) => item.url);
      this.currentImg = currentImg;
      this.previewShow = true;
    },
    // 获取标点
    getgis(data) {
      this.mapvisible = true;
      this.center = {
        lng: data[0],
        lat: data[1],
      };
    },
    changed(e) {
      this.location = e.srcElement.value;
    },
    clickes(e) {
      console.log("e", e);
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
      this.businessform.gis = [e.point.lng, e.point.lat];
    },
    checkDetail(e) {
      console.log("e11111", e);
    },
    resultshtmlset() {},
    getOk() {
      this.mapvisible = false;
    },
  },
};
</script>
<style scoped lang="less">
.mains_page {
  height: 100%;
  padding: 24px;
  overflow: auto;
  a {
    color: #2196f3;
  }
  .fontsize_label {
    // font-size: 15px !important;
  }
  .basc_info {
    width: 100%;
    font-size: 20px;
  }
  .business_info {
    margin-top: 24px;
  }
  .imgwalls {
    width: 150px;
    height: 150px;
    display: inline-flex;
    margin: 0 10px;
    margin-bottom: 0px;
    object-fit: cover;
    position: relative;
    img {
      border-radius: 5px;
      width: 150px;
      height: 150px;
    }
    div {
      position: absolute;
      bottom: 5px;
      background: #000000cc;
      width: 100%;
      text-align: center;
      color: #ffffff;
      overflow: hidden;
    }
  }
  .imgwalls_video {
    width: 300px;
    height: 150px;
    position: relative;
    margin: 0 10px;
    display: inline-flex;
    video {
      width: 100%;
    }
    div {
      position: absolute;
      bottom: 5px;
      background: #000000cc;
      width: 100%;
      text-align: center;
      color: #ffffff;
      overflow: hidden;
    }
  }
}
</style>
<style scoped>
.bm-view {
  width: 100%;
  height: 550px;
}
</style>