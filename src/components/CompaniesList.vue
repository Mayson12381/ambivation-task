<template>
  <div class="companies-list">
    <div
      v-for="(company, index) in companies"
      :key="index"
      class="card"
      :class="{
        'card--upvoted': company.upvoted,
        'card--downvoted': !company.upvoted && typeof company.upvoted !== 'undefined',
      }"
    >
      <div class="card--title">
        {{ company.name }}
      </div>
      <div
        class="card--icons"
        :class="{ upvoted: company.upvoted, downvoted: company.downvoted }"
      >
        <div class="icon" @click="onVoteCompany(true, company.id)">
          <CheckIcon />
        </div>
        <div class="icon" @click="onVoteCompany(false, company.id)">
          <CloseIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Company } from '@/types'
import CheckIcon from '@/assets/icons/CheckIcon.vue'
import CloseIcon from '@/assets/icons/CloseIcon.vue'

export default Vue.extend({
  name: 'CompaniesList',
  components: {
    CheckIcon,
    CloseIcon,
  },
  props: {
    companies: {
      type: Array as PropType<Array<Company>>,
      required: true,
    },
  },
  methods: {
    onVoteCompany(value: boolean, id: number): void {
      this.$store.commit('updateCompanyVote', { id: id, value: value })
    },
  },
})
</script>

<style lang="scss" scoped>
.companies-list {
  margin-top: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  .card {
    border-radius: 5px;
    background-color: white;
    border: solid 1px rgb(220, 220, 220);
    color: black;
    padding: 1rem;
    height: 4rem;

    &--upvoted {
      background-color: lightgreen;
    }
    &--downvoted {
      background-color: lightcoral;
    }

    &--icons {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        cursor: pointer;
        background-color: rgb(232, 232, 232);
        height: 35px;
        width: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          width: 25px;
          fill: green;
        }
        &:last-of-type {
          margin-left: 1rem;
          svg {
            fill: red;
          }
        }
        &:hover {
          background-color: lightgray;
        }
      }
    }
  }
}
</style>
