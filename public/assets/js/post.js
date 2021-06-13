const onDelete = async (event) => {
  const id = event.currentTarget.id;

  const options = {
    method: "DELETE",
    redirect: "follow",
  };

  const response = await fetch(`/api/posts/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED DELETE");
  } else {
    window.location.replace("/dashboard");
  }
};

const onSubmit = async (event) => {
  event.preventDefault();

  const id = event.currentTarget.id;

  const message = $("#comment-input").val();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      message,
    }),
  };

  const response = await fetch(`/api/posts/${id}/comment`, options);

  if (response.status !== 200) {
    console.log("Failed to create comment");
  } else {
    window.location.replace(`/view/${id}`);
  }
};

$('[name="delete-btn"]').click(onDelete);
$('[name="comment-form"]').submit(onSubmit);
