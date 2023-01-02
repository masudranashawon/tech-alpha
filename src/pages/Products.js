import Card from "../components/Card";

const data = [
  {
    id: 1,
    name: "Blink Mini – Compact indoor plug-in smart security camera",
    description:
      "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    price: 64.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    category: "Camera",
  },
  {
    id: 2,
    name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    category: "Camera",
  },
  {
    id: 3,
    name: "SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR",
    description:
      "Witness millions of shades of color through powerful Dynamic Crystal technology",
    price: 497.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png",
    category: "TV",
  },
  {
    id: 4,
    name: "Sony 65 Inch 4K Ultra HD TV X80K Series: LED Smart Google TV",
    description:
      "The 4K HDR Processor X1 delivers a picture that is smooth and clear, full of rich colors and detailed contrast",
    price: 698,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/287330_fhhcyx.jpg",
    category: "TV",
  },
  {
    id: 5,
    name: "PlayStation 4 Slim 1TB Console - Black",
    description:
      "When present, batteries have a capacity that exceeds 80% of the new equivalent",
    price: 479.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/0188101_sony-playstation-4-slim-1tb-gaming-console-ps4_550_obrjcw.jpg",
    category: "Console",
  },
  {
    id: 6,
    name: "Xbox Series S Fortnite & Rocket League Bundle",
    description:
      "Get the all-digital Xbox Series S Fortnite & Rocket League Bundle featuring the Midnight Drive Pack",
    price: 199,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/2f0a6466-be4f-45a1-868f-dce57c3c6469.0838a0a2ac552dd7273083559d7f3c70_d4i7zb.jpg",
    category: "Console",
  },
  {
    id: 7,
    name: "JBL Tune 510BT: Wireless On-Ear Headphones with Purebass Sound - White",
    description:
      "The Tune 510BT wireless headphones feature renowned JBL Pure Bass sound",
    price: 29.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/JBL_Tune_510BT_Headphone-04.jpg-500x500_vqlhjf.jpg",
    category: "Headphones",
  },
  {
    id: 8,
    name: "Bluetooth Headphones Wireless Earbuds 36Hrs Playtime Wireless Charging",
    description:
      "Wireless earbuds with dual power display show the remaining battery of the case by the number on the screen",
    price: 38.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172650/React%20Shopping/Products/9b890489-49e2-47aa-8b85-b71892cc16ae.3142c0cfab48b4acd4f628c8f8f39190_volxjj.jpg",
    category: "Headphones",
  },
  {
    id: 9,
    name: "Apple Watch Series 4 (GPS, 40MM) - Silver Aluminum Case",
    description:
      "This product will have a battery that exceeds 80% capacity relative to new",
    price: 147,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172650/React%20Shopping/Products/FU642_zstpwl.jpg",
    category: "Smart Watches",
  },
  {
    id: 10,
    name: "Military Smart Watch for Men Outdoor Waterproof Tactical Smartwatch",
    description:
      "EIGIIS military smart watch has a 10 military grade certifications and can be used under the harsh environmental conditions",
    price: 49.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172650/React%20Shopping/Products/Military-Smart-Watch-Men-Outdoor-Waterproof-Tactical-Smartwatch-Bluetooth-Dail-Calls-Speaker-Fitness-Tracker-for-iPhone.jpg_640x640_jy4v6s.jpg",
    category: "Smart Watches",
  },
];

const Products = () => {
  return (
    <div className='products-secion container mx-auto py-10'>
      <h2 className='section-title text-2xl uppercase text-center font-bold space-font mb-10'>
        Browse all products
      </h2>
      <div className='products-wrapper grid grid-cols-1 gap-10 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4'>
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
