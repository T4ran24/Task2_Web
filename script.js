function toggleSection(id) {
  const section = document.getElementById(id);
  if (section.style.display === 'none') {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
}

function addEducation() {
  const year = prompt("Enter the years (e.g., 2030–2034):");
  const school = prompt("Enter the school name:");
  const field = prompt("Enter your field of study:");

  if (year && school && field) {
    const div = document.createElement('p');
    div.innerHTML = `<strong>${year}</strong><br>${school}<br>${field}`;
    document.getElementById('educationList').appendChild(div);
  }
}

function addSkill() {
  const skill = prompt("Enter a new skill:");
  if (skill) {
    const li = document.createElement('li');
    li.textContent = skill;
    document.getElementById('skillsList').appendChild(li);
  }
}

function addWork() {
  const work = prompt("Describe your work experience:");
  if (work) {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<p>${work}</p>`;
    document.getElementById('workList').appendChild(div);
  }
}
