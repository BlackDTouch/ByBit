

//Counter

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 1990, 2015, 3000);
    counter("count2", 1990, 2017, 3000);
    counter("count3", 1990, 2018, 3000);
    counter("count4", 1990, 2019, 3000);
    counter("count5", 1990, 2020, 3000);
    counter("count6", 1990, 2021, 3000);
   });
   