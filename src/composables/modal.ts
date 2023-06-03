import { ref, shallowRef } from 'vue'
import SignUp from '../components/Signup.vue'

const show = ref(false)
const component = shallowRef()

export const useModal = () => {
  return {
    show,
    component,
    showModal: (type: 'signUp' | 'signIn') => {
      show.value = true
      if (type === 'signUp') {
        component.value = SignUp
      }
    },
    hideModal: () => {
      show.value = false
    }
  }
}
