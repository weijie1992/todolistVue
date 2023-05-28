import { DateTime } from 'luxon'
import { Period } from './constants'

export const dayToDate: Record<Period, string | null> = {
  Today: DateTime.local().toISODate(),
  Tommorrow: DateTime.local().plus({ days: 1 }).toISODate(),
  'This Week': DateTime.local().plus({ days: 7 }).toISODate()
}
export const dateToDay: Record<string, Period> = {
  [DateTime.local().toISODate() as string]: 'Today',
  [DateTime.local().plus({ days: 1 }).toISODate() as string]: 'Tommorrow',
  [DateTime.local().plus({ days: 7 }).toISODate() as string]: 'This Week'
}
