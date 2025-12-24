// wwwroot/js/calendar.js
window.positionCalendar = (containerRef, calendarRef) => {
    const container = containerRef;
    const calendar = calendarRef;

    if (!container || !calendar) return;

    // محاسبه موقعیت
    const rect = container.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const calendarWidth = calendar.offsetWidth;
    const calendarHeight = calendar.offsetHeight;

    // تنظیم موقعیت اولیه
    let left = rect.left;
    let top = rect.bottom + 5;

    // بررسی اگر تقویم از سمت راست خارج می‌شود
    if (left + calendarWidth > viewportWidth - 10) {
        left = viewportWidth - calendarWidth - 10;
    }

    // بررسی اگر تقویم از سمت چپ خارج می‌شود
    if (left < 10) {
        left = 10;
    }

    // بررسی اگر تقویم از پایین خارج می‌شود
    if (top + calendarHeight > viewportHeight - 10) {
        top = rect.top - calendarHeight - 5;

        // اگر باز هم از بالا خارج شد، نمایش در وسط
        if (top < 10) {
            top = 10;
        }
    }

    // اعمال موقعیت
    calendar.style.left = left + 'px';
    calendar.style.top = top + 'px';
    calendar.style.position = 'fixed'; // تغییر به fixed برای اطمینان از موقعیت مطلق
};

window.addCalendarClickListener = (dotNetRef) => {
    document.addEventListener('click', function (event) {
        // بررسی اینکه آیا کلیک خارج از تقویم بوده
        const calendarElements = document.querySelectorAll(
            '.persian-date-wrapper, .popup-overlay, .inline-calendar-container, .popup-content, .inline-calendar'
        );

        let isClickInside = false;

        calendarElements.forEach(element => {
            if (element && element.contains(event.target)) {
                isClickInside = true;
            }
        });

        if (!isClickInside) {
            dotNetRef.invokeMethodAsync('HandleClickOutside');
        }
    });
};
