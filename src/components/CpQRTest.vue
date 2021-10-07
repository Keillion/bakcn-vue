<script lang="tsx">
import { defineComponent, inject, ref, reactive, watch, Ref, onBeforeUnmount, onMounted, InjectionKey } from 'vue';
import QRCode from 'qrcode';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style/css';

export default defineComponent({
  props: {
    msg: String,
  },
  inject: ["user"],
  setup(props, context){

    const usrInfo = inject("usrInfo", reactive({
      connectUrl: "https://www.keillion.site",
    }));
    watch(()=>usrInfo.connectUrl, newUrl=>{
      if(canvas.value){
        QRCode.toCanvas(canvas.value, newUrl);
      }
    });

    const canvas = ref(null as any as HTMLCanvasElement);

    onMounted(()=>{
      QRCode.toCanvas(canvas.value, usrInfo.connectUrl);
    });

    const test = ref("abc");

    // v-once
    return ()=>(<>
      <canvas ref={canvas}/>
      <input v-model={test.value}/>
      <p>test: {test.value}</p>
      <Button onClick={()=>{test.value="click "+Date.now().toString()}}>change test</Button>
      <Button onClick={()=>{usrInfo.connectUrl=Date.now().toString()}}>change url</Button>
      <p>Take a screenshot and import to connection client</p>
    </>);
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
