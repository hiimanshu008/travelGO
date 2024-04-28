function logIn(){

    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(username == "admin" && password == "admin"){
        const url = "../Admin/admin.html";
        location.href = url;
    }
    else{
        fetch(`http://travelweb-env.eba-mxu6vfyg.ap-south-1.elasticbeanstalk.com/userLogin/${username}/${password}`)
        .then(data=>{
            if(data.status == 404 || data.status == 400 ){
                window.alert("Wrong Credentails");
                window.location.reload();
            }else{
                return data.json();
            }
        })
        .then(data=>{
           // console.log(data);   
            localStorage.setItem("customer", JSON.stringify(data));
            localStorage.setItem("customerId", JSON.stringify(data.customer_id));
            const url = "../index.html";
            location.href = url;
        })
        .catch(()=>{
            window.location.reload();
        })
    }


}