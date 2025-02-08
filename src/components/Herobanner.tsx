const Herobanner = () => {
  return (
    <div className="bg-white shadow-md mt-2 flex flex-col md:flex-row items-center p-6 md:p-10">
        <div className="text-center md:text-left md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">Limited Time Offer!</h1>
            <p className=" text-lg">Get 50% OFF on ALL Items - Shop Before the Sale Ends!</p>
            <button className=" bg-cyan-200 px-6 mt-4 rounded-lg font-semibold">Shop Now</button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img src="src/assets/herobanner.png" alt="Lady wearing elegant shirt styled with cream pants" className=" w-2/4 md:w-full max-w-sm h-auto max-w-md"/>
        </div>
    </div>
  )
}

export default Herobanner