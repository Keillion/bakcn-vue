<script lang="tsx">
import { defineComponent, inject, Ref } from 'vue';

export default defineComponent({
  setup(props, context){
    const user = inject("user") as Ref<string>;
    
    return ()=>(<div>
      <p>Hello {user.value}</p>
      <p>bind wechat</p>
      <p>bind email</p>
      <p>bind phone</p>
      <p>bind weibo</p>
    </div>);
  }
});
</script>
