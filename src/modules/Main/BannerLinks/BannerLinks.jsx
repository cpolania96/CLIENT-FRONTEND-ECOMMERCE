import React from "react";

function BannerLinks() {
  const data = [
    {
      id: "1",
      title: "Rutina de uñas",
      icon: "",
      to: "",
    },
    {
      id: "2",
      title: "Rutina facial",
      icon: "",
      to: "",
    }
  ];
  return (
    <div className="banner-links">
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div className="icon">icon</div>
            <h2 className="label">{item.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BannerLinks;
