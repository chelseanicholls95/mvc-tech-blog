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

const editPost = async (event) => {
  event.preventDefault();

  const id = event.currentTarget.id;

  const title = $("#title").val();
  const body = $("#body").val();

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      title,
      body,
    }),
  };

  const response = await fetch(`/api/posts/${id}`, options);

  if (response.status !== 200) {
    console.log("Failed to update");
  } else {
    window.location.replace(`/view/${id}`);
  }
};

$('[name="new-post"]').submit(onSubmit);
$('[name="edit-post"]').submit(editPost);
