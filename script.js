function togglePersonal(personal_info, button) {
    var section = document.getElementById(personal_info);
    
    if (section.classList.contains('hidden')) {
      section.classList.remove('hidden');
      button.textContent = "Hide"; // Change button text to "Hide"
    } else {
      section.classList.add('hidden');
      button.textContent = "Show"; // Change button text to "Show"
    }
  }
  
  function toggleEducation(education, button) {
    var section = document.getElementById(education);
    
    if (section.classList.contains('hidden')) {
      section.classList.remove('hidden');
      button.textContent = "Hide"; // Change button text to "Hide"
    } else {
      section.classList.add('hidden');
      button.textContent = "Show"; // Change button text to "Show"
    }
  }
  
  function toggleSkills(skills, button) {
    var section = document.getElementById(skills);
    
    if (section.classList.contains('hidden')) {
      section.classList.remove('hidden');
      button.textContent = "Hide"; // Change button text to "Hide"
    } else {
      section.classList.add('hidden');
      button.textContent = "Show"; // Change button text to "Show"
    }
  }
  
  function toggleWorkExperience(work_experience, button) {
    var section = document.getElementById(work_experience);
    
    if (section.classList.contains('hidden')) {
      section.classList.remove('hidden');
      button.textContent = "Hide"; // Change button text to "Hide"
    } else {
      section.classList.add('hidden');
      button.textContent = "Show"; // Change button text to "Show"
    }
  }
  