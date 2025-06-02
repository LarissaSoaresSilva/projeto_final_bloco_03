import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"


function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-yellow-100 to-yellow-400  text-red-500">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        FarmaBem | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-4'>

                        <a href="https://github.com/LarissaSoaresSilva/projeto_final_bloco_03/tree/main" target='_blank'>
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.linkedin.com/in/larissa-soares-da-silva/" target='_blank'>
                            <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
