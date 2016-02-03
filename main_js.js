var end = new Date('12/15/2017 12:1 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        
        $('.hours').html(hours + " Hours");
        $('.days').html(days + " Days");
        $('.minutes').html(minutes + " Minutes");
        $('.seconds').html(seconds + " Seconds");
        
       
    }

    timer = setInterval(showRemaining, 1000);
