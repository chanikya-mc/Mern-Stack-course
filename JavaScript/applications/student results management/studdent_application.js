let students_data=
[
    {
    id:1,
    name:"Chanikya",
    gender:"Male",
    marks:[55,66,77,88,99],
    password:1111,
    role:"admin",
    },
    {
        id:2,
        name:"vijay",
        gender:"Male",
        marks:[56,86,70,58,90],
        password:2222,
        role:"student",
    },
    {
    id:3,
    name:"Nayanthara",
    gender:"Female",
    marks:[35,26,67,81,19],
    password:3333,
    role:"student",
    },

    {
    id:4,
    name:"pooja hegde",
    gender:"Female",
    marks:[51,64,27,68,49],
    password:4444,
    role:"student",
               
    },
    {   id:5,
        name:"prabhas",
        gender:"Male",
        marks:[50,60,75,45,66],
        password:555,
        role:"student",
                    
    },
    {
        id:10,
        name:"dhanush",
        gender:"Male",
        marks:[50,40,47,38,49],
        password:1010,
        role:"student",
        },
    {
            id:12,
            name:"Allu Arjun",
            gender:"Male",
            marks:[55,66,77,88,99],
            password:1212,
            role:"student",
    },
    {
        id:143,
        name:"pavan kalyan",
        gender:"Male",
        marks:[10,40,47,38,49],
        password:143143,
        role:"student",
        },
]

function percentage_calculator(data)
{ let total_marks=0;
    for(let i of data)
    {
        total_marks+=i;
    }    
    return ((total_marks/500)*100);
}

function result_calculator(data)
{
    for(let i of data)
    {
        if(i<35)
        {
            return "Fail"
        }

    }
    return "Pass"
}

let dispaly_table_content=document.querySelector("#table-body");

// displaying hole data defualty
 function all()
 {
    let result=``
   
        for(let data of students_data)
        { let res=result_calculator(data.marks)
        let per=percentage_calculator(data.marks);
        if(data.gender=="Male" || data.gender=='Femlae')
        result+=`<tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.gender}</td>
        <td>${per.toFixed(2)} %</td>
        <td>${res}</td>
        </tr>`
        }
    

    dispaly_table_content.innerHTML=result;
}




// showing data of passed students
function show_pass()
{ let result=``
    for(let data of students_data)
    {
        let res=result_calculator(data.marks);
        let per=percentage_calculator(data.marks);
        if(res=="Pass")
        {
        result+=`<tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.gender}</td>
        <td>${per.toFixed(2)} %</td>
        <td>${res}</td>
        </tr>`
        }
    }
    dispaly_table_content.innerHTML=result;
}

// showing detrails of failed students only
function show_fail()
{ let result=``
    for(let data of students_data)
    {
        let res=result_calculator(data.marks);
        let per=percentage_calculator(data.marks);
        if(res=="Fail")
        {
        result+=`<tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.gender}</td>
        <td>${per.toFixed(2)} %</td>
        <td>${res}</td>
        </tr>`
        }
    }
    dispaly_table_content.innerHTML=result;
}

// showing males students data
function show_male()
{ let result=``
    for(let data of students_data)
    {
        let res=result_calculator(data.marks);
        let per=percentage_calculator(data.marks);
        if(data.gender=="Male")
        {
        result+=`<tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.gender}</td>
        <td>${per.toFixed(2)} %</td>
        <td>${res}</td>
        </tr>`
        }
    }
    dispaly_table_content.innerHTML=result;
}

// showing females data
function show_female()
{ let result=``
    for(let data of students_data)
    {
        let res=result_calculator(data.marks);
        let per=percentage_calculator(data.marks);
        if(data.gender=="Female")
        {
        result+=`<tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.gender}</td>
        <td>${per.toFixed(2)} %</td>
        <td>${res}</td>
        </tr>`
        }
    }
    dispaly_table_content.innerHTML=result;
}



// input data validation using the student details
let form = document.querySelector("#form_validation");
let logout_button=document.querySelector(".logout_btn");
let signup_button=document.querySelector(".signup_btn");
let login_button=document.querySelector("#login_btn");

let loginpage=document.querySelector(".hide_loginpage");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    let username = document.getElementById('username').value.trim().toLowerCase();
    let password = document.getElementById('password').value.trim();

    let matchedStudent = students_data.find(student => {
        if(student.name.toLowerCase() === username && student.password == password && student.role=="admin")
        {
            let admin_details_show=document.querySelector(".admin_details_show");
            admin_details_show.classList.remove("admin_details_show");
           loginpage.classList.add("hide_loginpage");
            logout_button.classList.remove("logout_btn");
            signup_button.classList.remove("signup_btn");
            login_button.classList.remove("login_btn");

        }
        else if(student.name.toLowerCase() === username && student.password == password)
        { displaying.setAttribute("class","hide_loginpage");
            let student_details=document.querySelector(".student_details")
            let res=result_calculator(student.marks);
        let per=percentage_calculator(student.marks);
        // Redirect to another page
        res=`<div class="card-header text-center bg-primary">
        <h2 class="text-white">Student Details</h2>
         </div>

    <div class="card_body text-center">
        <label for="name">Student ID:</label>
        <span id="name">${student.id}</span><br>

        <label for="id">Student Name:</label>
        <span id="id">${student.name}</span><br>

        <label for="number">Gender:</label>
        <span id="number">${student.gender}</span><br>
        
        <label for="number">Percentage:</label>
        <span id="number">${per} %</span><br>
        <label for="number">Results:</label>
        <span id="number">${res}</span>

    </div>
    <div class="card-footer bg-primary text-center">
        <h4 class="text-white">congratulation you passed with ${per} %</h4>
    </div>`
    student_details.innerHTML=res;
    } 

        });

        
});






 