<template>
  <div id="wrapper">
    <Layout style="width:100%;height:100%;">
      <LayoutPanel region="north" style="height:250px;">
          <vc-ribbon :config="config" @vue:ribbon:command="command" />
      </LayoutPanel>
      <LayoutPanel region="south" style="height:50px;">
          <div class="title">South Region</div>
      </LayoutPanel>
      <LayoutPanel region="west" style="width:120px;">
          <div class="title">West Region</div>
      </LayoutPanel>
      <LayoutPanel region="east" style="width:120px;">
          <div class="title">East Region</div>
      </LayoutPanel>
      <LayoutPanel region="center" style="height:100%">
          <div class="title">Center Region</div>
      </LayoutPanel>
    </Layout>
  </div>
</template>

<script>
import word from './word';

export default {
  data(){
    return {
      config: word,
    };
  },
  command(a){
    console.log(a);
  },
}
</script>


