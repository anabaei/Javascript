import React from 'react';

function QuestionForm (props) {
  const {onSubmit = () => {}} = props;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const fData = new FormData(form);
    onSubmit({
      title: fData.get('title'),
      body: fData.get('body')
    });
    form.reset();
  };

  return (
    <form
      className="QuestionForm"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="title">Title</label> <br />
        <input name="title" id="title" />
      </div>

      <div>
        <label htmlFor="body">Body</label> <br />
        <input name="body" id="body" />
      </div>

      <div>
        <input type="submit" value="Submit"/>
      </div>
    </form>
  );
}

export {QuestionForm}
