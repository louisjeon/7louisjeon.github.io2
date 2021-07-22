import React from "react";

function RightBottomInner({title, subject, date, time, text}) {
  return (
    <div class="right-bottom-inner">
      <div class="right-bottom-inner-top">
        <h1 class="title">{title}</h1>
        <div class="under-title">
          <div class="right-post-item">
            <div class="left-bar-item-inner">
              <img
                src={process.env.PUBLIC_URL + `${subject}.png`}
                alt={subject}
              />
              <h4>{subject}</h4>
            </div>
          </div>
          <div class="right-post-item-right">
            <div class="circles-container">
              <h1>○ ○ ○ ○ ○ ○ ○ ○</h1>
            </div>
            <p class="date-and-time">
              {date} {time}
            </p>
          </div>
        </div>
      </div>
      <div class="right-bottom-inner-bottom">
          {text}
      </div>
    </div>
  );
}

export default RightBottomInner;
