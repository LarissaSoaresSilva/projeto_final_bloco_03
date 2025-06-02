

function Home() {
  return (
    <>
     <div className="bg-gradient-to-r from-yellow-100 to-yellow-400 flex justify-center">
                <div className='container grid grid-cols-2 text-red-500'>
                    <div className="flex flex-col gap-6 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde a FarmaBem!
                        </h2>
                        <p className='text-xl'>
                            "Farma Bem: Cuidar de você é o nosso compromisso."
                        </p>

                        <div className="flex justify-around gap-6 hover:bg-amber-300">
                            <div className="flex justify-around gap-6  ">
                               
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/lml7cc5ua/medicamentos-home?updatedAt=1748870907381"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
    </>
  )
}

export default Home