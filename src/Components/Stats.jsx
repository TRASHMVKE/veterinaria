import React from "react";

function Stats() {
  return (
    <section className="bg-gray-100 z-10 mt-40 p-8 ">
      <div className="flex justify-between   ">
        <div className="flex flex-col items-center ">
          <img src="./src/assets/images/huella.png" alt="" className="w-30 " />
          <span className="font-bold text-2xl">16500</span>
          <span className="text-stone-300">MASCOTAS ATENDIDAS</span>
        </div>
        <div className="flex flex-col items-center ">
          <img src="./src/assets/images/huella.png" alt="" className="w-30 " />
          <span className="font-bold text-2xl">500</span>
          <span className="text-stone-300">CIRUGÍAS EXITÓSAS</span>
        </div>
        <div className="flex flex-col items-center ">
          <img src="./src/assets/images/huella.png" alt="" className="w-30 " />
          <span className="font-bold text-2xl">14</span>
          <span className="text-stone-300">AÑOS DE EXPERIENCIA</span>
        </div>
        <div className="flex flex-col items-center ">
          <img src="./src/assets/images/huella.png" alt="" className="w-30 " />
          <span className="font-bold text-2xl">12000</span>
          <span className="text-stone-300">CLIENTES REGISTRADOS</span>
        </div>
      </div>
    </section>
  );
}

export default Stats;
