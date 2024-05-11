// let a=Number(prompt("ENter the first number"))
// let b=Number(prompt("Enter the third number"))



// for (let i=1;i<=n;i++)
// {
//     console.log(i)
// }

function main()
{
    // multiplication:--------
    // for(let i=1;i<=10;i++)
    // {
    //     console.log(`${i} X ${n} =${i*n}`)
    // }
    //---------------------------------------



    // factorial program-------------------
    // let fact=1
    // for (let i=1;i<=n;i++)
    // {
    //     fact=fact*i
    // }
    // console.log(`factorial of ${n} is : ${fact}`)
    //----------------------------------

    // sum of n numbers--------
    // let n=Number(prompt('Enter the value of n:-'))
    // let sum=0
    // for(let i=n;i>=1;i--)
    // {
    //     sum+=i
    // }
    // console.log(`sumo f give ${n} numbers is: ${sum}`)
    //----------------------------


    // nested for loop------------------------------
    // for (let i=0;i<=10;i++)
    // {
    //     for (let j=0;j<=10;j++)
    //     {
    //         // console.log(`( $ {i,j} )`)
    //         // console.log(i,j)
    //         console.log(`( ${i} ${j} )`)
    //     }
    // }
    //---------------------------------------------


    //-------------------------------------
    // for (let i=0;i<=5;i++){
    //     for (let j=0;j<=5;j++){
    //         if (j===3)
    //         break;
    //         console.log(i,j)
    //     }
    // }
    // --------------------------------


    //----------------------------------------

    // let n=Number(prompt("Enter the  n value:-"))
    // let a=0
    // let b=1
    // let s=0
    // let ser=`${a} ${b} ` 
    // for(let i=2;i<n;i++)
    // {
    //     s=a+b
    //     ser+=`${s} `
    //     a=b;
    //     b=s
    // }
    // console.log(ser)
    //-----------------------
    // let n=Number(prompt("Enter the  n value:-"))
    // let a=0
    // let b=1
    // let s=0
    // let ser=`${a} ${b} ` 
    // for(;;)
    // {
    //     s=a+b
    //     if (s<=n)
    //          ser+=`${s} `
    //     else
    //     break
    //     a=b;
    //     b=s
    // }
    // console.log(ser)
    //-------------------------------------
    
    // feb series in between a specific range

    // let n=Number(prompt("Enter the  lower limit  value:-"))
    // let m=Number(prompt("Enter the upper limit value:-"))
    // let a=0
    // let b=1
    // let s=0
    // let ser=`` 
    // for(;;)
    // {
    //     s=a+b
    //     if (s>=n)
    //             ser+=`${s} `
    //     if (s>=m)
    //     break
    
    //     a=b;
    //     b=s
    // }
    // console.log(ser)
    //------------------------------------------


    // alternative numbers of feb series
    // let n=Number(prompt("Enter the value of n:-"))
    // let a=0
    // let b=1
    // let s=0
    // if (n===0)
    //     return
    // let ser=`${a} `
    // for (let i=0;i<(n*2);i++)
    // {
    //     s=a+b
    //     if (i%2===0)
    //         ser+=`${s} `
    //     a=b
    //     b=s

    // }
    // console.log(ser)

    //----------------------------------------

    let n=Number(prompt("Enter the value of n:-"))
    let a=0
    let b=1
    let s=0
    let res=false
    if (n===0 || n===1)
        {
            console.log(" pleace enter number greater the 1")
            return
        }
    
    for (let i=0;i<n;i++)
    {
        s=a+b
        if (s===n)
        {
            console.log(`Given number ${n} is a feb number`)
            res=false
            return

        }
        else
        {
            res=true
        }
        a=b
        b=s

    }
    if (res===true)
        console.log(` given number ${n} is not belongs to feb series`)
  




}
main()


