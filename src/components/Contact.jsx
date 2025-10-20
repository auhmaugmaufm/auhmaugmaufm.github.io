import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="me scroll-mt-20" id="contact">
      <div>
        <div className="flex flex-col">
          <div>
            <div className="flex flex-row">
              <FontAwesomeIcon icon={faMessage} className="w-7 h-7 mr-4" />
              <h1 className="w-full text-xl font-bold">Contact</h1>
            </div>
            <hr className="my-5 bg-base-100 sm:w-4xl" />
          </div>
          <div>
            <div className="hero">
              <div className="hero-content flex-col sm:flex-row">
                <div>
                  <div className="w-auto sm:w-150">
                    <h1 className="text-3xl font-bold text-center">
                      Supitcha Kaewkham
                    </h1>
                    <p className="text-xl text-info-content text-center">
                      Computer Science
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="flex flex-col ... items-center ">
                      <div className="text-xl mb-3 badge badge-neutral badge-outline font-bold p-6 w-full justify-start sm:w-1/3">
                        <a
                          href="mailto:supitcha.skh@gmail.com"
                          className="flex flex-row items-center gap-3 "
                        >
                          <FontAwesomeIcon
                            icon={faSquareEnvelope}
                            className="w-10 h-10"
                            color="red"
                          />
                          <p>Email</p>
                        </a>
                      </div>
                      <div className="text-xl mb-3 badge badge-neutral badge-outline font-bold p-6 w-full justify-start sm:w-1/3">
                        <a
                          href="https://github.com/auhmaugmaufm"
                          target="_blank"
                          className="flex flex-row items-center gap-3"
                        >
                          <FontAwesomeIcon
                            icon={faSquareGithub}
                            className="w-10 h-10"
                            color="black"
                          />
                          <p>Github</p>
                        </a>
                      </div>
                      <div className="text-xl mb-3 badge badge-neutral badge-outline font-bold p-6 w-full justify-start sm:w-1/3">
                        <a
                          href="https://www.linkedin.com/in/supitcha-kaewkham-8212b2348/"
                          target="_blank"
                          className="flex flex-row items-center gap-3"
                        >
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="w-10 h-10"
                            color="navy"
                          />
                          <p>LinkedIn</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="avatar avatar-placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-3xs">
                    <span className="text-3xl">S</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
