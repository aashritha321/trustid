document.getElementById("auditForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  runAudit(name, email);
});

function runAudit(name, email) {
  if (!email.includes("@")) {
    alert("Invalid email");
  } else {
    alert("Audit Successful");
  }
}