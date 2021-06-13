const onSubmit = async (event) => {
  event.preventDefault();

  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const username = $("#username").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  if (
    !firstName ||
    !lastName ||
    !username ||
    !email ||
    !password ||
    !confirmPassword
  ) {
    console.log("Please enter all fields");
    return;
  }

  if (password === confirmPassword) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword,
      }),
    };

    const response = await fetch("/auth/signup", options);

    if (response.status !== 200) {
      $("#signup-modal").modal("show");
    } else {
      window.location.replace("/login");
    }
  } else {
    $("#password-modal").modal("show");
  }
};

$("#signup-form").submit(onSubmit);
