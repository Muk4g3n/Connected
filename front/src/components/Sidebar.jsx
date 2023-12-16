import "../pages/yacine/hero.css";
import ckl from "/ckl.svg";
import graph from "/g.svg";
import archive from "/archive.svg";
import cal from "/Cal.svg";
import file from "/file.svg";

function Sidebar() {
  const sdb = [
    "Task Management",
    "Data visualisation",
    "Meeting reports",
    "Archive",
    "Calendar",
  ];
  return (
    <>
      <nav className="bar ">
        <ul>
          <li>
            {" "}
            <img src={ckl} id="icon" alt="CKL Icon" /> {sdb[0]}
          </li>
          <li>
            {" "}
            <img src={graph} id="icon" alt="CKL Icon" /> {sdb[1]}
          </li>
          <li>
            {" "}
            <img src={file} id="icon" alt="CKL Icon" /> {sdb[2]}
          </li>

          <li>
            {" "}
            <img src={cal} id="icon" alt="CKL Icon" /> {sdb[4]}
          </li>
        </ul>
        <ul id="ll">
          <h1 className="text-xl pl-6 font-bold">Others</h1>
          <li>
            {" "}
            <img src={archive} id="icon" alt="CKL Icon" /> {sdb[3]}
          </li>
          <h1 className="text-xl pl-6 font-bold"> My Workspace</h1>
          <li>
            {" "}
            <img src="/dropdown.svg" id="icon" alt="CKL Icon" /> {sdb[3]}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
