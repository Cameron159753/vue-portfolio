<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="about">
    <h1 id="head1">About me</h1>


    <div class="basr-social-share social">
      <ul class="">
        <li>
          <a class="facebook" href="">
            <i class="fa fa-facebook"></i>
            <span>Facebook</span>
          </a>
        </li>

        <li>
          <a class="twitter" href="">
            <i class="fa fa-twitter"></i>
            <span>Twitter</span>
          </a>
        </li>

        <li>
          <a class="googleplus" href="">
            <i class="fa fa-google-plus"></i>
            <span>Google Plus</span>
          </a>
        </li>

        <li>
          <a class="linkedin" href="">
            <i class="fa fa-linkedin"></i>
            <span>Linkedin</span>
          </a>
        </li>

        <li>
          <a class="tumblr" href="">
            <i class="fa fa-tumblr"></i>
            <span>Tumblr</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <hr />
  <h2>Cameron Bowers</h2>

  <div class="row">
    <div class="column left">
      <h2 id="head2">UI/UX Designer & Developer</h2>
      <p id="paragraph1">
        Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam
        at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
        placeat quas consequatur? Obcaecati natus rerum Consectetur consectetur
        nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi
        laudantium? Illo architecto aliquam velit illo magnam neque perferendis
        sint Incidunt eius ipsa inventore labore eos velit. Minus hic magni
        reiciendis necessitatibus ex Quidem officia deleniti accusamus obcaecati
        dolores. Porro culpa quibusdam impedit porro praesentium excepturi.
        Alias ab consequatur?
      </p>
    </div>
    <div class="column right">
      <h2>Personal Information</h2>
      <div class="stuff">
        <div id="name"><span>Name:</span> Philip Watson</div>
        <br />
        <div id="age"><span>Age:</span> 26 Years</div>
        <br />
        <div id="residence"><span>Residence:</span> New York, USA</div>
        <br />
        <div id="email"><span>Email:</span> example@example.com</div>
        <br />
        <div id="number"><span> Phone:</span> (+1) 123 456 7890</div>
        <br />
        <div id="status"><span>Freelance:</span> Available</div>
      </div>
    </div>
  </div>
  <h1 id="head1">Services</h1>
  <hr />
  <br />
  <br />
  <div class="card1">
    <img src="https://picsum.photos/200/300?random=2" />
    <div class="container">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>

  <div class="card1">
    <img src="https://picsum.photos/200/300?random=2" />
    <div class="container">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>

  <div class="card1">
    <img src="https://picsum.photos/200/300?random=2" />
    <div class="container">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>
</template>

<style>
#paragraph1 {
  font-size: 20px;
  text-align: left;
}
.stuff {
  text-align: left;
  padding-left: 60px;
}

.column {
  float: left;
  padding: 10px;
  height: 300px;
}

.left {
  width: 45%;
  margin-left: 325px;
}

.right {
  width: 20%;
  margin-right: 150px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
hr {
  border-top: 1px dashed;
  width: 65%;
}
.card1 {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  transition: 0.3s;
  width: 20%;
  margin-left: 63px;
  display: flex;
  display: inline-block;
}

.container {
  padding: 2px 16px;
}
#head1 {
  text-align: left;
  padding-left: 320px;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.clearfix {
  display: inline-block;
}

* html .clearfix {
  height: 1%;
}
.clearfix {
  display: block;
}

/* body {
  background: #261011;
  color: #e68a64;
  margin:0 auto;
  text-align:center;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  line-height: 187.5%;
  letter-spacing: 0.01em;
} */

/*--------------------------------------------------------------
	10. Social
--------------------------------------------------------------*/
.basr-social-share {
  position: fixed;
  top: 3em;
  left: 0;
  right: 0;
  width: 25%;
  display: block;
  text-align: center;
  padding: 0 auto;
  margin: 5em auto;
}

.social ul {
  list-style: none;
  padding-left: 0;
  padding-right: 0;
}
.social ul li {
  border: 5px solid #512e12;
  border-radius: 50%;
  float: left;
  position: relative;
  width: 60px;
  height: 60px;
  text-align: center;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
@media only screen and (max-width: 480px) {
  .social ul li {
    border-width: 4px;
    width: 45px;
    height: 45px;
  }
}
.social ul li:not(:last-child) {
  margin-right: 10px;
}
.social ul li:before {
  content: "";
  border-radius: 50%;
  -webkit-shadow: inset 0 0px 3px rgba(149, 90, 42, 0.28),
    0px 0px 0px 2px rgba(149, 90, 42, 0.28);
  -ms-box-shadow: inset 0 0px 3px rgba(149, 90, 42, 0.28),
    0px 0px 0px 2px rgba(149, 90, 42, 0.28);
  box-shadow: inset 0 0px 3px rgba(149, 90, 42, 0.28),
    0px 0px 0px 2px rgba(149, 90, 42, 0.28);
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  opacity: 0.35;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
@media only screen and (max-width: 480px) {
  .social ul li:before {
    width: 43px;
    height: 43px;
  }
}
.social ul li:hover {
  border-color: #a33629;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.social ul li:hover:before {
  -webkit-shadow: inset 0 0px 3px rgba(163, 54, 41, 0.28),
    0px 0px 0px 2px rgba(163, 54, 41, 0.28);
  -ms-box-shadow: inset 0 0px 3px rgba(163, 54, 41, 0.28),
    0px 0px 0px 2px rgba(163, 54, 41, 0.28);
  box-shadow: inset 0 0px 3px rgba(163, 54, 41, 0.28),
    0px 0px 0px 2px rgba(163, 54, 41, 0.28);
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.social ul li:hover i {
  color: #d66557;
  -webkit-stroke-width: 5.3px;
  -webkit-stroke-color: #a33629;
  -webkit-fill-color: #a33629;
  text-shadow: 1px 0px 20px #a33629;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.social ul li a {
  border-radius: 50%;
  display: block;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 60px;
  height: 60px;
  line-height: 60px;
}
@media only screen and (max-width: 480px) {
  .social ul li a {
    background-size: cover;
    top: -5px;
    left: -5px;
    width: 45px;
    height: 45px;
    line-height: 45px;
  }
}
.social ul li a:before {
  content: "";
  background-image: url("https://img.picload.org/image/dcocwcga/border-social-hover.png");
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 46px;
  height: 45px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
@media only screen and (max-width: 480px) {
  .social ul li a:before {
    background-size: cover;
    width: 30px;
    height: 30px;
  }
}
.social ul li a:after {
  content: "";
  background-image: url("https://img.picload.org/image/dcocwcgd/border-social.png");
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 46px;
  height: 45px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: -1;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
@media only screen and (max-width: 480px) {
  .social ul li a:after {
    background-size: cover;
    width: 30px;
    height: 30px;
  }
}
.social ul li a:hover:before {
  opacity: 1;
  -webkit-transform: translate(-50%, -50%) rotate(360deg);
  -ms-transform: translate(-50%, -50%) rotate(360deg);
  transform: translate(-50%, -50%) rotate(360deg);
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.social ul li a:hover:after {
  opacity: 0;
  -webkit-transform: translate(-50%, -50%) rotate(360deg);
  -ms-transform: translate(-50%, -50%) rotate(360deg);
  transform: translate(-50%, -50%) rotate(360deg);
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.social ul li a i {
  color: #ffead3;
  font-size: 23px;
  font-weight: 900;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-stroke-width: 5.3px;
  -webkit-stroke-color: #ffead3;
  -webkit-fill-color: #ffead3;
  text-shadow: 1px 0px 20px #ffead3;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
@media only screen and (max-width: 480px) {
  .social ul li a i {
    font-size: 16px;
  }
}
.social ul li a i.fa-envelope {
  font-size: 14px;
  top: 48%;
}
.k2t-footer.dark-style .social li a,
.dark-style .social li a {
  color: #fff;
}
.k2t-footer.dark-style .social li a:hover,
.dark-style .social li a:hover {
  color: #fff;
}
.basr-social-share.social li:hover a {
  color: #898989;
}
.basr-social-share.social li a {
  border-width: 0;
  color: #cccccc;
}
.basr-social-share.social li a:hover {
  color: #898989;
}
.basr-social-share.social li a span {
  display: none;
}
</style>
