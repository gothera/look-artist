const strings = {
  screen: {
    home: {
      editProgramBtn: 'Edit Program',
    },
  },
  modal: {
    appointmentDetails: {
      serviceLabel: 'Scheduled for',
      cancelAppointment: 'Cancel Appointment',
    },
    editProgram: {
      title: 'Edit Program',
      intro: 'Choose your availability',
      options: {
        defaultDays: 'Default Days',
        defaultDaysDesc: 'Set a schedule for week days',
        specificDays: 'Specific Days',
        specificDaysDesc: 'Schedule specific dates',
      },
    },
    editDefaultDays: {
      title: 'Edit Default Days',
      chooseDaysDescription: 'Choose days',
      chooseSchedule: 'Choose schedule',
      chooseScheduleDesc: 'Clients will see you available in this interval',
      startingHour: 'Starting Hour',
      endingHour: 'Ending Hour',
    },
    editSpecificDays: {
      title: 'Edit Specific Days',
      hoursError: 'Ending hour must be after staring hour',
    },
  },
  action: {
    clearAll: 'Clear All',
    addAppointment: 'Add Appointment',
  },
};

export default strings;
