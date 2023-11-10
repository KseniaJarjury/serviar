<div className="flex justify-center h-[90%]">
                        <div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-16" onClick={() => setShowModal(true)}>
                                Contactar
                            </button>
                            {showModal && createPortal(
                                <ModalContactar onClose={() => setShowModal(false)} />,
                                document.body
                            )}
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Calificar</button>
                        </div>
                    </div>