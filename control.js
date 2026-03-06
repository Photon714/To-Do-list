let arr =[];
let completed=[];
//window.onload executes its inner stuff only when the whole html css images DOM are executed 
//used window.onload bcoz of the deleted tasks(actually both deleted and active) ie tasks exists even before the html used to show the deleted/active task is loaded (a possiblity)
//hence to avoid null 
window.onload=function(){  
    let saved= localStorage.getItem('cookies');         
    if(saved){
        arr=JSON.parse(saved);
        add();
    }
    let deletedSave = localStorage.getItem('deletedCookies');
    if(deletedSave){
        completed=JSON.parse(deletedSave);
        for(let i=0;i<completed.length;i++)
            copy(completed[i],false);
    }
}
function sanitize(text){
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function add(){
    let storage='';
    for(let i=0;i<arr.length;i++){
        const item=arr[i];
        let eachline = `<div class="innerShow"><div class="content">${item.data}</div><div class="dueDate">${item.date}</div><button class="deleteButton" onclick="
            copy(arr[${i}],true);
            arr.splice(${i},1);
            localStorage.setItem('cookies',JSON.stringify(arr));
            add();
            showGif();
            ">Done</button></div>`;
        storage += eachline;
    }
    document.querySelector('.show').innerHTML=storage;
}
function takeinput(){
    let dataElement=document.querySelector('.input1');
    let data=dataElement.value;
    if(data.trim() === ""){
    alert("Task cannot be empty");
    return;
    }
    data=sanitize(dataElement.value);
    let dateElement=document.querySelector('.inputdate');
    let date=dateElement.value;
    arr.push({
        data,
        date
    });
    dataElement.value='';
    localStorage.setItem('cookies',JSON.stringify(arr));  //copying the whole array for storage
    add();
}   
let deletedTask='';
function copy(arrcopy,flag){
    if(flag){
        completed.push(arrcopy);
        localStorage.setItem('deletedCookies',JSON.stringify(completed));
    }
    deletedTask=`<div class="innerShow2"><div class="content2">${arrcopy.data}</div><div class="dueDate2">${arrcopy.date}</div><input class="checkbox" type="checkbox" checked></div>`
    document.querySelector('.taskDone').innerHTML+=deletedTask;
    return;
}
function showGif(){
    const popup = document.getElementById("gifPopup");
    popup.style.display = "flex";
    setTimeout(() => {
        popup.style.display = "none";
    }, 2000); 
}