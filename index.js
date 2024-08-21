(function () {
  function $(id) {
    return document.getElementById(id);
  }

  function countdown() {
    const now = new Date().getTime(); // Get the current time in milliseconds
    const targetDate = new Date("2024-08-24T00:00:00").getTime(); // Set the target date

    const timeRemaining = targetDate - now; // Calculate the time remaining

    if (timeRemaining > 0) {
      // Calculate days, hours, minutes, and seconds remaining
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Display the result
      console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      const timer = document.getElementById("timer");
      timer.innerText = `Unlock in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Update the countdown every second
      setTimeout(countdown, 1000);
    } else {
      console.log("The date has arrived!");
      // You can add additional code here to execute when the countdown ends
    }
  }

  countdown(); // Start the countdown

  var card = $("card"),
    openB = $("open"),
    closeB = $("close"),
    timer = null;
  console.log("wat", card);

  const now = new Date();
  const specificDate = new Date("2024-08-24");
  openB.addEventListener("click", function () {
    if (now < specificDate) {
      alert("Not yet =))))");
    } else {
      card.setAttribute("class", "open-half");
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute("class", "open-fully");
        timer = null;
      }, 1000);
    }
  });

  closeB.addEventListener("click", function () {
    card.setAttribute("class", "close-half");
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute("class", "");
      timer = null;
    }, 1000);
  });
})();
