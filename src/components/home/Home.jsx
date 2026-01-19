const Home = ({ url, onChange, onClick, errorMessage, isLoading }) => {
  return (
    <>
      <div className="mt-6 mb-4 flex tracking-wide">
        <div className="flex justify-start flex-col w-full max-w-xl">
          <label className="absolute left text-s sm:text-base md:text-sm text-gray-600">
            {" "}
            URL eingeben
          </label>

          <input
            placeholder="Eine URL hier eingeben..."
            type="text"
            name="url"
            value={url}
            onChange={onChange}
            className="w-full max-w-xl pl-9 mt-6 pr-3 h-10 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
        </div>
        <button
          type="button"
          disabled={errorMessage.length > 0 || url.trim().length === 0}
          className="w-md sm:w-auto rounded-md bg-gray-300 h-10 px-6 ml-2 mt-6 text-sm font-semibold leading-6 text-gray-600 disabled:opacity-50"
          onClick={() => onClick()}
        >
          {isLoading && (
            <div
              className="inline-block h-4 w-4 ml-2 mr-3 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          )}
          {!isLoading ? "check" : ""}
        </button>
      </div>
    </>
  );
};

export default Home;
