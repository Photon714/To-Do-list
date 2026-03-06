let arr =[];
function add(){
    let storage='';
    for(let i=0;i<arr.length;i++){
        const item=arr[i];
        let eachline = `<div class="innerShow"><div class="content">${item.data}</div><div class="dueDate">${item.date}</div><button class="deleteButton" onclick="
            copy(arr[${i}]);
            arr.splice(${i},1);
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
    let dateElement=document.querySelector('.inputdate');
    let date=dateElement.value;
    arr.push({
        data,
        date
    });
    dataElement.value='';
    add();
}
let deletedTask='';
function copy(arrcopy){
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