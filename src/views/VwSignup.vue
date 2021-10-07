<script lang="tsx">
import { defineComponent, reactive, ref } from 'vue';
import { Form, Input, Button, message } from 'ant-design-vue';
import { fetchNotNeedLogin } from '@/util';
import Cookies from 'js-cookie';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  setup(props, context){
    const formRef = ref<typeof Form>();
    const formState = reactive({
      name: '',
      password: '',
      confirm: '',
    });
    const rules = {
      name: [{ required: true, trigger: 'change', validator: async(_:any,value:string)=>{
        if(!value.length) {
          return Promise.reject('Please input the Username');
        }
        // todo: check through network
        return Promise.resolve();
      } }],
      password: [{ required: true, trigger: 'change', validator: async(_:any,value:string)=>{
        if(value.length < 6 || value.length > 8){
          return Promise.reject("The length of password should between 6 to 64.");
        }else if(formState.confirm.length){
          (formRef.value as any).validateFields('confirm');
        }
        return Promise.resolve();
      } }],
      confirm: [{ required: true, trigger: 'change', validator: async(_:any,value:string)=>{
        if(value !== formState.password){
          return Promise.reject("Two password don't match!");
        }
        return Promise.resolve();
      } }],
    };
    const onSignUp = async()=>{
      // todo: verify formState
      const rep = await fetchNotNeedLogin('signup/createusr',{method:"POST",headers:{'Content-Type':"application/json"},body:JSON.stringify({type:'usrpwd',name:formState.name,token:formState.password})});
      const tkUsr = await rep.text();
      Cookies.set('TkUsr', tkUsr);
      // todo: redirect to new login usr welcome page
    };
    return ()=>(<div>
      <div class="signup-title">
        <Button class="signup-back" type="text" icon={<ArrowLeftOutlined/>}></Button>
        <h1>Sign up Bakcn</h1>
      </div>
      <Form model={formState} rules={rules} ref={formRef}>
        <Form.Item label="Username:" has-feedback>
          <Input v-model={[formState.name,'value']}></Input>
        </Form.Item>
        <Form.Item label="Password:" has-feedback>
          <Input.Password v-model={[formState.password,'value']}></Input.Password>
        </Form.Item>
        <Form.Item label="Confirm:" has-feedback>
          <Input.Password v-model={[formState.confirm,'value']}></Input.Password>
        </Form.Item>
        <Button 
          onClick={onSignUp}
        >Sign up</Button>
      </Form>
    </div>);
  }
});
</script>

<style lang="scss" scoped>
.signup-title{
  position: relative;
  text-align: center;
  .signup-back{
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
