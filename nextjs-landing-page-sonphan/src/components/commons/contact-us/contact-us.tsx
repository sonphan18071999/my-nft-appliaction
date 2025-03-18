import { Typography } from "antd";

export default function ContactUs() {
  const contactItems = [
    { icon: "☎️", text: "0765844885", href: "tel:0765844885" },
    {
      icon: "💬",
      text: "sonphan18071999@gmail.com",
      href: "mailto:sonphan18071999@gmail.com",
    },
  ];

  return (
    <div className=" text-white p-8">
      <h2 className="text-lg font-bold tracking-widest mb-4">CONTACT US</h2>
      <ul className="space-y-3 text-lg">
        {contactItems.map(({ icon, text, href }) => (
          <li key={text} className="flex items-center space-x-3">
            <span className="text-xl">{icon}</span>
            <a href={href} className="hover:underline">
              <Typography className={"text-white"}>{text}</Typography>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
