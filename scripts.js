function addDate() {

    var footer = document.querySelector("footer");

    if (!footer) return;

    var p = document.createElement("p");

    var date = new Date();

    var text = document.createTextNode("Page loaded on: " + date);

    p.appendChild(text);
    footer.appendChild(p);
}


function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");

    if (!name || !email) return true;

    if (name.value === "" || email.value === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    return true;
}


function toggleDesc(id) {
    var desc = document.getElementById(id);

    if (!desc) return;

    if (desc.style.display === "none") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}


window.onload = function () {

    var quote = document.getElementById("quote");

    if (quote) {

        // حفظ القيم الأصلية
        var originalBg = quote.style.backgroundColor;
        var originalFont = quote.style.fontStyle;

        quote.addEventListener("mouseover", function () {
            quote.style.backgroundColor = "lightgray";
            quote.style.fontStyle = "italic";
        });

        quote.addEventListener("mouseout", function () {
            // الرجوع للحالة الأصلية
            quote.style.backgroundColor = originalBg;
            quote.style.fontStyle = originalFont;
        });
    }

    addDate();
};