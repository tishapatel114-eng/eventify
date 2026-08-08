// =====================================================
// GUEST LIST
// =====================================================

document
    .getElementById("guestForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        let guestName =
            document.getElementById("guestName").value.trim();

        let guestContact =
            document.getElementById("guestContact").value.trim();

        let guestCount =
            document.getElementById("guestCount").value;

        let rsvpStatus =
            document.getElementById("rsvpStatus").value;


        if (guestName === "") {

            alert("Please enter Guest Name");

            return;
        }


        if (guestContact === "") {

            alert("Please enter Contact Number");

            return;
        }


        if (guestCount === "" || guestCount <= 0) {

            alert("Please enter Number of Guests");

            return;
        }


        if (rsvpStatus === "") {

            alert("Please select RSVP Status");

            return;
        }


        document.getElementById("guestResult").innerHTML = `

            <h3>Guest Added Successfully!</h3>

            <p>
                <strong>Guest Name:</strong>
                ${guestName}
            </p>

            <p>
                <strong>Contact Number:</strong>
                ${guestContact}
            </p>

            <p>
                <strong>Number of Guests:</strong>
                ${guestCount}
            </p>

            <p>
                <strong>RSVP Status:</strong>
                ${rsvpStatus}
            </p>

        `;


        document
            .getElementById("guestForm")
            .reset();

    });