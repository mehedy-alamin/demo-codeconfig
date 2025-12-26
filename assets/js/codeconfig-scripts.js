// #####################################Global For CodeConfig Theme######################################## //
(function ($) {
  //Header Hight Calculation
  function updateHeaderHeights() {
    const ccCommonHeader = document.querySelector("#cc-header");
    const ccAnnounceBar = document.querySelector("#countDownTimerSection");
    const ccAdminBar = document.querySelector("#wpadminbar");
    const headerHeight = ccCommonHeader?.clientHeight || 0;

    const announceBarHeight = ccAnnounceBar?.clientHeight || 0;
    const adminBarHeight = ccAdminBar?.clientHeight || 0;
    // const only_header_height = ccCommonHeader?.clientHeight || 0;

    const header_announce_admin_height =
      headerHeight + announceBarHeight + adminBarHeight;
    const admin_announce_height = adminBarHeight + announceBarHeight;
    const header_announce_height = headerHeight + announceBarHeight;

    document.body.style.setProperty(
      "--header-height",
      `${header_announce_admin_height}px`
    );
    document.body.style.setProperty(
      "--header-top-space",
      `${admin_announce_height}px`
    );
    document.body.style.setProperty(
      "--header-announce-height",
      `${header_announce_height}px`
    );

    document.body.style.setProperty(
      "--only-header-height",
      `${headerHeight}px`
    );
  }

  //Common Header For CodeConfig
  function ccpCommonHeader() {
    const common_header = document.getElementById("cc-header");
    const hamburger_menu_open = document.querySelector(".ccp-mobile-menu-open");
    const hamburger_menu_close = document.querySelector(
      ".ccp-mobile-menu-close"
    );

    if (common_header && hamburger_menu_open) {
      // common_header.classList.add("sticky-bar", "sticky-hero");

      hamburger_menu_open.addEventListener("click", function () {
        common_header.classList.toggle("ccp-mobile-menu-active");
      });
      hamburger_menu_close?.addEventListener("click", function () {
        if (common_header.classList.contains("ccp-mobile-menu-active")) {
          common_header.classList.remove("ccp-mobile-menu-active");
        }
      });

      let lastScrollY = window.scrollY;
      let removeStickyTimeout;

      function stickyFunction() {
        return setTimeout(function () {
          common_header.classList.remove("sticky-bar");
        }, 2000);
      }

      // Add sticky behavior based on scroll
      window.onscroll = function () {
        let currentScrollY = window.scrollY;

        if (window.pageYOffset > 1) {
          common_header.classList.add("sticky");
        } else {
          common_header.classList.remove("sticky");
        }

        if (currentScrollY < 500) {
          if (removeStickyTimeout) {
            clearTimeout(removeStickyTimeout);
          }
          common_header.classList.add("sticky-bar");
          common_header.classList.add("sticky-hero");
          return;
        }

        if (currentScrollY > lastScrollY) {
          clearTimeout(removeStickyTimeout);
          removeStickyTimeout = stickyFunction();
          common_header.classList.remove("sticky-hero");
        } else {
          clearTimeout(removeStickyTimeout);
          common_header.classList.add("sticky-bar");
        }

        lastScrollY = currentScrollY;
      };

      common_header.addEventListener("mouseover", function () {
        clearTimeout(removeStickyTimeout);
        common_header.classList.add("sticky-bar");
      });

      common_header.addEventListener("mouseout", function () {
        removeStickyTimeout = stickyFunction();
      });
    }
  }

  // Accordion Script //
  function initializeAccordion() {
    $(".cc-accordion").each(function () {
      const accordion = $(this);
      const accordionItems = accordion.find(".accordion-item");
      const accordionHeaders = accordion.find(".accordion-head");
      const accordionDefaultClose = accordion.find(".default-close");

      // Open the first item by default
      const firstItem = accordionItems.first();
      if (accordionDefaultClose.length > 0) {
        firstItem.removeClass("open-body");
        firstItem.find(".accordion-body").hide();
      } else {
        firstItem.addClass("open-body");
        firstItem.find(".accordion-body").show();
      }
      // Close all other items by default
      accordionItems.slice(1).find(".accordion-body").hide();
      accordionItems.slice(1).removeClass("open-body");

      if ($(".accordion-another-item").length > 0) {
        $(".accordion-another-item").first().addClass("open-another-body");
      }
      // Add toggle functionality
      accordionHeaders.each(function () {
        $(this).on("click", function () {
          const body = $(this).siblings(".accordion-body");
          const parentItem = $(this).closest(".accordion-item");

          // Close other open items in this group
          accordion.find(".accordion-body").not(body).slideUp(300);
          accordion
            .find(".accordion-item")
            .not(parentItem)
            .removeClass("open-body");

          // Toggle the current item
          body.slideToggle(300);
          parentItem.toggleClass("open-body");

          if ($(".accordion-another-item").length > 0) {
            $(".accordion-another-item").each(function () {
              if (
                parentItem.hasClass("open-body") &&
                parentItem.data("id") === $(this).data("id")
              ) {
                $(this).addClass("open-another-body");
              } else {
                $(this).removeClass("open-another-body");
              }
            });
          }
        });
      });

      // Additional For Eaw //
    });
  }

  // Campaign bar & count Down star
  function countDownTimer() {
    const timerSection = document.getElementById("countDownTimerSection");
    let cc_countDownDate = setInterval(function () {
      // Get the current time
      let now = new Date().getTime();

      // Retrieve the countdown date from the dataset
      // const countDownElement = document.getElementById("cc-countDownTimer");
      const countDownElement = document.querySelectorAll(".cc-countDown");
      if (!countDownElement) {
        clearInterval(cc_countDownDate);
        return; // Exit if the countdown element is not found
      }

      if (countDownElement.length > 0) {
        countDownElement.forEach((item) => {
          const countDownDate = item.dataset.endEvent;
          const countDownTime = new Date(countDownDate).getTime();

          // Calculate the time difference
          let distance = countDownTime - now;

          // Calculate days, hours, minutes, and seconds
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Check if the necessary elements exist
          const daysElement = item.querySelector(".days");
          const hoursElement = item.querySelector(".hours");
          const minutesElement = item.querySelector(".minute");
          const secondsElement = item.querySelector(".second");

          if (daysElement && hoursElement && minutesElement && secondsElement) {
            // Update the countdown display
            daysElement.innerHTML = String(days).padStart(2, "0");
            hoursElement.innerHTML = String(hours).padStart(2, "0");
            minutesElement.innerHTML = String(minutes).padStart(2, "0");
            secondsElement.innerHTML = String(seconds).padStart(2, "0");
          }

          // If the countdown is over, stop the interval and show "00:00:00:00"
          if (distance < 0) {
            clearInterval(cc_countDownDate);
            document.getElementById("cc-countDownTimer").innerHTML =
              "<h6>Time's up! Offer closing.</h6>";
            if (timerSection) {
              timerSection.remove();
            }
          }
        });
      }
    }, 1000);

    const campaign_close_btn = document.getElementById("cc-campaign-close");
    const campaignOfferButton = document.querySelector(".cc-banner-button");

    if (campaign_close_btn) {
      campaign_close_btn.addEventListener("click", (e) => {
        e.stopPropagation();

        if (timerSection) {
          timerSection.remove();
        }
      });
    }
    if (timerSection) {
      timerSection.addEventListener("click", () => {
        window.location.href = campaignOfferButton.href;
      });
    }
  }

  // Scroll to top Button start
  function scrollToTop() {
    const cc_scroll_top_button = document.querySelector(".cc-scroll-top-btn");
    if (cc_scroll_top_button) {
      cc_scroll_top_button.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }

  // Review Item Calculate
  function reviewItemCalculate() {
    const codeConfigReviews = document.querySelector(".cc-reviews");
    if (codeConfigReviews) {
      const reviewItems = document.querySelectorAll(".cc-review-item");

      if (reviewItems.length <= 3) {
        codeConfigReviews.classList.add("limited-reviews");
      }
    }
  }

  // Cookie Setup Function

  function setCookie(name, value, hours, years) {
    let expires = new Date();
    if (years) {
      expires.setFullYear(expires.getFullYear() + years);
    } else {
      expires.setTime(expires.getTime() + hours * 60 * 60 * 1000);
    }
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }

  function getCookie(name) {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith(name + "="))
      ?.split("=")[1];
  }

  function ccCookie() {
    const cookiePopups = document.querySelectorAll(".cc-cookie-body");
    cookiePopups.forEach((popup, index) => {
      const popupId =
        popup.getAttribute("data-cookie-id") || `codeconfig-cookie-${index}`;
      const lifetime = popup.hasAttribute("lifetime-cookie");
      const hours = parseInt(popup.getAttribute("data-hours")) || 24;
      const btn = popup.querySelector(".cc-cookie-close-btn");

      if (getCookie(popupId) === "true") {
        popup.style.display = "none";
        return;
      }

      setTimeout(() => popup.classList.add("active-cookie"), 2000);

      btn?.addEventListener("click", () => {

        popup.classList.remove("active-cookie");
        setTimeout(() => (popup.style.display = "none"), 1000);

        if (lifetime) {
          setCookie(popupId, "true", null, 10);
        } else {
          setCookie(popupId, "true", hours);
        }
      });
    });
  }

  function clarityCookie() {
    const actionButton = document.getElementById("cc-clarity-cookie-btn");
    if (!actionButton) return;
    actionButton.addEventListener("click", () => {
       window.dataLayer = window.dataLayer || [];
       dataLayer.push({
         'event': 'cookie_accepted',
         'cookie_type': 'analytics'
        });
    });
  }


  // Pop Up Section
  function windowTokenPop() {
    const tokenPopUpActive = document.getElementById("cc-token-popup");
    const tokenPopUpClose = document.getElementById("cc-token-close");
    const secretTokenArea = document.querySelector(".cc-secret-token-area");
    const tokenPopUpFarm = tokenPopUpActive?.querySelector(".popup-fame");
    const secretTokenFill = document.getElementById("cc-secret-token");
    const PopUpbutton = document.getElementById("cc-popup-button");

    let popupTriggered = false;

    if (tokenPopUpActive) {
      setTimeout(
        () => {
          if (!tokenPopUpActive.classList.contains("active-popup")) {
            tokenPopUpActive.classList.add("active-popup");
            popupTriggered = true;
          }
        },
        window.innerWidth <= 768 ? 10000 : 30000
      );

      document.addEventListener("mouseleave", () => {
        if (!popupTriggered) {
          tokenPopUpActive.classList.add("active-popup");
          popupTriggered = true;
        }
      });

      document.addEventListener("mouseout", (e) => {
        

        if (!popupTriggered && e.clientY <= 0) {
          tokenPopUpActive.classList.add("active-popup");
          popupTriggered = true;
        }
      });
    }

    // Copy token
    function copyText() {
      if (secretTokenFill) {
        const text = secretTokenFill.innerText;
        if (!text) return;
        const input = document.createElement("input");
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        secretTokenArea?.classList.add("copied-text");
      }
    }

    if (secretTokenArea) {
      secretTokenArea.addEventListener("click", copyText);
    }

    // Close popup
    function closePopup() {
      if (tokenPopUpActive) {
        tokenPopUpActive.classList.remove("active-popup");
        setCookie(
          tokenPopUpActive.getAttribute("data-cookie-id"),
          "true",
          tokenPopUpActive.getAttribute("data-hours")
        );
      }
    }

    if (tokenPopUpClose) tokenPopUpClose.addEventListener("click", closePopup);
    if (PopUpbutton) PopUpbutton.addEventListener("click", closePopup);
    if (tokenPopUpActive && tokenPopUpFarm) {
      tokenPopUpActive.addEventListener("click", (e) => {
        if (!tokenPopUpFarm.contains(e.target)) closePopup();
      });
    }
  }

  // Popup Video
  function ccPopupVideo() {
    const popupParentSection = document.querySelectorAll(".cc-popup-section");

    if (popupParentSection.length > 0) {
      popupParentSection.forEach((section) => {
        const videoPopupActive = section.querySelector(".cc-popup-active-btn");
        const videoPopupClose = section.querySelector(".cc-popup-close-btn");
        const videoPopupFrame = section.querySelector(".cc-video-popup");

        const videoSrc = videoPopupFrame.querySelector("iframe");

        videoPopupActive.addEventListener("click", () => {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          section.classList.add("active-popup");
        });

        videoPopupClose.addEventListener("click", () => {
          section.classList.remove("active-popup");
          videoSrc.src = videoSrc.src;
        });
      });
    }
  }

  // Count Number
  function countNumber() {
    const counters = document.querySelectorAll(".cc-counter-number");
    let hasAnimated = false;

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight - 100;
    }

    function startCounting(counter) {
      const endNumber = parseFloat(counter.getAttribute("data-count"));
      if (isNaN(endNumber)) return;

      let current = 0;
      const steps = endNumber < 100 ? endNumber : 30;
      const step = endNumber / steps;
      let stepCount = 0;

      function updateCounter() {
        current += step;
        stepCount++;

        const formatted = Number.isInteger(endNumber)
          ? Math.round(current)
          : current.toFixed(1);

        counter.textContent = formatted;

        if (stepCount >= steps) {
          counter.textContent = Number.isInteger(endNumber)
            ? endNumber
            : endNumber.toFixed(1);
          return;
        }

        // Slow down for the last 5 steps
        const delay = steps - stepCount <= 5 ? 300 : 80;
        setTimeout(updateCounter, delay);
      }

      updateCounter();
    }

    function handleScroll() {
      if (!hasAnimated) {
        counters.forEach((counter) => {
          if (isInViewport(counter)) {
            startCounting(counter);
            hasAnimated = true;
          }
        });
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);
  }

  // Pricing
  function PricingPageButton() {
    const pricingCheckbox = document.getElementById("ccp-pricing-trigger-area");
    const annualCheckbox = document.getElementById("ccp-pricing-annual");
    const lifetimeCheckbox = document.getElementById("ccp-pricing-lifetime");

    const regularPrices = document.querySelectorAll(".regular-price");
    const offerAmounts = document.querySelectorAll(".offer-amount");
    const offerPrices = document.querySelectorAll(".offer-price");
    const packageDurations = document.querySelectorAll(".duration");
    const tableFeaturesSupport = document.querySelectorAll(
      ".eaw-pricing-table .support-row .pro-col"
    );

    const pricingData = [];

    // Gather pricing data
    regularPrices.forEach((priceElementRegular, index) => {
      pricingData.push({
        regularAnnualPrice:
          priceElementRegular.getAttribute("regular-annual") || "0",
        regularLifeTimePrice:
          priceElementRegular.getAttribute("regular-life") || "0",
        annualOfferAmount:
          offerAmounts[index]?.getAttribute("amount-annual") || "0",
        lifeTimeOfferAmount:
          offerAmounts[index]?.getAttribute("amount-life") || "0",
        annualOfferPrice:
          offerPrices[index]?.getAttribute("offer-annual") || "0",
        lifeTimeOfferPrice:
          offerPrices[index]?.getAttribute("offer-life") || "0",
      });
    });

    // Handle Annual Plan Click
    if (annualCheckbox) {
      annualCheckbox.addEventListener("click", function () {
        pricingCheckbox.classList.add("active-annual");
        pricingCheckbox.classList.remove("active-lifetime");
        productPricing("annual");
      });
    }

    // Handle Lifetime Plan Click
    if (lifetimeCheckbox) {
      lifetimeCheckbox.addEventListener("click", function () {
        pricingCheckbox.classList.add("active-lifetime");
        pricingCheckbox.classList.remove("active-annual");
        productPricing("lifetime");
      });
    }

    // Function to update pricing based on selected plan
    function productPricing(planType) {
      regularPrices.forEach((priceElementRegular, index) => {
        const priceData = pricingData[index];

        // Update Regular Price
        priceElementRegular.innerHTML =
          planType === "annual"
            ? `${priceData.regularAnnualPrice}`
            : `${priceData.regularLifeTimePrice}`;

        // Update Offer Amount
        if (offerAmounts[index]) {
          offerAmounts[index].innerHTML =
            planType === "annual"
              ? `${priceData.annualOfferAmount}`
              : `${priceData.lifeTimeOfferAmount}`;
        }

        // Update Offer Price
        if (offerPrices[index]) {
          offerPrices[index].innerHTML =
            planType === "annual"
              ? `${priceData.annualOfferPrice}`
              : `${priceData.lifeTimeOfferPrice}`;
        }

        // Update Support Features
        if (tableFeaturesSupport[index]) {
          tableFeaturesSupport[index].innerHTML =
            planType === "annual" ? "1 Year" : "Free Lifetime";
        }

        // Update Package Duration
        if (packageDurations[index]) {
          if (index === 0) {
            return;
          }

          const ann = packageDurations[index].dataset["annual"];
          const life = packageDurations[index].dataset["life"];

          packageDurations[index].innerText =
            planType === "annual" ? ann : life;

          const element = packageDurations[index];

          // Remove both potential classes
          element.classList.remove("annual", "lifetime");

          // Add the current plan class
          element.classList.add(planType === "annual" ? "annual" : "lifetime");
        }
      });
    }
  }

  // Global On Load
  function codeConfigGlobalOnLoad() {
    updateHeaderHeights();
    ccpCommonHeader();
    countDownTimer();
    countNumber();
    initializeAccordion();
    scrollToTop();
    ccPopupVideo();
    reviewItemCalculate();
    windowTokenPop();
    PricingPageButton();
    ccCookie();
    clarityCookie();
  }
  window.addEventListener("DOMContentLoaded", codeConfigGlobalOnLoad);

  // Recalculate on transition end
  window.addEventListener("transitionend", () => {
    updateHeaderHeights();
  });

  //################### Default For CodeConfig Theme ################################//

  // Announcement Bar Load
  function announcementBarLoad() {
    const ccAnnounceBar = document.getElementById("countDownTimerSection");

    if (!ccAnnounceBar) return;

    if (ccAnnounceBar.classList.contains("inactive-bar")) {
      ccAnnounceBar.classList.remove("inactive-bar");
    }
  }
  function heroSpecialWord() {
  const specialWord = document.querySelectorAll(
    ".cc-hero-heading .special-word"
  );
  const commonWord = document.querySelector(".cc-hero-heading h1 span");

  if (!commonWord || !specialWord) return;

  commonWord.setAttribute("data-text", commonWord.innerText.trim());

  const specialWordsArray = [];

  specialWord.forEach((word) => {
    specialWordsArray.push(word.innerText);
  });

  if (commonWord.innerText.trim()) {
    specialWordsArray.push(commonWord.innerText.trim());
  }

  let currentIndex = 0;
  function updateWord() {
    commonWord.classList.remove("active");
     commonWord.classList.remove("exit-word");
    commonWord.classList.add("inter-word");
    commonWord.innerText = specialWordsArray[currentIndex];
    commonWord.setAttribute("data-text", specialWordsArray[currentIndex]);
    currentIndex = (currentIndex + 1) % specialWordsArray.length;
    
  setTimeout(() => {
    commonWord.classList.remove("inter-word");
    commonWord.classList.add("exit-word");
  }, 2700);
  
  }

  setInterval(updateWord, 3000);

}

  // Mobile Menu Dropdown
  function mobileMenuDropdown() {
    if (window.innerWidth <= 1024) {
      const menuItemChilden = document.querySelectorAll(
        ".menu-item-has-children"
      );

      const dropdownMenu = document.querySelectorAll(".dropdown-menu");

      dropdownMenu.forEach((item, i) => {
        $(item).click(function (e) {
          e.stopPropagation();
        });
      });
      if (menuItemChilden) {
        menuItemChilden.forEach((item, i) => {
          $(item).click(function (e) {
            if (e.target.nodeName === "SPAN") {
              return;
            }
            e.preventDefault();

            dropdownMenu.forEach((answer, index) => {
              if (i !== index && $(answer).is(":visible")) {
                $(answer).slideUp(300);
                $(menuItemChilden[index]).removeClass("active-dopdown-menu");
              }
            });

            if ($(dropdownMenu[i]).is(":hidden")) {
              $(dropdownMenu[i]).slideDown(300);
              $(item).addClass("active-dopdown-menu");
            } else {
              $(dropdownMenu[i]).slideUp(300);
              $(item).removeClass("active-dopdown-menu");
            }
          });
        });
      }
    }
  }

  // Mouse move color
  function mouseShadowHover() {
    document
      .querySelectorAll(".cc-mouse-shadow-hover-wrapper")
      .forEach((wrapper) => {
        const hoverBox = wrapper.querySelector(".cc-mouse-shadow-hover");

        if (!hoverBox) return;

        wrapper.addEventListener("mousemove", (e) => {
          const rect = wrapper.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const boxWidth = hoverBox.offsetWidth / 2;
          const boxHeight = hoverBox.offsetHeight / 2;

          const hoveredItem = document
            .elementFromPoint(e.clientX, e.clientY)
            ?.closest(".cc-service-item");

          if (hoveredItem) {
            const serviceColor = getComputedStyle(hoveredItem)
              .getPropertyValue("--cc-service-color")
              .trim();
            hoverBox.style.background = serviceColor;
          }

          requestAnimationFrame(() => {
            hoverBox.style.transform = `translate(${x - boxWidth}px, ${
              y - boxHeight
            }px)`;
          });
        });

        wrapper.addEventListener("mouseleave", () => {
          hoverBox.style.transform = `translate(-50%, -50%)`;
          hoverBox.style.background = ""; // Reset background color
        });
      });
  }

  function ccBlogGallerySlider() {
    // Select images inside blog content, excluding those with or inside .cc-blog-booster-ads
    $(".cc-blog-content img, .single-docs-content img").each(function () {
      var $img = $(this);

      // Skip images that:
      // 1. Have the class .cc-blog-booster-ads
      // 2. Are inside an element with that class
      if (
        $img.hasClass("cc-blog-booster-ads") ||
        $img.closest(".cc-blog-booster-ads").length
      ) {
        return; // skip this image
      }

      // Wrap image in <a> tag if not already
      if (!$img.parent().is("a")) {
        var imgSrc = $img.attr("src");

        var $a = $("<a>", {
          href: imgSrc,
          title: $img.attr("alt"),
          "data-gallery": "cc-blog-gallery",
          class: "cc-mfp-image",
        });

        $img.wrap($a);
      }
    });

    // Initialize Magnific Popup
    $(".cc-blog-content, .single-docs-content").magnificPopup({
      delegate: "a.cc-mfp-image",
      type: "image",
      mainClass: "mfp-with-zoom",
      gallery: {
        enabled: true,
        tPrev: "Previous (Left arrow)",
        tNext: "Next (Right arrow)",
        tCounter: "%curr% of %total%",
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
        opener: function (openerElement) {
          return openerElement.is("img")
            ? openerElement
            : openerElement.find("img");
        },
      },
    });
  }

  //Docs search Box
  function ccDocsSearchBox() {
    const SelectSearch = $("#cc-docs-selectbox");

    // Trigger search by category change
    SelectSearch.on("change", function () {
      const catSlug = $(this).val();
      const data = { catSlug };

      SearchloadPosts(data);
      $(".codeconfig-docs-search-box").addClass("active-result");
    });

    // Trigger search on keyup
    $("#cc-docs-search-box").on("keyup", function () {
      const searchpost = $(this).val();

      SearchloadPosts({}, searchpost);

      if (searchpost.length > 0) {
        $(".codeconfig-docs-search-box").addClass("active-result");
      } else {
        $(".codeconfig-docs-search-box").removeClass("active-result");
      }
    });

    // Close search result
    $(document).on("click", ".cc-search-result .close-result", function () {
      $(".codeconfig-docs-search-box").removeClass("active-result");
    });

    // AJAX function to load posts
    function SearchloadPosts(data = {}, searchpost = "") {
      $("#cc-show-search-result").html(
        `<div class='preloader text-center'><img style='width: auto;' src="${ajax.preloader}" /></div>`
      );

      wp.ajax
        .post("search_loadmore_posts", { data, searchpost })
        .done((res) => {
          if (res && res.page) {
            $("#cc-show-search-result").html(res.page);
          } else {
            $("#cc-show-search-result").html("<p>No results found.</p>");
          }
        })
        .fail((err) => {
          console.error("AJAX error:", err);
          $("#cc-show-search-result").html("<p>Failed to load results.</p>");
        });
    }

    // Load default posts on page load
    SearchloadPosts();
  }

  function ccDocsReaction() {
    const feedbackArea = document.querySelector(".cc-user-feedback");
    if (!feedbackArea) return;

    const postId = feedbackArea.getAttribute("post-id");
    const likeBtn = document.getElementById("cc-user-feedback-like");
    const dislikeBtn = document.getElementById("cc-user-feedback-dislike");
    const feedbackMessage = feedbackArea.querySelector(
      ".cc-user-feedback-comment"
    );
    const feedbackSubmit = document.getElementById("cc-docs-feedback-submit");
    const authorName = document.getElementById("author");
    const authorMessage = document.getElementById("comment");
    const authorEmail = document.getElementById("user-email");
    const feedbackBox = feedbackArea.querySelector(".cc-user-feedback-box");
    const titleText = feedbackArea.querySelector(".cc-user-feedback-title");

    function reactionSuccess(msg) {
      if (titleText) {
        titleText.innerText = msg || "Thanks for your feedback!";
        titleText.style.color = "#28a745";
      }
      feedbackArea.classList.add("success-reaction");
    }

    // LIKE BUTTON
    likeBtn?.addEventListener("click", () => {
      feedbackBox?.classList.remove("reaction-dislike");
      feedbackBox?.classList.add("reaction-like");
      if (feedbackMessage) $(feedbackMessage).slideUp(300);

      if (getCookie("Codeconfig_Reaction-" + postId) === "like") {
        if (feedbackMessage) $(feedbackMessage).slideDown(300);
        feedbackMessage.innerText = "You have already liked this post.";
        return;
      }

      // Proceed with AJAX
      $.post(ajax.admin_ajax, {
        action: "cc_post_like",
        nonce: ajax.nonce,
        post_id: postId,
      }).done((res) => {
        if (res.success) {
          setCookie("Codeconfig_Reaction-" + postId, "like", 8760, null); // 1 year
          reactionSuccess("Thanks for your Reaction!");
        } else {
          alert(res.data.message);
        }
      });
    });

    // DISLIKE BUTTON
    dislikeBtn?.addEventListener("click", () => {
      feedbackBox?.classList.remove("reaction-like");
      feedbackBox?.classList.add("reaction-dislike");
      if (feedbackMessage) $(feedbackMessage).slideToggle(300);
    });

    // COMMENT SUBMIT
    function toggleSubmitState() {
      if (authorName?.value.trim() && authorMessage?.value.trim()) {
        feedbackSubmit?.removeAttribute("disabled");
      } else {
        feedbackSubmit?.setAttribute("disabled", "true");
      }
    }

    authorName?.addEventListener("input", toggleSubmitState);
    authorMessage?.addEventListener("input", toggleSubmitState);
    toggleSubmitState();

    feedbackSubmit?.addEventListener("click", (e) => {
      e.preventDefault();
      if (!authorMessage?.value.trim()) return;

      $.post(ajax.admin_ajax, {
        action: "cc_docs_feedback",
        nonce: ajax.nonce,
        post_id: postId,
        author: authorName.value,
        email: authorEmail?.value || "",
        comment: authorMessage.value,
      })
        .done((res) => {
          if (res.success) {
            if (feedbackMessage) {
              $(feedbackMessage).slideUp(300);
              feedbackMessage.innerText = res.data.message;
            }
            reactionSuccess(res.data.message);
            setCookie("Codeconfig_Reaction-" + postId, "dislike", 8760, null);
          } else {
            if (feedbackMessage)
              feedbackMessage.innerText =
                res.data.message || "Something went wrong!";
          }
        })
        .fail(() => {
          if (feedbackMessage)
            feedbackMessage.innerText = "AJAX request failed!";
        });
    });
  }

  // Contact Page Tab Switch
  function showTab() {
    const buttons = document.querySelectorAll(".cc-tab-buttons button");
    const formContent = document.querySelectorAll(".tab-content");

    if (buttons.length && formContent.length) {
      buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
          buttons.forEach((btn) => btn.classList.remove("active"));

          this.classList.add("active");

          formContent.forEach((content, i) => {
            content.classList.toggle("active", i === index);
          });
        });
      });
    }
  }

  //Notice Code Copy 
function ccNoticeCodeCopy() {
  const codeBlocks = document.querySelectorAll(".cc-blog-notice.code, .cc-docs-notice.code");

  if (!codeBlocks.length) return;

  codeBlocks.forEach((block) => {
    const codeHeader = document.createElement("p");
    codeHeader.className = "cc-notice-header";
    codeHeader.innerText = "Code";
    block.prepend(codeHeader);

    codeHeader.addEventListener("click", () => {
      const codeElement = block.querySelector("pre");
      if (!codeElement) return;

      const codeText = codeElement.innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        codeHeader.innerText = "Copied!";
        codeHeader.style.color = "#0061fe";

        setTimeout(() => {
          codeHeader.innerText = "Code";
          codeHeader.style.color = "#000000";
        }, 15000); 
      });
    });
  });
}



  // Blog Page Tab Switch
  function ccBlogTabSwitch() {
    if (window.innerWidth <= 768) {
      const tabsSelect = document.getElementById("tabs-select");
      if (tabsSelect) {
        tabsSelect.addEventListener("change", function () {
          const catsUrl = this.value;
          if (catsUrl) {
            window.location.href = catsUrl;
          }
        });
      }
    }
  }

  //Blog Reading Time and Progress Bar
  function ccBlogReadingTime_ProgressBar() {
    const ccReadingContent = document.querySelector(".cc-blog-content");
    const blogReadingTime = document.querySelector("#blog-reading-time");
    const ccBlogReadingProgressBar = document.querySelector(
      ".cc-blog-reading-progress-bar"
    );

    if (ccReadingContent && blogReadingTime) {
      const ccTextContent =
        ccReadingContent.innerText || ccReadingContent.textContent;
      const words = ccTextContent.trim().split(/\s+/); // Split on any whitespace
      const ccWordCount = words.length;
      let readingTime = ccWordCount / 240;

      if (!Number.isInteger(readingTime)) {
        readingTime = Math.ceil(readingTime); // Round up the reading time
      }
      // Print reading time in the blog-reading-time element
      blogReadingTime.innerText = `${readingTime}`;
    }

    // Blog Reading Progress Bar
    if (ccReadingContent && ccBlogReadingProgressBar) {
      const textContentHeight = ccReadingContent.offsetHeight;

      window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const scrollPercentage = (scrollPosition / textContentHeight) * 100;
        ccBlogReadingProgressBar.style.width = `${scrollPercentage}%`;
      });
    }
  }

  // Blog Tab Bar Arrow
  function ccBlogTabBarArrow() {
    const blogWrapperWidget = document.querySelector(".blog-filter-menu");
    if (!blogWrapperWidget) return;

    const scrollTab = blogWrapperWidget.querySelector(".tabs");
    if (!scrollTab) return;

    const isOverflowing = scrollTab.scrollWidth > scrollTab.clientWidth;

    // Remove existing arrows
    blogWrapperWidget
      .querySelectorAll(".overflowing-scrollbar")
      .forEach((btn) => btn.remove());

    if (!isOverflowing) return;

    // Create arrows
    const scrollBtnRight = document.createElement("span");
    const scrollBtnLeft = document.createElement("span");

    scrollBtnRight.className = "overflowing-scrollbar right-arrow";
    scrollBtnLeft.className = "overflowing-scrollbar left-arrow";

    blogWrapperWidget.appendChild(scrollBtnRight);
    blogWrapperWidget.prepend(scrollBtnLeft);

    // Initial button state
    const updateArrowState = () => {
      const maxScrollLeft = scrollTab.scrollWidth - scrollTab.clientWidth;

      if (scrollTab.scrollLeft <= 0) {
        scrollBtnLeft.classList.add("inactive");
      } else {
        scrollBtnLeft.classList.remove("inactive");
      }

      if (scrollTab.scrollLeft >= maxScrollLeft) {
        scrollBtnRight.classList.add("inactive");
      } else {
        scrollBtnRight.classList.remove("inactive");
      }
    };

    // Scroll handlers
    scrollBtnRight.addEventListener("click", (e) => {
      e.preventDefault();
      scrollTab.scrollBy({ left: 90, behavior: "smooth" });

      // Delay update to wait for scroll
      setTimeout(updateArrowState, 300);
    });

    scrollBtnLeft.addEventListener("click", (e) => {
      e.preventDefault();
      scrollTab.scrollBy({ left: -90, behavior: "smooth" });

      // Delay update to wait for scroll
      setTimeout(updateArrowState, 300);
    });

    // Update on scroll too (for dragging or touch scrolling)
    scrollTab.addEventListener("scroll", updateArrowState);

    // Initial update
    updateArrowState();
  }

  //Blog Table Responsive
  function blogTableResponsive() {
    const blogContentTables = document.querySelectorAll(
      ".cc-blog-content table"
    );
    if (!blogContentTables.length) return;
    blogContentTables.forEach((table) => {
      const tableWrapper = document.createElement("div");
      tableWrapper.className = "table-responsive";
      table.parentNode.insertBefore(tableWrapper, table);
      tableWrapper.appendChild(table);
    });
  }

  // Footer Review Slider
  function ccFooterReviewSlider() {
    const sliderWindow = document.querySelector(".cc-review-slider-window");

    if (sliderWindow) {
      const sliderItems = Array.from(sliderWindow.children);
      let currentIndex = 0;
      const intervalTime = 12000;

      function showSlide(index) {
        sliderItems.forEach((item, i) => {
          if (i === index) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }

      function moveSlider() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
      }

      showSlide(currentIndex);

      setInterval(moveSlider, intervalTime);
    }
  }

  //marquee Slider
  function ccMarqueeSlider() {
    const wrapper = document.querySelector(".cc-marquee-slider-wrapper");
    if (!wrapper) return;
    const track = wrapper.querySelectorAll(".cc-marquee-slider-track");
    if (!track) return;

    track.forEach((item) => {
      item.style.animationDuration = item.children.length * 7 + "s";
    });
  }

  function careerApplyForm() {
    const applyBtn = document.getElementById("cc-job-apply-button");
    const applyForm = document.getElementById("cc-job-apply-form");
    if (!applyForm || !applyBtn) return;

    $(applyBtn).click(function () {
      $(applyForm).slideToggle(300);
    });
  }

  // Default Load Function
  function codeConfigDefaultOnLoad() {
    mobileMenuDropdown();
    mouseShadowHover();
    ccDocsSearchBox();
    ccDocsReaction();
    blogTableResponsive();
    ccNoticeCodeCopy()
    ccBlogGallerySlider();
    ccBlogReadingTime_ProgressBar();
    ccBlogTabBarArrow();
    showTab();
    ccBlogTabSwitch();
    ccFooterReviewSlider();
    announcementBarLoad();
    heroSpecialWord();
    ccMarqueeSlider();
    careerApplyForm();
  }
  window.addEventListener("DOMContentLoaded", codeConfigDefaultOnLoad);
})(jQuery);
