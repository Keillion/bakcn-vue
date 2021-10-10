<script lang="tsx">
import { defineComponent, inject, Ref } from 'vue';

export default defineComponent({
  setup(props, context){
    const usrInfo = inject("usrInfo") as any;
    
    return ()=>(<div>
      <p>Hello {usrInfo.name}</p>
      <p>bind wechat</p>
      <p>bind email</p>
      <p>bind phone</p>
      <p>bind weibo</p>
    </div>);
  }
});
</script>
