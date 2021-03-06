const onClick = async () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch("/auth/logout", options);

  if (response.status !== 200) {
    console.log("FAILED LOGOUT");
  } else {
    window.location.replace("/");
  }
};

$("#logout-btn").click(onClick);
