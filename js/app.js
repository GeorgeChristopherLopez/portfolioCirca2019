let bg = document.querySelector('canvas');

let projectBtn = document.querySelector('.project-btn');

let app = document.querySelector('.app');
app.innerHTML = `
 <div class="about-me">

            <div class="profile-section">
                <img class="profile" src="img/GeorgeChristopherLopez.jpg" />
                <div id="social">
                    <ul class="contact-info">
                        <li><a href="mailto:georgechristopherlopez@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a></li>


                        <li>
                            <a href="https://www.linkedin.com/in/george-christopher-lopez-b9758337/" target="_blank">
                                <i class="fa fa-linkedin-square"></i>
                            </a>
                        </li>

                        <li><a href="https://github.com/GeorgeChristopherLopez" target="_blank"><i class="fa fa-github"></i></a></li>
                        <li><a href="https://codepen.io/gclopez" target="_blank"><i class="fa fa-codepen"></i></a></li>

                    </ul>
                </div>
            </div>

            <div class="description">
                <h2>
                    Hello, my name's <span class="highlight">
               George Lopez            </span>
                </h2>
                <h4>
                 In 2019, I started spending every second of my free time learning to design/code. In 2020, I began my <span class="highlight">MS in Computer Science </span> at Pace University.
                </h4>
                <h4>I love <span class="highlight">Javascript</span>  and the <span class="highlight">React</span> framework</h4>


            </div>
        </div>

        <div class="projects-header" >
            <a href="#projects-section" class="project-btn">VIEW WORK</a>
        </div>
        <div class="projects">
           



            <!----- PROJECTS SECTION ----->

            <div class="projects-section" id="projects-section">
                <article id="first-project" >
                    <div class="project">
                        <a href="http://bit.ly/32ZFJR9" class="image fit thumb" target="_blank"><img src="img/elite_driving_thumbnail.png" alt="" /></a>
                    </div>
                    <div class="project-description">
                        <h3>Elite Driving</h3>
                        <p>Landing page for a driving school website. Featuring a DMV Quiz App.</p>
                        <a href="http://bit.ly/32ZFJR9" class="btn btn-outline-danger" target="_blank">View Project</a>
                        <a href="http://bit.ly/2PXpdfd" class="btn btn-danger" target="_blank">View Code</a>
                    </div>
                </article>
                <article >
                    <div class="project-description">
                        <h3>Flix Central</h3>
                        <p>Movie Database Website based on the MOVIEDB API.</p>
                        <a href="http://bit.ly/39yRdOc" class="btn btn-outline-danger" target="_blank">View Project</a>
                        <a href="http://bit.ly/2vR53wL" class="btn btn-danger" target="_blank">View Code</a>


                    </div>
                    <div class="project">
                        <a href="http://bit.ly/39yRdOc" class="image fit thumb" target="_blank"><img src="img/flixcentral_thumbnail.png" alt="" /></a>


                    </div>

                </article>

                <article >
                    <div class="project-description">
                        <a href="https://georgechristopherlopez.github.io/Skyward-Esl/" class="image fit thumb" target="_blank"><img src="img/skyward_thumbnail.png" alt="" /></a>
                    </div>
                    <div>
                        <h3>Skyward ESL</h3>
                        <p>ESL program and U.S Citizenship lessons for Non English speakers.</p>
                        <a href="https://georgechristopherlopez.github.io/Skyward-Esl/" class="btn btn-outline-danger" target="_blank">View Project</a>
                        <a href="https://github.com/GeorgeChristopherLopez/Skyward-Esl" class="btn btn-danger" target="_blank">View Code</a>
                    </div>
                </article>
                <article class="wow fadeInRight" data-wow-duration="2s">
                    <div class="project-description">
                        <h3>Mancala Web App</h3>
                        <p>Web browser game of Mancala using HTML and Javascript DOM manipulation</p>
                        <a href="http://bit.ly/2PVrgRa" class="btn btn-outline-danger" target="_blank">View Project</a>
                        <a href="http://bit.ly/2v1T4fi" class="btn btn-danger" target="_blank">View Code</a>

                    </div>
<div>
    <a href="http://bit.ly/2PVrgRa" class="image fit thumb" target="_blank"><img src="img/mancala_thumbnail.png" alt="" /></a>

</div>                      </article>
            </div>
        </div>

`;




console.log(bg);

   
      


    