import Vue from 'vue'
import App from './App.vue'
// import deleteQuestion from './services/deleteQuestion'
// import editQuestion from './services/editQuestion'
// import getAllDocuments from './services/getAllQuestions'
// import getQuestionByCategory from './services/getQuestionByCategory'
// import writeNewQuestion from './services/addQuestion.js'
// import { writeSomehing } from './services/dbInit'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// writeNewQuestion('', 'hello?', 'hi!')
// getQuestionByCategory('a')
// getAllDocuments().then(res => {
//   console.log(res)
// })
// editQuestion('FAQ', {question: 'tipalti?123'})
// deleteQuestion('FAQ')
