const SubcribeNewsLetter = () => {
    return ( 
        <div className="bg-white mt-10 select-none p-5 rounded-lg max-w-2xl ms-auto h-fit">
           <div className="w-14 h-14 rounded-full bg-lightBlue text-white flex items-center justify-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>
           </div>
           <h4 className="font-semibold text-2xl py-2">Subcribe NewsLetter</h4>
           <p className="text-gray-600">
            Be the first to receive the latest update on upcoming technologies.
           </p>
           <div className="flex mt-3">
            <input
            placeholder="you@gmail.com"
            type="mail"
            name="mail"
            className="py-3 px-5 flex-1 outline-none bg-gray-300 rounded-l"
              />
              <div className="bg-lightBlue rounded-r w-11 flex items-center cursor-pointer hover:bg-[#32b17e] justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"/></svg>
              </div>
           </div>
        </div>
     );
}
 
export default SubcribeNewsLetter;