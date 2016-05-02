var name = "Will Cheaqui";
var role = "Web Developer";

var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);

var bio = {
    "name": "Will Cheaqui",
    "role": "Web Developer",
    "welcomeMessage": "I was introduced to programming last November when I started C++ as a hobby. I learned that program enough to make a text based game, and at that time I was hooked. I then started to take a serious look into becoming a Web Developer. I have learned HTML, CSS and Javascript and have loved every minute of it. I have discovered that I do have some skill in this area and am a quick student. I plan to never stop learning new skills and trying new things and would love to take these skills and apply them to a position where I can both build on these skills and apply what I have learned to help with your needs.",
    "contacts": {
        "mobile": "503-432-9177",
        "email": "willcheaqui@yahoo.com",
        "github": "wcheaqui",
        "location": "Portland"
    },
    "skills": ["HTML, CSS, JavaScript, C++"]
}

var education = {
    "schools": [{
        "Bob Jones University": {
            "name": "Bob Jones University",
            "city": "Greenville, SC",
            "degree": "BA",
            "major": "Small Business in Ministry"
        }
    }, {
        "Arizona State University": {
            "name": "Arizona State University",
            "city": "Phoenix, AZ",
            "classes": ["Calculus 1&2", "Chemistry", "Introduction to Engineering"]
        }
    }, {
        "Udacity": {
            "name": "Udacity",
            "city": "online",
            "degree": "nanodegree",
            "major": "Front-End Web Developer",
            "classes": ["Intro to HTML and Css", "HTML Syntax", "CSS Syntax", "Responsive Web Design Fundamentals", "Responsive Images", "JavaScript Basics", "Introduction to JQuery", "Object Oriented JavaScript", "HTML5 Canvas", "Writing Readmes", "website Performance Optimization", "Browser Rendering Optimization", "Introduction to AJAX", "JavaScript Design Patterns", "JavaScript Testing"]
        }
    }]
}

var work = {
    "Jobs": [{
        "Uber": {
            "employer": "Uber/LYFT",
            "title": "Driver",
            "location": "Portland, OR",
            "dates": "01/16-Present",
            "description": "I drove clients around Portland. This position required me to have excellent customer service and soft skills."
        },
        "t-mobile": {
            "employer": "T-Mobile",
            "title": "Specialist, Retention Services",
            "location": "Salem, OR",
            "dates": "05/15-01/16",
            "description": "I answered the phones and addressed any questions or concerns that the caller may have in a friendly, courteous, and efficient manner. Troubleshoot Phones and Tablets. In this role I receive escalated callers. It is my responsibility to not only keep the caller as a client, but to also offer them alternatives to better suit their needs. I was Top Performer 4 times in the last 5 months. I developed an Excel tracking tool for personal stats, which is currently implemented site wide."
        },
        "synchrony": {
            "employer": "Synchrony Financial",
            "title": "Specialist, Merchant Services",
            "location": "Phoenix, AZ",
            "dates": "09/13-05/15",
            "description": "I answered the phones and addressed any questions or concerns that the caller may have in a friendly, courteous, and efficient manner. I assisted with escalated call backs for the E-Commerce Project Manager. Developed Job aids, which were implemented enterprise wide. I was Top Performer 13 times. I was Top Team Player in 2014. Worked with a team to develop web-based training materials, which were implemented enterprise-wide."
        }
    }]
}

var projects = {
    "project": [{
        "portfolio": {
            "title": "Porfolio Website",
            "dates": "04/13/2016-04/23/2016",
            "description": "responsive resume website with images and layout changes for different devices"
        },
        "cookies": {
            "title": "A Taste From Home",
            "dates": "03/2016-04/2016",
            "description": "Business website with mulitiple pages"
        },
        "mockup-article": {
            "title": "Mockup to Article",
            "dates": "03/2016",
            "description": "Given a PDF Duplicate in HTML and CSS"
        },
        "resume": {
            "title": "Online Resume",
            "dates": "04/2016-05/2016",
            "description": ""
        }
    }]
}

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#topContacts").append(formattedWelcomeMsg);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
}

for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmpoyer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmoployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(
        formattedEmployerTitle);
}