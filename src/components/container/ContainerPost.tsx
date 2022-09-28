import '../style.css';

const ContainerPost = () => {
  return (
    <>
      <div className='bg-[#18191A] flex justify-center'>
        <div className="h-screen grid items-center md:w-5/12 lg:w-3/12	md:mx-auto lg:justify-center ">
          <div className="bg-[#242526] py-4 rounded-lg">
            <header className="mx-2 md:mx-6">
              <div className="flex">
                <div className="flex items-center">
                  <img className="w-14 h-12 rounded-full" src="./img/perfil.jpg" alt="Rounded avatar" />
                </div>
                <div className="flex justify-between w-full items-center">
                  <div className="pl-2">
                      <h1 className="text-[#e4e6eb] font-semibold text-base">Marcos Alanya Pacheco</h1>
                      <h2 className="text-gray-400 text-sm">17 de setiembre a las 18:04</h2>
                  </div>
                  <div>
                    <svg className="w-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#e4e6eb" d="M22.629,6.857c0-0.379,0.304-0.686,0.686-0.686C23.693,6.171,24,6.483,24,6.857 v10.286c0,0.379-0.304,0.686-0.686,0.686c-0.379,0-0.686-0.312-0.686-0.686V6.857z M2.057,10.286c1.136,0,2.057,0.921,2.057,2.057 S3.193,14.4,2.057,14.4S0,13.479,0,12.343S0.921,10.286,2.057,10.286z M9.6,10.286c1.136,0,2.057,0.921,2.057,2.057 S10.736,14.4,9.6,14.4s-2.057-0.921-2.057-2.057S8.464,10.286,9.6,10.286z M17.143,10.286c1.136,0,2.057,0.921,2.057,2.057 S18.279,14.4,17.143,14.4s-2.057-0.921-2.057-2.057S16.007,10.286,17.143,10.286z"/></svg>
                  </div>
                </div>
              </div>
              <p className="py-4 text-justify text-[#e4e6eb]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente illum quae quia et sunt?
              </p>
            </header>
            
            <main className="bg-zinc-900">
              <div className="grid h-1/5 w-full justify-center items-center">
                <img className='h-80 object-contain md:w-auto'  src="./img/perfil.jpg" alt="img__post" />
              </div>
            </main>

            <div className="mx-2 md:mx-6">
              <section>
                <div className="flex text-gray-400 justify-between text-xs py-1">
                  <p>2 mil</p>
                  <p>738 comentarios 1,7 mil veces compartido</p>
                </div>
              </section>
              <section className="text-gray-400 border-y border-y-slate-600 text-sm">
                <div className="flex justify-around py-1 font-semibold">
                  <div>Me gusta</div>
                  <div>Comentar</div>
                  <div>Compartir</div>
                </div>
              </section>
        
              <section>
                <div className="text-gray-400 text-xs flex justify-between my-1">
                  <p>Ver comentarios anteriores</p>
                  <p>Todos los comentarios</p>
                </div>
              </section>

              <div>
                <section>
                  <div className="flex py-1">
                    <div className="">
                      <img className="w-7 h-7 rounded-full" src="./img/perfil.jpg" alt="Rounded avatar" />
                    </div>
                    <div >
                      <div className="text-[#e4e6eb] ml-2 text-xs bg-[#434446] py-2 px-3 rounded-xl ">
                        <h4 className="font-semibold flex">Marcos Alanya Pacheco</h4>
                        <p className="flex">Lorem ipsum dolor sit amet</p>
                      </div>
                      <div className="text-gray-400 text-[11px] font-semibold flex justify-between ml-2">
                        <p>Me gusta</p>
                        <p>Responder</p>
                        <p>Compartir</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex py-1">
                    <div>
                      <img className="w-7 h-7 rounded-full" src="./img/perfil.jpg" alt="Rounded avatar" />
                    </div>
                    <div className="w-full">
                      <div >
                        <div className=" overflow-y-auto overflow-x-hidden text-[#e4e6eb] ml-2 text-xs bg-[#434446] py-2 px-3 rounded-xl " contentEditable placeholder='Escribe un comentario...'></div>
                      </div>
        
                    </div>
                  </div>
                </section>
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContainerPost