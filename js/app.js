/* search phone */
const searchPhone = () => {
  const input = document.getElementById("input-value");
  const inputValue = input.value;

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
  resultContainer.innerHTML = "";
  phones.forEach((phone) => {
    // console.log(phone);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    
        <div class="custom-card">
            <div class="text-center">
                <img
                    src="${phone.image}"
                    class="w-75"
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
  });
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
  console.log(phone.mainFeatures);
  const modalBody = document.getElementById("modal-body");
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
                  <p>Release date: 22 february 2022</p>
                  <p>Brand: ${phone.brand}</p>

                  <h5 class="modal-subtitle">Main features</h5>
                  <p>Storage: ${phone.mainFeatures.storage}</p>
                  <p>Display Size: ${phone.mainFeatures.displaySize}</p>
                  <p>Memory: ${phone.mainFeatures.memory}</p>

                  <h5 class="modal-subtitle">Others</h5>
                  <p>Release date: 22 february 2022</p>
                  <p>Brand: Samsung</p>
  
  
  
  
  `;
  modalBody.appendChild(div);
};
