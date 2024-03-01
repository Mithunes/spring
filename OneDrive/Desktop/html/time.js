function starttimer(){
    let m=0;
    let h=0;
    let sec=1;
    timerInterval=setInterval(function(){
        //console.log(sec)
        second.textContent=sec++;
        if(sec==60){
            sec=1;
            min.textContent=m++;
            if(m==60){
                m=1;
                hour.textContent=h++;
            }
        }},1000)
       
}

function stoptimer(){
          console.log(hour.textContent+':'+min.textContent+':'+ second.textContent);
          tagg.textContent = Final time: ${hour.textContent}:${minute.textContent}:${second.textContent};
          clearInterval(timerInterval);
         
          hour.textContent='00'
          min.textContent='00'
          second.textContent='00'
         

}