var starter = document.getElementById("start");
let loaded = false;
function firstLoad(){
    if(loaded == false){
        starter.style.display = "block";
        loaded = true;
    }else if(loaded==false){
        starter.style.display = "none";
    }
}
starter.addEventListener('load', firstLoad());
    