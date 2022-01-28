<template>

  <div class="about">
    <h1>
      About me
      <hr />
    </h1>
  </div>
  <h2>Cameron Bowers</h2>
   
  <div class="row">
    <div class="column left" style="background-color: #aaa">
     <h2 id="head2">UI/UX Designer & Developer</h2>
      <p id="paragraph1">
      Consequatur dolor nisi labore commodi ipsa? Excepturi velit
        laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium
        itaque fugiat placeat quas consequatur? Obcaecati natus rerum
        Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis
        unde aliquid excepturi laudantium? Illo architecto aliquam velit illo
        magnam neque perferendis sint Incidunt eius ipsa inventore labore eos
        velit. Minus hic magni reiciendis necessitatibus ex Quidem officia
        deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit
        porro praesentium excepturi. Alias ab consequatur?
      </p>
    </div>
    <div class="column right">
      <h2>Personal Information</h2>
   <div class="stuff">
        <div id="name">
           <span>Name:</span> Philip Watson
        </div>
        <br>
        <div id="age">
          <span>Age:</span> 26 Years
        </div>
        <br>
        <div id="residence">
         <span>Residence:</span> New York, USA
        </div>
        <br>
        <div id="email">
         <span>Email:</span> example@example.com
        </div>
        <br>
        <div id="number">
         <span> Phone:</span> (+1) 123 456 7890
        </div>
        <br>
        <div id="status">
          <span>Freelance:</span> Available 
        </div>
      </div>
    </div>
  </div>
  <h2>Services</h2>

  <div class="card">
    <img src="https://picsum.photos/200/300?random=2" />
    <div class="container">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>

  <div class="card">
    <img src="https://picsum.photos/200/300?random=2" />
    <div class="container">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>

  <div class="card">
    <img src="https://picsum.photos/200/300?random=2" />
    <div class="container">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>
 
</template>

<style>
#paragraph1{
  font-size: 20px;
  text-align: left;
}
.stuff{
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
  margin-right: 250px;
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
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
  margin-left: 300px;
  display: flex;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
#head2{
  text-align: left;
}
</style>
