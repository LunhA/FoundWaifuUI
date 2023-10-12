import "./AppFooter/css/style.css"

function AppFooter() {
    return (
      <footer class="footer-04">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-lg-3 mb-md-0 mb-4">
						<h2 class="footer-heading"><a href="#" class="logo">FoundCharacter</a></h2>
						<p>A small site with the mission of bringing waifus to millions of users..</p>
						<a href="#">read more <span class="ion-ios-arrow-round-forward"></span></a>
					</div>
					<div class="col-md-6 col-lg-3 mb-md-0 mb-4">
						<h2 class="footer-heading">Categories</h2>
						<ul class="list-unstyled">
              <li><a href="#" class="py-1 d-block">Buy &amp; Sell</a></li>
              <li><a href="#" class="py-1 d-block">Merchant</a></li>
              <li><a href="#" class="py-1 d-block">Giving back</a></li>
              <li><a href="#" class="py-1 d-block">Help &amp; Support</a></li>
            </ul>
					</div>
					<div class="col-md-6 col-lg-3 mb-md-0 mb-4">
						<h2 class="footer-heading">POPULAR TAGS</h2>
						<div class="tagcloud">
	            <a href="#" class="tag-cloud-link">INFJ</a>
	            <a href="#" class="tag-cloud-link">ISFJ</a>
	            <a href="#" class="tag-cloud-link">INTJ</a>
	            <a href="#" class="tag-cloud-link">ISFP</a>
	            <a href="#" class="tag-cloud-link">ENTP</a>
	            <a href="#" class="tag-cloud-link">ENFP</a>
	            <a href="#" class="tag-cloud-link">ENTJ</a>
	            <a href="#" class="tag-cloud-link">INFP</a>
	          </div>
					</div>
					<div class="col-md-6 col-lg-3 mb-md-0 mb-4">
						<h2 class="footer-heading">Subcribe</h2>
						<form action="#" class="subscribe-form">
              <div class="form-group d-flex">
                <input type="text" class="form-control rounded-left" placeholder="Enter email address"></input>
                <button type="submit" class="form-control submit rounded-right"><span class=""></span><i class="fa fa-send"></i></button>
              </div>
            </form>
            <h2 class="footer-heading mt-5">Follow us</h2>
            <ul class="ftco-footer-social p-0">
              <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span class="fa fa-twitter"></span></a></li>
              <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span class="fa fa-facebook"></span></a></li>
              <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span class="fa fa-instagram"></span></a></li>
            </ul>
					</div>
				</div>
			</div>
		</footer>
    );
  }
  
  export default AppFooter;
  