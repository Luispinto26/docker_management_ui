window.onload = function () {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get Save Button
    var saveBtn = document.getElementById("btnSave");

    saveBtn.addEventListener("click", function () {
        saveData();
    });

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal()
        }
    }

    function closeModal() {
        modal.style.display = "none";
    }

    // Get the upload image input element
    const uploadImage = document.getElementById("uploadImage");

    var imageUrl = ""
    uploadImage.addEventListener("change", function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            imageUrl = e.target.result;
        };

        reader.readAsDataURL(file);
    });



    // Save data from the form
    function saveData() {
        const input1Value = document.getElementById("input1").value;
        const input2Value = document.getElementById("input2").value;
        const protocolValue = document.getElementById("protocol").value;

        // Create a new button element
        const newButton = document.createElement("div");
        newButton.classList.add("example-2", "card");

        // Get the current date
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString('default', { month: 'short' });
        const year = currentDate.getFullYear();


        newButton.innerHTML = `
            <div id="cardId" class="wrapper">
                <div class="header">
                    <div class="date">
                        <span class="day">${day}</span>
                        <span class="month">${month}</span>
                        <span class="year">${year}</span>
                    </div>
                </div>
                <div class="data">
                    <div class="content">
                        <h1 class="title"><a href="#">${input1Value}</a></h1>
                    </div>
                </div>
            </div>
        `;

        // Get the container for all buttons
        const buttonsContainer = document.getElementById("buttonsContainer");

        // Get the last button in the container
        const lastButton = buttonsContainer.lastElementChild;

        // Insert the new button before the last button
        buttonsContainer.insertBefore(newButton, lastButton);

        // Get the container wrapper element
        const containerWrapper = document.getElementById("cardId");
        containerWrapper.style.background = `url(${imageUrl}) center/cover no-repeat`;

        // Close the modal
        closeModal();
    }
};
