import { defineComponent, ref } from 'vue'

const Header = () => {
  const dom = ref<HTMLElement>()
  const text = ref('ws')
  return () => (
    <>
      <div ref={dom}>
        我是head
        {text.value}
      </div>
    </>
  )
}
export default defineComponent(Header)
