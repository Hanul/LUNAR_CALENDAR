# `LUNAR_CALENDAR()` `LUNAR_CALENDAR(date)`
양력 날짜를 음력으로 변환하는 `LUNAR_CALENDAR` 클래스입니다. `date` 파라미터를 입력하지 않으면, 현재 시각을 기준으로 생성합니다.

`LUNAR_CALENDAR` 클래스는 양력 날짜를 음력으로 변환하는 동시에, `getMonth`, `getDate`, `getHour`, `getMinute`, `getSecond` 함수에 파라미터로 `true`를 지정하면, `'0N'`과 같은 형식의 문자열을 반환합니다. (9월인 경우 `'09'`) 이는 `2016-09-02`과 같은 날짜 형태를 만들 때 유용하게 사용할 수 있습니다.

```javascript
var
// calendar - 2017년 1월 5일인 경우
lunarCal = LUNAR_CALENDAR();

lunarCal.getYear(); // 2016

lunarCal.getMonth(); // 12
lunarCal.getMonth(true); // '12'

lunarCal.getDate(); // 8
lunarCal.getDate(true); // '08'
```