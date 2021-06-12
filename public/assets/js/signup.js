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
      console.log("FAILED SIGN UP");
    } else {
      window.location.replace("/login");
    }
  } else {
    console.log("Passwords do not match. Please try again.");
  }
};

$("#signup-form").submit(onSubmit);
