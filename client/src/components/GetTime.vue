<template>
  <div id="timeWrapper">
    <p id="time" v-html="time"></p>
    <button id="getTime" v-on:click="get">Get the time</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    get: function (){
      const axios = require('axios');
      const request_url = process.env.VUE_APP_SERVER_URL;

      axios.get(request_url)
          .then(response => this.time = response.data.time)
    }
  },
  data () {
    return {
      time: 'Click on button to get the time'
    }
  },
}

</script>