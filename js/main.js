var siteName = document.querySelector("#bookMarkName");
var siteURL = document.querySelector("#websiteUrl");


if (localStorage.getItem("webSiteList") == null) {
    var webSiteList = [];
}


else {
    webSiteList = JSON.parse(localStorage.getItem("webSiteList"))
    display(webSiteList)
}




function addWebSite() {

    if (validSiteName() == true && validSiteURL() == true) {
        var sites = {
            name: siteName.value,
            siteURL: siteURL.value,
        }

        webSiteList.push(sites);

        clearform();
        display(webSiteList);

        localStorage.setItem("webSiteList", JSON.stringify(webSiteList))

    }

    else{
        document.querySelector("#boxInfo").classList.remove("d-none")

    }
}

function removeBox(){
    document.querySelector("#boxInfo").classList.add("d-none")

}

function display(website) {
    var box = ``;
    for (var i = 0; i < website.length; i++) {
        box += `
        <tr>
        <td>${i + 1}</td>
        <td>${website[i].name}</td>
        <td><button  onclick="visitWebsite(${i})" class="btn-visit btn "> <i class="fa-solid fa-eye "></i> Visit</button></td>
        <td><button class="btn btn-Delete" onclick =" deleIndex(${i})">  <i class="fa-solid fa-eye "> </i> Delete</button></td>
    </tr>
        `

    }
    document.querySelector("#tBody").innerHTML = box;

}


function clearform() {
    siteName.value = "";
    siteURL.value = "";
}


function deleIndex(index) {

    webSiteList.splice(index, 1);
    localStorage.setItem("webSiteList", JSON.stringify(webSiteList))


    display(webSiteList);

}


function validSiteName() {
    var regex = /^\w{3,}(\s+\w+)*$/;

    if (regex.test(siteName.value) == true) {

        document.querySelector("#bookMarkName").classList.add("is-valid")
        document.querySelector("#bookMarkName").classList.remove("is-invalid")

        return true;
    }

    else {
        document.querySelector("#bookMarkName").classList.add("is-invalid")
        document.querySelector("#bookMarkName").classList.remove("is-valid")


        return false
    }

}


function validSiteURL() {
    var regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$/;

    if (regex.test(siteURL.value) == true) {

        document.querySelector("#websiteUrl").classList.add("is-valid")
        document.querySelector("#websiteUrl").classList.remove("is-invalid")

        return true;
    }

    else {
        document.querySelector("#websiteUrl").classList.add("is-invalid")
        document.querySelector("#websiteUrl").classList.remove("is-valid")


        return false
    }

}

function visitWebsite(index) {

    // window.open(webSiteList[index].siteURL, "_blank");
    open(`https://${webSiteList[index].siteURL}`);
}   
