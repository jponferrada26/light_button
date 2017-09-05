var encendido = false;
function turnOnOff(){
		if (encendido == true){
        $("div.button").css({"top":"0px"});
        $("div.button").css({"left":"0px"});
        $("p.text_on").css({"display":"none"});
        $("p.text_off").css({"display":"block"});
        $("div.content").css({"background":"black"});
				encendido = false;
		}else{
      $("div.button").css({"top":"10px"});
      $("div.button").css({"left":"5px"});
      $("p.text_on").css({"display":"block"});
      $("p.text_off").css({"display":"none"});
      $("div.content").css({"background":"white"});
				encendido = true;
		}
}
