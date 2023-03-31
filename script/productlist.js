var kidsdata = [
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1f/P00709974.jpg",
    name: "MARC JACOBS KIDS",
    price: 585,
  },
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5d/P00710025.jpg",
    name: "NEW BALANCE KIDS",
    price: 1095,
  },
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ad/P00712412.jpg",
    name: "HUNZA G KIDS",
    price: 499,
  },
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ad/P00712412.jpg",
    name: "GUCCI KIDS",
    price: 1555,
  },
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e0/P00709999.jpg",
    name: "HUNZA G KIDS",
    price: 1095,
  },
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a4/P00712474.jpg",
    name: "NEW BALANCE KIDS",
    price: 499,
  },
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a7/P00712480.jpg",
    name: "THE ANIMALS OBSERVATORY",
    price: 1099,
  },
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/35/P00709970.jpg",
    name: "CHLOÉ KIDS",
    price: 1429,
  },
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8c/P00709981.jpg",
    name: "THE ANIMALS OBSERVATORY",
    price: 585,
  },
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/63/P00709993.jpg",
    name: "MONNALISA",
    price: 795,
  },
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2d/P00709954.jpg",
    name: "Caramel",
    price: 1429,
  },
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/7d/P00712487.jpg",
    name: "Caramel",
    price: 415,
  },
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ec/P00710001.jpg",
    name: "Bonpoint",
    price: 1095,
  },
  {
    image:
      "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/26/P00709987.jpg",
    name: "MONNALISA",
    price: 1095,
  },
];

pagination(kidsdata);
var kidsarr = JSON.parse(localStorage.getItem("cartdetail")) || [];
document.querySelector("#filter").addEventListener("change", priceFilter);

// const page = document.querySelectorAll(".page");
// for (let i = 0; i < page.length; i++) {
//   page[i].addEventListener("click", (e) => {
//     let pageno = e.target.innerText;
//     let newdata = kidsdata.splice((pageno - 1) * 10, pageno * 10);
//     disptable(newdata);
//   });
// }

function priceFilter() {
  var selected = document.querySelector("#filter").value;
  if (selected == "lowtohigh") {
    kidsdata.sort(function (a, b) {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
  }
  if (selected == "sortby") {
    kidsdata.sort(function (a, b) {
      return;
    });
  }
  if (selected == "hightolow") {
    kidsdata.sort(function (a, b) {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    });
  }
  pagination(kidsdata);
}

function pagination(data) {
  let newdata = [];
  let pageno = 1;
  const page = document.querySelectorAll(".page");
  let count=document.getElementById("productlength")
  for (let i = 0; i < page.length; i++) {
    page[i].addEventListener("click", (e) => {
      pageno = e.target.innerText;
      newdata = data.slice((pageno - 1) * 10, pageno * 10);
      count.innerText = `${newdata.length} products `;
      disptable(newdata);
    });
  }
  newdata = data.slice((pageno - 1) * 10, pageno * 10);
  count.innerText = `${newdata.length} products `;

  disptable(newdata);
}

function disptable(newdata) {

  document.querySelector("#right_Section").innerHTML = "";
  newdata.forEach(function (el, index) {
    var div = document.createElement("div");
    var avtar = document.createElement("img");
    avtar.setAttribute("src", el.image);
    var p1 = document.createElement("p");
    p1.innerText = el.name;
    var p2 = document.createElement("p");
    p2.innerText = "Women's Products";
    var h4 = document.createElement("h4");
    h4.innerText = `€ ${el.price}`;
    var btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      addall(el);
    });
    div.append(avtar, p1, p2, h4, btn);
    document.getElementById("right_Section").append(div);
  });
}

function addall(el) {
  kidsarr.push(el);
  localStorage.setItem("cartdetail", JSON.stringify(kidsarr));
}

let ArrayData = [];
let allData = document.getElementsByClassName("check");
Array.from(allData).forEach(function (e, i) {
  document
    .getElementsByClassName("check")
    [i].addEventListener("click", function () {
      let checkbox = document.getElementsByClassName("check")[i];
      if (checkbox.checked == true) {
        ArrayData.push(checkbox.value);
        CheckboxFun(ArrayData);
      } else {
        let index = ArrayData.indexOf(checkbox.value);
        ArrayData.splice(index, 1);
        CheckboxFun(ArrayData);
      }
    });
});

function CheckboxFun(arr) {
  let newArray = [];
  if (arr.length == 0) {
    pagination(kidsdata);
    return;
  }

  arr.forEach(function (e) {
    newArray.push(...kidsdata.filter((x) => x.name == e));
  });
  // let lastArray = [];
  // for (let i = 0; i < newArray.length; i++) {
  //   for (let j = 0; j < newArray[i].length; j++) {
  //     lastArray.push(newArray[i][j]);
  //   }
  // }
  pagination(newArray);
}

let footer = document.getElementById("footer");
fetch("./footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    eval(doc.querySelector("script").textContent);
  });

let header = document.getElementById("header");
fetch("./header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    eval(doc.querySelector("script").textContent);
  });
