const cert = document.querySelector('.certificat');
cert.addEventListener("mouseover", e => {
    e.target.display = "block";
    const gt = document.querySelector('.cer-img');
        gt.style. display = "block";
})

cert.addEventListener("mouseout", e =>{
    const gt = document.querySelector('.cer-img');
    setTimeout(() => {
        gt.style. display = "none";
      }, 2000);

})

const diplom = document.querySelector('.diplom');
diplom.addEventListener("mouseover", e => {
    const dip = document.querySelector('.dipl-img');
dip.style. display = "block";
})

diplom.addEventListener("mouseout", e =>{
    const dip = document.querySelector('.dipl-img');
    setTimeout(() => {
        dip.style. display = "none";
      }, 2000);

})

