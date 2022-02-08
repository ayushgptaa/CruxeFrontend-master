async function gettopdata() {
  let urltop = "https://www.apicruxe.xyz/top";
  let response = await fetch(urltop);
  if (!response.ok) {
    console.log("err̥or");
  } else {
    let topdata = await response.json();
    var displaytopdata = topdata[0];
    var topcardhtml = `
     
      <div class="img-card1">
        <img src="${displaytopdata.img_url}" alt="">
      </div>
      <div class="card-1-text">
        <div class="cardtext-container">

          <div class="classtext-headingpara">
            <p>
            ${displaytopdata.title}
            </p>
          </div>
          <div class="classtext-content">
            <p>
            ${displaytopdata.summary}
            </p>

          </div>
        
     
        </div>
      </div>`;
    document.getElementById("top-card").innerHTML = topcardhtml;
  }
}

async function getbottomdata() {
  let urlbtm = "https://www.apicruxe.xyz/bottom";
  let response = await fetch(urlbtm);
  if (!response.ok) {
    console.log("err̥or");
  } else {
    let btmdata = await response.json();
    const btmcardhtml = btmdata
      .map((displaybtmdata) => {
        return `
        <div class="card-2">
        <div class="img-card2">
          <img src="${displaybtmdata.img_url}" alt="">
        </div>
        <div class="card2text">
          <div class="card2-headingpara">
          ${displaybtmdata.title}</p>
          </div>
          <div class="card2-para">
            <p>${displaybtmdata.summary}</p>
          </div>
        
         
        </div>
        </div>
        `;
      })
      .join("");
    document.getElementById("bottom-card").innerHTML = btmcardhtml;
  }
}
async function getsidedata() {
  let urlside = "https://www.apicruxe.xyz/side";
  let response = await fetch(urlside);
  if (!response.ok) {
    console.log("err̥or");
  } else {
    let sidedata = await response.json();
    const sidecardhtml = sidedata
      .map((displaysidedata) => {
        return `
<div class="right-cards-content-container">
  <div class="right-cc-image">
    <img src="${displaysidedata.img_url}" alt=""></div>
    <div class="right-cc-text">
      <p>
      ${displaysidedata.title}
      </p>
      <div class="read-more-side">
      <a href="${displaysidedata.article_link}" target="_blank">Read more....</a>

  </div>
    
    </div>
   
  </div>
 

  

       `;
      })
      .join("");
    document.getElementById("side-cards").innerHTML = sidecardhtml;
  }
}

gettopdata();
getbottomdata();
getsidedata();
// <div class="read-more">
//  <a href="${displaytopdata.article_link}" target="_blank">Read more....</a>
// </div>
