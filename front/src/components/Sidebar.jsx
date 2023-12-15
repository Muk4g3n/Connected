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
            <img src={archive} id="icon" alt="CKL Icon" /> {sdb[3]}
          </li>
          <li>
            {" "}
            <img src={cal} id="icon" alt="CKL Icon" /> {sdb[4]}
          </li>
        </ul>
        <div>
          <h1>📨 Email me for Data</h1>
          <p>Unlock Limitless Potential and receive news emails</p>
          <input placeholder="name@mail.com" />
          <button>Subcribe</button>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
