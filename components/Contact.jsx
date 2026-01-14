import style from "./Contact.module.css"
import { pushGTMEvent } from "../utils/pushGTMEven";

export default function Contact(){
    return(
        <section className={style.container}>
            <h1>Contact</h1>
            <form className={style.form}>
                <div className={style.row}>
                  <input className={style.input} type="text" placeholder="Nombre completo"/>
                  <input className={style.input} type="number" placeholder="Número teléfonico"/> 
                </div>
                  <input className={style.input} type="email" placeholder="Correo electrónico" />
                  <textarea className={style.textarea} name="contenedor" placeholder="Comentario"></textarea>
                  <button className={style.button} type="submit" onClick={()=>pushGTMEvent("select_content",
                            {
                              content_id:"button-enviar",  
                              group_id:"secc-formulario", 
                              content_type:"Enviar"      
                            }
                          )}>Envíar</button>
            </form>
        </section>
    )
}