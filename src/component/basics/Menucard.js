import React from "react";

const Menucard = ({ deepa }) => {
  return (
    <div>
      <section className="main-div-container">
        {deepa.map((curElem) => {
          return (
            <>
              <div className="yellow-light"></div>
              <div className="container" key={curElem.id}>
                <span className="numb">{curElem.id}</span>
                <div>
                  <span1>{curElem.name}</span1>
                </div>
                <hr className="horizontal-line" />

                <div className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  placeat cum doloremque magni.
                  <hr className="horizontal-line" />
                  <div className="food-img glass">
                    <img src={curElem.image} alt="" />
                  </div>
                  <div>
                    <button type="submit" className="btn">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Menucard;
