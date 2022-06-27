import './App.css'
import { RouterView } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return () => (
      <div class={'h-auto bg-gradient-to-r from-cyan-500 to-blue-500'}>
        <RouterView></RouterView>
      </div>
    )
  }
})
