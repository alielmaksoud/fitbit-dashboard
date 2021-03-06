import moment from 'moment-immutable'
import numeral from 'numeral'

import { roundOff } from '../helpers/numbers'
import { humanReadablePace } from '../helpers/datetime'

import { PACE_THRESHOLD } from '../constants'

export function parseActivities (activities = []) {
  activities = activities
    .filter(a => a.pace < PACE_THRESHOLD)
    .map(a => {
      a.timestamp = moment(a.startTime).format('MM-DD-YYYY, h:mm a')
      a.minutePace = (a.pace / 60).toFixed(2)
      return a
    })

  const paces = activities.map(a => a.pace)

  const totalPace = paces.reduce((total, pace) => total += pace, 0)
  const distances = activities.map(a => a.distance)

  const maxDistance = Math.ceil(Math.max.apply(null, distances) + 1)
  const minDistance = Math.floor(Math.min.apply(null, distances) - 1)

  const maxPace = Math.ceil(Math.max.apply(null, paces) / 60)
  const minPace = Math.floor(Math.min.apply(null, paces) / 60)

  let heartRates = activities
    .map(a => a.averageHeartRate)
    .reduce((total, hr) => total += hr, 0)
  const distance = activities
    .reduce((total, { distance = 0, pace }) => {
      if (pace < PACE_THRESHOLD) total += distance
      return total
    }, 0)
  const steps = activities
    .reduce((total, { steps = 0 }) => {
      return total += steps
    }, 0)

  const averagePaceDec = totalPace / activities.length
  const averagePace = humanReadablePace(averagePaceDec)
  const averageHeartRate = Math.floor(heartRates / activities.length)
  return {
    activities,
    averagePace,
    averagePaceDec,
    averageHeartRate,
    maxDistance,
    minDistance,
    maxPace,
    minPace,
    steps: numeral(steps).format('0,0'),
    distance: roundOff(distance),
  }
}
