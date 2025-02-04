"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";

export default function DashboardPage() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (!storedToken) {
            router.push("/login");
        } else {
            try {
                console.log("El token es:", storedToken);
                const decoded = jwt.decode(storedToken); // Método correcto
                console.log("El token decodificado es:", decoded);
                setUser(decoded);   
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                router.push("/login"); // Redirigir si el token es inválido
            }
        }
    }, [router]);

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    return (
        <div>
            <h1>Ingreso al sistema con éxito</h1>
            {user ? (
                <p>Hola, {user.username}</p>
            ) : (
                <p>Cargando...</p>
            )}
            <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>
    );
}
