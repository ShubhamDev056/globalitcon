import parse from "html-react-parser";
import Image from "next/image";

const SectionTitle = ({ Title, SubTitle }) => {
  return (
    <div>
      <span className="span">
        <Image
          width={23}
          height={24}
          src="/assets/img/icons/span1.png"
          alt="t"
        />{" "}
        {parse(SubTitle)}
      </span>
      <h2 className="title tg-element-title">{parse(Title)}</h2>
    </div>
  );
};

export default SectionTitle;
