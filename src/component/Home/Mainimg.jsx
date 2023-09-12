import React from 'react'
function Mainimg() {
    return ( <div className='lii'>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="mainimg2" src="https://assets.ajio.com/cms/AJIO/WEB/28082023-UHP-D-AjiomaniaMainBanner-5090.gif" class="d-block w-100" alt="..."/>
    </div>
    <div  class="carousel-item">
      <img className="mainimg2" src="https://assets.ajio.com/cms/AJIO/WEB/01092023-UHP-D-main-P3-NikeAdidasOriginals-min35.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className="mainimg2" src="https://assets.ajio.com/cms/AJIO/WEB/01092023-UHP-D-main-P5-LavieBaggit-Upto70.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div> );
}

export default Mainimg;