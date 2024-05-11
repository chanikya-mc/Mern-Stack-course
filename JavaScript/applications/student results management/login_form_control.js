
let displaying=document.querySelector(".hide_loginpage");

// let sd=document.querySelector('.sd');
// let admin_details_show=document.querySelector(".admin_details_show")
function login_form_show()
{
    
    // console.log(displaying)
    // displaying.setAttribute("class","show");
    displaying.classList.remove("hide_loginpage")
    // sd.setAttribute("class","hide_loginpage");
    // admin_details_show.setAttribute("class","hide_loginpage");

   

}
function close_login_page()
{
    
    // console.log(displaying)
    // displaying.setAttribute("class","hide_loginpage");
    displaying.classList.add("hide_loginpage")

}

// validate form data...........
let username=document.querySelector("#username");
let password=document.querySelector("#password");
// let form=document.querySelector("#form_validation");
form.addEventListener("submit",(e)=>
{
    
    if(!validate())
    {
        e.preventDefault();

    }
    

})

function validate()
{
    let usernamevalidation=username.value.trim();
    let passwordvalidation=password.value.trim();
    let success=true;

    if(usernamevalidation=="")
    { success=false
        setError(username,"Username is required")
    }
    else{
        setSuccess(username)
    }

    if(  passwordvalidation==="")
    { success=false
        setError(password,"Password is required")
    }
    else if(passwordvalidation.length<3)
    { success=false
        setError(password,"Password lenght should be aleast 4 characters")
    }
    else{
        setSuccess(password)
    }

    return success
    
    
}
//elemet=password and meaasge=password is requered
function setSuccess(element)
{
    let form_group=element.parentElement;
    let errorElement=form_group.querySelector(".error");
    errorElement.innerText="";
    form_group.classList.remove("error")
    form_group.classList.add("success")

}
function setError(element,message)
{
    let form_group=element.parentElement;
    let errorElement=form_group.querySelector(".error");
    errorElement.innerText=message;
    form_group.classList.add("error")
    form_group.classList.remove("success")

}