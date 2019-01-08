<template>
  <div class="page">
    page is search
    <ul>
      <li
        v-for="(item,idx) in list"
        :key="idx"
      >{{item}}</li>
       <li
        v-for="(item,idx) in $store.state.city.list"
        :key="idx"
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'search',
  data() {
    return {
      list: ['广州']
    }
  },
  async asyncData() {
    let {status, data: {list}} = await axios.get('http://localhost:3000/city/list')
    if (status === 200) {
      return {list}
    }
  }
}
</script>
<style scpped>
</style>
