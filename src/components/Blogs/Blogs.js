import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="blog">
        <h1>What is Context API????</h1>
        <p>
          If we want to pass data from one component to another we need to pass
          data as props.It is a long process to send data from components.So to
          reduce the issue we use context api.Context api helps us to use data
          directly.No props drilling is needed.We can create a context api,then
          we can directly use it from any components without sending or
          receiving props.
        </p>
      </div>
      <div className="blog">
        <h1>What is semantic tags??</h1>
        <p>
          Semantic tag means meaningfull tags atually.By the name of these
          semantic tags,we can easily understand what is the purpose of the
          tags.Not only human but also the browser can easily understand what is
          the purpose of the tags.Example-div,span,blockquote etc.It also
          describes what type of element should be in this tags.
        </p>
      </div>
      <div className="blog">
        <h1>
          What is the differences among inline,block and inline-block
          elements???/
        </h1>
        <p>
          Inline: Inline elements are those who actually takes only the spaces
          it needs.We can't set the height or width of these elements.And this
          element doesn't start in a new line.It just sits side by side.
          <br />
          Block:Block elemetns starts in a new line.It takes the full width.We
          can set the height and width of these elements. <br />
          Inline-Block:Inline block elements almost similar to inline
          elements.It doesn't start in a new line.But we can set height and
          width of these elements.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
