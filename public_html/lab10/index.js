$(document).ready(function () {
    $('#start').click(function () {
        let width = parseInt($('#width').val());
        let growthAmount = parseInt($('#growth-amount').val());
        let growRate = parseInt($('#grow-rate').val());
        let numCircles = parseInt($('#num-circles').val());

        $('#circles-container').empty(); // Clear any existing circles

        for (let i = 0; i < numCircles; i++) {
            let randomColor = getRandomColor();

            let circle = $('<div class="circle"></div>').css({
                width: width + 'px',
                height: width + 'px',
                top: Math.random() * (window.innerHeight - width) + 'px',
                left: Math.random() * (window.innerWidth - width) + 'px',
                backgroundColor: randomColor
            });

            $('#circles-container').append(circle);

            let interval = setInterval(function () {
                let currentWidth = circle.width();
                circle.css({
                    width: currentWidth + growthAmount + 'px',
                    height: currentWidth + growthAmount + 'px',
                });
            }, growRate);

            circle.click(function () {
                clearInterval(interval);
                circle.remove();
            });
        }
    });

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});