// Profile photo upload
        document.getElementById('editPhotoBtn').onclick = function() {
            document.getElementById('profilePhotoInput').click();
        };
        document.getElementById('profilePhotoInput').onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(ev) {
                    document.getElementById('profilePhoto').src = ev.target.result;
                };
                reader.readAsDataURL(file);
            }
        };

        // Address form save
        document.getElementById('addressForm').onsubmit = function(e) {
            e.preventDefault();
            // Collect address data
            const address = {
                street: document.getElementById('addressStreet').value,
                country: document.getElementById('addressCountry').value,
                city: document.getElementById('addressCity').value,
                state: document.getElementById('addressState').value,
                zip: document.getElementById('addressZip').value,
                isDefault: document.getElementById('addressDefault').checked
            };
            // TODO: Send address to backend
            alert('Address saved!\n' + JSON.stringify(address, null, 2));
        };

        // General info form save
        document.getElementById('generalForm').onsubmit = function(e) {
            e.preventDefault();
            // Collect general info
            const info = {
                firstName: document.getElementById('generalFirstName').value,
                lastName: document.getElementById('generalLastName').value,
                gender: document.getElementById('generalGender').value,
                dob: document.getElementById('generalDOB').value,
                phone: document.getElementById('generalPhone').value,
                email: document.getElementById('generalEmail').value,
                password: document.getElementById('generalPassword').value
            };
            // TODO: Send info to backend
            alert('General info saved!\n' + JSON.stringify(info, null, 2));
        };