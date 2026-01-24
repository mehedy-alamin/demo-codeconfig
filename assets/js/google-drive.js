
// google drive home banner tab start
const ccpigdTabSlider = document.querySelector(".ccpigd-hero-tab");
if (ccpigdTabSlider) {
document.addEventListener("DOMContentLoaded", function() {
    const tabContent = document.querySelector(".ccpigd-tab-content");
    const buttons = document.querySelectorAll(".ccpigd-tab-header .buttons button");
    const images = document.querySelectorAll(".ccpigd-tab-content .tab-image-wrapper");

    let currentIndex = 0;
    let intervalTime = 4000; // 4 seconds
    let autoPlay;

    function activateTab(index) {
        buttons.forEach(b => b.classList.remove("active"));
        images.forEach(img => img.classList.remove("active"));

        buttons[index].classList.add("active");
        images[index].classList.add("active");

        currentIndex = index;
    }

    // AUTO ROTATE
    function startAutoPlay() {
        autoPlay = setInterval(() => {
            let nextIndex = (currentIndex + 1) % buttons.length;
            activateTab(nextIndex);
        }, intervalTime);
    }

    function stopAutoPlay() {
        clearInterval(autoPlay);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // CLICK = Change tab + restart autoplay
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            activateTab(index);
            resetAutoPlay();
        });
    });

    // PAUSE ONLY WHEN HOVERING tab-content (image area)
    tabContent.addEventListener("mouseenter", stopAutoPlay);
    tabContent.addEventListener("mouseleave", startAutoPlay);

    // Start autoplay
    startAutoPlay();
});
}
// google drive home banner tab end

// Pricing Tab start
document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".tab-buttons button");
    const priceWrappers = document.querySelectorAll(".price-wrapper");
    const offerBadges = document.querySelectorAll(".offer-badge");
    const buyButtons = document.querySelectorAll(".google-drive-purchase");

    // ---- Pricing Tab Switching ----
    buttons.forEach((btn) => {
        btn.addEventListener("click", function () {

            const plan = this.classList[2]; // personal, business, professional...
            const siteAmount = this.getAttribute("site-amount");
            const planId = this.getAttribute("plan-id");

            // Toggle active button
            buttons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            // Update price
            updatePrices(plan);

            // Update offer badges
            updateBadges(plan);

            // Update Buy Now buttons
            updateBuyButtons(siteAmount, planId);
        });
    });

    // ---- Price Switcher ----
    function updatePrices(plan) {
        priceWrappers.forEach(wrapper => {
            wrapper.classList.remove("active");

            if (wrapper.dataset.id === plan) {
                wrapper.classList.add("active");
            }
        });
    }

    // ---- Badge Switcher ----
    function updateBadges(plan) {
        offerBadges.forEach(badge => {
            badge.classList.remove("active");

            if (badge.dataset.id === plan) {
                badge.classList.add("active");
            }
        });
    }

    // ---- Buy Button Update ----
    function updateBuyButtons(siteAmount, planId) {
        buyButtons.forEach(btn => {
            btn.setAttribute("data-sites", siteAmount);
            btn.setAttribute("data-planid", planId);
        });
    }

    // ---- Trigger default active (Professional) ----
    const defaultActive = document.querySelector(".tab-buttons .active");
    if (defaultActive) defaultActive.click();

});
// Pricing Tab end



