<script lang="tsx">
import { defineComponent, inject, Ref } from 'vue';

export default defineComponent({
  setup(props, context){
    const usrInfo = inject("usrInfo") as any;
    
    return ()=>(<div>
      Hello {usrInfo.name}
    </div>);
  }
});
</script>
