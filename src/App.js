import React from "react";
import Alert from "./components/Alert";
import TaskOne from "./components/TaskOne";
import TaskTwo from "./components/TaskTwo";

const App = () => {
  //

  return (
    <div className="App relative overflow-x-hidden bg-slate-50 w-full min-h-screen flex">
      <div className="fixed px-2 pb-2 pt-6 text-teal_light z-50 transform top-0 left-1/2 -translate-x-1/2 flex flex-col space-y-5 justify-around items-center">
        {/* portfolio */}
        <a
          href="https://www.meshu-web.dev"
          className="text-sm dark:opacity-80 hover:opacity-100 filter hover:brightness-110 hover:shadow-md flex justify-center items-center space-x-2"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 19.307 19.984"
          >
            <g id="Portfolio" transform="translate(-4.736 -5.032)">
              <path
                id="Rectangle_1078"
                data-name="Rectangle 1078"
                d="M225,593.26l7.848-4.234,7.848,4.234-7.848,4.14Z"
                transform="translate(-218.46 -583.993)"
                fill="currentColor"
              />
              <path
                id="Rectangle_1078-2"
                data-name="Rectangle 1078"
                d="M207.1,663.718l-.056-8.5,8.146,4.345v8.987Z"
                transform="translate(-202.305 -643.531)"
                fill="currentColor"
              />
              <path
                id="Rectangle_1078-3"
                data-name="Rectangle 1078"
                d="M318.091,659.56l8.146-4.345-.056,8.5-8.089,4.829Z"
                transform="translate(-302.194 -643.531)"
                fill="currentColor"
              />
            </g>
          </svg>
        </a>
        {/* github */}
        <a
          href="https://github.com/Meshu-webDEV"
          className="dark:opacity-80 hover:opacity-100 filter hover:brightness-110 hover:shadow-md"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 182.069 177.577"
          >
            <path
              id="github-logo"
              d="M91.034,0a91.038,91.038,0,0,0-28.79,177.4c4.552.8,6.259-1.934,6.259-4.324,0-2.162-.114-9.331-.114-16.955-22.872,4.21-28.79-5.576-30.61-10.7-1.024-2.617-5.462-10.7-9.331-12.859-3.186-1.707-7.738-5.917-.114-6.031,7.169-.114,12.29,6.6,14,9.331,8.193,13.769,21.279,9.9,26.514,7.51.8-5.917,3.186-9.9,5.8-12.176-20.255-2.276-41.421-10.128-41.421-44.948A35.428,35.428,0,0,1,42.559,61.79c-.91-2.276-4.1-11.607.91-24.124,0,0,7.624-2.39,25.034,9.331a85.827,85.827,0,0,1,45.517,0c17.41-11.834,25.034-9.331,25.034-9.331,5.007,12.517,1.821,21.848.91,24.124A35.223,35.223,0,0,1,149.3,86.255c0,34.934-21.279,42.672-41.534,44.948,3.3,2.845,6.145,8.307,6.145,16.841,0,12.176-.114,21.962-.114,25.034,0,2.39,1.707,5.234,6.259,4.324A91.083,91.083,0,0,0,91.034,0Z"
              fillRule="evenodd"
            />
          </svg>
        </a>
        {/* twitter */}
        <a
          href="https://twitter.com/Meshu_webDEV"
          className="dark:opacity-80 hover:opacity-100 filter hover:brightness-110 hover:shadow-md"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 248 204"
          >
            <g>
              <path
                d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
              />
            </g>
          </svg>
        </a>
        {/* linkedin */}
        <a
          href="https://www.linkedin.com/in/meshari-sulaiman-aa9154178/"
          className="dark:opacity-80 hover:opacity-100 filter hover:brightness-110 hover:shadow-md"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45.375 45.374"
            className="w-4 h-4"
            fill="currentColor"
          >
            <path
              id="Path_2"
              data-name="Path 2"
              d="M835.792,326.087h-6.723V315.558c0-2.511-.045-5.743-3.5-5.743-3.5,0-4.038,2.735-4.038,5.56v10.711h-6.723V304.435h6.454v2.959h.091a7.082,7.082,0,0,1,6.368-3.5c6.814,0,8.071,4.482,8.071,10.313Zm-28.567-24.612h0a3.9,3.9,0,1,1,3.9-3.9h0a3.92,3.92,0,0,1-3.9,3.9m3.362,24.612h-6.73V304.435h6.73Zm28.557-38.659H800.478a3.327,3.327,0,0,0-3.348,3.27v38.826a3.329,3.329,0,0,0,3.348,3.274h38.666a3.334,3.334,0,0,0,3.361-3.274V290.7a3.332,3.332,0,0,0-3.361-3.271"
              transform="translate(-797.13 -287.426)"
            />
          </svg>
        </a>
      </div>

      <Alert />
      <TaskOne />
      <TaskTwo />
    </div>
  );
};

export default App;
