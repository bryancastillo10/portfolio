"use client";
import Button from "@/app/(reusables)/Button";
import { XIcon } from "lucide-react";

interface ModalProps {
    openModal: boolean;
    onClose: () => void;
    title: string;
    body: React.ReactElement;
}

const Modal = ({ openModal, title, onClose, body }: ModalProps) => {
    const handleCloseModal = () => {
        setTimeout(() => {
            onClose();
        }, 300);
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-neutral-800/70 transition-opacity duration-500 ${openModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="relative w-full h-full md:w-[80%] lg:w-[50%] xl:w-[40%] mx-auto md:h-auto">
                {/* Modal Content */}
                <div className={`transform transition-transform duration-500 ${openModal ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
                    <div className="relative w-full h-full md:h-auto border-0 rounded-lg shadow-lg flex flex-col bg-white outline-none focus:outline-none">
                        {/* Header */}
                        <div className="relative flex items-center p-6 justify-center rounded-t border-b">
                            <button onClick={handleCloseModal}
                                className="p-1 border-0 hover:opacity-70 transition absolute right-9 hover:text-rose-500">
                                <XIcon size={18} />
                            </button>
                            <div className="text-lg font-semibold">
                                {title}
                            </div>
                        </div>
                        {/* Body */}
                        <div className="relative p-6 flex-auto">
                            {body}
                        </div>
                        {/* Footer */}
                        <div className="p-6 flex flex-col gap-2">
                            <Button action={handleCloseModal} variant="primary">Got It</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
    