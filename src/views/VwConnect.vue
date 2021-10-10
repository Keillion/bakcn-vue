<script lang="tsx">
import { defineComponent, inject, Ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router'
import CpQR from '@/components/CpQR.vue'

export default defineComponent({
  setup(props, context){
    const uid = inject("uid") as Ref<number>;
    const router = useRouter();
    watchEffect(()=>{
      if(!uid.value){
        router.push({path:'/login'});
      }
    })

    const usrInfo = inject("usrInfo") as any;
    
    return ()=>(<div>
      <p>The connection is available until {usrInfo.connectExpireTime}.</p>
      <p>Allow {usrInfo.connectMaxDeviceCount} mobiles, computers or browsers.</p>
      <CpQR content="https://www.keillion.site"/>
    </div>);
  }
});
</script>
