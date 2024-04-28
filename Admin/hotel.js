function addHotel(){
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let desc = document.getElementById("desc").value;
    let address = document.getElementById("address").value;
    let rent = document.getElementById("rent").value;
    let status = document.getElementById("status").value;
    let city = document.getElementById("city").value;

    fetch("http://travelweb-env.eba-mxu6vfyg.ap-south-1.elasticbeanstalk.com/addHotel",{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            "hotelname":name,
            "hotelType":type,
            "hotelDescription":desc,
            "hotelAddress":address,
            "city":city,
            "rent":rent,
            "status":status
        })
    }).then(response => {
        if(response.status == 201 | response.status == 200 | response.status == 202){
            response.json().then(data => alert("Hotel added successful"))
        }else{
            response.json().then(data => alert(data.message));
        }
    })
}