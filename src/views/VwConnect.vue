<script lang="tsx">
import { defineComponent, inject, Ref } from 'vue';
import CpQR from '@/components/CpQR.vue'

export default defineComponent({
  setup(props, context){
    //const user = inject("user") as Ref<string>;
    const usrInfo = inject("usrInfo", {
      connectExpireTime: "yyyy-MM-dd",
      connectMaxDeviceCount: 0,
    });
    
    return ()=>(<div>
      <p>The connection is available until {usrInfo.connectExpireTime}.</p>
      <p>Allow {usrInfo.connectMaxDeviceCount} mobiles, computers or browsers.</p>
      <CpQR content="https://www.keillion.site"/>
    </div>);
  }
});
</script>
