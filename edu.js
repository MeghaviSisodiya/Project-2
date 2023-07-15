// JavaScript to handle interactivity

function viewCourseDetails(courseId) {
    // Fetch course details using AJAX or from a predefined array of courses
    // For simplicity, we are using a sample course here
    const sampleCourses = [
      {
        id: 1,
        title: "Course Title 1",
        description: "Description of course 1",
      },
      {
        id: 2,
        title: "Course Title 2",
        description: "Description of course 2",
      },
    ];
  
    const course = sampleCourses.find(course => course.id === courseId);
  
    if (course) {
      document.getElementById("course-title").textContent = course.title;
      document.getElementById("course-description").textContent = course.description;
  
      document.querySelector(".course-list").style.display = "none";
      document.querySelector(".course-details").style.display = "block";
    }
  }
  
  function goBackToCourseList() {
    document.querySelector(".course-list").style.display = "block";
    document.querySelector(".course-details").style.display = "none";
  }
  