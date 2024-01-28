let answer = document.querySelectorAll(".faqsbox");

answer.forEach((event) => {
    event.addEventListener("click", () => {
        answer.forEach((other) => {
            if (other !== event && other.classList.contains("active")) {
                other.classList.remove("active");
            }
        });

        if (event.classList.contains("active")) {
            event.classList.remove("active");
        } else {
            event.classList.add("active");
        }
    });
})