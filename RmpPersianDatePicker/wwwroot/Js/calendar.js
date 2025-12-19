// wwwroot/js/persianDatePicker.js

window.positionCalendar = function (containerRef, calendarRef) {
    try {
        const container = containerRef;
        const calendar = calendarRef;

        if (!container || !calendar) return;

        const containerRect = container.getBoundingClientRect();
        const calendarElement = calendar;

        // تنظیمات پایه
        calendarElement.style.position = 'absolute';
        calendarElement.style.top = '100%';
        calendarElement.style.left = '0';
        calendarElement.style.marginTop = '8px';
        calendarElement.style.zIndex = '10000';

        // بررسی فضای موجود
        const viewportHeight = window.innerHeight;
        const calendarHeight = calendarElement.offsetHeight;

        // اگر پایین فضای کافی نیست، بالا نمایش بده
        if ((containerRect.bottom + calendarHeight + 20) > viewportHeight) {
            calendarElement.style.top = 'auto';
            calendarElement.style.bottom = '100%';
            calendarElement.style.marginTop = '0';
            calendarElement.style.marginBottom = '8px';
        }

    } catch (error) {
        console.error('Error positioning calendar:', error);
    }
};

window.addCalendarClickListener = function (dotNetRef) {
    document.addEventListener('click', function (e) {
        const persianDateWrapper = e.target.closest('.persian-date-wrapper');
        if (!persianDateWrapper) {
            dotNetRef.invokeMethodAsync('HandleClickOutside');
        }
    });
};