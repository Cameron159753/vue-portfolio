<template>
   <h1 id="head1">
      Timeline 
    </h1>
	 <hr />
   <div class="Timeline">
	<div class="timeline">
		<ul>
			<li>
				<span>3rd January 2020</span>
				<div class="content">
					<h3>What Is Lorem Ipsum?</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
					</p>
				</div>
			</li>
			<li>
				<span>21st Jun 2019</span>
				<div class="content">
					<h3>What Is Lorem Ipsum?</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</p>
				</div>
			</li>
			<li>
				<span>15th April 2018</span>
				<div class="content">
					<h3>What Is Lorem Ipsum?</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</p>
				</div>
			</li>
			<li>
				<span>22nd Mars 2017</span>
				<div class="content">
					<h3>What Is Lorem Ipsum?</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
					</p>
				</div>
			</li>
		</ul>
	</div>
   </div> 
    <h1 id="head1">
      Skills 
    </h1>
	 <hr />
    <div class="skills-section">
    <div class="skills-header">
     <h1>Skills</h1>   
     </div>
     <div class="skills-container">
       
      <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png"     alt="" class="skills-icons">
        </div>
         <h3>HTML 5</h3>
        </div>
        <P> Lorem  Lorem  Lorem  </P>
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="" class="skills-icons">
        </div>
        <h3>CSS3</h3>
        </div>
        <P> Lorem  Lorem  Lorem  </P>   
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="" class="skills-icons">
        </div>
        <h3>JAVASCRIPT</h3>
        </div>
        <P> Lorem  Lorem  Lorem  </P>
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png" alt="" class="skills-icons">
        </div>
        <h3>NODE.JS</h3>
        </div>
        <P> Lorem  Lorem  Lorem  </P>
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="" class="skills-icons">
        </div>
        <h3>REACT</h3>
        </div>
        <P> Lorem  Lorem  Lorem  </P>
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://javascriptforwp.com/wp-content/uploads/2019/03/badge-gatsby.png" alt="" class="skills-icons">
        </div>
        <h3>GATSBY.JS</h3>
        </div>
        <P> Lorem  Lorem  Lorem  </P>
       </div>
       
       
       </div>
    
     </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');


.Timeline{
display:flex;
	justify-content:center;
	align-items:center;
	padding:0px;
	margin:0px;
}
.timeline{
	width:800px;
	/* background-color:#072736; */
	/* color:#fff; */
	padding:30px 20px;
	/* box-shadow:0px 0px 10px rgba(0,0,0,.5); */
	
}
.timeline ul{
	list-style-type:none;
	border-left:2px solid #094a68;
	padding:10px 5px;
}
.timeline ul li{
	padding:20px 20px;
	position:relative;
	cursor:pointer;
	transition:.5s;
}
.timeline ul li span{
	display:inline-block;
	/* background-color:#1685b8; */
	border-radius:25px;
	padding:2px 5px;
	font-size:15px;
	text-align:center;
}
.timeline ul li .content h3{
	color:#34ace0;
	font-size:17px;
	padding-top:5px;
}
.timeline ul li .content p{
	padding:5px 0px 15px 0px;
	font-size:15px;
}
.timeline ul li:before{
	position:absolute;
	content:'';
	width:10px;
	height:10px;
	background-color:#34ace0;
	border-radius:50%;
	left:-11px;
	top:28px;
	transition:.5s;
}
/* .timeline ul li:hover{
	background-color:#071f2a;
} */
.timeline ul li:hover:before{
	background-color:#0F0;
	box-shadow:0px 0px 10px 2px #0F0;
}
@media (max-width:300px){
	.timeline{
		width:100%;
		padding:30px 5px 30px 10px;
	}
	.timeline ul li .content h3{
		color:#34ace0;
		font-size:15px;
	}

}

.skills-header{
text-align: center;
color: #fff;
padding: 1rem;
position: relative;
}

.skills-header:after{
content: '';
position: absolute;
bottom: 0;
left: 50%;
transform: translateX(-50%);
width: 100px;
height: 4px;
background-color: #2ecc71;
border-radius: 2px;
}

.skills-container{
display: grid;
grid-tempLate-columns: repeat(5, 1fr);
justify-content:center;
align-items:center;
text-align: center;
grid-gap:1rem;
padding: 1rem 80px;
font-size: 1.2rem;
display: flex;
/* display: inline-block; */
padding-right: 20px;
}
.skills-box{
padding: 1rem;
color: #000;
cursor:pointer;
}
.skills-box:hover > .skills-title: after, 
.skills-box:hover > .skills-title: before{
width: 30px;
}
.skills-box:hover .skills-img{
transform: translateX(-20px);
}

.skills-title{
display:flex;
flex-direction: column;
align-items:center;
padding: 0.5rem;
margin-bottom: 0.5rem;
position: relative;
}

.skills-title:after{
content: '';
position:absolute;
bottom: 0;
rigth: 50%;
width:20px;
height:4px;
border-radius: 2px 0 0 2px;
background-color: #2ecc71;
transition: .5s;
}

.skills-title:before{
content: '';
position:absolute;
bottom: 0;
left: 50%;
width:100px;
height:4px;
border-radius: 0 2px 2px 0;
background-color: #2ecc71;
}

.skills-icons{
width:50px;
z-index:2;
}

.skills-img{
width:90px;
height:90px;
position: relative;
border-radius: 45px;
background-color: #fff;
display:flex;
justify-content:center;
align-items:center;
transition: .5s;
}

.skills-img:after{
content: '';
position:absolute;
top:0;
left: 0;
width:50%;
height:90px;
background: rgba(100, 100, 100, 0.5);
border-radius: 45px 0 0 45px;
}
.skills-title h3{
color: #333;
margin-top: 0.5rem;
}
@media screen and (max-width:990px){
 .skills-container{
 grid-tempLate-columns: repeat(2, 1fr);
 padding: 2rem 50px;
 }
}

@media screen and (max-width:650px){
 .skills-container{
 grid-tempLate-columns:2fr;
 padding: 2rem 50px;
 }
}
</style>

