<template>
  <div class="wrapper">
    <div class="heading">
      <h2>Vítej zpět!</h2>
      <p>Přihlaš se na svůj účet</p>
    </div>

    <div class="input-group">
      <input
        type="text"
        id="username"
        class="input-field"
        placeholder="E-mail"
      />
    </div>

    <div class="input-group">
      <input
        type="password"
        id="password"
        class="input-field"
        placeholder="Heslo"
      />
    </div>
    <!-- Google -->
    <button type="button-google" class="login-with-google-btn">
      Přihlásit se přes Google
    </button>
    <div class="input-group row">
      <div class="row">
        <input type="checkbox" id="remember" hidden />
        <label for="remember" class="custom-checkbox"></label>
        <label for="remember">Zapamatovat účet?</label>
      </div>

      <div class="row">
        <a href="#" target="_blank">Zapomenuté heslo</a>
      </div>
    </div>

    <div class="input-group">
      <button class="sign-in-button">
        Přihlásit <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script></script>

<style>
a {
  color: #31285c;
}

.wrapper {
  width: 320px;
  min-height: 100px;
  background-color: #6e6767;
  border-radius: 5px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
}

.input-field {
  width: 100%;
  height: 45px;
  border: none;
  padding: 10px;
  background-color: #eeeeee;
  color: gray;
  outline: none;
  font-size: 15px;
  margin-bottom: 20px;
  transition: 0.5s;
  border-radius: 5px;
}

.heading {
  color: #3b3663;
  margin-bottom: 20px;
}

.heading p {
  color: #aaa8bb;
}

.heading i {
  font-size: 30px;
  color: #4d61fc;
}

label {
  color: #aaa8bb;
  font-weight: 400;
}

.sign-in-button {
  width: 100%;
  height: 45px;
  border: none;
  color: #ffffff;
  background-color: #31285c;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 500;
  transition: 0.3s;
}

.sign-in-button:hover {
  background-color: #31283b;
}

.row {
  min-width: 5px;
  min-height: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 15px;
}

.custom-checkbox {
  width: 17px;
  height: 17px;
  border-radius: 5px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  margin-right: 5px;
}

input[type="checkbox"]:checked ~ .custom-checkbox {
  background-color: #31285c;
}

input[type="checkbox"]:checked ~ .custom-checkbox::before {
  font-family: "Font Awesome 5 Free";
  content: "\f00c";
  display: inline-block;
  font-weight: 900;
  color: #ffffff;
}

/* Google */
.login-with-google-btn {
  transition: background-color .3s, box-shadow .3s;
    
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
  
  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
  }
  
  &:active {
    background-color: #eeeeee;
  }
  
  &:focus {
    outline: none;
    box-shadow: 
      0 -1px 0 rgba(0, 0, 0, .04),
      0 2px 4px rgba(0, 0, 0, .25),
      0 0 0 3px #c8dafc;
  }
  
  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    cursor: not-allowed;
  }
}
</style>
