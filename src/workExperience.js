import CyclicaLogo from '../src/assets/cyclica';
import PointClickCareLogo from '../src/assets/pointclickcare.png';
import RBCLogo from '../src/assets/rbc.png';
import WaterlooLogo from '../src/assets/waterloo.png';

export const workExperiences= [
        {
            title: 'Software Developer',
            company: 'Cyclica',
            date: 'Sept - Dec 2020',
            filters: ['React', 'Django', 'Drug Discovery'],
            image: CyclicaLogo,
            companyDescription: 'Cyclica is a Toronto based biotechnology start up that leverages AI to accelerate the drug discovery process!\
                                As an intern on the Scientific platforms team I worked on Ligand Express, a cloud based platform in which users\
                                could upload molecules of interest to generate polypharmacology profiles.',
            resumePoints: [
                                'Created new features from end to end for a drug development platform by building functional React components and \
                                leveraging Django to develop RESTful API’s and PostgreSQL query expressions',
                                'Built a major feature that allows users to analyze the abundance of 30 000+ proteins in major organs, tissues and \
                                cells by implementing a dynamically colour coded anatomical diagram and graph',
                                'Optimized performance of protein details API by 30% through refactoring database queries',
                        ],
            links: [{description: 'Company Website', link: 'https://www.cyclicarx.com/'}, {description: 'Ligand Express', link: 'https://ligandexpress.com/'}]
        },
        {
            title: 'Research Assistant',
            company: 'Lab of Engineering and Optometry/Vision Science',
            date: 'Sept 2019 - Present',
            filters: ['Python', 'Psychophysics', 'Optics', 'Research'],
            image: WaterlooLogo,
            companyDescription: "I started working part time as a research assistant under Professor Vasudevan (Vengu) Lakshminarayanan. In this very \
                                multidisciplinary lab I got to work with a huge variety of people, delve into the world of optics and research while \
                                being able to publish my very first article! :)",
            resumePoints: [
                                'Cowrote a publication for SPIE Optics + Photonics journal',
                                'Created a psychophysics eye experiment software to be used in a clinical trial by the Singapore Eye Research Institute \
                                to predict early stage glaucoma in patients by measuring hyperacuity',
                                'With PsychoPy/Python, developed an algorithm using the adaptive staircase procedure to adjust the next test stimulus \
                                according to past responses and write the raw data and insights in a comprehensible format for the experiment observer',
                        ],
            links: [{description: 'Check out my article', link: 'http://www.spie.org/Publications/Proceedings/Paper/10.1117/12.2566771'},
                    {description: 'Lab site', link: 'https://sites.google.com/view/teellabvengulab/home'},]
        },
        {
            title: 'Software Engineering',
            company: 'PointClickCare',
            date: 'Jan - May 2020',
            filters: ['Springboot', 'Selenium', 'Healthcare'],
            image: PointClickCareLogo,
            companyDescription: "PointClickCare is a private cloud-based software company that provides software to nurses in long-term care \
                                facilities, serving thousands of institutions in North America. I was put on team Heroes4Hire who worked \
                                on a microservice called Nutrition Management. This application helped facilitate meal times and helped nurses \
                                view and order foods that fit their resident's dietary needs.",
            resumePoints: [
                                'Implemented and tested backend of nutrition management and core web application used by hundreds of hospitals',
                                'Developed audit framework and instrumented logging events using RESTful API’s, jQuery, Spring and Mockito to \
                                increase logging coverage by 12%',
                                'Reduced team regression period by 5 days by developing page objects and end to end tests with TestNG and Selenium',
                        ],
            links: [{description: 'Company Website', link: 'https://pointclickcare.com/'},
            {description: 'Info on Nutrition Management', link: 'https://pointclickcare.com/products/nutrition-management/'}]
        },
        {
            title: 'Fullstack Developer',
            company: 'Royal Bank of Canada',
            date: 'May - Aug 2019',
            filters: ['Angular', 'Springboot', 'Android', 'iOS'],
            image: RBCLogo,
            companyDescription: 'RBC is one of the biggest banks in Canada and offers loads of financial services to their clients. Among these \
                                services includes mortgages which is what my team worked on! On this team, I was helping to develop a convenient \
                                mobile and web application that mortgage specialists could check regularly to stay on top of their deals. By the end \
                                of my term, the service was fully in production across Canada!',
            resumePoints: [
                                'Created 30% of UI features on an internal web application used by hundreds of mortgage specialists according to \
                                strict design specifications and added dynamic functionality to widgets with Angular, Kotlin and Swift',
                                'Using Spring, developed API’s, wrote and retrieved all user preferences with MongoDB and implemented business logic',
                                'Presented new features and project updates to over 100 stakeholders biweekly',
                        ],
        },
    ];