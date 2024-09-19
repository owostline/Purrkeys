import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-10">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Welcome to
        <span className="bg-gradient-to-r from-violet-400 to-violet-700 text-transparent bg-clip-text font-semibold">
          {" "}
          PurrKeys!
        </span>
      </h1>
      <h2 className="text-sm mt-2 sm:text-xl lg:text-2xl lg:mt-3 text-center tracking-wide italic">
        ˚₊‧♡ Type with Purr-sonality. One Key at a Time. ♡‧₊˚
      </h2>
      <p className="text-xs mt-7 mx-5 sm:text-xs lg:text-base text-center tracking-wide text-neutral-300">
        Discover the cutest, most
        <span className="italic font-semibold"> purr-fect </span> keycaps that
        add a touch of fun to your keyboard setup. <br />
        From playful paws to adorable faces, we've got designs that will make
        your typing feel pawsome!
      </p>
      <div className="flex justify-center my-8">
        <a className="bg-gradient-to-r from-pink-600 to-purple-900 py-1.5 px-3 mx-3 rounded-md" href="#">
          Shop Now
        </a>
        <a className="py-1.5 px-3 mx-3 rounded-md border" href="#">Learn More</a>
      </div>
      <div className="flex mt-3 flex-row justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-28 md:w-52 lg:w-64 border-2 border-pink-600 shadow-md shadow-purple-600 mx-1 lg:mx-3"
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-28 md:w-52 lg:w-64 border-2 border-pink-600 shadow-md shadow-purple-600 mx-1 lg:mx-3"
        >
          <source src={video2} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-28 md:w-52 lg:w-64 border-2 border-pink-600 shadow-md shadow-purple-600 mx-1 lg:mx-3"
        >
          <source src={video3} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
