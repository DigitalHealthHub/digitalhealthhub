// document.addEventListener("DOMContentLoaded", () => {
//     const videoOverlay = document.getElementById("video-overlay");
//     const mainContent = document.getElementById("main-content");
//     const introVideo = document.getElementById("intro-video");

//     // Show content when the video ends
//     introVideo.addEventListener("ended", () => {
//         videoOverlay.style.display = "none"; // Hide the video overlay
//         mainContent.style.display = "block"; // Show the main content
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".bloodtypelist a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            // Extract the target section from the href
            const href = link.getAttribute("href");
            if (href.includes("#")) {
                const [page, id] = href.split("#");
                sessionStorage.setItem("scrollTo", id);
                window.location.href = page; // Redirect to bloodtype.html
            }
        });
    });
});

// Back to Top Button Logic
const backToTopBtn = document.querySelector('.back-to-top-btn');

// Show or hide the back-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Placeholder function for Chatbot
function openChatbot() {
    alert('Chatbot will be implemented soon!');
}

