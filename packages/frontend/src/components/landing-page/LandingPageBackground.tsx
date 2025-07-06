import backgroundImage from "../../assets/images/lebensbaum.jpeg";

const LandingPageBackground = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="grid grid-cols-6 grid-rows-3">
        {[...Array(18)].map((_, index) => (
          <div key={index} className="flex justify-center items-center p-1">
            <img
              src={backgroundImage}
              alt={`Bild ${index + 1}`}
              className="max-w-full max-h-full object-contain"
              style={{
                opacity: 0.5,
                ...(index <= 5 && {
                  WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                  maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"
                }),
                ...(index >= 12 && {
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"
                })
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPageBackground;
