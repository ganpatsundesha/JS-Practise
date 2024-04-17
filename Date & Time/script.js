/* *************************  Date and Time Questions **********************************/

// 1. Write a function to get the current date in the format "YYYY-MM-DD".

const date = new Date()

function getDate() {
    console.log(date.toISOString().slice(0, 10));
}
// getDate()



// 2.  Write a function to get the current time in the format "HH:MM:SS".

function curTime() {
    const hour = date.getHours()
    const amPm = hour >= 12 ? 'PM' : "AM"
    const hours12 = hour % 12 || 12;
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `${String(hours12).padStart(2, "0")}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, "0")} ${amPm}`
}

// console.log(curTime());



// 3. Create a function that takes a date string in the format "YYYY-MM-DD" and returns the day of the week (e.g., Monday, Tuesday, etc.).

function takeDate(newDate) {
    const date = new Date(newDate).getDay()
    if (date === 0) {
        return "Sunday"
    }
}

// console.log(takeDate("2024-03-03"));

// 4. Create a function to calculate the difference in days between two given dates.

function diffDate(date1, date2) {
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    const diff = d2.getTime() - d1.getTime()
    return diff / (1000 * 3600 * 24)
}

// console.log(diffDate("3/12/2024", "3/15/2024"));