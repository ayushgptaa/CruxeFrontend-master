const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");
const slider4 = document.getElementById("slider4");
const slider5 = document.getElementById("slider5");
const slider6 = document.getElementById("slider6");
const slider7 = document.getElementById("slider7");
const slider8 = document.getElementById("slider8");
const slider9 = document.getElementById("slider9");
const slider10 = document.getElementById("slider10");
const slider11 = document.getElementById("slider11");

async function getdataastro() {
  let urlastro = "https://www.apicruxe.xyz/astronomy";
  let response = await fetch(urlastro);
  if (!response.ok) {
    console.log("err̥or");
  } else {
    let astrodata = await response.json();
    console.log(astrodata);
    const html = astrodata
      .map((info) => {
        return `
        <figure class="snip1336">
        <img
          src="${info.img_url}"
        />
        <figcaption>
   
          
         <div class="card-content-wrapper">
        <div class="title-card">
          <p  >${info.title}</p>
        </div>
        <div class="summery" >${info.summary}</div>
        <div class="read-more">
        <a href="${info.article_link}" target="_blank">Read more....</a>
  
    </div>
      
         
        </figcaption>
      </figure>
     
        `;
      })
      .join("");
    slider1.innerHTML = html;
  }
  slick1();
}

async function getdatahistory() {
  let urlhistory = "https://www.apicruxe.xyz/history";
  let response = await fetch(urlhistory);
  if (!response.ok) {
    console.log("error");
  } else {
    let historydata = await response.json();
    const html = historydata
      .map((info) => {
        return `
        <figure class="snip1336 hover">
        <img
          src="${info.img_url}"
        />
        <figcaption>
   
         
         <div class="card-content-wrapper">
        <div class="title-card">
          <p  >${info.title}</p>
        </div>
        <div class="summery" >${info.summary}</div>
        <div class="read-more">
        <a href="${info.article_link}" target="_blank">Read more....</a>
  
    </div>
      
         
        </figcaption>
      </figure>
     
        `;
      })
      .join("");
    slider2.innerHTML = html;
  }
  slick2();
}
async function getdataentertainment() {
  let urlent = "https://www.apicruxe.xyz/movies";
  let response = await fetch(urlent);
  if (!response.ok) {
    console.log("error");
  } else {
    let entertainmentdata = await response.json();
    const html = entertainmentdata
      .map((info) => {
        return `
        <figure class="snip1336 hover">
        <img
          src="${info.img_url}"
        />
        <figcaption>
   
          
         <div class="card-content-wrapper">
        <div class="title-card">
          <p  >${info.title}</p>
        </div>
        <div class="summery" >${info.summary}</div>
        <div class="read-more">
        <a href="${info.article_link}" target="_blank">Read more....</a>
  
    </div>
      
         
        </figcaption>
      </figure>
     
        `;
      })
      .join("");
    slider3.innerHTML = html;
  }
  slick3();
}

async function getdataeconomics() {
  let urleconomics = "https://www.apicruxe.xyz/economics";
  let response = await fetch(urleconomics);
  if (!response.ok) {
    console.log("error");
  } else {
    let economicsdata = await response.json();
    const html = economicsdata
      .map((info) => {
        return `
        <figure class="snip1336 hover">
        <img
          src="${info.img_url}"
        />
        <figcaption>
   
         
         <div class="card-content-wrapper">
        <div class="title-card">
          <p  >${info.title}</p>
        </div>
        <div class="summery" >${info.summary}</div>
        <div class="read-more">
        <a href="${info.article_link}" target="_blank">Read more....</a>
  
    </div>
      
         
        </figcaption>
      </figure>
     
        `;
      })
      .join("");
    slider4.innerHTML = html;
  }
  slick4();
}

async function getdatastocks() {
  let urlstocks = "https://www.apicruxe.xyz/stocks";
  let response = await fetch(urlstocks);
  if (!response.ok) {
    console.log("error");
  } else {
    let stocksdata = await response.json();
    const html = stocksdata
      .map((info) => {
        return `
        <figure class="snip1336 hover">
        <img
          src="${info.img_url}"
        />
        <figcaption>
   
         
         <div class="card-content-wrapper">
        <div class="title-card">
          <p  >${info.title}</p>
        </div>
        <div class="summery" >${info.summary}</div>
        <div class="read-more">
        <a href="${info.article_link}" target="_blank">Read more....</a>
  
    </div>
      
         
        </figcaption>
      </figure>
     
        `;
      })
      .join("");
    slider5.innerHTML = html;
  }
  slick5();
}

async function getdatatech() {
  let urltech = "https://www.apicruxe.xyz/technology";
  let response = await fetch(urltech);
  if (!response.ok) {
    console.log("error");
  } else {
    let techdata = await response.json();
    const html = techdata
      .map((info) => {
        return `
        <figure class="snip1336 hover">
        <img
          src="${info.img_url}"
        />
        <figcaption>
   
         
         <div class="card-content-wrapper">
        <div class="title-card">
          <p  >${info.title}</p>
        </div>
        <div class="summery" >${info.summary}</div>
        <div class="read-more">
        <a href="${info.article_link}" target="_blank">Read more....</a>
  
    </div>
      
      
         
        </figcaption>
      </figure>
     
        `;
      })
      .join("");
    slider6.innerHTML = html;
  }
  slick6();
}
async function getdatahowto() {
  let urlhowto = "https://www.apicruxe.xyz/howto";
  let response = await fetch(urlhowto);
  if (!response.ok) {
    console.log("error");
  } else {
    let howtodata = await response.json();
    const html = howtodata
      .map((info) => {
        return `
        <figure class="snip1336 hover">
        <img
          src="${info.img_url}"
        />
        <figcaption>
   
         
         <div class="card-content-wrapper">
        <div class="title-card">
          <p  >${info.title}</p>
        </div>
        <div class="summery" >${info.summary}</div>
        <div class="read-more">
        <a href="${info.article_link}" target="_blank">Read more....</a>
  
    </div>
      
      
         
        </figcaption>
      </figure>
     
        `;
      })
      .join("");
    slider7.innerHTML = html;
  }
  slick7();
}
async function getdatafood() {
  let urlfood = "https://www.apicruxe.xyz/food";
  let response = await fetch(urlfood);
  if (!response.ok) {
    console.log("error");
  } else {
    let fooddata = await response.json();
    const html = fooddata
      .map((info) => {
        return `
        <figure class="snip1336 hover">
        <img
          src="${info.img_url}"
        />
        <figcaption>
   
         
         <div class="card-content-wrapper">
        <div class="title-card">
          <p  >${info.title}</p>
        </div>
        <div class="summery" >${info.summary}</div>
        <div class="read-more">
        <a href="${info.article_link}" target="_blank">Read more....</a>
  
    </div>
      
      
         
        </figcaption>
      </figure>
     
        `;
      })
      .join("");
    slider9.innerHTML = html;
  }
  slick9();
}
async function getdatabreakthrough() {
  let urlbreakthrough = "https://www.apicruxe.xyz/breakthrough";
  let response = await fetch(urlbreakthrough);
  if (!response.ok) {
    console.log("error");
  } else {
    let breakthroughdata = await response.json();
    const html = breakthroughdata
      .map((info) => {
        return `
        <figure class="snip1336 hover">
        <img
          src="${info.img_url}"
        />
        <figcaption>
   
         
         <div class="card-content-wrapper">
        <div class="title-card">
          <p  >${info.title}</p>
        </div>
        <div class="summery" >${info.summary}</div>
        <div class="read-more">
        <a href="${info.article_link}" target="_blank">Read more....</a>
  
    </div>
      
      
         
        </figcaption>
      </figure>
     
        `;
      })
      .join("");
    slider10.innerHTML = html;
  }
  slick10();
}

async function getdatasports() {
  let urlsports = "https://www.apicruxe.xyz/sports";
  let response = await fetch(urlsports);
  if (!response.ok) {
    console.log("error");
  } else {
    let sportsdata = await response.json();
    const html = sportsdata
      .map((info) => {
        return `
        <figure class="snip1336 hover">
        <img
          src="${info.img_url}"
        />
        <figcaption>
   
         
         <div class="card-content-wrapper">
        <div class="title-card">
          <p  >${info.title}</p>
        </div>
        <div class="summery" >${info.summary}</div>
        <div class="read-more">
        <a href="${info.article_link}" target="_blank">Read more....</a>
  
    </div>
      
      
         
        </figcaption>
      </figure>
     
        `;
      })
      .join("");
    slider11.innerHTML = html;
  }
  slick11();
}

getdataastro(); //FOR ASTRONOMY
getdatahistory(); //FOR HISTORY
getdataentertainment(); // FOR MOVIES
getdataeconomics(); //FOR ECONOMICS
getdatastocks(); //FOR STOCKS
getdatatech(); //FOR TECHNOLOGY
getdatahowto(); //FOR HOWTO
getdatawhatis(); //FOR WHATIS
getdatafood(); //FOR FOOD
getdatabreakthrough(); //FOR BREAKTHROUGH

/* <img
src="https://img.icons8.com/emoji/96/000000/fire.png"
alt="profile-sample2"
class="profile"
/> */
