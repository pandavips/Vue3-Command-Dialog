<script lang="tsx" setup>
import { createElementPlusDialog, getCommandDialogConsumer } from "vue3-command-dialog";
import { defineComponent, ref, reactive } from "vue";
const CommandDialog = createElementPlusDialog();

const Content = defineComponent({
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { destroyWithResolve, destroyWithReject } = getCommandDialogConsumer();
    const form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });
    const loading = ref(false);
    const onSubmit = () => {
      console.log("submit!");
      loading.value = true;
      setTimeout(() => {
        destroyWithResolve("内部组件表示已经ok~");
        loading.value = false;
      }, 2000);
    };
    return () => (
      <>
        <h3>{props.message}</h3>
        <el-form model={form} label-width="100px" style="max-width: 600px">
          <el-form-item label="Activity name">
            <el-input v-model={form.name} />
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select v-model={form.region} placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="Activity time">
            <el-col span={11}>
              <el-date-picker v-model={form.date1} type="date" placeholder="Pick a date" style="width: 100%" />
            </el-col>
            <el-col span={2} class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col span={11}>
              <el-time-picker v-model={form.date2} placeholder="Pick a time" style="width: 100%" />
            </el-col>
          </el-form-item>
          <el-form-item label="Instant delivery">
            <el-switch v-model={form.delivery} />
          </el-form-item>
          <el-form-item label="Activity type">
            <el-checkbox-group v-model={form.type}>
              <el-checkbox value="Online activities" name="type">
                Online activities
              </el-checkbox>
              <el-checkbox value="Promotion activities" name="type">
                Promotion activities
              </el-checkbox>
              <el-checkbox value="Offline activities" name="type">
                Offline activities
              </el-checkbox>
              <el-checkbox value="Simple brand exposure" name="type">
                Simple brand exposure
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources">
            <el-radio-group v-model={form.resource}>
              <el-radio value="Sponsor">Sponsor</el-radio>
              <el-radio value="Venue">Venue</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Activity form">
            <el-input v-model={form.desc} type="textarea" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" loading={loading.value} onClick={onSubmit}>
              Create
            </el-button>
            <el-button onClick={() => destroyWithReject("cancel")}>Cancel</el-button>
          </el-form-item>
        </el-form>
      </>
    );
  },
});

const openDialog = async () => {
  const msg = await CommandDialog(<Content message={new Date().toString()} />, {
    title: "通知外部组件",
  }).promise;

  alert(msg);
};
</script>

<template>
  <div>
    <el-button type="primary" @click="openDialog">打开弹窗</el-button>
  </div>
</template>
