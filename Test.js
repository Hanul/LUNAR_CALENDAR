require(process.env.UPPERCASE_PATH + '/UPPERCASE-CORE/COMMON.js');

require('./LUNAR_CALENDAR/COMMON/LUNAR_CALENDAR.js');

var
// cal
cal = LUNAR_CALENDAR();

console.log(cal.getYear());
console.log(cal.getMonth());
console.log(cal.getDate());
