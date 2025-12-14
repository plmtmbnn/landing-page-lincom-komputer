import { GLOBAL_CONST } from "@/lib/constants";

export function FloatingWhatsApp() {
return (
<a
href={GLOBAL_CONST.whatsapp_number}
target="_blank"
aria-label="Chat WhatsApp Lincom Komputer Balige"
className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
>
💬
</a>
);
}