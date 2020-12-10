<template>
  <div class="input-view">
    <div class="input-container">
      <div class="title">
        Enter company names to add, seperated by a comma
      </div>
      <input
        type="text"
        v-model="companiesString"
        @keyup.enter="onclickStart"
        placeholder="e.g. Facebook, Ambivation"
      />
      <button @click="onclickStart">Start</button>
    </div>
    <CompaniesList :companies="companies" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CompaniesList from '@/components/CompaniesList.vue'
import { mapGetters } from 'vuex'

interface Data {
  companiesString: string
}

export default Vue.extend({
  name: 'InputView',
  components: {
    CompaniesList,
  },
  computed: {
    ...mapGetters(['companies']),
  },
  data(): Data {
    return {
      companiesString: '',
    }
  },
  methods: {
    onclickStart(): void {
      if (this.companiesString) {
        this.$store.commit('addCompanies', this.companiesString.split(','))
        this.companiesString = ''
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.input-view {
  padding: 2rem;
  .input-container {
    background-color: white;
    padding: 1rem 0;
    border-radius: 5px;
    border: solid 1px rgb(220, 220, 220);

    .title {
      padding-bottom: 1rem;
    }

    input {
      flex-grow: 1;
      padding: 0.5rem;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
    }
    button {
      padding: 0.5rem;
      margin-left: 1rem;
      border-radius: 5px;
      background-color: white;
      font-size: 1rem;
    }
  }
}
</style>
