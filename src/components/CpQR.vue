<script lang="tsx">
import { defineComponent, inject, ref, reactive, watch, Ref, onBeforeUnmount, onMounted, InjectionKey, PropType, CSSProperties } from 'vue';
import QRCode from 'qrcode';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style/css';

export default defineComponent({
  props: {
    content: String,
    style: Object as PropType<CSSProperties>,
  },
  setup(props, context){

    const canvas = ref(null as any as HTMLCanvasElement);

    onMounted(()=>{
      if(props.content){
        QRCode.toCanvas(canvas.value, props.content);
      }
    });

    const test = ref("abc");

    return ()=>(<canvas style={props.style} ref={canvas}/>);
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
