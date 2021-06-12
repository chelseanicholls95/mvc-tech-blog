const onSubmit = async (event) => {
  event.preventDefault();

  const title = $("#title").val();
  const body = $("#body").val();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      title,
      body,
    }),
  };

  const response = await fetch("/api/posts/", options);

  if (response.status !== 200) {
    console.log("Failed to create new post");
  } else {
    window.location.replace("/dashboard");
  }
};

$("#new-post").submit(onSubmit);
