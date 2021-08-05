<!--
 * @Author: Mr.xie
 * @Date: 2021-08-05 16:15:19
 * @LastEditTime: 2021-08-05 17:55:41
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /testvue/src/components/HelloWorld.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="hello">
    <tree-node :node="nodeData" @click="click" />
  </div>
</template>

<script>
import TreeNode from "./TreeNode.vue";

export default {
  components: { "tree-node": TreeNode },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      nodeData: {
        id: 1,
        clickCount: "1",
        children: [
          {
            id: 4,
            clickCount: "2",
            children: [
              {
                id: 9,
                clickCount: "3",
              },
              {
                id: 10,
                clickCount: "4",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    click(node) {
      console.log("id:" + node.id + "click:" + node.clickCount);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
