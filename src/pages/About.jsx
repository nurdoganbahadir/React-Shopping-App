import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <div className="text-center">
              <img
                src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_4.png"
                width={100}
                className="rounded-circle"
                alt="a"
              />
            </div>
            <div className="text-center mt-3">
              <span className="bg-secondary p-1 px-4 rounded text-white">
                Junior
              </span>
              <h5 className="mt-2 mb-0">Nurdoğan Bahadır</h5>
              <span>Frontend Developer</span>
              <div className="px-4 mt-1">
                <p className="fonts">
                  I completed my studies in the Web Design program at Sabancı
                  Industrial and Vocational Anatolian High School with top
                  honors. After taking a year off, I was admitted to the
                  Guidance and Psychological Counseling Department at Kocaeli
                  University, from which I graduated in June 2022. I am now
                  looking to pivot my career towards becoming a Full Stack
                  Developer. With my background in psychology and experience in
                  web design, I aim to develop innovative software solutions
                  with a focus on user experience. I am excited to combine my
                  human-centered approach and technical skills to create
                  applications that best meet users' needs.
                </p>
              </div>
              <ul className="social-list">
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-dribbble" />
                </li>
                <li>
                  <i className="fa-brands fa-instagram" />
                </li>
                <li>
                  <i className="fa-brands fa-linkedin" />
                </li>
                <li>
                  <i className="fa-brands fa-google" />
                </li>
              </ul>
              <div className="buttons">
                <button className="btn btn-outline-primary px-4">
                  <a
                    className="text-decoration-none text-black "
                    href="www.linkedin.com/in/nurdoganbahadir"
                    target="true"
                  >
                    Message
                  </a>
                </button>
                <button className="btn btn-primary px-4 ms-3">
                  <a
                    className="text-decoration-none text-white"
                    href="https://github.com/nurdoganbahadir"
                    target="true"
                  >
                    Contact
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
