<template>
  <div class="project">
    <div v-for="item in value" :key="item.name" class="item">
      <header class="item-hd">
        <div class="item-hd-left">
          <Tag :type="item.tag">
            <h3 class="item-name">{{ item.name }}</h3>
          </Tag>
          <div class="item-des">
            <span>{{ item.desc }}</span>
          </div>
        </div>
        <div class="item-hd-right">
          <a class="item-more" :href="item.url"
            ><img width="120" src="../assets/pc.png" />
            <img class="project-img" :src="item.img" />
          </a>
        </div>
      </header>
      <div>
        <ul>
          <li v-for="l in item.list" :key="l">
            {{ l }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "./Tag";
export default {
  name: "Project",
  components: { Tag },
  data: () => {
    return {
      value: [
        {
          tag: "Vue.js",
          name: "项目A",
          desc:
            "该项目是在心力教育学习期间以小组为团队完成的一个实践项目,团队5人,我主要负责项目计划、测试需求分析、测试分析和总结分析,系统测试用例设计、执行",
          url: "",
          img: require("../assets/projects/xchr.png"),
          list: [
            "全程使用测试管理工具TestDirector进行管理。",
            "全程使用测试管理工具TestDirector进行管理。",
          ],
        },
        {
          tag: "Angular",
          name: "项目B",
          desc:
            "该项目是在心力教育学习期间以小组为团队完成的一个实践项目,团队5人,我主要负责项目计划、测试需求分析、测试分析和总结分析,系统测试用例设计、执行",
          url: "",
          img: require("../assets/projects/xchr.png"),
          list: [
            "全程使用测试管理工具TestDirector进行管理。",
            "全程使用测试管理工具TestDirector进行管理。",
          ],
        },
        {
          tag: "Net Core",
          name: "项目C",
          desc:
            "该项目是在心力教育学习期间以小组为团队完成的一个实践项目,团队5人,我主要负责项目计划、测试需求分析、测试分析和总结分析,系统测试用例设计、执行",
          url: "",
          img: require("../assets/projects/xchr.png"),
          list: [
            "全程使用测试管理工具TestDirector进行管理。",
            "全程使用测试管理工具TestDirector进行管理。",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less">
.project {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
  .item {
    flex: 1;
    width: 50%;
    min-width: 50%;
    max-width: 50%;
    padding: 0 20px;
    @media screen and (max-width: 1024px) {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    }
    .item-hd {
      position: relative;
      padding: 10px 0 5px;
      line-height: 20px;
      overflow: initial;
      font-weight: 500;
      min-height: 30px;
      .item-more {
        position: absolute;
        top: 10px;
        right: 0;
      }
      .item-hd-left {
        width: 60%;
        min-height: 100px;
        display: inline-block;
        .item-des {
          font-weight: initial;
          text-indent: 30px;
        }
      }

      .item-hd-right {
        width: 40%;
        display: inline-block;
        .item-more {
          position: absolute;
          top: 10px;
          right: 0;
          .project-img {
            position: absolute;
            width: 114px;
            right: 3px;
            height: 65px;
            top: 3px;
          }
        }
      }
    }
  }
}
</style>
