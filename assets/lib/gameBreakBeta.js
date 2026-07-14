(function(){
  window.showNextAd=function(){
    return window.adBreak({type:"next",name:"game",beforeAd:window.pauseGame,afterAd:window.resumeGame});
  };
  window.pauseGame=window.pauseGame||function(){if(typeof window.myDispatchEvent==="function")window.myDispatchEvent("sdk_mute")};
  window.resumeGame=window.resumeGame||function(){if(typeof window.myDispatchEvent==="function")window.myDispatchEvent("sdk_unmute")};
})();
