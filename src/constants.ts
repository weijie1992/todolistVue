export const periods = ['Today', 'Tommorrow', 'This Week'] as const

export type Period = (typeof periods)[number]
