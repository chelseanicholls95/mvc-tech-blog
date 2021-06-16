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

const onSubmitCreate = async (event) => {
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

// const onSubmitEdit = async (event) => {
//   event.preventDefault();

//   const comment_id = event.currentTarget.id;

//   const target = event.currentTarget;
//   const post_id = $(target).data("id");
//   console.log({ commentId: comment_id, postId: post_id });
// };

const onDeleteComment = async (event) => {
  const comment_id = event.currentTarget.id;
  const post_id = $(event.currentTarget).data("id");

  const options = {
    method: "DELETE",
    redirect: "follow",
  };

  const response = await fetch(
    `/api/posts/${post_id}/comment/${comment_id}`,
    options
  );

  if (response.status !== 200) {
    console.log("FAILED DELETE");
  } else {
    window.location.replace(`/view/${post_id}`);
  }
};

$('[name="delete-btn"]').click(onDelete);
$('[name="comment-form"]').submit(onSubmitCreate);
// $('[name="edit-comment-form"]').submit(onSubmitEdit);
$('[name="delete-comment-btn"]').click(onDeleteComment);
