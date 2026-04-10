export default defineEventHandler(() => {
  return [
    {
      id: 'starter',
      name: 'Starter - Annual',
      price: 83.25,
      yearlyPrice: 999,
      yearlyOriginal: 1188,
      savings: 189,
      features: [
        { text: 'Primary user only', sub: 'extra team members for $35/month' },
        { text: 'Save unlimited properties' },
        { text: '10,000 exports', sub: 'additional exports at $0.02 each' },
        { text: '500 free skip traces', sub: 'additional skip tracing at $0.08 each' },
        { text: 'Imports $0.01' },
        { text: 'FREE daily product trainings and support' },
        { text: 'Full suite of next-gen investing tools' },
        { text: 'Industry first AI powered comp tool' },
        { text: 'Includes dedicated support agent' }
      ]
    },
    {
      id: 'team',
      name: 'Team - Annual',
      price: 207.50,
      yearlyPrice: 2490,
      yearlyOriginal: 2988,
      savings: 498,
      features: [
        { text: 'Primary user + 2 free team members', sub: 'extra team members for $25/month' },
        { text: 'Save unlimited properties' },
        { text: '50,000 exports', sub: 'additional exports at $0.01 each' },
        { text: '1,000 free skip traces', sub: 'additional skip tracing at $0.08 each' },
        { text: 'Imports $0.01' },
        { text: 'FREE daily product trainings and support' },
        { text: 'Full suite of next-gen investing tools' },
        { text: 'Industry first AI powered comp tool' },
        { text: 'Includes dedicated support agent' }
      ]
    },
    {
      id: 'business',
      name: 'Business - Annual',
      price: 457.50,
      yearlyPrice: 5490,
      yearlyOriginal: 6588,
      savings: 1098,
      features: [
        { text: 'Primary user + 6 free team members', sub: 'extra team members for $20/month' },
        { text: 'Save unlimited properties' },
        { text: '100,000 exports', sub: 'additional exports at $0.01 each' },
        { text: '2,000 free skip traces', sub: 'additional skip tracing at $0.08 each' },
        { text: 'Imports $0.01' },
        { text: 'FREE daily product trainings and support' },
        { text: 'Full suite of next-gen investing tools' },
        { text: 'Industry first AI powered comp tool' },
        { text: 'Includes dedicated support agent' }
      ]
    }
  ]
})
