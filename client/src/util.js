
import moment from 'moment'


export const formateDate = (date) => moment(date).format('DD-MMM-YYYY ,h:mm A')


export const getMeridiem = (date) => {

    const hours = date.getHours()
    if(hours <12) {
        return false
    } else{
        return true
    }
}

export const ChangeHourFormte = (date,string) => {

    let hours;

    if (string === "add") {

        hours = date.getHours() + 1

    }else {
        hours = date.getHours()
    }
    
    
    if(hours<13) {
        
        return hours
    }else{
        
        return hours -12
    }
}

export const MakeDate = (year,month,day,hours,minutes,meridiem) => {

    let formatedHours;

    if(meridiem) {
        formatedHours = hours+12
    }else {
        formatedHours = hours
    }

         let date = new Date(year,month,day,formatedHours,minutes)

    if (
        date.getFullYear() === year &&
        date.getMonth() === month &&    
        date.getDate() === day &&
        date.getHours() === formatedHours &&
        date.getMinutes() === minutes 
        ){

        return date; // Valid date
        } else {

        return null; // Invalid date

        }
}


export const dateValidator = (date) => {
    
    const currentDate = Date.now()
    const myDate = date.getTime(date)



    if (myDate<currentDate) {

        alert("Due date Cannot be previous dates")
        return false

    } else {

        return true
    }

}

export const getTimeRemaining = (dueDate) => {
    const now = new Date(); // Current date and time
    const due = new Date(dueDate); // Due date of the task
  
    const timeDifference = due - now; // Time difference in milliseconds
  
    // Calculate remaining days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  }


