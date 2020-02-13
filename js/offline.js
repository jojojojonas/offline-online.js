function checkOnlineOffline(status) {
  if ( status.type == 'offline') {
    document.getElementById('websiteOffline').classList.add('showwebsiteOffline');
    console.log('Service offline');
  } else if ( status.type == 'online') {
    console.log('Service online');
    document.getElementById('websiteOffline').classList.add('disablewebsiteOffline');
    setTimeout(
      function timeOutOnline() {
        document.getElementById('websiteOffline').classList.remove('showwebsiteOffline');
        document.getElementById('websiteOffline').classList.remove('disablewebsiteOffline');
      },
      400
    );
  }
}
window.addEventListener('offline', checkOnlineOffline);
window.addEventListener('online', checkOnlineOffline);
