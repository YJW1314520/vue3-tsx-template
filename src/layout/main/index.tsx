import { KeepAlive, defineComponent, ref } from 'vue'
import Footer from '@/layout/footer'
import Head from '@/layout/head'

const main = defineComponent(
  () => {
    let count = 0
    const flag = ref(true)
    const fan = () => {
      flag.value = !flag.value
    }
    return () => (
      <>
        {count++}
        <div>
          <KeepAlive>
            {
              flag.value
                ? <Footer foo={'w'} bar={2}></Footer>
                : <Head />
            }
          </KeepAlive>
        </div>
        <button onClick={fan}>切换组件</button>
      </>
    )
  }
)
main.name = 'Main'

export default main
