(function () {
  const form = document.getElementById("signupForm");
  const note = document.getElementById("formNote");

  if (!form || !note) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());
    const applications = JSON.parse(localStorage.getItem("engAiApplications") || "[]");
    applications.push({
      ...data,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem("engAiApplications", JSON.stringify(applications));

    note.textContent = "Application captured for this demo. Connect the form to a CRM or Google Sheet before launching ads.";
    form.reset();
  });
}());
