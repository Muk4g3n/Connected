import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import '../pages/yacine/Cal.css';

const Cal = () => {
  const localizer = momentLocalizer(moment);

  const events = [
    {
      title: 'IT meeting',
      start: new Date(2023, 11, 1),
      end: new Date(2023, 11, 2),
      backgroundColor: 'red',
    },
    {
      title: 'HR meeting',
      start: new Date(2023, 11, 5),
      end: new Date(2023, 11, 7),
      backgroundColor: 'green',
    },
  ];

  const eventStyleGetter = (event, start, end, isSelected) => {
    return {
      style: {
        backgroundColor: event.backgroundColor,
        color: 'black',
      },
    };
  };

  return (
    <div style={{ height: '800px', width: '94%' }}>
      <h1 className='font-bold text-sg'>December, 2023 </h1>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']}
        onSelectEvent={(event) => console.log(event)}
        toolbar={false} // Disable the toolbar
        eventStyleGetter={eventStyleGetter}
      />
    </div>
  );
};

export default Cal;
