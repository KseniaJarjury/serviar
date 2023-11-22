import SliderComentarios from "./swiperComentarios/SliderComentarios"
import "SeccionComentario.css"

export default function SeccionComentario() {
    return (
      <>
        <div className="flex justify-center items-center h-40">
          <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
            <h3 className="sub_comentario text-center">Comentarios</h3>
          </div>
        </div>
        <div>
            <SliderComentarios/>
        </div>
      </>
    )
  }