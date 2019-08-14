const DEFAULT_DATE_DISPLAY_FORMAT = 'MMM-DD-YYYY'

module.exports = {
  DEFAULT_DATE_DISPLAY_FORMAT,

  format(date, inUserLocale) {
    if (inUserLocale == null) {
      inUserLocale = false
    }
    const dateObject = this.getMomentObject(date, inUserLocale)
    return dateObject.format(DEFAULT_DATE_DISPLAY_FORMAT)
  },

  formatDateAndTime(date, {inUserLocale = false, withSeconds = true, customFormat = false} = {}) {
    if (!date) {
      return 'N/A'
    }
    const dateObject = this.getMomentObject(date, inUserLocale)
    let format = `${DEFAULT_DATE_DISPLAY_FORMAT} hh:mm${withSeconds ? ':ss' : ''}`
    if (customFormat) {
      format = customFormat
    }
    return dateObject.format(format)
  },

  formatDateAndTime24Hour(date, inUserLocale = false, withSeconds = true) {
    const customFormat = `${DEFAULT_DATE_DISPLAY_FORMAT} HH:mm${withSeconds ? ':ss' : ''}`
    return this.formatDateAndTime(date, {inUserLocale, customFormat})
  },

  formatDaysDiff(date, inUserLocale = false) {
    const dateObject = this.getMomentObject(date, inUserLocale)
    const now = this.getMomentObject(new Date(), inUserLocale).startOf('day')
    return dateObject.diff(now, 'days')
  },

  formatHoursMinutesDiff(startDate, endDate, inUserLocale = false) {
    const startDateObject = this.getMomentObject(startDate, inUserLocale)
    const endDateObject = this.getMomentObject(endDate, inUserLocale)

    const difference = endDateObject.diff(startDateObject)
    const duration = Moment.duration(difference)

    const hours = duration.asHours()
    const minutes = duration.minutes()
    const days = duration.asDays()

    if (hours <= 1 || days >= 1) {
      return duration.humanize()
    }

    const hoursLabel = Pluralize('hour', Math.floor(hours))
    const minutesLabel = Pluralize('minute', minutes)

    if (minutes === 0) {
      return `${Math.floor(hours)} ${hoursLabel}`
    }

    return `${Math.floor(hours)} ${hoursLabel} ${minutes} ${minutesLabel}`
  },

  formatIsoDate(date, inUserLocale = false) {
    const dateObject = this.getMomentObject(date, inUserLocale)
    return dateObject.format('YYYY-MM-DD')
  },

  formatTimeDifference(startDate, endDate) {
    const startDateObject = this.getMomentObject(startDate, false)
    const endDateObject = this.getMomentObject(endDate, false)
    const difference = endDateObject.diff(startDateObject)
    const formatted = Moment.utc(difference).format('HH:mm:ss')

    return formatted
  },

  formatTimeFirst(date, inUserLocale = false) {
    const dateObject = this.getMomentObject(date, inUserLocale)
    return dateObject.format(`hh:mm, ${DEFAULT_DATE_DISPLAY_FORMAT}`)
  },

  formatUtc(displayFormat) {
    return Moment.utc().format(displayFormat)
  },

  getDateWithFractional(date, inUserLocale = false) {
    return `${this.formatDateAndTime(date, {inUserLocale, customFormat: 'YYYY-MM-DDTHH:mm:ss.SSS'})}Z`
  },

  getHumanizedDuration(value, unit) {
    return Moment.duration(value, unit).humanize()
  },

  getMomentObject(date, inUserLocale = false) {
    if (inUserLocale) {
      return Moment(date)
    }
    return Moment.utc(date)
  },

  getOneYearMinusOneDay(startDate) {
    return +Moment(startDate)
      .add(1, 'years')
      .subtract(1, 'days')
  },

  getStartOfMonthTimeIsoString() {
    return Moment()
      .utc()
      .startOf('month')
      .toISOString()
  },

  getStartOfThisMonth() {
    return Moment.utc().format('YYYY-MM-01')
  },

  getStartOfThisYear() {
    // Returns ISO 8601 so that if the current month is January
    // the dropdown doesn't have value collisions
    return Moment()
      .utc()
      .startOf('year')
      .toISOString()
  },

  getStartOfThisYearTimeIsoString() {
    return Moment()
      .utc()
      .startOf('year')
      .toISOString()
  },

  getStartOfWeekTimeIsoString() {
    return Moment()
      .utc()
      .startOf('isoWeek')
      .toISOString()
  },

  getTimestamp(date, incomingFormat = 'YYYY-MM-DD') {
    return +Moment(date, incomingFormat).format('x')
  },

  getUnixTimestampDateOnly(unixTimestamp) {
    const date = Moment(unixTimestamp).format('YYYY-MM-DD')
    return Moment.utc(date, 'YYYY-MM-DD').valueOf()
  },

  getXDaysAgo(numberOfDays = 0) {
    return this.getMomentObject()
      .subtract(numberOfDays, 'd')
      .startOf('day')
  },

  getZeroPointTimeIsoString() {
    return Moment(0).toISOString()
  },

  hasDatePassed(date) {
    return Date.now() > new Date(date)
  },

  isAfter(start, end) {
    return Moment(start).isAfter(end)
  },
}
