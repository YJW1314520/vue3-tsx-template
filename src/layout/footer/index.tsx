import { defineComponent, ref } from 'vue'
import { ElButton } from 'element-plus'
import './index.css'

const FPcomponent = defineComponent<
  {
    foo?: string,
    bar: number
  }
>(
  (props) => {
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
)
FPcomponent.props = ['foo', 'bar']
FPcomponent.name = 'Footer'

export default FPcomponent
