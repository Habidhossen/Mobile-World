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
    console.log(phone);
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
            <button id="" class="details-btn w-100">Details</button>
        </div>
    
    `;
    resultContainer.appendChild(div);
  });
};
