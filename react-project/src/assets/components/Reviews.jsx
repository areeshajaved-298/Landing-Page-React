function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <h2>Customer Reviews</h2>

      <div className="review-box">

        <div className="review">
          <img src="/images/boy-avatar.jpg" alt="" />
          <p>"Best camera ever! Superb image quality."</p>
          <h4>— Ali Raza</h4>
        </div>

        <div className="review">
          <img src="/images/girl-profile.jpg" alt="" />
          <p>"Very easy to use for beginners."</p>
          <h4>— Maham Khan</h4>
        </div>

        <div className="review">
          <img src="/images/umar-zain.jpg" alt="" />
          <p>"Battery timing is amazing & lens is sharp."</p>
          <h4>— Umar Zain</h4>
        </div>

      </div>
    </section>
  );
}

export default Reviews;
