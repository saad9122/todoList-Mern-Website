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
export const totalMonths = ['Jan','Feb','Mar','Apr','May','Jun','july','Aug','Sep','Oct','Nov','Dec']

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