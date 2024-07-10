import { Cta } from '../../components/Cta'
import { SectionTitles } from '../../components/SectionTitles'

export const Projects = () => {

    const projects = [
        {
            title: 'Estudio Integral A',
            description:"This landing page created with React and Tailwind for Studio Integral A,looking for a user-friendly description and modern page, fully responsive. The page is still in progress in order to make it more complete and optimal for and engaging experience.",
            subtitle: 'Work Project',
            tech : 'React,Tailwind,Javascript,Vite',
            img: 'projects/estudiointegral.png',
            link: 'https://estudiointegrala.com.ar/',
            git:'https://estudiointegrala.com.ar/',
        },
        {
            title: 'Backroom Estudio',
            description:"This landing page was designed to be clean, modern, and user-friendly, utilizing HTML, CSS, and JavaScript to create an engaging experience. It features a minimalistic layout for easy navigation, a responsive design for optimal viewing on all devices, and a hero section with a compelling headline and background image. A prominent call to action encourages users to take desired actions such as contacting us or booking a session. Smooth scrolling, achieved through JavaScript, ensures seamless navigation, while interactive elements like hover effects and animations add dynamism. The HTML5 structure is clean and semantic, and CSS3, including Flexbox and media queries, is used for custom styling and responsiveness.",
            subtitle: 'Work Project',
            tech : 'HTML, CSS, JavaScript, Bootstrap',
            img: 'projects/backroom/backroomestudio.png',
            link: 'https://estudiobackroom.com/',
            git:'https://backroomestudio.netlify.app/'
        },
        {
            title: 'Backroom Estudio',
            description:"This project was created by me with the intention of providing the account executives an efficient tool to accurately track the content generated for each of their clients. The layout of the platform is fully responsive and has been designed with simplicity in mind, as the main objective is to maintain a clear order and provide information effectively.",
            subtitle: 'Own Idea',
            tech : 'HTML, CSS, JavaScript, Bootstrap',
            img: 'projects/backroom/backroom.png',
            link: 'https://backroom23.netlify.app//',
            git:'https://github.com/solarroyoportfolio/br',

        },
        {
            title: 'S&H Consultora',
            description:'Sections of the page have been modified, including the gallery,texts and alignments have been adjusted. Functionalities have been added to ensure a seamless user experience, even while undergoing remodeling. Adding a new section of courses, each one have their own page. I added in that page a form where the client recieve instructions on their email to make an account in the platform of S&H.',
            subtitle: 'Work Project',
            tech : 'HTML, CSS, JavaScript, Bootstrap, PHP',
            img: 'projects/backroom/s&h.png',
            link: 'https://syhconsultora.com.ar',
            git:'https://syhconsultora.com.ar',

        },
        {
            title: 'Orthowebinars',
            description:'This was a work project that i did in Backroom studio, this was a redesign of the page, it was a simple page, i added new sections, cards and forms.I also made new pages for each course, where you can find a form where you can fill with your information and this information is saved to a txt file for the owner of the page so he can contact with you to give you the information.',
            subtitle: 'Work Project',
            tech : 'HTML, CSS, JavaScript, Bootstrap,PHP',
            img: 'projects/backroom/orthowebinars1.png',
            link:'https://orthowebinars.com/',
            git:'https://orthowebinars.com/',

        },
        {
            title: 'Servicred',
            description:'On this website, an update of text and maintenance has been carried out. The structure was already created in HTML and has been updated by me in this months; however, it is still undergoing remodeling.',
            subtitle: 'Work Project',
            tech : 'HTML, CSS, JavaScript, Bootstrap',
            img: 'projects/backroom/Servicred.png',
            link:'https://servicredargentina.com.ar/',
            git:'https://servicredargentina.com.ar/',

        },
        {
            title: 'Ediba',
            description:'This was a Work project (a landing page )that i did in Backroom Studio for EDIBA.COM, it consists of a landing page that facilitates access to the different options that ediba has.',
            subtitle: 'Work Project',
            tech : 'HTML, CSS, JavaScript, Bootstrap',
            img: 'projects/backroom/ediba1.png',
            link:'https://www.ediba.com/',
            git:'https://www.ediba.com/',

        },
        {
            title: 'Frontend BA Multiplica',
            description:'This was a final project of the course Frontend web development. This project consist in a web page for a random course web to buy courses. I try to use all the content we covered during the course. ',
            subtitle: 'Study Project',
            tech : 'HTML, CSS, JavaScript, Bootstrap',
            img: 'projects/frontendBA.png',
            link:'https://mariasolarroyo.github.io/BA-Multiplica-Proyecto-FrontEnd/',
            git:'https://github.com/MariaSolArroyo/BA-Multiplica-Proyecto-FrontEnd',

        },
        {
            title: 'Backend Potrero digital',
            description:'This is the second part of the fullstack course, from Potrero Digital, in this course we specialized in the backend part of the web, using technologies such as PHP, PHPMYADMIN, DATA BASE, as well as HTML and CSS.',
            subtitle: 'Study Project',
            tech : 'HTML, CSS, JavaScript, Bootstrap,PHP,PHPMyAdmin',
            img: 'projects/potrero/backendpotrero.png',
            link:'http://sollarroyo.pythonanywhere.com/',
            git:'https://github.com/MariaSolArroyo/ProyectoEcommersePD',

        },
        {
            title: 'Frontend Potrero Digital',
            description:'The first part of the fullstack course, from Potrero Digital, in this course we specialized in the frontend part of the web, using technologies such as HTML and CSS.',
            subtitle: 'Study Project',
            tech : 'HTML, CSS, JavaScript, Bootstrap',
            img: 'projects/potrero/frontendpotrero.png',
            link:'https://mariasolarroyo.github.io/ProyectoWebPD/',
            git:'https://github.com/MariaSolArroyo/ProyectoWebPD',

        },
        {
            title: 'Frontend Web Adminra',
            description:'This was my very first web I did when I decided to specialize in frontend. The project consisted of a web page where, in addition to html and css,i used a template where the knowledge acquired about HTML and css could be included.',
            subtitle: 'Study Project',
            tech : 'HTML, CSS, Bootstrap',
            img: 'projects/ADIMRA.png',
            link:'https://mariasolarroyo.github.io/DesarrolloWebAdimra/',
            git:'',

        },
        {
            title: 'Frontend Ticmas',
            description:'Final project of TICMAS. In this course I obtained the necessary knowledge to take the first steps in front-end development. I used a landing page to make a portfolio',
            subtitle: 'Study Project',
            tech : 'HTML, CSS, JavaScript, Bootstrap',
            img: 'projects/frontendTICMAS.png',
            link:'https://mariasolarroyo.github.io/',
            git:'https://github.com/MariaSolArroyo/DesarrolloWebAdimra',

        },
        {
            title: 'QR Challenge',
            description:'This was a challenge I took to improve my developer skills.',
            subtitle: 'Frontend Mentor',
            tech : 'HTML, CSS, Bootstrap',
            img: 'projects/FrontEndMentorChallengeQR.png',
            link:'https://mariasolarroyo.github.io/',
            git:'https://github.com/MariaSolArroyo/FrontEndMentor-Challenge-QR-code-component',

        },
        {
            title: 'Google',
            description:'This was a challenge I took to improve my developer skills. ',
            subtitle: 'Challenge',
            tech : 'HTML, CSS, Bootstrap',
            img: 'projects/clonegoogle.png',
            link:'https://github.com/MariaSolArroyo/CLONE-GOOGLE',
            git:'https://github.com/MariaSolArroyo/CLONE-GOOGLE',

        },
        {
            title: 'Dribbble Form',
            description:'This was a challenge I took to improve my developer skills.',
            subtitle: 'Challenge',
            tech : 'HTML, CSS, Bootstrap',
            img: 'projects/clonedribbble.png',
            link:'https://github.com/MariaSolArroyo/cloneFormularioDribbbleOscuro',
            git:'https://github.com/MariaSolArroyo/cloneFormularioDribbbleOscuro',

        },
    ]
  return (
    <div id='services' className='p-10 lg:min-h-[120vh]'>
        <SectionTitles subtitle="My Recent Work" title="Portfolio" />


        <div>
            <ul className='grid lg:grid-cols-3 gap-4'>
                {
                    projects.map((p,index)=>(
                        <li key={index} className='relative rounded-md bg-color_bg_variant inline-block justify-start items-center text-start text-color_white p-4 pb-16' >
                           <div className='relative '> 
                            
                            <img src={p.img} className='rounded-md mb-2 border-color_white border-[0.3px] p-[0.3rem]'  alt="" />

                            <h6 className='text-color_gray font-light text-[0.7rem]'>{p.subtitle}</h6>
                            <h2 className='text-color_primary font-medium text-xl'>{p.title}</h2>
                            <p className='font-extralight text-[0.7rem]'>{p.description}</p>
                           </div>
                            <div className='absolute bottom-4'>
                            <Cta button1="Github" button2="Live Demo" link1={p.git} link2={p.link}/>

                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>

    </div>
  )
}
