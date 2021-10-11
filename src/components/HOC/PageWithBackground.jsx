export const pageWithBackground =
  (Comment) =>
  ({ ...props }) => {
    return (
      <div
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/login-image.jpg").default + ")",
          minHeight: "100vh"
        }}
      >
        <Comment {...props} />
      </div>
    );
  };
