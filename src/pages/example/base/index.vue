<script lang="tsx" setup>
import { createElementPlusDialog, createVantUiPopup } from "../../../components";
import Content from "./components/Content.vue";
import { provide } from "vue";

provide("base", "来自base的🩷");

const CommandDialog = createElementPlusDialog();

const openDialog = () => {
  CommandDialog(<Content />, {
    title: "基础用法",
  });
};

const openDialog2 = () => {
  const { hide, show, destroyWithResolve } = CommandDialog(<Content />, {
    title: "外部控制",
  });
  [2, 4, 6].forEach((t) => {
    setTimeout(() => {
      t === 2 && hide();
      t === 4 && show();
      t === 6 && destroyWithResolve();
    }, t * 1000);
  });
};

const CommandDialog2 = createElementPlusDialog(false);
const openDialog3 = () => {
  const { show } = CommandDialog2(<Content />, {
    title: "三秒后打开",
  });
  setTimeout(() => {
    show();
  }, 3000);
};

const CommandVantUiPopup = createVantUiPopup();
const openVantUiPopup = () => {
  CommandVantUiPopup(<div style="color: red; height: 30vh;padding: 20px;">我是vantUi的弹窗里的内容</div>);
};
</script>

<template>
  <div>
    <el-button type="primary" @click="openDialog">打开弹窗</el-button>
    <el-button type="success" @click="openDialog2">弹窗外部控制显示/隐藏/销毁(过程中弹窗会自动显示关闭)</el-button>

    <el-button type="success" @click="openDialog3">三秒后打开</el-button>
    <el-divider>VantUiのdemo</el-divider>
    <el-button type="success" @click="openVantUiPopup">打开VantUi弹窗</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
