<script lang="tsx">
import { defineComponent, ref, provide } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  setup: function(props, context){
    const user = ref("Keillion");
    provide("user", user);
    
    return ()=>(<>
      <RouterView style="height:92%;"/>
      <nav class="app-bottom-route">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/connect">Connect</RouterLink>
        <RouterLink to="/community">Community</RouterLink>
        <RouterLink to="/account">Account</RouterLink>
      </nav>
    </>);
  }
});
</script>

<style lang="scss">
html,body,#app{width:100%;height:100%;margin:0;padding:0;}
#app {
  font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //color: #2c3e50;
}
.app-bottom-route{
  height:8%;display:flex;justify-content:space-around;align-items:flex-end;box-sizing:border-box;border-top:1px solid #ccc;
  a{
    width:25%;height:100%;display:inline-block;text-align:center;
    &:hover{background:#eee;}
  }
}
</style>
