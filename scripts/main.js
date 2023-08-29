jQuery(document).ready(function($) {
  // header
  const header = $("#header"); // Use jQuery selector
  const toggleClass = "scroll-head";

  $(window).on("scroll", () => {
    const currentScroll = $(window).scrollTop();
    if (currentScroll > 100) {
      header.addClass(toggleClass);
    } else {
      header.removeClass(toggleClass);
    }
  });

  // slider
  $('.single-item').slick({
    arrows: true,
    prevArrow: "<div type='button' class='slick-prev arrows pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></div>",
    nextArrow: "<div type='button' class='slick-next arrows pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></div>"
  });

  // Handle form submission and show the modal
  $('.form-contact').on('submit', function (event) {
    event.preventDefault();
    
    // Perform your form validation here

    if (this.checkValidity()) {
        $('#thankYouModal').modal('show'); // Show the modal
        // You can also reset the form here if needed
        // this.reset();
    }
    
    this.classList.add('was-validated');
  });

  // Ubah fungsi formatEventTime
  function formatEventTime(start, end) {
    var startTime = (start.getHours() < 10 ? '0' : '') + start.getHours() + ':' + (start.getMinutes() < 10 ? '0' : '') + start.getMinutes();
    var endTime = (end.getHours() < 10 ? '0' : '') + end.getHours() + ':' + (end.getMinutes() < 10 ? '0' : '') + end.getMinutes();
    return startTime + ' - ' + endTime;
  }

  // format date modal
  function formatDate(dateString) {
    const options = { weekday: 'long', month: 'numeric', day: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Ubah format bulan dan hari menjadi 2 digit
    const parts = formattedDate.split(', ');
    const monthDayYear = parts[1].split('/');
    const month = monthDayYear[0].length === 1 ? '0' + monthDayYear[0] : monthDayYear[0];
    const day = monthDayYear[1].length === 1 ? '0' + monthDayYear[1] : monthDayYear[1];
    const year = monthDayYear[2];

    return parts[0] + ', ' + month + ' ' + day + ' ' + year;
  }

  // full calendar
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      slotMinTime: '09:00:00',
      slotMaxTime: '23:00:00',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      slotLabelFormat: {
        hour: '2-digit',
        minute: '2-digit',
        omitZeroMinute: false
      },
      locale: 'id',   
      dayHeaderContent: function(arg) {
        var formattedDate = arg.date.toLocaleDateString([], { day: 'numeric' });
        var formattedWeekday = arg.date.toLocaleDateString([], { weekday: 'long' });
        
        var customContent = '<div class="custom-day-header">';
        customContent += '<div class="custom-day">' + formattedDate + '</div>';
        customContent += '<div class="custom-weekday">' + formattedWeekday + '</div>';
        customContent += '</div>';
    
        return { html: customContent, classNames: 'custom-day-header' };
      },
      events: [
        {
          title: 'asanas beginner',
          start: '2023-09-03T12:00:00',
          end: '2023-09-03T13:00:00',
          extendedProps: { 
            eventDescription: 'beginner', 
            eventLabel: 'jamie',
            eventDate: '2023-09-03T12:00:00',
            eventJob: 'Sudharsan Kriya yoga practitioner',
            eventImage: 'images/calsses_img_1.jpg',
            eventAvatar: 'images/trainers_img_1.jpg',
            eventLink: 'https://www.detik.com/'  
          }
        },
        {
            title: 'asanas intermidate',
            start: '2023-09-03T10:00:00',
            end: '2023-09-03T11:00:00',
            extendedProps: { 
              eventDescription: 'Let this dynamic practice energize your body, calm your mind, and bring you into the present moment. Discover the transformative power of Vinyasa Flow Yoga today.', 
              eventLabel: 'gwen', 
              eventDate: '2023-09-03T10:00:00',
              eventJob: 'Sudharsan Kriya yoga practitioner',
              eventImage: 'images/img-modal.png' ,
              eventAvatar: 'images/trainers_img_1.jpg',
              eventLink: 'https://www.detik.com/'  
            }
        },
        {
            title: 'asanas advance',
            start: '2023-09-03T15:00:00',
            end: '2023-09-03T17:00:00',
            extendedProps: { 
              eventDescription: 'advance', 
              eventLabel: 'rumi',
              eventDate: '2023-09-03T15:00:00',
              eventJob: 'Sudharsan Kriya yoga practitioner',
              eventImage: 'images/calsses_img_1.jpg',
              eventAvatar: 'images/trainers_img_1.jpg',
              eventLink: 'https://www.detik.com/'  
            }
        },
        {
          title: 'meditation',
          start: '2023-09-05T10:00:00',
          end: '2023-09-05T12:00:00',
          extendedProps: { 
            eventDescription: 'meditation text', 
            eventLabel: 'rumi',
            eventDate: '2023-09-05T10:00:00',
            eventJob: 'Sudharsan Kriya yoga practitioner',
            eventImage: 'images/trainers_img_4.jpg',
            eventAvatar: 'images/trainers_img_1.jpg',
            eventLink: 'https://www.detik.com/'   
          }
        },
        {
          title: 'sky workshop',
          start: '2023-09-04T14:00:00',
          end: '2023-09-04T18:00:00',
          extendedProps: { 
            eventDescription: 'sky workshop', 
            eventLabel: 'gwen',
            eventDate: '2023-09-04T14:00:00',
            eventJob: 'Sudharsan Kriya yoga practitioner',
            eventImage: 'images/trainers_img_2.jpg',
            eventAvatar: 'images/trainers_img_1.jpg',
            eventLink: 'https://www.detik.com/'     
          }
        },
        {
          title: 'sudharsan kriya',
          start: '2023-09-06T10:00:00',
          end: '2023-09-06T11:00:00',
          extendedProps: { 
            eventDescription: 'Let this dynamic practice energize your body, calm your mind, and bring you into the present moment. Discover the transformative power of Vinyasa Flow Yoga today.', 
            eventLabel: 'gwen', 
            eventDate: '2023-09-06T10:00:00',
            eventJob: 'Sudharsan Kriya yoga practitioner',
            eventImage: 'images/img-modal.png',
            eventAvatar: 'images/trainers_img_1.jpg',
            eventLink: 'https://www.detik.com/'   
          }
        }

      ],
      eventClick: function(arg) {
        $('#eventTitle').text(arg.event.title);
        $('#eventDescription').text(arg.event.extendedProps.eventDescription);
        $('#eventLabel').text(arg.event.extendedProps.eventLabel);
        $('#eventDate').text(formatDate(arg.event.extendedProps.eventDate));
        $('#eventJob').text(arg.event.extendedProps.eventJob);
        $('#eventTime').text(formatEventTime(arg.event.start, arg.event.end));
        $('#eventImage').attr('src', arg.event.extendedProps.eventImage);
        $('#eventAvatar').attr('src', arg.event.extendedProps.eventAvatar);
        $('#eventLink').attr('href', arg.event.extendedProps.eventLink);
        $('#eventDetailsModal').modal('show'); // Show the modal
    },
      eventContent: function(arg) {
        var eventHtml = '<div class="custom-event">' +
                        '<div class="event-title">' + arg.event.title + '</div>' +
                        '<div class="event-label"> Coach Name: ' + arg.event.extendedProps.eventLabel + '</div>' +
                        '<div class="event-time">' + formatEventTime(arg.event.start, arg.event.end) + '</div>'
                        '</div>';
        return { html: eventHtml };
      }
    });

    calendar.render();

    $('#eventDetailsModal').on('hidden.bs.modal', function() {
      // Reset modal content when it's completely hidden
        $('#eventTitle').text('');
        $('#eventDescription').text('');
        $('#eventLabel').text('');
        $('#eventDate').text('');
        $('#eventJob').text('');
        $('#eventTime').text('');
        $('#eventImage').attr('src', '');
        $('#eventAvatar').attr('src', '');
        $('#eventLink').attr('src', '');
    });

    // Handle the event link click to close the modal
    $('#eventLink').on('click', function() {
      $('#eventDetailsModal').modal('hide'); // Hide the modal
    });

    // Filter berdasarkan tipe kelas
    $('#filterDropdown').on('change', function() {
      filterEvents();
    });

    // Filter berdasarkan pelatih kelas
    $('#filterDropdown2').on('change', function() {
      filterEvents();
    });

    // Tangani perubahan pada dropdown
    function filterEvents() {
      var selectedEventType = $('#filterDropdown').val();
      var selectedTrainer = $('#filterDropdown2').val();
    
      calendar.getEvents().forEach(function(event) {
        var showEvent = true;
    
        if (selectedEventType !== 'all' && event.title !== selectedEventType) {
          showEvent = false;
        }
    
        if (selectedTrainer !== 'all' && event.extendedProps.eventLabel !== selectedTrainer) {
          showEvent = false;
        }
    
        event.setProp('display', showEvent ? 'inherit' : 'none');
      });
    
      calendar.refetchEvents();
    }

});
