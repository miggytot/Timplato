// Category and Subcategory logic
const categorySelect = document.getElementById('productCategory');
const subCategorySelect = document.getElementById('productSubCategory');
const subCategories = {
    "Cookware": ["Pots & Pans", "Cookware Sets", "Specialty Cookware"],
    "Kitchen Tools & Utensils": ["Cutting Tools", "Cooking Utensils", "Preparation Tools"],
    "Table & Serving": ["Plates & Bowls", "Drinkware", "Serving Tools"]
};
categorySelect.addEventListener('change', function() {
    const selected = categorySelect.value;
    subCategorySelect.innerHTML = '<option value="">Select Sub-Category</option>';
    if (subCategories[selected]) {
        subCategories[selected].forEach(sub => {
            const opt = document.createElement('option');
            opt.value = sub;
            opt.textContent = sub;
            subCategorySelect.appendChild(opt);
        });
    }
});

// Image upload logic
const imageUploadList = document.getElementById('imageUploadList');
const productImagesInput = document.getElementById('productImages');
const clearAllBtn = document.getElementById('clearAllImages');
let imageFiles = [];

productImagesInput.addEventListener('change', function(e) {
    Array.from(e.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(ev) {
            const imgBox = document.createElement('div');
            imgBox.className = 'uploaded-image-box';
            imgBox.innerHTML = `
                <img src="${ev.target.result}" alt="Product Image">
                <button type="button" class="remove-image-btn">Remove</button>
            `;
            imgBox.querySelector('.remove-image-btn').onclick = function() {
                imgBox.remove();
            };
            imageUploadList.appendChild(imgBox);
        };
        reader.readAsDataURL(file);
    });
    // Reset input so same file can be uploaded again if needed
    productImagesInput.value = '';
});

clearAllBtn.addEventListener('click', function() {
    document.querySelectorAll('.uploaded-image-box').forEach(box => box.remove());
});