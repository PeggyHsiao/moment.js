var moment = require('moment');
moment().format();

console.log(moment().valueOf());  // 1589941824641
console.log(moment().format('x')); 

console.log(moment(1589941824641).format('YYYY-MM-DD, hh:mm:ss')); // 2020-05-20 10:30:24
console.log(moment([2020, 5, 7]));  // Invalid date
console.log(moment().add(1, 'day').format('YYYY-MM-DD'));


let classmates = [
    { name: 'Tommy', birthday: '1995-11-26' },
    { name: 'Alen', birthday: '1996-03-18' },
    { name: 'Joanne', birthday: '1992-05-04' }
]

let classmatesBirthday = classmates.map(function(classmate){
    return moment(classmate.birthday);
})

console.log(moment.max(classmatesBirthday).format('YYYY-MM-DD'));
console.log(moment.min(classmatesBirthday).format('YYYY-MM-DD'));

console.log(moment().add(35,'day').format('YYYY-MM-DD'));
console.log(moment([2020,2,7]).add(3,'year').format('YYYY-MM-DD'));

console.log(moment([2025,1,8]).format('YY'));
console.log(moment().format('MMMM'));
console.log(moment([2025,10,2]).format('DDDD'));

console.log(moment([20,8,1,22,0,0]).format('hA'));

console.log(moment().startOf('month').fromNow());

let a = moment([2020,2,7]);
let b = moment([2020,4,20]);

console.log(a.from(b));
console.log(a.to(b));

console.log(moment([2020,0,20]).isBefore([2050,4,20],'year'));
console.log(moment([2020,0,20]).isSame([2020,4,20],'month'));
console.log(moment([2020,0,20]).isAfter([2022,4,20],'year'));
console.log(moment([2020,0,20]).isBetween([2020,0,20],[2020,11,20]));