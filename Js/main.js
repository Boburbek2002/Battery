navigator.getBattery().then(battery => {
  let percentage = document.querySelector('.percentage');
  let percent = document.querySelector('.percent');
  let isCharging = document.querySelector('.isCharging');

  function updateBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
  }
  updateBatteryInfo();

  function updateLevelInfo() {
    percentage.style.width = battery.level * 100 + '%';
    percent.innerHTML = parseInt(battery.level * 100) + '%';
  }

  function updateChargeInfo() {
    isCharging.innerHTML = battery.charging ? "Your device charging" : "";
  }

  battery.addEventListener('levelchange', () => {
    updateLevelInfo();

  });
  battery.addEventListener('chargingchange', () => {
    updateChargeInfo();

  });
})
