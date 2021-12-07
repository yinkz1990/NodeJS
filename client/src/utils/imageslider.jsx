import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://media.istockphoto.com/photos/delicious-vegan-samosa-with-hot-tea-picture-id1167500959?b=1&k=20&m=1167500959&s=170667a&w=0&h=J1hay0_TDomBlNqNt_bRtCevTBCDU2LR9syVgr-JTUQ=" },
  { url: "https://media.istockphoto.com/photos/fruit-juice-picture-id155376375?b=1&k=20&m=155376375&s=170667a&w=0&h=KL3cT2jGl9IR6pe9ONF2jgp4ra1E02U3avVm8NIpNm4=" },
  { url: "https://media.istockphoto.com/photos/healthy-homemade-fried-rice-picture-id507155407?b=1&k=20&m=507155407&s=170667a&w=0&h=EvW6EZTQuWA2yy2vn_rU7nEvbwSqqtbQK468iiq7BoE=" },
  { url: "https://media.istockphoto.com/photos/spring-rolls-picture-id840599504?b=1&k=20&m=840599504&s=170667a&w=0&h=51zj5sPPUJJIRFQWUjWcXJiuaLX77-goWxRxwHtSne0=" },
  { url: "https://media.istockphoto.com/photos/thai-fried-rice-picture-id1312615652?b=1&k=20&m=1312615652&s=170667a&w=0&h=abC_8xjAff9188CYSNOHV3a_g1gPTVAp4flh02ow4Eo=" },
  { url: "https://media.istockphoto.com/photos/tasty-veg-schezwan-fried-rice-served-in-bowl-over-a-rustic-wooden-picture-id1292618342?b=1&k=20&m=1292618342&s=170667a&w=0&h=Ybs6VlWp0Y8IC1C23ASj3lL8rIEPAmIFIchwhW5bi70=" },
  { url: "https://media.istockphoto.com/photos/feet-picture-id1171946922?b=1&k=20&m=1171946922&s=170667a&w=0&h=mVWtXcgb4zW67z89gHHoodbTSVZsqRTPoYll2uswzL8=" },
];

const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width ={700}
        height={400}
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