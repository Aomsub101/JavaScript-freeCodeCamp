let myLeads = [];


const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
    let listItems = "";
    for (let i = 0;i < leads.length; i++){
        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "' >" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${myLeads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    inputEl.value = null;
})
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = []
    render(myLeads);
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
})
