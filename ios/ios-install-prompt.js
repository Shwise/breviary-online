const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}

const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

if (isIos() && !isInStandaloneMode()) {
  launch_prompt()
}

function launch_prompt() {
  let iOSpopup = document.querySelector(".ios-popup");
  iOSpopup.style.display = "table";
  });
}
