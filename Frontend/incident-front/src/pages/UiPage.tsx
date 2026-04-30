import { usePosts } from "../hooks/useDemo"
import { Button } from "../components/atoms/Button";
import { Input } from "../components/atoms/Input";
import { useState } from "react";

export const UiPage = () => {

    const { data } = usePosts();
    const [text, setText] = useState("");

    return (
        <>
            <h1 className="text-center font-bold">Desing System S04-26-Equipo 21</h1>

            <div className="grid p-8 gap-3">
                <p className="font-bold">Api response de prueba</p>
                {data?.slice(0, 2).map((post: any) => (
                    <div
                        key={post.id}
                        className="p-3 border rounded bg-white shadow-sm"
                    >
                        <h2 className="font-semibold">{post.title}</h2>
                        <p className="text-sm text-gray-600">{post.body}</p>
                    </div>
                ))}
            </div>
            <div className="p-6 space-y-4">
                <h1 className="text-xl font-bold">UI Sandbox</h1>

                <Input
                    label="Nombre"
                    placeholder="Escribe algo..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <Button onClick={() => alert(text)}>
                    Mostrar input
                </Button>

                <Button variant="secondary" onClick={() => setText("")}>
                    Limpiar
                </Button>
            </div>
        </>
    )
}