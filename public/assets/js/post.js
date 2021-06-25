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

const onClickRenderEdit = async (event) => {
  const container = $(event.currentTarget).parents("#comment-content");
  const message = $(container).children("#message").text();
  const commentId = event.currentTarget.id;
  const postId = $(event.currentTarget).data("id");

  const form = `<form name="edit-form" id="${commentId}" class="d-flex justify-content-between"
  data-id="${postId}">
    <div>
      <input class="form-control form-control-sm" id="message-input" type="text" value="${message}">
    </div>
    <div class="d-flex">
      <button
        type="submit"
        class="btn btn-outline-dark btn-sm"
      >
        Save
      </button>
      <button
        type="button"
        class="btn btn-dark btn-sm"
        name="cancel-btn"
        id="${commentId}"
        data-id="${postId}"
      >
        Cancel
      </button>
    </div>
  </form>`;

  $(container).empty();
  $(container).append(form);

  $('[name="edit-form"]').submit(onSubmitUpdateComment);
  $('[name="cancel-btn"]').click(onClickCancelEdit);
};

const onSubmitUpdateComment = async (event) => {
  event.preventDefault();
  const comment_id = event.currentTarget.id;
  const post_id = $(event.currentTarget).data("id");
  const message = $(event.currentTarget).find("#message-input").val();

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      comment_id,
      post_id,
      message,
    }),
  };

  const response = await fetch(
    `/api/posts/${post_id}/comment/${comment_id}`,
    options
  );

  if (response.status !== 200) {
    console.log("Failed to update");
  } else {
    window.location.replace(`/view/${post_id}`);
  }
};

const onClickCancelEdit = (event) => {
  const post_id = $(event.currentTarget).data("id");

  window.location.replace(`/view/${post_id}`);
};

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
$('[name="edit-btn"]').click(onClickRenderEdit);
$('[name="delete-comment-btn"]').click(onDeleteComment);
