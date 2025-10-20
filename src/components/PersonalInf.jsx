import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const PersonalInf = () => {
  return (
    <div className="me">
      <div>
        <div>
          <div className="flex flex-row">
            <FontAwesomeIcon icon={faUser} className="w-7 h-7 mr-4" />
            <h1 className="text-xl font-bold">Personal Information</h1>
          </div>
          <hr className="my-5 bg-base-100 sm:w-4xl" />
        </div>
        <div className="justify-center flex flex-col sm:flex-row ">
          <div className="w-full sm:w-1/2 ">
            <table className="table">
              <tbody>
                <tr className="border-none">
                  <th className="text-base text-start">Firstname: </th>
                  <td className="text-base text-end">Supitcha</td>
                </tr>
                <tr className="border-none">
                  <th className="text-base">Lastname: </th>
                  <td className="text-base text-end">Kaewkham</td>
                </tr>
                <tr className="border-none">
                  <th className="text-base">Nickname: </th>
                  <td className="text-base text-end">Aum</td>
                </tr>
                <tr className="border-none">
                  <th className="text-base">Birthname: </th>
                  <td className="text-base text-end">สุพิชชา แก้วคำ</td>
                </tr>
                <tr className="border-none">
                  <th className="text-base">Nationality: </th>
                  <td className="text-base text-end">Thai TH</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full sm:w-1/2">
            <table className="table">
              <tbody>
                <tr className="hidden">
                  <th></th>
                </tr>
                <tr className="border-none">
                  <th className="text-base text-start">Date of Birth: </th>
                  <td className="text-base text-end">20 Dec 2003</td>
                </tr>
                <tr className="border-none">
                  <th className="text-base">Language: </th>
                  <td className="text-base text-end">Thai TH</td>
                </tr>
                <tr className="border-none">
                  <th className="text-base"></th>
                  <td className="text-base text-end">English US</td>
                </tr>
                <tr className="border-none">
                  <th className="text-base">Education: </th>
                  <td className="text-base text-end">
                    Phanom Adun Witthaya School
                  </td>
                </tr>
                <tr className="border-none">
                  <th className="text-base"></th>
                  <td className="text-base text-end">Kasetsart University</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalInf;
