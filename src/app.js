import {CalendarService} from 'datepicker-alex-kit/dist/esm';
import './app.css';
import "@fontsource/open-sans";
export default function App() {
  return (
    <div className='wrapper'>
      <CalendarService 
        type="month"
        isShowWeekend
        startWeekFrom="Mo"
        min="15/09/2022"
        max="22/02/2025"
        isColorHolidays
        color="default"
        size="default"
        defaultRange
      />
      <CalendarService 
        type="week"
        isShowWeekend
        startWeekFrom="Mo"
        min="15/09/2022"
        max="22/02/2025"
        isColorHolidays
        color="primary"
        size="default"
        defaultRange
      />
      <CalendarService 
        type="month"
        isShowWeekend
        startWeekFrom="Su"
        min="15/09/2022"
        max="22/02/2025"
        isColorHolidays
        color="secondary"
        size="medium"
        defaultRange
      />
    </div>
  )
}
