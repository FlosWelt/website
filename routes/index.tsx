
export default function Home() {
  return (
    <div  class=" w-full h-screen  bg-repeat bg-gradient-to-l from-purple-400 via-purple-300 to-indigo-300">
        <head>
          <title>Hello World - Florian S.</title>
          <meta name="title" content="Hello World - Florian S."/>
          <meta name="description" content="My simple personal website"/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://floswelt.com/"/>
          <meta property="og:title" content="Hello World - Florian S."/>
          <meta property="og:description" content="My simple personal website"/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://floswelt.com/"/>
          <meta property="twitter:title" content="Hello World - Florian S."/>
          <meta property="twitter:description" content="My simple personal website"/>
  </head>
      <div class="flex flex-col items-center justify-center inline-block">
      <h1 class="text-4xl text-center sm:py-72 py-56 font-semibold inline-block">Hello World <img alt="waving hand" class="inline-block  h-12 w-12 " src="./wave.png"></img></h1>
      <p class="font-medium sm:-my-72 -my-56 px-2">I am Florian and i make stuff, below is some stuff i made</p>
      </div>
      <div class="flex flex-col items-center justify-center inline-block">
      <h2 class="font-semibold text-2xl text-center sm:my-[20.5rem] my-64">Projects</h2>
        <div class="relative  sm:-my-80 -my-64">
           <div class="z-50 p-3 mt-10 max-w-xs  grid grid-cols-1 cursor-default select-none rounded bg-gray-400 dark:bg-gray-900 shadow-lg">
              <div class="font-semibold text-xl mb-2 ml-2 text-gray-900 dark:text-white">ip-address.app</div>
             <div class="flex">
              <a href="https://ip-address.app" class="transform  bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none dark:outline-white" target="_blank">Website</a>
              <a href="https://github.com/floswelt/ip-address" class="transform  bg-gray-900 text-sm text-white mx-1 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none dark:outline-white" target="_blank">GitHub</a>
             </div>
             <div class="my-2 mx-2 mr-5">
            <p class="text-gray-900 dark:text-white text-sm">
               A simple ad free website to get ip addresses and look them up
             </p>
           </div>
         <div>
           <div class="font-semibold text-lg text-gray-900 dark:text-white">Tech Stack:</div>
           <div>
            <span class="transform transition-all mx-0.5 duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-medium   hover:shadow-sm  hover:scale-105 ">NEXTjs</span>
          <span class="transform transition-all mx-0.5 duration-150 inline-block bg-[#38bdf8] bg-opacity-100 rounded px-1 py-1  text-xs font-medium   hover:shadow-sm  hover:scale-105">Tailwind</span>
          <span class="transform transition-all mx-0.5 duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-medium  hover:shadow-sm  hover:scale-105">Javascript</span>
        </div>
      </div>
    </div>
  </div>
  </div>

    </div>
  );
}
