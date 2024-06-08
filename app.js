// Assignment No 2 Start

// Q2
const brandModels = {
  apple: ["iPhone 13", "iPhone 12", "iPhone 11"],
  samsung: ["Galaxy S21", "Galaxy Note 20", "Galaxy A52"],
  oneplus: ["OnePlus 9", "OnePlus 8T", "OnePlus Nord"],
};

function populateModels() {
  const brandSelect = document.getElementById("brand");
  const modelSelect = document.getElementById("model");
  const selectedBrand = brandSelect.value;

  // Clear previous models
  modelSelect.innerHTML = '<option value="">--Select Model--</option>';

  if (selectedBrand) {
    const models = brandModels[selectedBrand];
    models.forEach((model) => {
      const option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  }
}

function showSelection() {
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const resultDiv = document.getElementById("result");

  if (brand && model) {
    resultDiv.textContent = `Selected Brand: ${
      brand.charAt(0).toUpperCase() + brand.slice(1)
    }, Model: ${model}`;
  } else {
    resultDiv.textContent = "Please select both a brand and a model.";
  }
}

// Assignment No 2 End
