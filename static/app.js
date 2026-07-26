let btn=document.querySelector(".btn-primary");
let otp=document.querySelector(".output");
let con=document.querySelector(".confusion");
let head=document.querySelector(".matric");
let select=document.querySelector(".input");
let aud=document.querySelector(".audio");

let popSound=new Audio("/static/alert.mp3")

btn.addEventListener("click",async(e)=>{

    let a=document.querySelector(".input1").value;

    let b=document.querySelector(".input2").value;

    let c=document.querySelector(".input3").value;

    let d=document.querySelector(".input4").value;

    let f=document.querySelector(".input5").value;


    let alpha=24-a;

    for(let i=0;i<select.length;i+=1){
    select[i].addEventListener("input",(e)=>{
        select.classList.remove("error");
    });
}

    if(a>24 || a<0 || a==""){
        con.style.backgroundImage="";
        con.style.innerHTML="";
        con.style.height="";
        con.style.minWidth="";
        con.style.marginLeft="";
        con.innerHTML="";
        head.innerText="";
        head.style.width="";
        head.style.color="";
        alert("Invalid value of study hours");
        popSound.currentTime=0;
        popSound.play();
        document.querySelector(".input1").classList.add("error");
        return;
    }
    else if(b>100 || b<0 || b==""){
        con.style.backgroundImage="";
        con.style.innerHTML="";
        con.style.height="";
        con.style.minWidth="";
        con.style.marginLeft="";
        con.innerHTML="";
        head.innerText="";
        head.style.width="";
        head.style.color="";
        alert("Invalid value of attendance rate");
        popSound.currentTime=0;
        popSound.play();
        document.querySelector(".input2").classList.add("error");
        return;
    }
    else if(c>100 || c<0 || c==""){
        con.style.backgroundImage="";
        con.style.innerHTML="";
        con.style.height="";
        con.style.minWidth="";
        con.style.marginLeft="";
        con.innerHTML="";
        head.innerText="";
        head.style.width="";
        head.style.color="";
        alert("Invalid value of assignment rate");
        popSound.currentTime=0;
        popSound.play();
        document.querySelector(".input3").classList.add("error");
        return;
    }
    else if(d>100 || d<0 || d==""){
        con.style.backgroundImage="";
        con.style.innerHTML="";
        con.style.height="";
        con.style.minWidth="";
        con.style.marginLeft="";
        con.innerHTML="";
        head.innerText="";
        head.style.width="";
        head.style.color="";
        alert("Invalid value of marks");
        popSound.currentTime=0;
        popSound.play();
        document.querySelector(".input4").classList.add("error");
        return;
    }
    else if(f<0 || f>=alpha || f==""){
        con.style.backgroundImage="";
        con.style.innerHTML="";
        con.style.height="";
        con.style.minWidth="";
        con.style.marginLeft="";
        con.innerHTML="";
        head.innerText="";
        head.style.width="";
        head.style.color="";
        alert("Invalid value of sleep hours");
        popSound.currentTime=0;
        popSound.play();
        document.querySelector(".input5").classList.add("error");
        return;
    }

    aud.currentTime=0;
    aud.play();
    
    const response= await fetch("/predict",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            a,b,c,d,f
        })
    }) ;

    const recieved=await response.json();

    let fail_pass=recieved.prediction;
    otp.innerHTML="";
    otp.style.backgroundColor="";
    con.style.backgroundImage="";
    con.style.innerHTML="";
    con.style.height="";
    con.style.minWidth="";
    con.style.marginLeft="";
    con.innerHTML="";
    head.innerText="";
    head.style.width="";
    head.style.color="";

    try{
        if(fail_pass==1){
            otp.innerHTML="<h2>🎉Congratulations you successfully passed</h2>";
            otp.style.color="green";
            otp.style.backgroundColor="white";
            head.innerText="Confusion matric of model used in prediction";
            head.style.width="100%";
            head.style.width="red";
            con.style.backgroundImage="url('/static/outputCorrected.png')";
            con.style.backgroundRepeat="no-repeat";
            con.style.height="70rem";
            con.style.minWidth="50rem";
            con.style.marginLeft="20px";
        }
        else{
            otp.innerHTML="<h2>Unfortunately you failed</h2>";
            otp.style.color="red";
            otp.style.backgroundColor="white";
        }
    }
    catch(error){
        otp.innerHTML=`<h2>${error}</h2>`;
    }



});