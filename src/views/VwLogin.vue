<script lang="tsx">
import { defineComponent, reactive } from 'vue';
import { Form, Input, Button, Divider } from 'ant-design-vue';
import { fetchLogin } from '@/util';
import { ArrowLeftOutlined, UserOutlined, LockOutlined, WechatOutlined, AlipayCircleOutlined, WhatsAppOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  setup(props, context){
    const formState = reactive({
      user: '',
      password: '',
    });
    const onLogin = async()=>{
      await fetchLogin({type:'usrpwd',identifier:formState.user,token:formState.password});
      // todo: back to orgianl page
    };
    return ()=>(<div>
      <div class="login-title">
        <Button class="login-back" type="text" icon={<ArrowLeftOutlined/>}></Button>
        <h1>Sign in to Bakcn</h1>
      </div>
      <Form model={formState}>
        <Input v-model={[formState.user,'value']} prefix={<UserOutlined style="color: rgba(0, 0, 0, 0.25)" />} placeholder="Username"></Input>
        <Input.Password v-model={[formState.password,'value']} prefix={<LockOutlined style="color: rgba(0, 0, 0, 0.25)" />} placeholder="Password"></Input.Password>
        <div class="login-btn-group">
          <Button href="">Sign up</Button>
          <Button
            html-type="submit"
            disabled={'' === formState.user || '' === formState.password}
            onClick={onLogin}
          >Sign in</Button>
        </div>
        <Button type="link" class="login-forget-password" href="">Forget Password</Button>
      </Form>
      <Divider style="padding:0 20%">Use 3rd Account</Divider>
      <div class="_3rd-account-group">
        <Button shape="circle" icon={<WechatOutlined/>}></Button>
        <Button shape="circle" icon={<AlipayCircleOutlined/>}></Button>
        <Button shape="circle" icon={<WhatsAppOutlined/>}></Button>
      </div>
    </div>);
  }
});
</script>

<style lang="scss" scoped>
.login-title{
  position: relative;
  text-align: center;
  .login-back{
    position: absolute;
    left: 0;
    top: 0;
  }
  .login-forget-password{
    position: absolute;
    right: 0;
    top: 0;
  }
}
.login-btn-group{
  display: flex;
  justify-content:space-around;
  padding: 0 8%;
  .ant-btn{
    width: 45%;
  }
}
._3rd-account-group{
  display: flex;
  justify-content: center;
}
</style>
