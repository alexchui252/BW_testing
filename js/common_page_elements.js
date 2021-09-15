//head
const head = document.querySelector('head');

head.innerHTML = 
`
<meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <!-- font awesome -->
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
        
            <!--Import Google Icon Font-->
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        
            <!-- Compiled and minified CSS -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        
            <title>Bioinformatics Workflows</title>

            <style>

                @media screen and (max-width: 670px){
                    div.parallax-container:nth-child(2){
                        height:300px;
                    }
                }
                
                @media screen and (max-width: 450px){
                    nav .brand-logo{
                        font-size: 1.5rem;
                     }
                }
                
                nav{
                    position: fixed;
                    background: rgba(0, 0, 0, 0);
                    padding:0px 20px;
                    z-index: 3; /*force navbar on top especially of images*/
                }
              

                .section{
                    padding-top: 4vw;
                    padding-bottom: 4vw;
                }


                .tabs .tab a:hover, .tab a:focus, .tabs .tab a:focus.active, .tabs .tab a.active{
                    background: #F0F0F6;
                    color: #2EC2A8;
                }

                nav .brand-logo, h2.brand-logo, h5.brand-logo, .tabs .tab a, p.brand-logo{
                    color:  #2EC2A8; 
                }

                .tabs .indicator{
                    background-color: #2EC2A8;
                }

                nav ul a{
                    color:  #4BB8DD;
                    font-size: 1.5rem;
                }

                #topics{
                    padding: 0px;
                    max-width: 100%;
                    width: 100%;
                    
                }

                #pic{
                    padding: 0px;
                    max-height: 70%
                }
                
                .row{
                    margin-bottom: 0px;
                }

                
                @media screen and (min-width: 1360px){
                    #section_title h2{
                        padding-top: 30px;
                    }
                }
                
                #welcome h2{
                    margin-top: 0px;
                }

                #welcome_message{
                    color:  #2EC2A8 ;
                    font-size: 50px;
                    padding: 30px;
                    position: absolute;
                    top: 25%;
                }

                #welcome_message span{

                    font-size: 1.1em;
                    font-weight: bold;
                    text-shadow: 1px 1px 1px;
                }

                .nav_icon, .nav_icon:hover{
                    background-color: #4BB8DD;
                }
                
                .parallax > img{
                    filter: brightness(75%);
                }

                .nav_scroll_background{
                    background-color:#71878d ;
                }

                html{
                    scroll-behavior: smooth;
                }
            </style>

`;

//header
const header = document.querySelector('header');

header.insertAdjacentHTML("afterbegin", 
`
<nav class="nav-wrapper z-depth-0">
<div class="container indigo"> 
    <a href="index.html" class="brand-logo">BioinformaticsWorkflows</a>
    <a href="" class="sidenav-trigger prefix" data-target="mobile-menu">
        <i class="material-icons blue-text">menu</i>
    </a>
    <ul class="right hide-on-med-and-down">
        <li><a href="directory.html">Directory</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>

        <li><a href="https://github.com/alexchui252/BioinformaticsWorkflows" class="btn-floating btn-small nav_icon tooltipped" data-tooltip="Github">
            <i class="fab fa-github"></i>
        </a></li>
        <li><a href="https://linkedin.com/in/alexchui252" class="btn-floating btn-small nav_icon tooltipped" data-tooltip="LinkedIn">
            <i class="fab fa-LinkedIn"></i>
        </a></li>
    </ul>
    
    <ul class="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="directory.html">Photos</a></li>
        <li><a href="about.html">Services</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</div>
</nav>
`);

//footer
const footer = document.querySelector('footer');

footer.innerHTML = 
`
<div class="container">
        <div class="row">
            <div class="col s12 l7">
                <h5 class="brand-logo">About me</h5>
                <p>I'm an undergraduate student at Columbia University in NYC studying biochemistry and data science. My first experience with bioinformatics is identifying genetic drivers of bladder cancer metastasis with transcriptomic and genomic data with R/Bioconductor packages. Message me on the site or LinkedIn with anything of interest!</p>
            </div>
            <div class="col s12 l3 offset-l2">
                <h5 class="brand-logo">Connect</h5>
                <ul>
                    <li><a href="" class="grey-text text-lighten-3">
                        <i class="fab fa-github"></i> Github</a></li>
                    <li><a href="" class="grey-text text-lighten-3">
                       <i class="fab fa-LinkedIn"></i> LinkedIn</a></li>
                    <li><a href="" class="grey-text text-lighten-3">
                        <i class="fa fa-envelope"></i> Email</a></li>
                    
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright grey darken-4">
        <div class="container center-align">&copy; 2021 BioinformaticsWorkflows</div>
</div>
`

contact_form = document.querySelector('section#contact');

contact_form.innerHTML = 
`
<div class="row">
<div class="col s12 l5">
    <h2 class="brand-logo">Connect with us</h2>
    <p>Fill out this form to receive updates on new posts on the site, if you're interested in working with us, or have suggestions for our content!</p>
</div>

<div class="col s12 l5 offset-l2">
    <form action="">
        <div class="input-field">
            <i class="material-icons prefix">email</i>
            <input type="email" id=email>
            <label for="email">Your email</label>
        </div>
        <div class="input-field">
            <i class="material-icons prefix">message</i>
            <textarea name="" id="message" class="materialize-textarea"></textarea>
            <label for="messafe">Your message</label>
        </div>
        
        <div class="input-field center">
            <button class="btn">Submit</button>
        </div>
    </form>
</div>
</div>
`