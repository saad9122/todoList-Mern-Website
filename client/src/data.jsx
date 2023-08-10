const dates = function() {
    const datesArray = []
    for(let i = 1; i<32; i++){
        datesArray.push(i)
    }
    return datesArray
}

const year = () => {

    const currentYear = new Date(Date.now()).getFullYear()  
    const years = []

    for(let i = 1900; i<currentYear; i++){

        years.push(i)
    }
    return years
}

export const totalDays = dates()
export const totalYears = year().reverse()
export const totalMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export const totalHours = [0,1,2,3,4,5,6,7,8,9,10,11,12]


const minutes = () => {
    const minutesArray = []
    for (let i=0; i<60; i++) {

        minutesArray.push(i)

    }

    return minutesArray
}

export const totalMinutes = minutes()

export const totalMeridiem = ["AM","PM"]

export const totalYearsTodos = [2023,2024,2025]

export const projectNames = ['Home','School','Work']

export const Todos = [
    {
        name: 'First Task ',
        desc:'This is some detail of project',
        status:'Completed',
        dueDate: '2-july-2023', 
        createdAt: '30-jun-23',
        userId:'01'
    },
    {
        name: 'Second Task',
        desc:'This is some detail of project',
        status:'Pending',
        dueDate: '2-july-2023', 
        createdAt: '26-jun-23',
        userId:'01'

    },
    {
        name: 'Third Task',
        desc:'This is some detail of project',
        status:'Completed',
        dueDate: '2-july-2023', 
        createdAt: '25-jun-23',
        userId:'01'

    }
]

export const API_URL = 'http://localhost:5000' 
