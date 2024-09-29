const upcomingEvents = [
    {
        title: "Introduction to Open Source Workshop",
        date: "July 10, 2024",
        time: "3:00 PM - 5:00 PM",
        location: "Room 101, Academic Block",
        description: "Join us for an introductory workshop on open source principles, tools, and best practices. Perfect for beginners!",
        link: "#"
    },
    {
        title: "Git and GitHub Bootcamp",
        date: "July 20, 2024",
        time: "1:00 PM - 4:00 PM",
        location: "Room 202, Lab Complex",
        description: "Learn the basics of version control with Git and how to collaborate on projects using GitHub.",
        link: "#"
    },
    {
        title: "Open Source Hackathon",
        date: "August 5-7, 2024",
        time: "Starts at 9:00 AM on August 5",
        location: "Auditorium",
        description: "A 48-hour hackathon where you can team up and work on innovative open source projects. Great prizes await!",
        link: "#"
    },
    
];

const pastEvents = [
    {
        title: "Python for Data Science Workshop",
        date: "May 15, 2024",
        description: "An engaging workshop that covered the basics of Python and its applications in data science. Participants built their first data science projects using real datasets."
    },
    {
        title: "Collaborative Coding Session",
        date: "April 25, 2024",
        description: "A hands-on session where members teamed up to tackle coding challenges and learn best practices in collaborative development."
    },
    {
        title: "Women in Open Source Panel",
        date: "March 20, 2024",
        description: "A panel discussion featuring women leaders in the open source community who shared their experiences and insights."
    },
    
];

// Function to load events
function loadEvents() {
    const upcomingEventsContent = document.getElementById('upcoming-events-content');
    upcomingEvents.forEach(event => {
        upcomingEventsContent.innerHTML += `
            <div class="event">
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
                <a href="${event.link}">Register Here</a>
            </div>
        `;
    });

    const pastEventsContent = document.getElementById('past-events-content');
    pastEvents.forEach(event => {
        pastEventsContent.innerHTML += `
            <div class="event">
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p>${event.description}</p>
            </div>
        `;
    });
}

// Load events after DOM content is fully loaded
document.addEventListener('DOMContentLoaded', loadEvents);