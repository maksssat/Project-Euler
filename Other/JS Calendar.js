function createCalendar(cal, year, month) {
    let calendar = document.createElement(`table`);
    let calendarHeader = document.createElement(`thead`);
    let calendarBody = document.createElement(`tbody`);
    calendar.append(calendarHeader, calendarBody);
  
    let weekDaysArr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    let calendarHeaderRow = document.createElement(`tr`);
  
    for (let i = 0; i < 7; i++) {
      let weekDayName = document.createElement(`th`);
      weekDayName.textContent = weekDaysArr[i];
      calendarHeaderRow.append(weekDayName);
    }
  
    calendarHeader.append(calendarHeaderRow);
  
    let monthToRender = new Date(year, month - 1);
    let lastDayOfMonth = new Date(year, month, 0).getDate();
    let firstWeekday = monthToRender.getDay();
    if (firstWeekday === 0) firstWeekday = 7;
    let monthDayArr = Array.from({ length: lastDayOfMonth }, (v, k) => k + 1);
  
    while (firstWeekday > 1) {
      monthDayArr.unshift(null);
      firstWeekday -= 1;
    }
  
    while (monthDayArr.length) {
      let weekRow = document.createElement(`tr`);
      let weekArr = monthDayArr.splice(0, 7);
      for (let i = 0; i < 7; i++) {
        let day = document.createElement(`td`);
        if (weekArr[i]) {
          day.append(weekArr[i]);
        }
        weekRow.append(day);
      }
      calendarBody.append(weekRow);
    }
  
    document.querySelector(`#${cal}`).append(calendar);
  }
  