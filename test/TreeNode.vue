<!--
 * @Author: Mr.xie
 * @Date: 2021-08-05 16:15:19
 * @LastEditTime: 2021-08-05 17:59:51
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /testvue/src/components/TreeNode.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <!-- <el-tree
    :data="node"
    show-checkbox
    default-expand-all
    :expand-on-click-node="false"
    node-key="id"
    ref="tree"
    highlight-current
    :props="defaultProps"
    @node-click="nodeClick"
  /> -->
  <div>
    <ul v-for="item in node" :key="item.id">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TreeNode",
  props: {
    node: {
      type: Array,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "clickCount",
      },
    };
  },
  methods: {
    nodeClick(node) {
      node.clickCount = parseInt(node.clickCount) + 1;
      this.$emit("click", node);
    },
    setHtml(data) {
      var ul = "<ul>";
      ul += "<li style='margin-left:10px;'>" + data.id;
      ul += this.setHtml(data, data[i].subnetId);
      ul += "</li>";

      // for(var i=0;i<data.length;i++){
      //    if(data[i]!=null){
      //        if(data[i].subnetNode==node){
      //            ul += "<li style='margin-left:10px;'>"+data[i].subnetName;
      //            ul += show(data,data[i].subnetId);
      //            ul += "</li>";
      //        }
      //    }
      // }
      ul += "</ul>";

      return ul;
    },
  },
  mounted() {
    var html = this.setHtml(this.node);
    console.log(html);
    console.log(this.node);
  },
};
</script>

<style scoped>
</style>
