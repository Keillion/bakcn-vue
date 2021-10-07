<script lang="tsx">
import { defineComponent, inject, Ref } from 'vue';

export default defineComponent({
  setup(props, context){
    const user = inject("user") as Ref<string>;
    
    return ()=>(<div>
      Hello {user.value}
    </div>);
  }
});
</script>
