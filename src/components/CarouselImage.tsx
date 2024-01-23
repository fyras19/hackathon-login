import { Image } from "react-bootstrap";

type CarouselImageProps = {
    src: string
}

export default function CarouselImage({ src }: CarouselImageProps) {
  return (
    <>
      <Image
        className="z-1"
        src={src}
        style={{ height: "400px" }}
      />
      <span
        className="position-absolute z-0 overflow-hidden"
        style={{
          backgroundImage: `url(${src})`,
          width: "100%",
          height: "100%",
          filter: "blur(1rem)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50%",
        }}
      ></span>
    </>
  );
}
