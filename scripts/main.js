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
  document.querySelector('.form-contact').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Perform your form validation here
    
    if (this.checkValidity()) {
        $('#thankYouModal').modal('show'); // Show the modal
        // You can also reset the form here if needed
        // this.reset();
    }
    
    this.classList.add('was-validated');
  });

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
            title: 'Itermidate',
            start: '2023-09-03T10:00:00',
            end: '2023-09-03T11:00:00',
            extendedProps: { eventType: 'itermidate' }
        },
        {
            title: 'Advance',
            start: '2023-09-03T15:00:00',
            end: '2023-09-03T17:00:00',
            extendedProps: { eventType: 'advance' }
        },
        {
            title: 'Beginner',
            start: '2023-09-03T12:00:00',
            end: '2023-09-03T13:00:00',
            extendedProps: { eventType: 'beginner' }
        }
      ]
    });

    calendar.render();

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
    
        if (selectedEventType !== 'all' && event.extendedProps.eventType !== selectedEventType) {
          showEvent = false;
        }
    
        if (selectedTrainer !== 'all' && event.extendedProps.trainer !== selectedTrainer) {
          showEvent = false;
        }
    
        event.setProp('display', showEvent ? 'inherit' : 'none');
      });
    
      calendar.refetchEvents();
    }

});
