import './index.css'
import { defineComponent, ref } from 'vue'
import { ElButton } from 'element-plus'

type Props = {
  foo?: string,
  bar: number
}
const Footer = (props:Props) => {
  const bar = ref(props.bar)
  const foo = ref(props.foo)
  return () => (
    <>
      <div>
        我是footer
        父组件的参数是{bar.value}{foo.value}
        <ElButton onClick={() => { bar.value++ }}>点我改变参数</ElButton>
        <input v-model={foo.value}></input>
      </div>
    </>
  )
}
const FPcomponent = defineComponent(Footer)
FPcomponent.props = ['foo', 'bar']

export default FPcomponent
