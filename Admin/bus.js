function addBus(){
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let capacity = document.getElementById("capacity").value;
    let fare = document.getElementById("fare").value;

    fetch("http://travelweb-env.eba-mxu6vfyg.ap-south-1.elasticbeanstalk.com/addBus",{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            "travelAgency": name,
            "busType":type,
            "capacity":capacity,
            "fare":fare
        })
    }).then(response => {
        if(response.status == 201 | response.status == 200 | response.status == 202){
            response.json().then(data => alert("Bus added successful"))
        }else{
            response.json().then(data => alert(data.message));
        }
    })
}