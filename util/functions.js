function differenceTime(time1, time2) {
  let dateOfTime1 = time1
  let dateOfTime2 = time2

  if (typeof time1 === 'string' || typeof time1 === 'number') {
    dateOfTime1 = new Date(time1)
  }

  if (typeof time1 === 'string' || typeof time2 === 'number') {
    dateOfTime2 = new Date(time2)
  }

  if (!(dateOfTime1 instanceof Date && dateOfTime2 instanceof Date)) return false

  return dateOfTime1 - dateOfTime2
}

function millisecondsToSeconds(milliseconds) {
  return milliseconds / 1000
}

const createError = (message) => ({
  category: 'error',
  message,
  time: new Date()
})

/**
 * Создает сообщение о успехе
 * @param {String} message
 */
const createSuccess = (message) => ({
  category: 'success',
  message,
  time: new Date()
})

async function wait(f, ms) {
  if (typeof f === 'number') {
    ms = f
    f = () => {}
  }

  return new Promise((res) => {
    setTimeout(() => {
      f()
      res()
    }, ms)
  })
}

module.exports = {
  differenceTime,
  millisecondsToSeconds,
  createError,
  createSuccess,
  wait
}
