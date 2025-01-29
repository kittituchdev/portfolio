import React from "react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Footer = () => {
  const contacts = [
    {
      method: "Linkedin",
      value: "https://www.linkedin.com/in/kittituch14",
      icon: <IconBrandLinkedin />,
    },
    {
      method: "GitHub",
      value: "https://github.com/kittituchdev",
      icon: <IconBrandGithub />,
    },
  ];

  const contactList = contacts.map((contact, index) => (
    <div key={index}>
      <a
        href={contact.value}
        target="_blank"
      >
        <div className="flex space-x-2">
          <div>{contact.icon}</div>
          <span>{contact.value}</span>
        </div>
      </a>
    </div>
  ));

  return (
    <div className="border-t py-4 space-y-2">
      <h4 className="font-bold text-xl">Contact</h4>
      <div className="space-y-1">{contactList}</div>
    </div>
  );
};

export default Footer;
