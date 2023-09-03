gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
    duration: 2.3,
    smoothTouch: true
});

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000);
})

gsap.ticker.lagSmoothing(0);

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

gsap.to(".first_row", {
    x: -400
});

gsap.to(".second_row", {
    x: 100
});

gsap.to(".third_row", {
    x: -400
});

gsap.to(".images_overlay .inner", {
    y: -750
});

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

const main = () => {

    function getLineBreaks(node) {
        // we only deal with TextNodes
        if(!node || !node.parentNode || node.nodeType !== 3) {
            return [];
        }
        // our Range object form which we'll get the characters positions
        const range = document.createRange();
        // here we'll store all our lines
        const lines = [];
        // begin at the first char
        range.setStart(node, 0);
        // initial position
        let prevBottom = range.getBoundingClientRect().bottom;
        let str = node.textContent;
        let current = 1; // we already got index 0
        let lastFound = 0;
        let bottom = 0;
        // iterate over all characters
        while(current <= str.length) {
          // move our cursor
          range.setStart(node, current);
          if(current < str.length -1)
           range.setEnd(node, current+1);
          bottom = range.getBoundingClientRect().bottom;
          if(bottom > prevBottom) { // line break
            lines.push(
              str.substr(lastFound , current - lastFound) // text content
            );
            prevBottom = bottom;
            lastFound = current;
          }
          current++;
        }
        // push the last line
        lines.push(str.substr(lastFound));
        return lines;
    }
    
    function linesSeperator(node, lines) {
        node.innerHTML = "";
        lines?.forEach(line => {
            node.innerHTML += `<div class="animated_lines"><p>${line?.trim()}</p></div>`; 
        });
    }
    
    const texts = document.querySelectorAll(".text_animate");
    texts.forEach(text => {

    // Check if the main <p> element contains nested <p> elements
    let combinedText = '';
    if (text.querySelectorAll('p').length > 0) {
    // Select all the inner <p> elements within the main <p> element
    let innerParagraphs = text.querySelectorAll('p');

    // Initialize an empty string to store the combined text

    // Iterate through the inner <p> elements and concatenate their text content
    innerParagraphs.forEach(function(paragraph) {
        combinedText += paragraph.innerText + ' '; // Add a space between paragraphs
    });

    // Remove extra spaces and trim the resulting text
     combinedText = combinedText.trim();
    } else {
    // If there are no nested <p> elements, simply use the text content of the main <p> element
        combinedText = text.innerText.trim();
    }
        text.innerHTML = combinedText;
        const lines = getLineBreaks(text.childNodes[0]);
        linesSeperator(text, lines);  
    });
    
    const linesItself = document.querySelectorAll(".animated_lines p");
    linesItself.forEach(line => {        
        gsap.to(line, {
            y: 0,
            rotate: 0,
            scrollTrigger: {
                trigger: line.parentElement,
                toggleActions: "play complete play reverse",
            }
        });
    });    
}

main();

window.addEventListener("resize", (evt) => {
    main();
});


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

const headings = document.querySelectorAll(".project_heading > div");
headings.forEach(heading => {
    gsap.to(heading, {
        width: "100px",
        duration: 1,
        borderRadius: "0 0 150px 150px",
        padding: "10px 90px 30px 90px",
        scrollTrigger: {
            trigger: heading.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            // markers: true
        }
    });
    
    gsap.to(heading.querySelector(".img_wrapper"), {
        y: "-10%",
        opacity: ".1",
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
    },
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

const projectTwoPoints = projectTwo.querySelectorAll(".points_wrapper .point");

projectTwoPoints.forEach((point, index) => {
  const trigger = point;

  ScrollTrigger.create({
    trigger: trigger,
    start: "top center",
    end: "center center",
    onEnter: () => {
      imageTwo.setAttribute("src", `/assets/images/3bhk/3bhk_${index + 1}.jpg`);
    },
    onEnterBack: () => {
        imageTwo.setAttribute("src", `/assets/images/3bhk/3bhk_${index + 1}.jpg`);
      },
  });
});
