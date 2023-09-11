gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 2.3,
    smoothTouch: true
});

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
lenis.raf(time * 1000);
})

$("#phone").intlTelInput({
    initialCountry: "in"
});

$("#phone2").intlTelInput({
    initialCountry: "in"
});

gsap.ticker.lagSmoothing(0);
ScrollTrigger.config(
    {
        autoRefreshEvents: "load",
    }
);

gsap.to(".main_heading", {
    y: 950,
    scrollTrigger: {
        trigger: ".main_section",
        start: "center bottom",
        endTrigger: ".images_overlay",
        end: "bottom center",
        scrub: true,
        // markers: true
    }
});

// gsap.to(".first_row", {
//     x: -400
// });

// gsap.to(".second_row", {
//     x: 100
// });

// gsap.to(".third_row", {
//     x: -400
// });

// gsap.to(".images_overlay .inner", {
//     y: -750
// });

gsap.to(".images_overlay", {
    width: "100%",
    scrollTrigger: {
        trigger: ".images_overlay",
        start: "top 90%",
        end: "top 25%",
        scrub: true,
    }
});

gsap.fromTo(".images_overlay .inner", {
    y: -750,
}, {
    y: -200,
    scrollTrigger: {
        trigger: ".images_overlay",
        start: "top bottom",
        end: "top top",
        scrub: true,
        // markers: true
    }
});

gsap.fromTo(".first_row", {
    x: -400,
}, {
    x: 0,
    scrollTrigger: {
        trigger: ".images_overlay",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        // markers: true
    }
});

gsap.fromTo(".second_row", {
    x: 100,
}, {
    x: -300,
    scrollTrigger: {
        trigger: ".images_overlay",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        // markers: true
    }
});

gsap.fromTo(".third_row", {
    x: -400,
}, {
    x: 100,
    scrollTrigger: {
        trigger: ".images_overlay",
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true
    }
});

gsap.to(".main_section .absolute_block", {
    y: -300,
    scrollTrigger: {
        trigger: ".images_overlay",
        start: "center 70%",
        end: "bottom top",
        scrub: true,
        // markers: true
    }
});

// const main = () => {
//     function getLineBreaks(node) {
//         // we only deal with TextNodes
//         if(!node || !node.parentNode || node.nodeType !== 3) {
//             return [];
//         }
//         // our Range object form which we'll get the characters positions
//         const range = document.createRange();
//         // here we'll store all our lines
//         const lines = [];
//         // begin at the first char
//         range.setStart(node, 0);
//         // initial position
//         let prevBottom = range.getBoundingClientRect().bottom;
//         let str = node.textContent;
//         let current = 1; // we already got index 0
//         let lastFound = 0;
//         let bottom = 0;
//         // iterate over all characters
//         while(current <= str.length) {
//           // move our cursor
//           range.setStart(node, current);
//           if(current < str.length -1)
//            range.setEnd(node, current+1);
//           bottom = range.getBoundingClientRect().bottom;
//           if(bottom > prevBottom) { // line break
//             lines.push(
//               str.substr(lastFound , current - lastFound) // text content
//             );
//             prevBottom = bottom;
//             lastFound = current;
//           }
//           current++;
//         }
//         // push the last line
//         lines.push(str.substr(lastFound));
//         return lines;
//     }
    
//     function linesSeperator(node, lines) {
//         node.innerHTML = "";
//         lines?.forEach(line => {
//             node.innerHTML += `<div class="animated_lines"><p>${line?.trim()}</p></div>`; 
//         });
//     }
    
//     const texts = document.querySelectorAll(".text_animate");
//     texts.forEach(text => {

//     // Check if the main <p> element contains nested <p> elements
//     let combinedText = '';
//     if (text.querySelectorAll('p').length > 0) {
//     // Select all the inner <p> elements within the main <p> element
//     let innerParagraphs = text.querySelectorAll('p');

//     // Initialize an empty string to store the combined text

//     // Iterate through the inner <p> elements and concatenate their text content
//     innerParagraphs.forEach(function(paragraph) {
//         combinedText += paragraph.innerText + ' '; // Add a space between paragraphs
//     });

//     // Remove extra spaces and trim the resulting text
//      combinedText = combinedText.trim();
//     } else {
//     // If there are no nested <p> elements, simply use the text content of the main <p> element
//         combinedText = text.innerText.trim();
//     }
//         text.innerHTML = combinedText;
//         const lines = getLineBreaks(text.childNodes[0]);
//         linesSeperator(text, lines);  
//     });
    
//     const linesItself = document.querySelectorAll(".animated_lines p");
//     linesItself.forEach(line => {        
//         gsap.to(line, {
//             y: 0,
//             rotate: 0,
//             scrollTrigger: {
//                 trigger: line.parentElement,
//                 toggleActions: "play complete play reverse",
//             }
//         });
//     });    
// }

// main();

// window.addEventListener("resize", (evt) => {
//     main();
// });

gsap.to(".scrubby_img", {
    y: -100,
    scrollTrigger: {
        trigger: ".content_section .img_wrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        // markers: true
    }
});

// Main Projects Section
const projectSelector = document.querySelectorAll(".project_selector a");
const gooey = document.querySelector(".project_selector .gooey");
const headings = document.querySelectorAll(".project_heading > div");

headings.forEach((heading, idx) => {
    gsap.to(heading, {
        width: "200px",
        borderRadius: "0 0 150px 150px",
        height: 100,
        scrollTrigger: {
            trigger: heading.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            onEnter: () => setPosition(projectSelector[idx]),
            onLeaveBack: () => setPosition(projectSelector[0]),
            // markers: true
        }
    });
    
    gsap.to(heading.querySelector(".hide_wrapper"), {
        opacity: 0,
        marginTop: -20,
        scrollTrigger: {
            trigger: heading.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            // markers: true
        }
    });
});

const projectOne = document.querySelector(".project_1");
const image = projectOne.querySelector(".left_content img");
ScrollTrigger.create({
    trigger: projectOne.querySelector(".point.main"),
    start: "top top",
    end: "bottom center",
    onEnter: () => {
      image.setAttribute("src", `/assets/images/2bhk/2bhk_master.jpg`);
    },
    onEnterBack: () => {
        image.setAttribute("src", `/assets/images/2bhk/2bhk_master.jpg`);
        document.querySelector(".project_selector").style.transform = "scaleY(0)";
    },
    onLeave: () => {
        document.querySelector(".project_selector").style.transform = "scaleY(1)";
        setTimeout(() => {
            setPosition(projectSelector[0]);
        }, 500);
    }
});

const projectOnePoints = projectOne.querySelectorAll(".points_wrapper .point");

projectOnePoints.forEach((point, index) => {
  const trigger = point;
  ScrollTrigger.create({
    trigger: trigger,
    start: "top center",
    end: "center center",
    onEnter: () => {
      image.setAttribute("src", `/assets/images/2bhk/2bhk_${index + 1}.jpg`);
    },
    onEnterBack: () => {
        image.setAttribute("src", `/assets/images/2bhk/2bhk_${index + 1}.jpg`);
      },
  });
});

const projectTwo = document.querySelector(".project_2");
const imageTwo = projectTwo.querySelector(".left_content img");
ScrollTrigger.create({
    trigger: projectTwo,
    start: "top top",
    end: "bottom bottom",
    onLeave: () => document.querySelector(".project_selector").style.transform = "scaleY(0)",
    onEnterBack: () => {
        document.querySelector(".project_selector").style.transform = "scaleY(1)";
        setTimeout(() => {
            setPosition(projectSelector[1]);
        }, 500);
    },
    // markers: true,
});
ScrollTrigger.create({
    trigger: projectTwo.querySelector(".point.main"),
    start: "top top",
    end: "bottom center",
    onEnter: () => {
      imageTwo.setAttribute("src", `/assets/images/3bhk/3bhk_master.jpg`);
    },
    onEnterBack: () => {
        imageTwo.setAttribute("src", `/assets/images/3bhk/3bhk_master.jpg`);
    },
});

// const projectTwoPoints = projectTwo.querySelectorAll(".points_wrapper .point");
// projectTwoPoints.forEach((point, index) => {
//   const trigger = point;

//   ScrollTrigger.create({
//     trigger: trigger,
//     start: "top center",
//     // markers: true,
//     end: "center center",
//     onEnter: () => {
//       imageTwo.setAttribute("src", `/assets/images/3bhk/3bhk_${index + 1}.jpg`);
//     },
//     onEnterBack: () => {
//         imageTwo.setAttribute("src", `/assets/images/3bhk/3bhk_${index + 1}.jpg`);
//       },
//   });
// });

const projectTwoPoints = projectTwo.querySelectorAll(".points_wrapper .point");

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function updateImageSrc(src, index) {
  imageTwo.setAttribute("src", `/assets/images/${src}/${src}_${index + 1}.jpg`);
}

function handleScroll() {
  projectTwoPoints.forEach((point, index) => {
    if (isElementInViewport(point)) {
      updateImageSrc("3bhk", index);
    }
  });
}
// Listen for the scroll event
window.addEventListener("scroll", handleScroll);
// Initial check for elements in view
handleScroll();



// Kitchen Section
const kitchenItems = document.querySelectorAll(".kitchen_section .kitchen_items .item");

kitchenItems.forEach((item, idx) => {
    if (idx % 2 !== 0) {
        gsap.to(item, {
            y: 0,
            scrollTrigger: {
                trigger: document.querySelector(".kitchen_section"),
                start: "top 20%",
                end: "center 30%",
                scrub: true,
                // markers: true
            }
        });
    }
    gsap.to(item.querySelector(".img_wrapper"), {
        borderRadius: 0,
        scrollTrigger: {
            trigger: document.querySelector(".kitchen_section"),
            start: "top 20%",
            end: "center 30%",
            scrub: true,
            // markers: true
        }
    });
});

const kitchen = document.querySelector(".kitchen_section .kitchen_items .content_wrapper");
gsap.to(kitchen, {
    x: () => -(kitchen.scrollWidth - window.innerWidth),
    scrollTrigger: {
        trigger: document.querySelector(".kitchen_section .kitchen_items"),
        start: "top top",
        scrub: true,
        pin: true,
        pinSpacer: false,
        invalidateOnRefresh: true,
        end: () => `+=${document.querySelector(".kitchen_section .kitchen_items").scrollWidth - window.innerWidth}`,
        // markers: true
    }
});


// const kitchen = document.querySelector(".kitchen_section .kitchen_items .content_wrapper");
// function getScrollAmount(){
//     let scrollAmount = kitchen.scrollWidth;
//     return -(scrollAmount - window.innerWidth);
// }

// const tween = gsap.to(kitchen, {
//     x: getScrollAmount,
//     // duration: 3,
//     ease: "none",
// });

// ScrollTrigger.create({
//     trigger: ".kitchen_section .kitchen_items",
//     start:"top top",
//     end: () => `+=${getScrollAmount() * -1}`,
//     pin: true,
//     pinSpacing: true,
//     animation: tween,
//     scrub:true,
//     invalidateOnRefresh: true,
//     markers:false
// });

// Last Horizontal scroll section
const hScrollItems = document.querySelectorAll(".hscroll_section .items .item");
hScrollItems.forEach((item, idx) => {
    if (idx % 2 !== 0) {
        gsap.to(item, {
            y: 0,
            scrollTrigger: {
                trigger: document.querySelector(".hscroll_section"),
                start: "top 20%",
                end: "center 30%",
                scrub: true,
                // markers: true
            }
        });
    }
    gsap.to(item.querySelector(".img_wrapper"), {
        borderRadius: 0,
        scrollTrigger: {
            trigger: document.querySelector(".hscroll_section"),
            start: "top 20%",
            end: "center 30%",
            scrub: true,
            // markers: true
        }
    });
});

const hScroll = document.querySelector(".hscroll_section .items .content_wrapper");
gsap.to(hScroll, {
    x: () => -(hScroll.scrollWidth - window.innerWidth),
    scrollTrigger: {
        trigger: hScroll,
        start: "top top",
        scrub: true,
        pin: true,
        pinSpacer: false,
        end: () => `+=${hScroll.scrollWidth - window.innerWidth}`,
        // markers: true
    }
});


// Balcony Horizontal scroll section
// const balconyScroll = document.querySelectorAll(".balcony_section .items .item");
// balconyScroll.forEach((item, idx) => {
//     if (idx % 2 !== 0) {
//         gsap.to(item, {
//             y: 0,
//             scrollTrigger: {
//                 trigger: document.querySelector(".balcony_section"),
//                 start: "top 20%",
//                 end: "center 30%",
//                 scrub: true,
//                 // markers: true
//             }
//         });
//     }
//     gsap.to(item.querySelector(".img_wrapper"), {
//         borderRadius: 0,
//         scrollTrigger: {
//             trigger: document.querySelector(".balcony_section"),
//             start: "top 20%",
//             end: "center 30%",
//             scrub: true,
//             // markers: true
//         }
//     });
// });

// const balcony = document.querySelector(".balcony_section .items .content_wrapper");
// gsap.to(balcony, {
//     x: () => -(balcony.scrollWidth - window.innerWidth),
//     scrollTrigger: {
//         trigger: balcony,
//         start: "top top",
//         scrub: true,
//         pin: true,
//         pinSpacer: false,
//         end: () => `+=${balcony.scrollWidth - window.innerWidth}`,
//         // markers: true
//     }
// });


// Community Horizontal scroll section
// const communityScroll = document.querySelectorAll(".community_section .items .item");
// communityScroll.forEach((item, idx) => {
//     if (idx % 2 !== 0) {
//         gsap.to(item, {
//             y: 0,
//             scrollTrigger: {
//                 trigger: document.querySelector(".community_section"),
//                 start: "top 20%",
//                 end: "center 30%",
//                 scrub: true,
//                 // markers: true
//             }
//         });
//     }
//     gsap.to(item.querySelector(".img_wrapper"), {
//         borderRadius: 0,
//         scrollTrigger: {
//             trigger: document.querySelector(".community_section"),
//             start: "top 20%",
//             end: "center 30%",
//             scrub: true,
//             // markers: true
//         }
//     });
// });

// const community = document.querySelector(".community_section .items .content_wrapper");
// gsap.to(community, {
//     x: () => -(community.scrollWidth - window.innerWidth),
//     scrollTrigger: {
//         trigger: community,
//         start: "top top",
//         scrub: true,
//         pin: true,
//         pinSpacer: false,
//         end: () => `+=${community.scrollWidth - window.innerWidth}`,
//         // markers: true
//     }
// });


// Projects Line Up section


const projectLineImages = document.querySelectorAll(".projects_section .images_wrapper .hstack");
projectLineImages.forEach(line => {
    const images = line.querySelectorAll(".img_wrapper");
    images.forEach((img, idx) => {
        img.style.marginLeft = "-" + (idx * 35) + "px";
        const mid = Math.round(images?.length/2);
        let x = idx >  mid ? "200px" : "-200px";
        x = idx === mid ? 0 : x;
        gsap.to(img, {
            scale: 0,
            opacity: 0,
            x,
            // marginLeft: 0,
            scrollTrigger: {
                trigger: ".projects_section .images_wrapper",
                start: "top center",
                end: "bottom 40%",
                scrub: true,
                // markers: true
            }
        });
    });
});

gsap.to(".projects_section .images_wrapper", {
    y: 200,
    scrollTrigger: {
        trigger: ".projects_section .images_wrapper",
        start: "40% bottom",
        end: "center top",
        scrub: true,
        // markers: true
    }
});

gsap.to(".projects_section .content_wrapper", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".projects_section .content_wrapper",
        start: "top 60%",
        end: "center 90%",
        toggleActions: "play complete play reverse",
        // markers: true
    }
});


const bgImgChangers = document.querySelectorAll(".bg_img_section .linesDiv");
bgImgChangers.forEach((changer, idx) => {
    const bgImg = document.querySelector(".bg_img_itself");
    changer.addEventListener("mouseenter", () => {
        bgImg.style.display = "block";
        bgImg.style.backgroundImage = `url(/assets/images/bg-images/jrc-6-2-${idx+1}-min.jpg)`;
    });
    changer.addEventListener("mouseleave", () => {
        bgImg.style.display = "none";
    });
});

function setPosition(element) {
    let rect = element.getBoundingClientRect();
    let parentRect = element.parentElement.getBoundingClientRect();

    let relativeTop = rect.top - parentRect.top;
    let relativeLeft = rect.left - parentRect.left;
    gooey.style.width = rect.width + "px";
    gooey.style.height = rect.height + "px";
    gooey.style.top = relativeTop + "px";
    gooey.style.left = relativeLeft + "px";
}

projectSelector.forEach((project, idx) => {
    project.addEventListener("click", () => {
        setPosition(project);
        lenis.scrollTo(`#project_${idx + 1}`)
    });
});

setPosition(projectSelector[0]);

// document.querySelectorAll("section.bg_bright")?.forEach(section => {
//     gsap.to(".header", {
//         scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: "bottom top",
//             toggleClass: {
//                 targets: ".header",
//                 className: "dark",
//             },
//         }
//     });
// });

// window.addEventListener("resize", gsap.update);

let isScrolling = false;
let scrollingTimeout;

window.addEventListener("wheel", evt => {
    const header = document.querySelector(".header");
    header.classList.add("hide");
    // if (evt.deltaY > 0) {        
    // }
    // if (evt.deltaY < 0) {        
    //     header.classList.remove("hide");
    // }
    if (!isScrolling) {
        isScrolling = true;
    }

    clearTimeout(scrollingTimeout);

    scrollingTimeout = setTimeout(handleScrollStop, 100);
});


// // Function to handle the scroll stop event
function handleScrollStop() {
    isScrolling = false;
    const header = document.querySelector(".header");
    header.classList.remove("hide");
}

document.querySelector(".fixed_enq").addEventListener("click", () => {
    document.querySelector(".enquire_modal").classList.add("active");
    lenis.stop();
});

document.querySelector(".enquire_modal").addEventListener("click", closeEnqModal);

document.querySelector(".enquire_modal .modal_content").addEventListener("click", (evt) => {
    evt.stopPropagation();
    evt.target.querySelector(".country-list").classList.add("hide");
});

document.querySelector(".intl-tel-input.allow-dropdown").addEventListener("click", (evt) => evt.stopPropagation());

document.querySelector(".enquire_modal .modal_content a.close").addEventListener("click", closeEnqModal);

function closeEnqModal() {
    document.querySelector(".enquire_modal").classList.remove("active");
    lenis.start();
}


// lenis.scrollTo("#first_hs");
// setTimeout(() => {
//     lenis.scrollTo("#main");
// }, 200);

// setTimeout(() => {
//     // window.location.reload()
// }, 300);


// // ScrollTrigger.refresh();


