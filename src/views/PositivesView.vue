<template>
  <div class="positives">
    <CompaniesList :companies="companies.filter(company => company.upvoted)" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CompaniesList from '@/components/CompaniesList.vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'PositivesView',
  components: {
    CompaniesList,
  },
  computed: {
    ...mapGetters(['companies']),
  },
})
</script>
