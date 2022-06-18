import { defineComponent, KeepAlive, ref } from 'vue'
import Footer from '@/layout/footer'
import Head from '@/layout/head'

const main = defineComponent(
  () => {
    const flag = ref(true)
    let count = 0
    const fan = () => { flag.value = !flag.value }
    return () => (
      <>
        {count++}
        <div>
          <KeepAlive>
            {
              flag.value
                ? <Footer foo='w' bar={2} />
                : <Head />
            }
          </KeepAlive>
        </div>
        <button onClick={fan}></button>
      </>
    )
  }
)
main.name = 'Main'

export default main
