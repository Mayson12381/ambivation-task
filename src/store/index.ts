import Vue from 'vue'
import Vuex from 'vuex'
import { Company } from '@/types'

Vue.use(Vuex)

interface State {
  companies: Array<Company>
}

export default new Vuex.Store({
  state: {
    companies: [],
  } as State,
  mutations: {
    addCompanies(state, companies: Array<string>) {
      const parsedCompanies = companies.map((company, index) => ({
        id: state.companies.length + index,
        name: company,
        upvoted: undefined,
      }))
      state.companies = state.companies.concat(parsedCompanies)
    },
    updateCompanyVote(state, payload) {
      const companyIndex: number = state.companies.findIndex(
        company => payload.id === company.id
      )
      const newCompaniesArray = [...state.companies]
      newCompaniesArray[companyIndex] = {
        ...newCompaniesArray[companyIndex],
        upvoted: payload.value,
      }
      state.companies = newCompaniesArray
    },
  },
  getters: {
    companies: state => {
      return state.companies
    },
  },
  actions: {},
  modules: {},
})
