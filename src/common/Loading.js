function Loading() {
  return (
    <div className="flex justify-center w-full h-full relative">
      <img
        src={process.env.PUBLIC_URL + "/images/output-onlinegiftools.gif"}
        alt="Loading"
        className="w-[10%]"
      />
    </div>
  );
}

export default Loading;
