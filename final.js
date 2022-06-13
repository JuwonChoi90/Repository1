let changeFocus1 = () => {
    let phone1 = document.getElementById("phone1").value
    if (phone1.length === 3) {
        document.getElementById("phone2").focus()
    }
}

let changeFocus2 = () => {
    let phone1 = document.getElementById("phone2").value
    if (phone1.length === 4) {
        document.getElementById("phone3").focus()
    }
}

let confirm = () => {
    let phone3 = document.getElementById("phone3").value
    if (phone3.length === 4) {
        document.getElementById("confirmbtn").disabled = false
        document.getElementById("confirmbtn").setAttribute("style","background-color : #FFFFFF")
        document.getElementById("confirmbtn").setAttribute("style","color : #0068FF")
    }   else {
        document.getElementById("confirmbtn").disabled = true
        document.getElementById("confirmbtn").setAttribute("style","none")
        document.getElementById("confirmbtn").setAttribute("style","none")
    }
}

let randomnum = () => {
    let number = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("number").innerText = number
    document.getElementById("confirmedbtn").disabled = false
    document.getElementById("confirmedbtn").setAttribute("style","background-color : #FFFFFF")
    document.getElementById("confirmedbtn").setAttribute("style","color : #0068FF")
    
    let time = 5;
    let interval;
    
    interval = setInterval(function() {
        if(time >= 0) { 
        
            let min = Math.floor(time / 60);
            let sec = String(time % 60).padStart(2, "0");
            document.getElementById("time").innerText = min + ":" + sec;
            time = time - 1;

        } else {
            document.getElementById("time").innerText = "0:00"
            document.getElementById("confirmedbtn").disabled = true
            clearInterval(interval)
        }
    }, 1000)
}

let complete = () => {
    alert("인증이 완료되었습니다.")
    document.getElementById("finished").disabled = false;
    document.getElementById("finished").setAttribute("style","background-color : #FFFFFF")
    document.getElementById("finished").setAttribute("style","color :#0068FF") 
}
