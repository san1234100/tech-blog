const AboutMe = () => {
    return ( 
        <div className="bg-white select-none p-5 rounded-lg max-w-md ms-auto h-fit pb-10">
             <div className="text-3xl font-medium py-3">About Me</div>
             <img src="./src/assets/images/web-development1.png" className="w-full rounded-md" alt="" />
             <h1 className="text-center text-2xl font-medium pt-3">SANJEEV U</h1>
             <p className="mx-auto my-2 bg-darkBlue font-medium rounded-sm w-fit text-white text-xs px-2 py-1">Frontend Developer</p>
             <p className="text-center leading-6 text-gray-600">
                I'm a web developer who transforms concepts into interactive digital experiences with a blend of creativity and technical prowess. Passionate about crafting elegant solutions, I thrive on the challenge of merging design and functionality to create impactful online presences.
            </p>
            <h4 className="font-semibold text-2xl py-5">Social networks</h4>
            <div className="grid grid-cols-2 gap-10 w-fit mx-auto items-center">
                {/* card 1 - instagram */}
                <div className="flex items-center space-x-3">
                   <div className="w-16 h-16 bg-[#833AB4] rounded-md text-white flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24m48-132H80a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h96a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m36 156a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h96a36 36 0 0 1 36 36ZM196 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16"/></svg>
                   </div>
                   <p className="font-normal text-lg">Instagram</p>
                </div>
                 {/* card 2 - twitter */}
                 <div className="flex items-center space-x-3">
                   <div className="w-16 h-16 bg-[#1DA1F2] rounded-md text-white flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg>                   </div>
                   <p className="font-normal text-lg">Twitter</p>
                </div>
                  {/* card 3 - facebook */}
                  <div className="flex items-center space-x-3">
                   <div className="w-16 h-16 bg-[#1877F2] rounded-md text-white flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z"/></svg>
                   </div>
                   <p className="font-normal text-lg">Facebook</p>
                </div>
                  {/* card 4 - youtube */}
                  <div className="flex items-center space-x-3">
                   <div className="w-16 h-16 bg-[#CD201F] rounded-md text-white flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>                   </div>
                   <p className="font-normal text-lg">Youtube</p>
                </div>
                  {/* card 5 - pinterest */}
                  <div className="flex items-center space-x-3">
                   <div className="w-16 h-16 bg-[#E60023] rounded-md text-white flex items-center justify-center">
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M8.34 1C5.46 1 2.62 2.92 2.62 6.02c0 1.97 1.11 3.1 1.78 3.1c.28 0 .44-.77.44-.99c0-.26-.66-.82-.66-1.9c0-2.26 1.72-3.85 3.94-3.85c1.91 0 3.32 1.09 3.32 3.08c0 1.49-.6 4.28-2.53 4.28c-.7 0-1.3-.5-1.3-1.23c0-1.06.74-2.09.74-3.18c0-1.86-2.63-1.52-2.63.72c0 .47.06.99.27 1.42c-.39 1.67-1.18 4.15-1.18 5.87c0 .53.08 1.05.13 1.58c.1.11.05.1.19.04c1.41-1.94 1.36-2.31 2-4.85c.35.66 1.24 1.01 1.94 1.01c2.98 0 4.32-2.9 4.32-5.52c0-2.79-2.41-4.6-5.05-4.6"/></svg>
                   </div>
                   <p className="font-normal text-lg">Pinterest</p>
                </div>
                   {/* card 6 - linkedin */}
                   <div className="flex items-center space-x-3">
                   <div className="w-16 h-16 bg-[#0077b5] rounded-md text-white flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M349.3 793.7H230.6V411.9h118.7zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8m503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2c-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7c120.2 0 142.3 79.1 142.3 181.9z"/></svg>

                   </div>
                   <p className="font-normal text-lg">Linkedin</p>
                </div>
            </div>
        </div>
     );
}
 
export default AboutMe;