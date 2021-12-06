import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://media.istockphoto.com/photos/various-fresh-ripe-pumpkins-as-background-picture-id1277767891?b=1&k=20&m=1277767891&s=170667a&w=0&h=vSzZmr5bWp85Cl6EDRbnb4lmasahmpTRHIe7HH16F9c=" },
  { url: "https://media.istockphoto.com/photos/multicultural-society-picture-id1294445980?b=1&k=20&m=1294445980&s=170667a&w=0&h=uK1257oXDY2ECR17MUJCx5ToNOg9tzA7_fNpZkh2_Ys=" },
  { url: "http://localhost:8000/uploads/image-irina-vieru-52X9iZG1ceE-unsplash.jpg" },
  { url: "http://localhost:8000/uploads/image-margaret-jaszowska-bV-6TFHUQdk-unsplash.jpg" },
  { url: "http://localhost:8000/uploads/image-irina-vieru-52X9iZG1ceE-unsplash.jpg" },
  { url: "http://localhost:8000/uploads/image-kloppvsogs.jpg.jfif" },
  { url: "image-kloppvsogs.jpg.jfif" },
];

const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width ={600}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.5}
        autoPlay={true}
        autoPlayDelay={2}
      />
    </div>
  );
}


export default ImageSlider;