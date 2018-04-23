'use strict'

class LocaleDetector {
  async handle ({ request, antl }, next) {
    antl.switchLocale(request.input('lang', 'en'))
    await next()
  }
}

module.exports = LocaleDetector
