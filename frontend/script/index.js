const link = document.querySelectorAll('.link');
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener('click', womanpage);
    }

    function womanpage(event) {
        window.location.href = "./routes/productlist.html"
    }

    function footwear(event) {
        window.location.href = "./routes/productlist.html"
    }

