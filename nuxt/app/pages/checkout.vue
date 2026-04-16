<script setup lang="ts">
	import type { SubscriptionPlan } from '~/stores/useSubscriptionStore';

	useHead({ title: 'Оплата підписки' });

	const { data: plans } = await useFetch<SubscriptionPlan[]>('/api/plans');

	const subscriptionStore = useSubscriptionStore();
	const { selectedPlan: storedPlan } = storeToRefs(subscriptionStore);

	const selectedPlanId = ref(storedPlan.value?.id ?? 'team');

	const selectedPlan = computed(
		() => plans.value?.find((p) => p.id === selectedPlanId.value) ?? plans.value?.[1]
	);

	watch(selectedPlan, (plan) => {
		if (plan) subscriptionStore.selectPlan(plan);
	}, { immediate: true });

	const form = reactive({
		cardNumber: '',
		cardExpiry: '',
		cardCvc: '',
		fullName: '',
		address: '',
		consent: false
	});

	const loading = ref(false);
	const submitted = ref(false);

	async function submit() {
		if (!form.consent) return;
		loading.value = true;
		await $fetch('/api/subscription/create', {
			method: 'POST',
			body: {
				plan: selectedPlan.value?.id,
				...form
			}
		});
		loading.value = false;
		submitted.value = true;
	}
</script>

<template>
	<UPageSection title="Оплата підписки">
		<NuxtLink
			to="/products"
			class="text-sm text-neutral-500 hover:text-neutral-700 mb-4 inline-flex items-center gap-1"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-4 h-4"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="11 17 6 12 11 7" />
				<polyline points="18 17 13 12 18 7" />
			</svg>
			назад
		</NuxtLink>

		<h1 class="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
			Майже готово — розпочніть 3-денний безкоштовний пробний період!
		</h1>
		<p class="text-sm text-neutral-500 mb-6">
			Налаштуйте свій обліковий запис для миттєвого доступу! З вас не знімуть кошти, якщо
			скасуєте протягом 3 днів.
		</p>

		<div
			v-if="submitted"
			class="rounded-xl border border-green-300 bg-green-50 p-8 text-center text-green-700 font-semibold text-lg flex items-center justify-center gap-2"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-6 h-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="20 6 9 17 4 12" />
			</svg>
			Підписку успішно оформлено!
		</div>

		<div v-else-if="selectedPlan" class="flex flex-col md:flex-row gap-6">
			<div
				class="w-full md:w-72 shrink-0 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-sm"
			>
				<div
					class="h-1.5 w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-400"
				/>
				<div class="p-6">
					<div class="flex gap-2 mb-4 flex-wrap">
						<button
							v-for="plan in plans"
							:key="plan.id"
							class="text-xs px-3 py-1 rounded-full border transition-colors"
							:class="
								selectedPlanId === plan.id
									? 'bg-neutral-800 text-white border-neutral-800'
									: 'border-neutral-300 text-neutral-500 hover:border-neutral-500'
							"
							@click="selectedPlanId = plan.id"
						>
							{{ plan.id.charAt(0).toUpperCase() + plan.id.slice(1) }}
						</button>
					</div>

					<h2 class="text-lg font-bold text-neutral-900 dark:text-white mb-2">
						{{ selectedPlan.name }}
					</h2>
					<span
						class="inline-block text-xs text-neutral-600 font-bold bg-neutral-100 dark:bg-neutral-800 rounded-sm px-2 py-0.5 mb-2"
						>3 дні безкоштовно, потім:</span
					>
					<div class="flex items-end gap-1 mb-1">
						<span class="text-3xl font-extrabold text-neutral-900 dark:text-white"
							>${{ selectedPlan.price }}</span
						>
						<span class="text-neutral-500 text-xs mb-1">/місяць</span>
					</div>
					<p class="text-xs text-neutral-400 mb-2">
						щорічна оплата
						<s class="text-neutral-400"
							>${{ selectedPlan.yearlyOriginal.toLocaleString() }}</s
						>
						<b class="text-neutral-600 dark:text-neutral-300">
							${{ selectedPlan.yearlyPrice.toLocaleString() }}</b
						>
					</p>
					<span
						class="inline-block text-xs font-bold bg-blue-100 text-blue-600 rounded px-2 py-0.5 mb-4"
					>
						економія ${{ selectedPlan.savings.toLocaleString() }}
					</span>

					<ul class="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
						<li v-for="(feat, i) in selectedPlan.features" :key="i" class="flex gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									d="M12 2 L13.5 9 L20 10 L13.5 12 L12 22 L10.5 12 L4 10 L10.5 9 Z"
								/>
								<path
									d="M19 3 L19.6 5.4 L22 6 L19.6 6.6 L19 9 L18.4 6.6 L16 6 L18.4 5.4 Z"
								/>
							</svg>
							<div>
								<span class="font-semibold">{{ feat.text }}</span>
								<br v-if="feat.sub" />
								<span v-if="feat.sub" class="text-neutral-400"
									>({{ feat.sub }})</span
								>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<div
				class="flex-1 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm p-6"
			>
				<h3 class="text-base font-bold text-neutral-900 dark:text-white mb-4">
					Підсумок замовлення
				</h3>
				<div class="space-y-3 text-sm mb-4">
					<div class="flex justify-between text-neutral-700 dark:text-neutral-300">
						<span>Річний план</span>
						<span>${{ selectedPlan.yearlyPrice.toLocaleString() }}.00</span>
					</div>
					<div
						class="flex justify-between text-neutral-500 text-xs border-t border-neutral-100 dark:border-neutral-700 pt-2"
					>
						<span
							>Всього до сплати
							<span class="text-neutral-400">(*без урахування податків)</span></span
						>
						<span>${{ selectedPlan.yearlyPrice.toLocaleString() }}.00</span>
					</div>
					<div
						class="flex justify-between font-bold text-neutral-900 dark:text-white border-t border-neutral-100 dark:border-neutral-700 pt-2"
					>
						<span>До сплати сьогодні</span>
						<span>$0.00</span>
					</div>
				</div>

				<div
					class="rounded border border-neutral-200 dark:border-neutral-700 text-center text-sm text-neutral-500 py-2 mb-6"
				>
					Включає 3-денний безкоштовний пробний період
				</div>

				<h3 class="text-base font-bold text-neutral-900 dark:text-white mb-4">
					Платіжна інформація
				</h3>

				<form class="space-y-4" @submit.prevent="submit">
					<div>
						<label class="block text-xs text-neutral-500 mb-1">Дані картки</label>
						<div class="grid grid-cols-3 gap-2">
							<input
								v-model="form.cardNumber"
								type="text"
								placeholder="Номер"
								class="col-span-1 border border-neutral-300 dark:border-neutral-600 rounded px-3 py-2 text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-500"
							/>
							<input
								v-model="form.cardExpiry"
								type="text"
								placeholder="ММ / РР"
								class="border border-neutral-300 dark:border-neutral-600 rounded px-3 py-2 text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-500"
							/>
							<input
								v-model="form.cardCvc"
								type="text"
								placeholder="CVC"
								class="border border-neutral-300 dark:border-neutral-600 rounded px-3 py-2 text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-500"
							/>
						</div>
					</div>

					<div>
						<label class="block text-xs text-neutral-500 mb-1">Адреса</label>
						<div
							class="border border-neutral-300 dark:border-neutral-600 rounded overflow-hidden"
						>
							<input
								v-model="form.fullName"
								type="text"
								placeholder="Повне ім'я"
								class="w-full px-3 py-2 text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none border-b border-neutral-200 dark:border-neutral-700"
							/>
							<textarea
								v-model="form.address"
								placeholder="Адреса"
								rows="3"
								class="w-full px-3 py-2 text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none resize-none"
							/>
						</div>
					</div>

					<label class="flex gap-2 items-start text-xs text-neutral-500 cursor-pointer">
						<input v-model="form.consent" type="checkbox" class="mt-0.5 shrink-0" />
						<span>
							Я погоджуюсь з
							<b class="underline cursor-pointer">Умовами використання</b> і розумію,
							що мій 3-денний безкоштовний пробний період автоматично перетвориться на
							${{ selectedPlan.yearlyPrice.toLocaleString() }}.00 на рік, починаючи з
							04.02.2026. Щорічна оплата буде автоматично списана, якщо я не скасую
							підписку щонайменше за один (1) робочий день до кінця поточного
							розрахункового періоду за телефоном (888) 463-3163.
						</span>
					</label>

					<button
						type="submit"
						:disabled="!form.consent || loading"
						class="w-full py-2.5 rounded-lg text-sm font-bold transition-colors"
						:class="
							form.consent
								? 'bg-neutral-300 hover:bg-neutral-400 text-neutral-700 cursor-pointer'
								: 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
						"
					>
						{{ loading ? 'Обробка...' : 'Спробувати безкоштовно' }}
					</button>
				</form>
			</div>
		</div>
	</UPageSection>
</template>
