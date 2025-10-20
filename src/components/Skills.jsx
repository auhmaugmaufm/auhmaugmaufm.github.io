import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faC } from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faHtml5,
  faJava,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className="me scroll-mt-20" id="skills">
      <div>
        <div className="flex flex-col">
          <div>
            <div className="flex flex-row">
              <FontAwesomeIcon icon={faCode} className="w-7 h-7 mr-4" />
              <h1 className="w-full text-xl font-bold">Skills</h1>
            </div>
            <hr className="my-5 bg-base-100 sm:w-4xl" />
          </div>
          <div>
            {/* skill */}
            <table className="table">
              <tbody>
                <tr className="border-none">
                  <th className="flex flex-row items-center">
                    <FontAwesomeIcon
                      icon={faJs}
                      className="w-12 h-12 mr-3"
                      color="rgb(255,220,0)"
                    />
                    <p className="text-xl text-start">JavaScript, TypeScript</p>
                  </th>
                  <td className="text-base text-start">
                    ES6, React, React Native, NodeJS, Express
                  </td>
                </tr>
                <tr className="border-none">
                  <th className="flex flex-row items-center">
                    <FontAwesomeIcon
                      icon={faHtml5}
                      className="w-12 h-12 mr-3"
                      color="rgb(255,90,0)"
                    />
                    <p className="text-xl text-start">HTML, CSS</p>
                  </th>
                  <td className="text-base text-start">Tailwind, DaisyUI</td>
                </tr>
                <tr className="border-none">
                  <th className="flex flex-row items-center">
                    <FontAwesomeIcon
                      icon={faPython}
                      className="w-12 h-12 mr-3"
                      color="royalblue"
                    />
                    <p className="text-xl text-start">Python</p>
                  </th>
                  <td className="text-base text-start">Jupyter, Anaconda</td>
                </tr>
                <tr className="border-none">
                  <th className="flex flex-row items-center">
                    <FontAwesomeIcon
                      icon={faC}
                      className="w-12 h-12 mr-3 font-bold"
                      color="silver"
                    />
                    <p className="text-xl text-start">C</p>
                  </th>
                  <td className="text-base text-start">Basic</td>
                </tr>
                <tr className="border-none">
                  <th className="flex flex-row items-center">
                    <FontAwesomeIcon
                      icon={faJava}
                      className="w-12 h-12 mr-3"
                      color="red"
                    />
                    <p className="text-xl text-start">Java</p>
                  </th>
                  <td className="text-base text-start">Basic, NetBeans</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
