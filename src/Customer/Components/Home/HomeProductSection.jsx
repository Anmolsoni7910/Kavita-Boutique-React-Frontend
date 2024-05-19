import AliceCarousel from "react-alice-carousel";
import HomeProductCard from "./HomeProductCard.jsx";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeProductSection = ({ data, sectionName }) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    750: { items: 3 },
    1024: { items: 5 },
  };

  const items = data
    ?.slice(0, 13)
    ?.map((item) => <HomeProductCard product={item} />);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 text-left pl-4">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableDotsControls
          responsive={responsive}
          controlsStrategy="responsive"
          keyboardNavigation={true}
          renderNextButton={() => {
            return (
              <Button
                variant="contained"
                className="z-50"
                sx={{
                  position: "absolute",
                  top: "8rem",
                  right: "0rem",
                  transform: "translateX(50%) rotate(90deg)",
                  backgroundColor: "white",
                  "&:hover":{backgroundColor:"gray"},
                }}
                aria-label="next"
              >
                <KeyboardArrowLeftIcon
                  sx={{ transform: "rotate(90deg)", color: "black" }}
                />
              </Button>
            );
          }}
          renderPrevButton={() => {
            return (
              <Button
                variant="contained"
                className="z-50"
                sx={{
                  position: "absolute",
                  top: "8rem",
                  left: "0rem",
                  transform: "translateX(-50%) rotate(-90deg)",
                  backgroundColor: "white",
                  "&:hover":{backgroundColor:"gray"},
                }}
                aria-label="next"
              >
                <KeyboardArrowLeftIcon
                  sx={{ transform: "rotate(90deg)", color: "black" }}
                />
              </Button>
            );
          }}
        />
      </div>
    </div>
  );
};

export default HomeProductSection;
