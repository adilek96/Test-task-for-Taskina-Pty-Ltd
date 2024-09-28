import { useState } from "react";
import Button from "./ui/Button";
import "./PageSelect.css";
import CheckBox from "./ui/CheckBox";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

export default function PageSelect() {
  const [selectedPages, setSelectedPages] = useState({
    allPages: false,
    pages: [false, false, false, false],
  });

  const handleAllPagesChange = (e) => {
    const { checked } = e.target;
    setSelectedPages({
      allPages: checked,
      pages: [checked, checked, checked, checked],
    });
  };

  const handlePageChange = (index) => (e) => {
    const { checked } = e.target;
    const updatedPages = [...selectedPages.pages];
    updatedPages[index] = checked;

    setSelectedPages({
      allPages: updatedPages.every((page) => page),
      pages: updatedPages,
    });
  };

  return (
    <div className="wrapper">
      <CheckBox
        label={"All pages"}
        onchange={handleAllPagesChange}
        checked={selectedPages.allPages}
      />
      <hr className="divider" />
      {pages.map((page, index) => (
        <CheckBox
          label={page}
          onchange={handlePageChange(index)}
          checked={selectedPages.pages[index]}
          key={index}
        />
      ))}
      <hr className="divider" />
      <Button text={"Done"} />
    </div>
  );
}
