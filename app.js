const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li.left"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".home .section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            removeBackSection();
            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                    //allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }
    function addBackSection(element){
        allSection[element].classList.add("back-section")
    }
    function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".navbar");
        navTogglerBtn.addEventListener("click", () => {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.toggle("open");
            }
        }