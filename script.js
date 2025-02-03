*{
    margin: 0%;
    padding: 0%;
    font-family: 'Roboto', sans-serif;
}
body{
    background-color: #eeee;

}
nav{
    display: flex;
    justify-content: space-between;
    background-color: #eeee;
    padding: 17px;
    box-shadow: 0px 2px 2px 2px rgb(162, 162, 162);
}
nav .logo{
    margin-left: 22px;
    font-size: 24px;
}
ul{
    margin-right: 45px;
    margin-top: 7px;
}
nav ul li{
    list-style: none;
}
ul li a{
    margin-inline: 22px;
    font-size: 20px;
}
ul li i{
    font-size: 22px;
}
ul li #home{
    color: rgb(5, 167, 167);
}
ul li a:hover{
    border-bottom: 2px solid black;
    cursor: pointer;
}
ul li i:hover{
    color: gray;
    cursor: pointer;
}
.main{
    display: flex;
    justify-content: space-around;
}
.main .mainText{
    margin-top: 144px;
    
}
.mainText h1{
    font-size: 64px;
    
}
.mainText .top{
    color: rgb(4, 138, 138);
}
.mainText button{
    width: 145px;
    height: 40px;
    background-color: rgb(4, 140, 140);
    border: none;
    font-size: 22px;
    color: white;
    margin-top: 24px;
}
.mainText p{
    margin-top: 12px;
}
.mainText button:hover{
    border: 3px solid rgb(3, 128, 128);
    background-color: transparent;
    color: rgb(2, 121, 121);
}

.head h1{
    text-align: center;
    padding: 33px;
    margin-top: 32px;
}
.head span{
    color: rgb(2, 164, 164);
}

.card{
    display: flex;
    justify-content: center;
}
.card .crd{
    width: 300px;
    height: 500px;
    background-color: #fff;
    margin-inline: 11px;
   
}
.crd img{
    width: 85%;
    padding: 22px;
    border-radius: 31px;

}
.crdText{
    margin-left: 16px;
    padding: 8px;
}
.crdText button{
    width: 110px;
    height: 33px;
    border: none;
    background-color: rgb(5, 141, 141);
    color: white;
    font-size: 19px;
    margin-top: 11px;
}
.crdText i{
    color: rgb(255, 149, 0);
}

.blog{
    display: flex;
    justify-content: center;
    width: 500px;
    height: 300px;
    background-color: #fff;
    margin-inline: 22px;
    border-radius: 11px;
   
}
.blog:hover{
    transition: 0.6s ease;
    width: 520px;
    height: 320px;
}
.blog img{
    padding: 22px;
    width: 85%;
}
.blogText{
    padding: 12px;
    margin-top: 33px;
}
.blogText a{
    width: 130px;
    padding: 4px;
    height: 18px;
    background-color: rgb(4, 136, 136);
    color: white;
    font-size: 18px;
    border-radius: 5px;
position: relative;
top: 33px;
}
.letter{
    display: flex;
    justify-content: space-between;
    color: white;
    background-color:rgb(2, 2, 66);
    padding: 43px;
}
.inp{
    display: flex;
}
.inp input{
    width: 330px;
    height: 33px;
    outline: none;
    font-size: 18px;
    border: none;
}
.inp button{
    width: 100px;
    height: 33px;
    background-color: rgb(2, 173, 173);
    color: white;
    border: none;
}

.footer{
    display: flex;
    justify-content: center;
    padding: 53px;
}
.footer .footerText{
    margin-inline: 85px;
}
.footerText p{
    margin-top: 11px;
}

/* about */
.about{
    display: none;
}
.aboutus{
    background-color: rgb(1, 1, 42);
    color: white;
    padding: 56px;
    font-size: 19px;
}
.me{
    display: flex;
    justify-content: center;
    width: 700px;
    background-color: #fff;
    padding: 33px;
    margin-left: 18%;
    margin-top: 7%;
}
.me img{
    width: 54%;
}

/* /contact */

.contact{
    display: none;
}
.contactus{
    background-color: rgb(1, 1, 42);
    color: white;
    padding: 56px;
    font-size: 19px;
}

.contactMe{
    display: flex;
    justify-content: center;
    width: 1000px;
    margin-top: 5%;
    background-color: #fff;
    margin-left: 10%;

}
.contactMe img{
    width: 55%;
}

.contactText{
    padding: 22px;
    width: 600px;
}
.contactText p{
    margin-top: 12px;
}
.form{
    text-align: center;
    margin-top: 5%;
    padding: 22px;
}
.form input{
    width: 300px;
    padding: 5px;
    height: 27px;
    margin-top: 11px;
}
.form button{
    width: 300px;
    height: 36px;
    background-color: rgb(2, 54, 54);
    color: white;
    font-size: 22px;
    border: none;
    margin-top: 22px;
    
}

/* cart */

.cart{
    display: flex;
    justify-content: center;
    display: none;

}
.cartText{
    padding: 22px;
    margin-top: 22px;
}
.cartText p{
    margin-top: 12px;
}
.cartText h2{
    margin-top: 11px;
}
.cartText .btn button{
    width: 140px;
    height: 40px;
    background-color: rgb(255, 89, 0);
    color: white;
    border: none;
    font-size: 22px;
    margin-inline: 11px;
    margin-top: 22px;
}
.cartText .back{
    width: 140px;
    height: 40px;
    background-color:rgb(4, 81, 81);
    color: white;
    border: none;
    font-size: 22px;
    margin-inline: 11px;
    margin-top: 22px;
    margin-top: 22px;
}
