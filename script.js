const btn = document.querySelector(".btn")
let inputYear = document.getElementById('form_year_input')
let inputDay = document.getElementById('form_day_input')
let inputMonth = document.getElementById('form_month_input')
let outputYear = document.getElementById('age_years_num')
let outputMonth = document.getElementById('age_months_num')
let outputDay = document.getElementById('age_days_num')
let errorYear = document.querySelector('.year_error')
let errorMonth = document.querySelector('.month_error')
let errorDay = document.querySelector('.day_error')
let clrRed = document.querySelectorAll('.clrRed')
let bdrRed = document.querySelectorAll('.bdrRed')
let day = 0
let month = 0
let year = 0
let currentDate = new Date()
console.log(clrRed)
btn.addEventListener('click',() => {
  let inputDate = new Date(inputYear.value , inputMonth.value -1 ,inputDay.value)
  if (inputDate > currentDate || isNaN(inputDate) || inputDate.getMonth() + 1 != inputMonth.value || inputDate.getDate() != inputDay.value) {
    for(let i = 0;i < 3;i++)
    {
      clrRed[i].style.color = "hsl(0, 100%, 67%)"
      bdrRed[i].style.border = "2px solid hsl(0, 100%, 67%)"
    }
    errorDay.textContent = "Must be a valid Day"
    errorMonth.textContent = "Must be a valid Month"
    if(inputDate.getFullYear() > currentDate.getFullYear())
      errorYear.textContent = "Must be in the past"
    return;
  }
  else
  {
    console.log(inputDate)
    const differenceInMilliseconds = currentDate - inputDate;
    // Convert the difference to days, months, and years
    const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
    const differenceInDays = Math.floor(differenceInMilliseconds / oneDayInMilliseconds);
    const differenceInMonths = Math.floor(differenceInDays / 30.4375); // Average days in a month
    const differenceInYears = Math.floor(differenceInMonths / 12);

    // Calculate remaining months and days
    const remainingMonths = differenceInMonths % 12;
    const remainingDays = Math.ceil(differenceInDays % 30.4375); // Average days in a month

    // Display the result
    outputDay.textContent = remainingDays
    outputMonth.textContent = remainingMonths
    outputYear.textContent = differenceInYears
  }
})