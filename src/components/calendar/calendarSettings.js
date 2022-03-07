import dayGridPlugin from '@fullcalendar/daygrid'

export const settings = {
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  weekends: true,
  locale: 'ru',
  selectable: true,
  firstDay: 1,
  headerToolbar: {
    left: 'prev,title,next today',
    center: '',
    right: '',
  },
}
