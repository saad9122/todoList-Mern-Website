
import { Dropdown } from '../common/Dropdown'
import { totalDays, totalMonths, totalYears } from '../../data'

export const Dob = ({selectedDate,selectedMonth,selectedYear,onDateChange,onMonthChange,onYearChange}) => {
  return (
    <div className='flex justify-between space-x-2'>

                    <div className='basis-1/3'>
                          <Dropdown data = {totalDays} handleChange = {onDateChange} currentValue={selectedDate}/>
                    </div>

                    <div className='basis-1/3'> 

                         <Dropdown data = {totalMonths} handleChange = {onMonthChange} currentValue={selectedMonth}/>

                    </div>

                    <div className='basis-1/3'>

                         <Dropdown data = {totalYears} handleChange = {onYearChange} currentValue={selectedYear}/>

                    </div>

                </div>
  )
}
