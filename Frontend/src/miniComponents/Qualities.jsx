import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "Community development is the process of empowering individuals and groups to improve their living conditions and overall well-being. It involves collaborative efforts to enhance access to education, healthcare, and economic opportunities. By fostering local leadership and participation, it builds stronger, more resilient societies. Sustainable community development promotes equity, inclusion, and long-term growth for all members.",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
            "Transparency is the foundation of trust in any system, especially in governance, finance, and social initiatives. It ensures that actions, decisions, and data are open and accessible to all stakeholders. By promoting honesty and accountability, transparency reduces corruption and builds confidence. In the digital age, transparency empowers communities through informed participation and responsible collaboration.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "Impact measurement is the process of evaluating the effectiveness and outcomes of projects or initiatives in achieving their intended goals. It helps organizations understand what works, what doesn’t, and why. By using data-driven insights, impact measurement guides better decision-making and resource allocation. Ultimately, it ensures accountability and drives meaningful, measurable change for communities and causes.",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;