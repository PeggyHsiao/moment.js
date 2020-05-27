# moment.js
JavaScript處理時間日期的函式庫，例如：驗證時間、查詢、轉換格式...。  

## 安裝
### CDN
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/moment.min.js"></script>

<script>
    moment().format();
</script>
```
### npm
```
npm install moment
```
```
// index.js

var moment = require('moment');
moment().format();
```
## Timestamp轉換時間格式
顯示當下Timestamp (單位:毫秒)。
```
moment().valueOf();    // 1589941824641
moment().format('x');  // 1589941824641
```
Timestamp轉換自訂的時間格式，在`.format()`放入想要呈現的時間格式。
```
moment(1589941824641).format('YYYY-MM-DD, hh:mm:ss');  // 2020-05-20, 10:30:24
```

## 驗證時間是否有效
在**陣列**中放入要驗證的年月日是否為有效日期，寫法為`moment([年, 月, 日])`。其中**月份的範圍為0-11**。
```
moment([2020,15,07]).format('YYYY-MM-DD');  // Invalid date
moment([2020, 5, 7]).format('YYYY-MM-DD');  // 2020-06-07
```
`format()`顯示格式的設定，如果沒有寫輸出結果會為`Moment<2020-06-07T00:00:00+08:00>`。

## 日期運算
也可以找出最大/最小的日期，或者對日期做增減計算。
### 找出最大的日期 (.max)
找出最大日期並非我們認知的"年份越早越大"，而是**距離現在最近的日期**為最大。
```
let classmates = [
    { name: 'Tommy', birthday: '1995-11-26' },
    { name: 'Alen', birthday: '1996-03-18' },
    { name: 'Joanne', birthday: '1992-05-04' }
]

let classmatesBirthday = classmates.map(function(classmate){
    return moment(classmate.birthday);
})

console.log(moment.max(classmatesBirthday).format('YYYY-MM-DD'));  // 1996-03-18
```
### 找出最小的日期 (.min)
反之，找出最小日期就是**距離現在最遠的日期**。
```
console.log(moment.min(classmatesBirthday).format('YYYY-MM-DD'));  // 1992-05-04
```
### 日期計算
現在日期加n天。
```
moment().add(35,'day').format('YYYY-MM-DD');  // 2020-06-24
```
在指定日期後加n年。
```
moment([2020,2,7]).add(3,'year').format('YYYY-MM-DD');  // 2023-03-07
```

## 顯示格式
除了常用的`YYYY-MM-DD`之外，還可以自訂其他的格式。  

### 年
`YY`顯示西元年後兩位數，`moment()`沒指定代表當下的年份。
```
moment().format('YY');  // 20
moment([2025,1,8]).format('YY');  // 25
```

### 月
`MMMM`顯示全英文月份。
```
moment().format('MMMM');  // May
```

### 日
`DDDD`顯示現在/指定日期是那一年的第幾天。
```
moment().format('DDDD');  // 141
moment([2025,0,2]).format('DDDD');  // 002
```

### 時間
`hA`換算為12小時制，顯示AM或PM。
```
moment().format('hA');  // 當下時間->12PM
moment([20,8,1,22,0,0]).format('hA');  // 2020-09-01的22:00->10PM
```

## 計算相對時間
### formNow()
計算指定時間距離現在多久。
```
moment([2025,2,17]).fromNow();  // in 5 years
moment('19960307').fromNow();   // 24 years age

moment().startOf('day').fromNow();    // 13 hours ago
moment().startOf('year').fromNow();   // 5 months ago
moment().startOf('month').fromNow();  // 20 days ago
```
### from(), to()
計算兩個時間差。
```
let a = moment([2020,2,7]);
let b = moment([2020,4,20]);

console.log(a.from(b));  // 2 months ago
console.log(a.to(b));    // in 2 months
```

## 查詢時間
### isBefore()
檢查是否比`isBefore()`括弧內的時間早。如果加上`year`的參數，比較的基準就會變成以"年"計算。跟指定日期一樣也回傳`false`。
```
moment([1989,0,8]).isBefore([1996,2,7]);  // true
moment([2020,4,20]).isBefore([2020,4,20]);  // false

moment([2020,0,20]).isBefore([2020,4,20],'year');  // false
moment([2020,0,20]).isBefore([2022,4,20],'year');  // true
```
### isAfter()
檢查是否比`isAfter()`括弧內的時間晚。如果加上`year`的參數，比較的基準就會變成以"年"計算。跟指定日期一樣也回傳`false`。
```
moment([2020,11,20]).isAfter([2020,4,20]); // true
moment([2020,4,20]).isAfter([2020,4,20]);  // false

moment([2020,0,20]).isAfter([2000,4,20],'year');  // true
moment([2020,0,20]).isAfter([2022,4,20],'year');  // false
```
### isSame()
檢查兩個時間年份/月份是否相等。
```
moment([2020,0,20]).isSame([2020,4,20],'month');  // false
moment([2020,0,20]).isSame([2020,4,20],'year');   // true
```
### isBetween()
檢查是否在`isBetween()`括號中指定的兩個日期之間。跟指定日期一樣也回傳`false`。
```
moment([2020,4,20]).isBetween([2020,0,20],[2020,11,20]);  // true
moment([2020,0,20]).isBetween([2020,0,20],[2020,11,20]);  // false
```