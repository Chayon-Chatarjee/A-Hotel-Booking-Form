let fname = document.getElementById("fname");
let pickupLocation1 = document.getElementById("pickup-location-1");
let pickupLocation2 = document.getElementById("pickup-location-2");
let shuttleYes = document.getElementById("shuttle-yes");
let shuttleNo = document.getElementById("shuttle-no");
let numAdults = document.getElementById("num-adults");
let numNights = document.getElementById("num-nights");
let roomOption = document.getElementById("Option");
let pickupDate = document.getElementById("pickup-date");
let maskedInput = document.getElementById("masked-input");
let phoneNumber = document.getElementById("phone-number");
let email = document.getElementById("email");
let pickupTime = document.getElementById("pickup-time");
let ampmSelect = document.getElementById("ampm-select");
let address1 = document.getElementById("address-1");
let address2 = document.getElementById("address-2");
let city = document.getElementById("city");
let state = document.getElementById("state");
let postalCode = document.getElementById("postal-code");
let Shuttlelocation = document.getElementById("Shuttle-location");





function Shuttle() {
    if (shuttleYes.checked) {
        Shuttlelocation.style.display = "block";
    } else {
        Shuttlelocation.style.display = "none";
    }
}



shuttleYes.addEventListener("change", Shuttle);
shuttleNo.addEventListener("change", Shuttle);
Shuttle();





function output() {
    let amount = document.getElementById("amount");
    let selected = roomOption.value;
    if (selected === "Single") amount.innerHTML = "<p>1000 ৳</p>";
    else if (selected === "Double") amount.innerHTML = "<p>1500 ৳</p>";
    else if (selected === "Suite") amount.innerHTML = "<p>2000 ৳</p>";
    else if (selected === "Deluxe") amount.innerHTML = "<p>3000 ৳</p>";
    else amount.innerHTML = "<p>0 ৳</p>";
}
document.getElementById("information").style.display = "none";
function btnsubmit() {
    if (fname.value == "") { 
        alert("Enter your name."); return false; 
    }
    if (pickupLocation1.value === "") { 
        alert("Enter pickup location."); return false; 
    }
    if (numAdults.value == "") { 
        alert("Enter number of adults."); 
        return false; 
    }
    if (numNights.value == "") { 
        alert("Enter number of nights."); 
        return false; 
    }
    if (roomOption.value == "") { 
        alert("Select room type."); 
        return false; 
    }
    if (pickupDate.value == "") { 
        alert("Select pickup date."); 
        return false; 
    }
    if (maskedInput.value == "") { 
        alert("Enter masked input."); 
        return false; 
    }
    if (phoneNumber.value == "" || phoneNumber.value.length !== 11) { 
        alert("Phone number must be 11 digits."); 
        return false; 
    }
    if (email.value == "") { 
        alert("Enter email."); 
        return false; 
    }
    if (pickupTime.value == "") { 
        alert("Enter pickup time."); 
        return false; 
    }
    if (ampmSelect.value == "Please Select") { 
        alert("Select AM/PM."); return false; 
    }
    if (address1.value == "") { 
        alert("Enter address."); return false; 
    }
    if (city.value == "") { 
        alert("Enter city."); return false; 
    }
    if (state.value == "") { 
        alert("Enter state."); 
        return false; 
    }
    if (postalCode.value == "") { 
        alert("Enter postal code."); 
        return false; 
    }
    document.getElementById("container").style.display = "none";
    document.getElementById("information").style.display = "block";
    document.getElementById("name1").innerText = fname.value;
    document.getElementById("phone1").innerText = maskedInput.value;
    document.getElementById("email-info1").innerText = email.value;
    document.getElementById("address-info1").innerText = address1.value + ", " + address2.value;
    document.getElementById("city1").innerText = city.value;
    document.getElementById("state1").innerText = state.value;
    document.getElementById("postal-code1").innerText = postalCode.value;
    document.getElementById("room-type1").innerText = roomOption.value;
    document.getElementById("num-adults1").innerText = numAdults.value;
    document.getElementById("num-nights1").innerText = numNights.value;
    document.getElementById("pickup-date1").innerHTML = pickupDate.value;
    document.getElementById("pickup-time1").innerText = pickupTime.value + " " + ampmSelect.value;
    document.getElementById("shuttle-service1").innerHTML = shuttleYes.checked ? "Yes" : "No";
    document.getElementById("shuttle-service1").innerHTML += shuttleYes.checked ? "<br>Pickup Location: " + pickupLocation1.value : "";
    document.getElementById("pickup-location2").innerText = pickupLocation2.value;
    document.getElementById("shuttle-location1").innerHTML = shuttleYes.checked ? "Shuttle Location: " + pickupLocation1.value : "No Shuttle Service";

    return true;
}
