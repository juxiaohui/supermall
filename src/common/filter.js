import Vue from 'vue'
import moment from 'moment'


Vue.filter('dateFormat', (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return moment.unix(dateStr).format(pattern);
})