<template>
  <div class="Contact">
    <h1 id="head1">Contact</h1>
    <hr />
  </div>
  <div class="container">
    <form>
      <ul>
       
          <label for="name"
            ><span>Name <span class="required-star">*</span></span></label
          >
          <input type="text" id="name" name="user_name" />
       
          <label for="mail"
            ><span>Email <span class="required-star">*</span></span></label
          >
          <input type="email" id="mail" name="user_email" />
       
        <li>
          <label for="msg"><span>Message</span></label>
          <textarea rows="4" cols="50"></textarea>
        </li>
        <li>
          <input type="submit" />
        </li>
      </ul>
    </form>
  </div>

<div class="container1">
  <div class="card">
    <i class="fas fa-envelope"></i>
    <h2 class="card-title">Email</h2>
    <p class="card-info">name@address.com</p>
  </div>
  <div class="card">
    <i class="fas fa-phone"></i>
    <h2 class="card-title">Phone number</h2>
    <p class="card-info">+0 000 0000000</p>
  </div>
  <div class="card">
    <i class="fas fa-map-marker-alt"></i>
    <h2 class="card-title">Location</h2>
    <p class="card-info">Greece</p>
  </div>
</div>
  

</template>

<style>
/* body {
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(0, 41, 255, 0.02) 0%,
        rgba(0, 41, 255, 0) 100%
    );
}  */

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}


/* span {
  font-weight: 700;
  color: #102a43;
  line-height: 35px;
  line-height: 2.5rem;
  font-size: 12px;
  font-size: 0.8rem;
  text-transform: uppercase;
} */
input[type="submit"] {
  background: #fc4366;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 5px;
  margin-top: 1.3em;
}


 form {
  /* background-color: #130f0f; */
  padding-top: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  overflow: hidden;
 
}

.required-star {
  color: #fc4366;
}

input,
textarea {
     border: black;
 margin-bottom: 50px;
  padding: 9px 20px;
  border: 1px solid #e1e2eb;
  background-color: #fff;
  color: #102a43;
  caret-color: #101418;
  box-sizing: border-box;
  font-size: 14px;
  font-size: 1rem;
  line-height: 29px;
  line-height: 2rem;
  box-shadow: inset 0 2px 4px 0 rgba(7, 8, 8, 0.2);
  border-radius: 3px;
  line-height: 29px;
  line-height: 2rem;
}

.container1 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.card {
  background: #292929;
  min-width: 300px;
  height: 140px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.card i {
  color: #d44444;
  font-size: 2rem;
  position: absolute;
  transition: all 0.4s ease;
}

.card-title {
  color: #d44444;
  font-size: 1.2rem;
  text-transform: uppercase;
  transform: translate(0,-80px);
  transition: all 0.4s ease;
}

.card-info {
  color: #fff;
  margin-top: 10px;
  transform: translate(0, 80px);
  transition: all 0.4s ease;
}

.card:hover i {
  transform: scale(2);
  opacity: 0;
}

.card:hover .card-title {
  transform: translate(0, 0);
}
.card:hover .card-info {
  transform: translate(0, 0);
}


</style>
