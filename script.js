let home = document.querySelector('.outer-header-menu').children[0];
let about = document.querySelector('.outer-header-menu').children[1];
let servicing = document.querySelector('.outer-header-menu').children[2];
let portfolio = document.querySelector('.outer-header-menu').children[3];
let blog = document.querySelector('.outer-header-menu').children[4];
let contact = document.querySelector('.outer-header-menu').children[5];
let arrow = document.querySelector('.inner-promo-arrow');
let page1 = document.querySelector('.inner-team-slider-page1');
let page2 = document.querySelector('.inner-team-slider-page2');
let page3 = document.querySelector('.inner-team-slider-page3');
let btn_services = document.querySelector('.btn-margin-1');
let btn_hire = document.querySelector('.btn-margin-2');
let btn_for_form = document.querySelectorAll('.btn_for_form_appearence');
let btn_for_form1 = document.querySelectorAll('.inner-price-btm');
let slyder_dot1 = document.querySelector('.inner-team-slider-page1');
let slyder_dot2 = document.querySelector('.inner-team-slider-page2');
let slyder_dot3 = document.querySelector('.inner-team-slider-page3');
let slyder_move = document.querySelector('.inner-team-member');


home.addEventListener ('click', click_home);
function click_home (event) {
    let home_section = document.querySelector('.outer-promo').getBoundingClientRect().top;
    window.scrollTo(0, home_section);
};
about.addEventListener ('click', click_about);
function click_about (event) {
    let about_section = document.querySelector('.outer-about-us').getBoundingClientRect().top;
    window.scrollTo(0, about_section);
};
servicing.addEventListener ('click', click_servicing);
function click_servicing (event) {
    let servicing_section = document.querySelector('.outer-our-services').getBoundingClientRect().top;
    window.scrollTo(0, servicing_section);
};
portfolio.addEventListener ('click', click_portfolio);
function click_portfolio (event) {
    let portfolio_section = document.querySelector('.outer-works').getBoundingClientRect().top;
    window.scrollTo(0, portfolio_section);
};
blog.addEventListener ('click', click_blog);
function click_blog (event) {
    let blog_section = document.querySelector('.outer-blog').getBoundingClientRect().top;
    window.scrollTo(0, blog_section);
};
contact.addEventListener ('click', click_contact);
function click_contact (event) {
    let contact_section = document.querySelector('.outer-contact').getBoundingClientRect().top;
    window.scrollTo(0, contact_section);
};
btn_services.addEventListener ('click', click_btn_services);
function click_btn_services (event) {
    let top_services = document.querySelector('.outer-our-services').getBoundingClientRect().top;
    window.scrollTo(0, top_services);
};
arrow.addEventListener ('click', click_arrow);
function click_arrow (event) {
    let hidden_section = document.querySelector('.arrow-move');
    let hidden_arrow = document.querySelector('.inner-promo-arrow');
    hidden_section.classList.toggle("hidden-section");
    hidden_arrow.classList.toggle("hidden-arrow");
};
btn_hire.addEventListener ('click', click_btn_hire);

for (let elem of btn_for_form) {
    elem.addEventListener ('click', click_btn_hire);
};
for (let elem of btn_for_form1) {
    elem.addEventListener ('click', click_btn_hire);
};

function click_btn_hire (event) {
    let feedback_outer = document.querySelector('.feedback-outer');
    let feedback_wrap = document.querySelector('.feedback-wrap');
    feedback_outer.setAttribute('style', 'display: block;');
    feedback_outer.style.top = window.pageYOffset + 'px';
    document.body.setAttribute('style', 'overflow: hidden;')
    document.body.addEventListener ('keydown', keyvalue);
    document.body.addEventListener ('mousedown', clickvalue);

    function keyvalue (e) {
        if (e.key == 'Escape') {
            feedback_outer.setAttribute('style', 'display: none;');
            document.body.setAttribute('style', 'overflow: auto;');
            document.body.removeEventListener ('keydown', keyvalue);
            document.body.removeEventListener ('mousedown', clickvalue);
        }
    }  
    function clickvalue (e) {
        let x = e.target;
        if (!x.closest('.feedback-wrap')) {
            feedback_outer.setAttribute('style', 'display: none;');
            document.body.setAttribute('style', 'overflow: auto;');
            document.body.removeEventListener ('keydown', keyvalue);
            document.body.removeEventListener ('click', clickvalue);
        }
    }
};
slyder_dot1.addEventListener('click', slyder_1)
slyder_dot2.addEventListener('click', slyder_2)
slyder_dot3.addEventListener('click', slyder_3)
function slyder_1 (e) {
    if (slyder_dot2.classList.contains("verify")) {
        slyder_dot2.classList.remove("verify");
        slyder_dot1.classList.add("verify");
        slyder_move.style.transform = `translateX(-0%)`;

    } else if (slyder_dot3.classList.contains("verify")) {
        slyder_dot3.classList.remove("verify");
        slyder_dot1.classList.add("verify");
        slyder_move.style.transform = `translateX(-0%)`;
    };
}
function slyder_2 (e) {
    if (slyder_dot1.classList.contains("verify")) {
        slyder_dot1.classList.remove("verify");
        slyder_dot2.classList.add("verify");
        slyder_move.style.transform = `translateX(-100%)`;
    } else if (slyder_dot3.classList.contains("verify")) {
        slyder_dot3.classList.remove("verify");
        slyder_dot2.classList.add("verify");
        slyder_move.style.transform = `translateX(-100%)`;
    };
}
function slyder_3 (e) {
    if (slyder_dot1.classList.contains("verify")) {
        slyder_dot1.classList.remove("verify");
        slyder_dot3.classList.add("verify");
        slyder_move.style.transform = `translateX(-200%)`;
    } else if (slyder_dot2.classList.contains("verify")) {
        slyder_dot2.classList.remove("verify");
        slyder_dot3.classList.add("verify");
        slyder_move.style.transform = `translateX(-200%)`;
    };
}

