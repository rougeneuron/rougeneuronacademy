(function($) {
    // Theme toggle functionality
    $(function() {
        // Check for saved theme preference or use default (dark)
        const currentTheme = localStorage.getItem('theme') || 'dark';
        const $checkbox = $('#checkbox');
        
        // Apply the saved theme on page load
        if (currentTheme === 'light') {
            $('body').addClass('light-theme');
            $checkbox.prop('checked', true);
        }
        
        // Toggle theme when slider is clicked
        $checkbox.on('change', function() {
            if ($(this).is(':checked')) {
                // Switch to light theme
                $('body').addClass('light-theme');
                localStorage.setItem('theme', 'light');
            } else {
                // Switch to dark theme
                $('body').removeClass('light-theme');
                localStorage.setItem('theme', 'dark');
            }
            
            // Force refresh of problematic elements
            setTimeout(function() {
                // This helps with any elements that might need a redraw
                $(window).trigger('resize');
            }, 50);
        });
    });
})(jQuery);
