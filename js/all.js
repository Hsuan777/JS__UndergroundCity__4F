const list = document.querySelector('.list-group')
const clockCreate = () => {
  let str = ''
  let optionTime = {
    hour: '2-digit',   // (e.g., 02)
    minute: '2-digit', // (e.g., 02)          
    hour12: false,     // 24 小時制
  }
  let optionDate = {
    day: 'numeric',    // (e.g., 1)
    month: 'short',    // (e.g., Oct)
    year: 'numeric',   // (e.g., 2021)
  }
  const countries = [
    {country: 'New York', timeZone: 'America/New_York'},
    {country: 'London', timeZone: 'Europe/London'},
    {country: 'Bangkok', timeZone: 'Asia/Bangkok'},
    {country: 'Taiwan', timeZone: 'Asia/Taipei'},
    {country: 'Sydney', timeZone: 'Australia/Sydney'}
  ]
  const date = new Date()
  countries.forEach((item)=>{
    str += `
      <li class="list-group-item py-2 px-4">
        <div class="d-flex justify-content-between align-items-center">
          <p class="d-flex flex-column mb-0">
            <span class="h3 fw-bolder mb-0">${item.country}</span>
            <small class="fw-bolder"><em>${date.toLocaleString('en-US', {...item, ...optionDate})}</em></small>
          </p>
          <p class="h1 fw-bolder">${date.toLocaleString('en-US', {...item, ...optionTime})}</p>
        </div>
      </li>`
  })
  return str
}

const currentTime = () => {
  list.innerHTML = clockCreate()
  requestAnimationFrame(currentTime)
}

currentTime()

