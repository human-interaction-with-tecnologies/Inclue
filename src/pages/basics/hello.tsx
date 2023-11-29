import Primary from "@/components/basics/Primary";
import { Head } from "next/document";

import Image from "next/image";

export default function HelloPage() {
    return (
        <div>            
            <h1 aria-label="Greeting">Hello, World!</h1>
            {/* Add your content and components here */}
            <Primary title="Primeiro Componente" content="Seja bem vindo(a)!" />

            <Image 
                src="/path/to/your/image.jpg" 
                alt="Description of the image" 
                width={500} 
                height={300} 
            />
        </div>
    );
};

