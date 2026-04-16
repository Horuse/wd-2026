import { defineStore } from 'pinia'

export interface PlanFeature {
  text: string
  sub?: string
}

export interface SubscriptionPlan {
  id: string
  name: string
  price: number
  yearlyPrice: number
  yearlyOriginal: number
  savings: number
  features: PlanFeature[]
}

export const useSubscriptionStore = defineStore('subscription', () => {
  const selectedPlan = ref<SubscriptionPlan | null>(null)

  const hasSelection = computed(() => selectedPlan.value !== null)
  const selectedPlanId = computed(() => selectedPlan.value?.id ?? null)

  function selectPlan(plan: SubscriptionPlan) {
    selectedPlan.value = plan
  }

  function clearPlan() {
    selectedPlan.value = null
  }

  return {
    selectedPlan,
    hasSelection,
    selectedPlanId,
    selectPlan,
    clearPlan
  }
})
