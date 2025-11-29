let vehicleData = [];
let vehicleImage = "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png";

function addFleet(){
    let reg = document.getElementById('reg').value;
    let cat = document.getElementById('cat').value;
    let driver = document.getElementById('driver').value;
    let avail = document.getElementById('avail').value;

    if(!reg || !cat || !driver || !avail){
        alert("Please enter valid data");
        return;
    }

    vehicleData.push({
        reg,
        cat,
        driver,
        avail,
        vehicleImage
    })

    renderUI(vehicleData);

    document.getElementById('reg').value ="";
    document.getElementById('cat').value ="";
    document.getElementById('driver').value="";
    document.getElementById('avail').value ="";
}

function renderUI(vehicleData){
    let container = document.getElementById('container');
    container.innerHTML = "";

    vehicleData.forEach((ele,index) => {
        let card = document.createElement('card');
        card.classList = 'card';

        card.innerHTML = `
        <img src = ${ele.vehicleImage}> <br><br>
        <b>${ele.reg}</b><br>
        <b>${ele.cat}</b><br>
        <b>${ele.driver}</b><br>
        <b>${ele.avail}</b><br>
        `;

        let updatebtn = document.createElement('button');
        updatebtn.textContent = "Update Driver";

        updatebtn.addEventListener('click', ()=>{
            let newDriver = prompt("Enter new driver name");
            if(newDriver && newDriver.trim() !== ""){
                ele.driver = newDriver;
                renderUI(vehicleData);
            }else{
                alert("Driver data can't be empty");
            }
        })

        let availBtn = document.createElement('button');
        availBtn.textContent = "Change Availability";
        availBtn.addEventListener('click',()=>{
            ele.avail = ele.avail === 'available' ? 'unavailable' : 'available';
            renderUI(vehicleData);
        })

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete Vehicle";
        deleteBtn.addEventListener('click',()=>{
            vehicleData.splice(index,1);
            renderUI(vehicleData);
        })

        card.append(updatebtn,availBtn,deleteBtn)

        container.appendChild(card);
    });
}

document.getElementById('filterCategory').addEventListener('change',()=>{
    applyFilter();
})

function applyFilter(){
    let filteredCat = document.getElementById('filterCategory').value;
    let filteredAvail = document.getElementById('filterAvail').value;

    let filteredData = vehicleData.filter((data)=>{
        return (filteredCat === "all" || data.cat === filteredCat) && (filteredAvail === "all" || data.avail === filteredAvail)
    })
    renderUI(filteredData);
}

function clearFilter(){
    document.getElementById('filterCategory').value="all";
    document.getElementById('filterAvail').value ="all";
    renderUI(vehicleData);
}