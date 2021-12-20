<template>
  <div>
    <h1>{{ msg }}</h1>
    <tabs>
      <tab name="Q&A" :selected="true">
        <QABySubjects></QABySubjects>
      </tab>
      <tab name="Shopping">
        <h1>Shopping list</h1>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tabs from './Tabs.vue'
import Tab from './Tab.vue'
import QABySubjects from './QABySubjects.vue'

export default {
  name: 'HelloWorld',
    components: {
    Tabs, Tab, QABySubjects
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
