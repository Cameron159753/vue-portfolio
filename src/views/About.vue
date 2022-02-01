<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
   
  <div class="about">
   
    <h1 id="head1">About me</h1>  
 
  
   </div>
  

    <div class="skills-header">
       
     </div>
  <h2>Cameron Bowers</h2>

  <div class="row">
    <div class="column left">
      <h2 id="head2">UI/UX Designer & Developer</h2>
      <p id="paragraph1">
         I am a 20 year old aspiring full-stack developer who loves learning
            new things, born and raised is South Africa.
      </p>
      <P id="paragraph1">
          I attended Bergvliet High school at matriculated in 2019.
      </P>
       <p id="paragraph1">
             I did a 4 month cource at codespace and Im now attending Lifechoices to pursue my passion of coding.
       </p>
      

    
     
    </div>
    <div class="column right">
      <h2>Personal Information:</h2>
      <div class="stuff">
        <div id="name"><span>Name:</span>Cameron Bowers</div>
        <br />
        <div id="age"><span>Age:</span> 20 Years</div>
        <br />
        <div id="residence"><span>Residence:</span>South Africa, Cape Town</div>
        <br />
        <div id="email"><span>Email:</span> cameronbowers22@gmail.com</div>
        <br />
        <div id="number"><span> Phone:</span> (+27) 72 964 4591 </div>
        <br />
      </div>
    </div>
  </div>
  <h1 id="head2">Services</h1>
    <div class="skills-header">
       
     </div>
  <br />
  <br />
  <div class="card1">
 <i class="fa fa-desktop" style="font-size:90px"></i>
    <div class="container">
      <h4><b>Web Development</b></h4>
      
    </div>
  </div>

  <div class="card1">
   <i class="fa fa-eye" style="font-size:100px"></i>
    <div class="container">
      <h4><b>Web Design</b></h4>
     
    </div>
  </div>

  <div class="card1">
 <i class="material-icons" style="font-size:100px">computer</i>
    <div class="container">
      <h4><b>Responsive Design</b></h4>
      
    </div>
  </div>
 
</template>

<style>
#head2{
  text-align: center;
}
#paragraph1 {
  font-size: 20px;
  text-align: left;
}
.stuff {
  text-align: left;
  padding-left: 10px;
}

.column {
  float: left;
  padding: 10px;
  height: 300px;
}

.left {
  width: 45%;
  margin-left: 225px;
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

.card1 {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  transition: 0.3s;
  width: 20%;
  margin-left: 63px;
  display: flex;
  display: inline-block;
}
.card1:hover{
  color: aqua;
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




</style>
