<template>
  <div class="negatives">
    <CompaniesList
      :companies="
        companies.filter(
          company => !company.upvoted && typeof company.upvoted !== 'undefined'
        )
      "
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CompaniesList from '@/components/CompaniesList.vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'NegativesView',
  components: {
    CompaniesList,
  },
  computed: {
    ...mapGetters(['companies']),
  },
})
</script>
