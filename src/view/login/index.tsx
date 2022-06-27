import { ElButton } from 'element-plus'
import { defineComponent } from 'vue'

const Login = defineComponent(
  () => () => (
      <>
        <span class={'font-bold'} >登录界面</span>
        <div class='login flex w-full h-screen justify-center items-center'>
          <div class={'bg-red-100 w-60 h-60 shadow-zinc-700 shadow-2xl'}>
            <input placeholder='账户' />
            <input class={'border-double border hover:shadow-lg'} placeholder='密码' />
            <ElButton color='red'>提交</ElButton>
          </div>
        </div>
      </>
  ))
Login.name = 'Login'
Login.props = []

export default Login
