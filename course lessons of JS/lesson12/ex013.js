var now = new Date()
var dayWeek = now.getDay()
/* getDay will respond with a number below:
0 = Sunday
1 = Monday
2 = Tuesday
3 = Wednesday
4 = Thursday
5 = Friday
6 = Saturday
*/
dayWeek = 7
switch (dayWeek) {
    case 0:
        dayWeek = 'Sunday'
        break
    case 1:
        dayWeek = 'Monday'
        break
    case 2:
        dayWeek = 'Tuesday'
        break
    case 3:
        dayWeek = 'Wednesday'
        break
    case 4:
        dayWeek = 'Thursday'
        break
    case 5:
        dayWeek = 'Friday'
        break
    case 6:
        dayWeek = 'Saturday'
        break
    default:
        dayWeek= '[ERROR] Invalid date!'
        break
}

console.log(dayWeek)