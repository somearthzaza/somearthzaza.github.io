
addEventListener("resize" , () =>{
    const imgfront = document.querySelector(".header-banner-img-front")
    const imgback = document.querySelector(".header-banner-img-back")

    console.log(window.innerWidth)
    console.log("frontimg= " + imgfront.clientWidth)
    console.log(`backimg = ${imgback.clientWidth}`)
});