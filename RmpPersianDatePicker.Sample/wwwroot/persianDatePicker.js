window.addCalendarClickListener = function (dotNetRef) {
    document.addEventListener('click', function (e) {
        dotNetRef.invokeMethodAsync('HandleClickOutside');
    });
};

window.positionCalendar = function (container, calendar) {
    if (!container || !calendar) return;
    const rect = container.getBoundingClientRect();
    calendar.style.position = 'absolute';
    calendar.style.top = rect.bottom + window.scrollY + 'px';
    calendar.style.left = rect.left + window.scrollX + 'px';
};
