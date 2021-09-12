import React from "react";
import "./FeedBackCard.css";

function FeedBackCard() {
  return (
    <div className="col mb-5">
      <div class="card align-items-center feed__back__card__container">
        <img
          class="rounded-circle mt-3"
          src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"
          alt="Card cap"
          width="100"
        />
        <div class="card-body text-center">
          <blockquote class="blockquote mb-0">
            <p>
              From the moment we are born, the world tends to have a box already
              built for us to fit inside. Our umbilical cord never seems to be
              severed; we only find new needs to fill. If we disconnected and
              severed our attachments, would we shatter our confinements and
              expand beyond our shell? Would the world look different? Would we
              recognize ourselves?
            </p>
            <footer class="blockquote-footer">Someone famous in</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default FeedBackCard;
