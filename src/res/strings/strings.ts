const strings = {
  screen: {
    home: {
      editProgramBtn: 'Edit Program',
    },
    setup: {
      information: {
        title: 'About you',
        description: 'Configure your account',
        firstNameLabel: 'First Name',
        firstNamePlaceholder: 'Introduce First Name',
        lastNameLabel: 'Last Name',
        lastNamePlaceholder: 'Introduce Last Name',
        birthdayLabel: 'Birthday',
        birthdayPlaceholder: 'DD - Month - YYYY',
      },
      photo: {
        title: 'Profile picture',
        description: 'Select a picture for your profile',
      },
      category: {
        title: 'Category',
        description: 'Select artist category',
      },
      service: {
        title: 'First Service',
        description: 'Add your first service',
      },
    },
    profile: {
      tabs: {
        gallery: 'Gallery',
        services: 'Services',
        reviews: 'Reviews',
      },
      metrics: {
        rate: 'Rate',
        likes: 'Likes',
        appointments: 'Appointments',
      },
    },
  },
  modal: {
    appointmentDetails: {
      serviceLabel: 'Scheduled for',
      cancelAppointment: 'Cancel Appointment',
    },
    editProfile: {
      title: 'Edit Profile',
    },
    editProgram: {
      title: 'Edit Program',
      intro: 'Choose your availability',
      options: {
        defaultDays: 'Weekly Program',
        defaultDaysDesc: 'Set a schedule for week days',
        specificDays: 'Daily Program',
        specificDaysDesc: 'Schedule specific dates',
      },
    },
    editDefaultDays: {
      title: 'Edit Weekly Program',
      chooseDaysDescription: 'Choose days',
      chooseSchedule: 'Choose schedule',
      chooseScheduleDesc: 'Clients will see you available in this interval',
      startingHour: 'Starting Hour',
      endingHour: 'Ending Hour',
    },
    editSpecificDays: {
      title: 'Edit Daily Program',
      hoursError: 'Ending hour must be after starting hour',
    },
    addPost: {
      title: 'Add Post',
      description: 'Select multiple photos for your post',
    },
  },

  action: {
    clearAll: 'Clear All',
    addAppointment: 'Add Appointment',
    select: 'Select',
    next: 'Next',
    post: 'Post',
    save: 'Save',
    edit: 'Edit',
    logout: 'Logout',
  },
};

export default strings;
