/* search phone */
const searchPhone = () => {
  const input = document.getElementById("input-value");
  const inputValue = input.value;
  // call spinner
  loadingSpinner("block");
  // fetch data
  const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPhone(data.data));
  // clear input field
  input.value = "";
};

/* display phone */
const displayPhone = (phones) => {
  const resultContainer = document.getElementById("result-container");
  // clear content
  resultContainer.innerHTML = "";
  // condition check
  if (phones.length == 0) {
    // call alert message
    alertMessage("block");
  } 
  else {
    const first20Phone = phones.slice(0, 20);
    first20Phone.forEach((phone) => {
      // console.log(phone);
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
        <div class="custom-card">
            <div class="text-center">
                <img
                    src="${phone.image}"
                    class="w-50"
                    alt="..."
                />
            </div>
            <h5 class="phone-title">${phone.phone_name}</h5>
            <p class="phone-text">Brand: ${phone.brand}</p>

                <button
                  onclick="loadPhoneDetails('${phone.slug}')"
                  class="details-btn w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#see-details">Details
                </button>
            </div>
    `;
      resultContainer.appendChild(div);
      // call alert message
      alertMessage("none");
    });
  }
  // call spinner
  loadingSpinner("none");
};

/* load phone details */
const loadPhoneDetails = (phoneId) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPhoneDetails(data.data));
};

/* display phone details */
const displayPhoneDetails = (phone) => {
  const modalBody = document.getElementById("modal-body");
  // clear content
  modalBody.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("div");
  div.innerHTML = `
                <div class="text-center">
                    <img
                      src="${phone.image}"
                      class="w-50"
                      alt="..."
                    />
                  </div>
                  <h5 class="modal-phone-title">${phone.name}</h5>
                  <p>${
                    phone.releaseDate ? phone.releaseDate : "No release date found!"
                  }</p>
                  <p><span class="bold-modal-text" >Brand:</span> ${
                    phone.brand
                  }</p>

                  <h5 class="modal-subtitle">Main features</h5>

                  <p><span class="bold-modal-text">Storage:</span> ${
                    phone.mainFeatures.storage
                  }</p>
                  <p><span class="bold-modal-text">Memory:</span> ${
                    phone.mainFeatures.memory
                  }</p>
                  <p><span class="bold-modal-text">Display Size:</span> ${
                    phone.mainFeatures.displaySize
                  }</p>
                  <p><span class="bold-modal-text">Chipset:</span> ${
                    phone.mainFeatures.chipSet
                  }</p>
                  <p><span class="bold-modal-text">Sensors:</span> ${
                    phone.mainFeatures.sensors
                  }</p>

                  <h5 class="modal-subtitle">Others</h5>

                  <p><span class="bold-modal-text" >Bluetooth:</span> ${
                    phone?.others?.Bluetooth ? phone.others.Bluetooth : "No data found!"
                  }</p>
                  <p><span class="bold-modal-text" >GPS:</span> ${
                    phone?.others?.GPS ? phone.others.GPS : "No data found!"
                  }</p>
                  <p><span class="bold-modal-text" >NFC:</span> ${
                    phone?.others?.NFC ? phone.others.NFC : "No data found!"
                  }</p>
                  <p><span class="bold-modal-text" >Radio:</span> ${
                    phone?.others?.Radio ? phone.others.Radio : "No data found!"
                  }</p>
                  <p><span class="bold-modal-text" >USB:</span> ${
                    phone?.others?.USB ? phone.others.USB : "No data found!"
                  }</p>
                  <p><span class="bold-modal-text" >WLAN:</span> ${
                    phone?.others?.WLAN ? phone.others.WLAN : "No data found!"
                  }</p>
  
  `;
  modalBody.appendChild(div);
};

/* loading-spinner function */
const loadingSpinner = (value) => {
  document.getElementById("spinner").style.display = value;
};
/* alert-message function */
const alertMessage = (value) => {
  document.getElementById("alert").style.display = value;
};
